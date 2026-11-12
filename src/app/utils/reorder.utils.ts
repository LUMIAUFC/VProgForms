import { TypesEnum } from '../enums/types.enum';

const moveItemByOffset = <T>(
  items: readonly T[] | null | undefined,
  index: number,
  offset: -1 | 1
): T[] => {
  if (!Array.isArray(items)) {
    return [];
  }

  const targetIndex = index + offset;
  const isOutOfBounds =
    index < 0 || index >= items.length || targetIndex < 0 || targetIndex >= items.length;

  if (isOutOfBounds) {
    return [...items];
  }

  return items.map((item, currentIndex) => {
    if (currentIndex === index) {
      return items[targetIndex];
    }
    if (currentIndex === targetIndex) {
      return items[index];
    }
    return item;
  });
};

export const moveItemUp = <T>(
  items: readonly T[] | null | undefined,
  index: number
): T[] => moveItemByOffset(items, index, -1);

export const moveItemDown = <T>(
  items: readonly T[] | null | undefined,
  index: number
): T[] => moveItemByOffset(items, index, 1);

export const moveIndexedItemUp = <T extends { readonly index: number }>(
  items: readonly T[] | null | undefined,
  index: number
): T[] => moveItemUp(items, index).map((item, idx) => ({ ...item, index: idx }));

export const moveIndexedItemDown = <T extends { readonly index: number }>(
  items: readonly T[] | null | undefined,
  index: number
): T[] => moveItemDown(items, index).map((item, idx) => ({ ...item, index: idx }));

export const getVariablesBeforeIndex = (
  components: readonly any[] | null | undefined,
  index: number
): any[] => {
  if (!Array.isArray(components) || index <= 0) {
    return [];
  }

  return components
    .slice(0, index)
    .filter((component) => component?.type === TypesEnum.VARIABLE);
};

export const generateNextVariableName = (
  components: readonly any[] | null | undefined
): string => {
  const existingNames = new Set(
    (Array.isArray(components) ? components : [])
      .filter((component) => component?.type === TypesEnum.VARIABLE)
      .map((component) => component?.value?.name)
      .filter((name): name is string => typeof name === 'string' && name.trim() !== '')
  );

  const findAvailableIndex = (candidate: number): number =>
    existingNames.has(`var${candidate}`) ? findAvailableIndex(candidate + 1) : candidate;

  return `var${findAvailableIndex(existingNames.size)}`;
};

export const normalizeNumericFallback = (value: unknown): unknown => {
  if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) {
    return 0;
  }
  return value;
};

const joinExpressionTokens = (tokens: readonly any[]): string =>
  tokens.map((token) => `${token?.value ?? ''} `).join('');

export const renameVariableInComponents = (
  components: readonly any[] | null | undefined,
  oldName: string,
  newName: string
): any[] => {
  if (!Array.isArray(components) || !oldName || !newName || oldName === newName) {
    return Array.isArray(components) ? [...components] : [];
  }

  return components.map((component) => {
    if (!component || !component.value) {
      return component;
    }

    if (component.type === TypesEnum.WRITER) {
      const value =
        component.value.type === 'VARIABLE' && component.value.value === oldName
          ? { ...component.value, value: newName }
          : component.value;
      return { ...component, value };
    }

    if (component.type === TypesEnum.OPERATOR) {
      const updatedOperators = Array.isArray(component.value.operators)
        ? component.value.operators.map((op: any) =>
            op?.type === 'VARIABLE' && op.value === oldName ? { ...op, value: newName } : op
          )
        : component.value.operators;

      const updatedReference =
        component.value.reference === oldName ? newName : component.value.reference;
      const updatedCurrentVar =
        component.value.currentVariable?.name === oldName
          ? { ...component.value.currentVariable, name: newName }
          : component.value.currentVariable;
      const updatedValue = Array.isArray(updatedOperators)
        ? joinExpressionTokens(updatedOperators)
        : component.value.value;

      return {
        ...component,
        value: {
          ...component.value,
          reference: updatedReference,
          currentVariable: updatedCurrentVar,
          operators: updatedOperators,
          value: updatedValue
        }
      };
    }

    if (component.type === TypesEnum.CONDITIONAL) {
      const updatedConditionals = Array.isArray(component.value.conditionals)
        ? component.value.conditionals.map((op: any) =>
            op?.type === 'VARIABLE' && op.value === oldName ? { ...op, value: newName } : op
          )
        : component.value.conditionals;

      const updatedConditionValue = Array.isArray(updatedConditionals)
        ? joinExpressionTokens(updatedConditionals)
        : component.value.condition?.value;

      return {
        ...component,
        value: {
          ...component.value,
          conditionals: updatedConditionals,
          condition: {
            ...component.value.condition,
            value: updatedConditionValue,
            components: renameVariableInComponents(
              component.value.condition?.components,
              oldName,
              newName
            )
          },
          nocondition: {
            ...component.value.nocondition,
            components: renameVariableInComponents(
              component.value.nocondition?.components,
              oldName,
              newName
            )
          }
        }
      };
    }

    if (component.type === TypesEnum.FOR_CODITIONAL) {
      return {
        ...component,
        value: {
          ...component.value,
          variable: component.value.variable === oldName ? newName : component.value.variable,
          startValue:
            component.value.startType === 'VARIABLE' && component.value.startValue === oldName
              ? newName
              : component.value.startValue,
          finishValue:
            component.value.finishType === 'VARIABLE' && component.value.finishValue === oldName
              ? newName
              : component.value.finishValue,
          components: renameVariableInComponents(component.value.components, oldName, newName)
        }
      };
    }

    return component;
  });
};
