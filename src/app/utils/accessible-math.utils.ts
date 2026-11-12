interface AccessibleOperatorEntry {
  readonly display: string;
  readonly key: string;
}

const ACCESSIBLE_MATH_MAP: Readonly<Record<string, AccessibleOperatorEntry>> = {
  '>=': { display: '&gt;=', key: 'ACCESSIBLE_MATH.GREATER_EQUAL' },
  '<=': { display: '&lt;=', key: 'ACCESSIBLE_MATH.LESS_EQUAL' },
  '==': { display: '==', key: 'ACCESSIBLE_MATH.EQUAL' },
  '!=': { display: '!=', key: 'ACCESSIBLE_MATH.NOT_EQUAL' },
  '<-': { display: '&lt;-', key: 'ACCESSIBLE_MATH.RECEIVE' },
  '>': { display: '&gt;', key: 'ACCESSIBLE_MATH.GREATER' },
  '<': { display: '&lt;', key: 'ACCESSIBLE_MATH.LESS' },
  '*': { display: '*', key: 'ACCESSIBLE_MATH.MULTIPLY' },
  '/': { display: '/', key: 'ACCESSIBLE_MATH.DIVIDE' },
  '+': { display: '+', key: 'ACCESSIBLE_MATH.ADD' },
  '-': { display: '-', key: 'ACCESSIBLE_MATH.SUBTRACT' },
  ';': { display: ';', key: 'ACCESSIBLE_MATH.SEMICOLON' }
};

const OPERATOR_PATTERN = /(>=|<=|==|!=|<-|>|<|\*|\/|\+|\-|;)/g;

export const formatAccessibleMath = (
  value: string,
  translateFn: (key: string) => string
): string => {
  if (!value) {
    return '';
  }

  return value.replace(OPERATOR_PATTERN, (match: string) => {
    const entry = ACCESSIBLE_MATH_MAP[match];
    if (!entry) {
      return match;
    }
    return `<span aria-hidden="true">${entry.display}</span><span class="sr-only"> ${translateFn(entry.key)} </span>`;
  });
};
