import { TypesEnum } from '../enums/types.enum';

export interface ValidationResult {
  readonly valid: boolean;
  readonly messageKey?: string;
  readonly params?: Record<string, string | number>;
}

export interface FriendlyErrorResult {
  readonly messageKey: string;
  readonly rawMessage?: string;
}

type ComponentValidator = (
  value: any,
  availableVariables: ReadonlySet<string>
) => ValidationResult;

const VALID_RESULT: ValidationResult = { valid: true };

const invalidResult = (
  messageKey: string,
  params?: Record<string, string | number>
): ValidationResult => ({
  valid: false,
  messageKey,
  params
});

const isBlank = (value: unknown): boolean =>
  value === null ||
  value === undefined ||
  (typeof value === 'string' && value.trim() === '');

const parseFiniteNumber = (value: unknown): number | null => {
  if (isBlank(value)) {
    return null;
  }
  const normalized = typeof value === 'string' ? value.trim().replace(',', '.') : value;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
};

const validateVariableInScope = (
  varName: unknown,
  availableVariables: ReadonlySet<string>
): ValidationResult => {
  const normalizedName = String(varName ?? '').trim();
  return availableVariables.has(normalizedName)
    ? VALID_RESULT
    : invalidResult('VALIDATION.VARIABLE_NOT_IN_SCOPE', { name: normalizedName });
};

const validateVariable: ComponentValidator = (value: any): ValidationResult => {
  if (!value || isBlank(value.name)) {
    return invalidResult('VALIDATION.VARIABLE_NAME_EMPTY');
  }

  const trimmedName = String(value.name).trim();
  if (/\s/.test(trimmedName)) {
    return invalidResult('VALIDATION.VARIABLE_NAME_INVALID', { name: trimmedName });
  }

  if (isBlank(value.type)) {
    return invalidResult('VALIDATION.VARIABLE_VALUE_EMPTY', { name: trimmedName });
  }

  const requiresNonEmptyValue = value.type !== 'STRING';
  if (requiresNonEmptyValue && isBlank(value.value)) {
    return invalidResult('VALIDATION.VARIABLE_VALUE_EMPTY', { name: trimmedName });
  }

  return VALID_RESULT;
};

const validateOperator: ComponentValidator = (
  value: any,
  availableVariables: ReadonlySet<string>
): ValidationResult => {
  if (!value || isBlank(value.reference)) {
    return invalidResult('VALIDATION.OPERATOR_TARGET_EMPTY');
  }

  const targetScopeResult = validateVariableInScope(value.reference, availableVariables);
  if (!targetScopeResult.valid) {
    return targetScopeResult;
  }

  const targetName = String(value.reference).trim();
  const hasEmptyExpression = isBlank(value.value);
  const hasIncompleteTerm =
    Array.isArray(value.operators) &&
    value.operators.some(
      (op: any) => !op || isBlank(op.type) || op.type === 'ATTRIBUTE' || isBlank(op.value)
    );

  if (hasEmptyExpression || hasIncompleteTerm) {
    return invalidResult('VALIDATION.OPERATOR_EXPRESSION_INCOMPLETE', { name: targetName });
  }

  if (Array.isArray(value.operators)) {
    const invalidOperand = value.operators
      .filter((op: any) => op?.type === 'VARIABLE')
      .map((op: any) => validateVariableInScope(op.value, availableVariables))
      .find((res: ValidationResult) => !res.valid);

    if (invalidOperand) {
      return invalidOperand;
    }
  }

  return VALID_RESULT;
};

const validateWriter: ComponentValidator = (
  value: any,
  availableVariables: ReadonlySet<string>
): ValidationResult => {
  if (!value || isBlank(value.type)) {
    return invalidResult('VALIDATION.WRITER_INCOMPLETE');
  }

  if (value.type === 'VARIABLE') {
    if (isBlank(value.value)) {
      return invalidResult('VALIDATION.WRITER_INCOMPLETE');
    }
    return validateVariableInScope(value.value, availableVariables);
  }

  if (value.type === 'TEXT' && (value.value === null || value.value === undefined)) {
    return invalidResult('VALIDATION.WRITER_INCOMPLETE');
  }

  return VALID_RESULT;
};

const validateConditional: ComponentValidator = (
  value: any,
  availableVariables: ReadonlySet<string>
): ValidationResult => {
  const conditionals = value?.conditionals;
  const hasEmptyConditionList = !Array.isArray(conditionals) || conditionals.length === 0;
  const hasIncompleteConditionItem =
    Array.isArray(conditionals) &&
    conditionals.some((op: any) => !op || isBlank(op.type) || isBlank(op.value));

  if (hasEmptyConditionList || hasIncompleteConditionItem || isBlank(value?.condition?.value)) {
    return invalidResult('VALIDATION.CONDITIONAL_INCOMPLETE');
  }

  const invalidConditionVar = conditionals
    .filter((op: any) => op?.type === 'VARIABLE')
    .map((op: any) => validateVariableInScope(op.value, availableVariables))
    .find((res: ValidationResult) => !res.valid);

  if (invalidConditionVar) {
    return invalidConditionVar;
  }

  const thenResult = validateProgram(value?.condition?.components, availableVariables);
  if (!thenResult.valid) {
    return thenResult;
  }

  return validateProgram(value?.nocondition?.components, availableVariables);
};

