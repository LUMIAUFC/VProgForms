export interface IndexedExpressionTerm {
  readonly index: number;
  readonly type: string;
  readonly value: string;
  readonly valueString?: string;
}

const reindexTerms = <T extends IndexedExpressionTerm>(terms: readonly T[]): T[] =>
  terms.map((term, index) => ({ ...term, index }));

export const removeOperatorTermAt = <T extends IndexedExpressionTerm>(
  terms: readonly T[] | null | undefined,
  termIndex: number
): T[] => {
  if (!Array.isArray(terms) || termIndex < 0 || termIndex >= terms.length) {
    return Array.isArray(terms) ? [...terms] : [];
  }

  return reindexTerms(terms.filter((_, index) => index !== termIndex));
};

export const removeConditionalTermAt = <T extends IndexedExpressionTerm>(
  conditionals: readonly T[] | null | undefined,
  termIndex: number
): T[] => {
  if (!Array.isArray(conditionals) || conditionals.length <= 1) {
    return Array.isArray(conditionals) ? [...conditionals] : [];
  }

  if (termIndex < 0 || termIndex >= conditionals.length) {
    return [...conditionals];
  }

  const shouldRemovePairAfter = termIndex === 0;
  const startRemoveIndex = shouldRemovePairAfter ? 0 : termIndex - 1;
  const endRemoveIndex = startRemoveIndex + 1;

  const filtered = conditionals.filter(
    (_, index) => index < startRemoveIndex || index > endRemoveIndex
  );

  return reindexTerms(filtered);
};
