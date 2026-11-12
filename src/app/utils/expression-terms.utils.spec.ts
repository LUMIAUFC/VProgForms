import {
  IndexedExpressionTerm,
  removeConditionalTermAt,
  removeOperatorTermAt
} from './expression-terms.utils';

describe('expression-terms.utils', () => {
  describe('removeOperatorTermAt', () => {
    it('deve remover o termo no índice especificado e reindexar os restantes', () => {
      const terms: IndexedExpressionTerm[] = [
        { index: 0, type: 'VARIABLE', value: 'x' },
        { index: 1, type: 'OPERATOR', value: '+' },
        { index: 2, type: 'VALUE', value: '10' }
      ];

      const result = removeOperatorTermAt(terms, 1);

      expect(result).toEqual([
        { index: 0, type: 'VARIABLE', value: 'x' },
        { index: 1, type: 'VALUE', value: '10' }
      ]);
    });
  });

  describe('removeConditionalTermAt', () => {
    const sampleCondition: IndexedExpressionTerm[] = [
      { index: 0, type: 'VARIABLE', value: 'a' },
      { index: 1, type: 'CONDITIONAL', value: '>' },
      { index: 2, type: 'VALUE', value: '0' },
      { index: 3, type: 'CONDITIONAL', value: 'E' },
      { index: 4, type: 'VARIABLE', value: 'b' }
    ];

    it('deve manter o array inalterado quando houver apenas um termo', () => {
      const single: IndexedExpressionTerm[] = [{ index: 0, type: 'VARIABLE', value: 'a' }];
      expect(removeConditionalTermAt(single, 0)).toEqual(single);
    });

    it('deve remover o primeiro operando junto com o operador seguinte e reindexar', () => {
      const result = removeConditionalTermAt(sampleCondition, 0);

      expect(result).toEqual([
        { index: 0, type: 'VALUE', value: '0' },
        { index: 1, type: 'CONDITIONAL', value: 'E' },
        { index: 2, type: 'VARIABLE', value: 'b' }
      ]);
    });

    it('deve remover um operando intermediário junto com o operador anterior e reindexar', () => {
      const result = removeConditionalTermAt(sampleCondition, 2);

      expect(result).toEqual([
        { index: 0, type: 'VARIABLE', value: 'a' },
        { index: 1, type: 'CONDITIONAL', value: 'E' },
        { index: 2, type: 'VARIABLE', value: 'b' }
      ]);
    });

    it('deve remover o último operando junto com o operador anterior e reindexar', () => {
      const result = removeConditionalTermAt(sampleCondition, 4);

      expect(result).toEqual([
        { index: 0, type: 'VARIABLE', value: 'a' },
        { index: 1, type: 'CONDITIONAL', value: '>' },
        { index: 2, type: 'VALUE', value: '0' }
      ]);
    });
  });
});