const validateFor: ComponentValidator = (
  value: any,
  availableVariables: ReadonlySet<string>
): ValidationResult => {
  const hasMissingFields =
    !value ||
    isBlank(value.variable) ||
    isBlank(value.startType) ||
    isBlank(value.startValue) ||
    isBlank(value.finishType) ||
    isBlank(value.finishValue) ||
    (value.incrementType !== '+' && value.incrementType !== '-') ||
    isBlank(value.incrementValue);

  if (hasMissingFields) {
    return invalidResult('VALIDATION.FOR_INCOMPLETE');
  }

  const loopVarResult = validateVariableInScope(value.variable, availableVariables);
  if (!loopVarResult.valid) {
    return loopVarResult;
  }

  if (value.startType === 'VARIABLE') {
    const startScope = validateVariableInScope(value.startValue, availableVariables);
    if (!startScope.valid) {
      return startScope;
    }
  }

  if (value.finishType === 'VARIABLE') {
    const finishScope = validateVariableInScope(value.finishValue, availableVariables);
    if (!finishScope.valid) {
      return finishScope;
    }
  }

  const loopVar = String(value.variable).trim();
  const step = parseFiniteNumber(value.incrementValue);
  if (step === null || step <= 0) {
    return invalidResult('VALIDATION.FOR_INVALID_STEP', { name: loopVar });
  }

  if (value.startType === 'VALUE' && value.finishType === 'VALUE') {
    const start = parseFiniteNumber(value.startValue);
    const finish = parseFiniteNumber(value.finishValue);

    if (start === null || finish === null) {
      return invalidResult('VALIDATION.FOR_INCOMPLETE');
    }

    const isIncompatibleDirection =
      (value.incrementType === '+' && start > finish) ||
      (value.incrementType === '-' && start < finish);

    if (isIncompatibleDirection) {
      return invalidResult('VALIDATION.FOR_INVALID_DIRECTION', {
        name: loopVar,
        direction: value.incrementType,
        start,
        finish
      });
    }
  }

  return validateProgram(value.components, availableVariables);
};

const COMPONENT_VALIDATORS: Record<string, ComponentValidator> = {
  [TypesEnum.VARIABLE]: validateVariable,
  [TypesEnum.OPERATOR]: validateOperator,
  [TypesEnum.WRITER]: validateWriter,
  [TypesEnum.CONDITIONAL]: validateConditional,
  [TypesEnum.FOR_CODITIONAL]: validateFor
};

export const validateProgram = (
  components: readonly any[] | null | undefined,
  inheritedVariables: ReadonlySet<string> = new Set<string>()
): ValidationResult => {
  if (!Array.isArray(components) || components.length === 0) {
    return VALID_RESULT;
  }

  const firstInvalid = components
    .map((component, index) => {
      const localDeclaredBefore = components
        .slice(0, index)
        .filter((prev) => prev?.type === TypesEnum.VARIABLE)
        .map((prev) => String(prev?.value?.name ?? '').trim())
        .filter((name) => name !== '');

      const availableVariables = new Set<string>([
        ...inheritedVariables,
        ...localDeclaredBefore
      ]);

      const validator = COMPONENT_VALIDATORS[component?.type];
      return validator ? validator(component?.value, availableVariables) : VALID_RESULT;
    })
    .find((result) => !result.valid);

  return firstInvalid ?? VALID_RESULT;
};

export const mapVcatError = (error: unknown): FriendlyErrorResult => {
  const errObj = error as { id?: string; message?: string } | null | undefined;
  const rawMessage =
    typeof error === 'string'
      ? error
      : typeof errObj?.message === 'string'
        ? errObj.message
        : '';

  if (
    errObj?.id === 'exceed_max_instructions' ||
    /excedeu o limite|exceeded.*limit/i.test(rawMessage)
  ) {
    return { messageKey: 'EXECUTION_ERROR.INFINITE_LOOP' };
  }

  const isInternalJsError =
    error instanceof TypeError ||
    error instanceof ReferenceError ||
    /getError|Cannot read propert|undefined|null/i.test(rawMessage);

  if (isInternalJsError) {
    return { messageKey: 'EXECUTION_ERROR.INTERNAL_SYNTAX' };
  }

  if (rawMessage.trim() !== '') {
    return { messageKey: 'EXECUTION_ERROR.GENERIC', rawMessage };
  }

  return { messageKey: 'EXECUTION_ERROR.GENERIC' };
};
