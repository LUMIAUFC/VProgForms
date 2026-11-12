import { TypesEnum } from '../enums/types.enum';
import {
  generateNextVariableName,
  getVariablesBeforeIndex,
  moveIndexedItemDown,
  moveIndexedItemUp,
  moveItemDown,
  moveItemUp,
  normalizeNumericFallback,
  renameVariableInComponents
} from './reorder.utils';

describe('reorder.utils', () => {
  describe('moveItemUp / moveItemDown', () => {
    it('deve mover item para cima sem mutar o array original', () => {
      const original = ['a', 'b', 'c'];
      const moved = moveItemUp(original, 1);

      expect(moved).toEqual(['b', 'a', 'c']);
      expect(original).toEqual(['a', 'b', 'c']);
    });

    it('deve manter array inalterado ao tentar mover o primeiro item para cima', () => {
      expect(moveItemUp(['a', 'b'], 0)).toEqual(['a', 'b']);
    });

    it('deve mover item para baixo sem mutar o array original', () => {
      const original = ['a', 'b', 'c'];
      const moved = moveItemDown(original, 1);

      expect(moved).toEqual(['a', 'c', 'b']);
      expect(original).toEqual(['a', 'b', 'c']);
    });

    it('deve manter array inalterado ao tentar mover o último item para baixo', () => {
      expect(moveItemDown(['a', 'b'], 1)).toEqual(['a', 'b']);
    });

    it('deve reindexar termos ao mover para cima e para baixo', () => {
      const terms = [
        { index: 0, type: 'VARIABLE', value: 'x' },
        { index: 1, type: 'OPERATOR', value: '+' },
        { index: 2, type: 'VALUE', value: '1' }
      ];

      expect(moveIndexedItemUp(terms, 2)).toEqual([
        { index: 0, type: 'VARIABLE', value: 'x' },
        { index: 1, type: 'VALUE', value: '1' },
        { index: 2, type: 'OPERATOR', value: '+' }
      ]);

      expect(moveIndexedItemDown(terms, 0)).toEqual([
        { index: 0, type: 'OPERATOR', value: '+' },
        { index: 1, type: 'VARIABLE', value: 'x' },
        { index: 2, type: 'VALUE', value: '1' }
      ]);
    });
  });

  describe('getVariablesBeforeIndex', () => {
    it('deve retornar apenas variáveis declaradas antes do índice informado', () => {
      const components = [
        { type: TypesEnum.VARIABLE, value: { name: 'a' } },
        { type: TypesEnum.WRITER, value: { type: 'VARIABLE', value: 'a' } },
        { type: TypesEnum.VARIABLE, value: { name: 'media' } },
        { type: TypesEnum.CONDITIONAL, value: {} }
      ];

      expect(getVariablesBeforeIndex(components, 0)).toEqual([]);
      expect(getVariablesBeforeIndex(components, 1).map((c) => c.value.name)).toEqual(['a']);
      expect(getVariablesBeforeIndex(components, 3).map((c) => c.value.name)).toEqual([
        'a',
        'media'
      ]);
    });
  });

  describe('generateNextVariableName', () => {
    it('deve gerar nome único mesmo quando existirem variáveis fora de ordem', () => {
      const components = [
        { type: TypesEnum.VARIABLE, value: { name: 'var1' } },
        { type: TypesEnum.WRITER, value: {} }
      ];

      expect(generateNextVariableName(components)).toBe('var2');

      const withCollision = [
        { type: TypesEnum.VARIABLE, value: { name: 'var0' } },
        { type: TypesEnum.VARIABLE, value: { name: 'var1' } }
      ];
      expect(generateNextVariableName(withCollision)).toBe('var2');
    });
  });

  describe('normalizeNumericFallback', () => {
    it('deve converter vazio, null ou undefined em 0 e preservar números válidos', () => {
      expect(normalizeNumericFallback('')).toBe(0);
      expect(normalizeNumericFallback('   ')).toBe(0);
      expect(normalizeNumericFallback(null)).toBe(0);
      expect(normalizeNumericFallback(undefined)).toBe(0);
      expect(normalizeNumericFallback(0)).toBe(0);
      expect(normalizeNumericFallback(42)).toBe(42);
    });
  });

  describe('renameVariableInComponents', () => {
    it('deve propagar renomeação de variável em atribuição, escreva, condicional e repetição', () => {
      const components = [
        { type: TypesEnum.VARIABLE, value: { name: 'soma', type: 'INTEGER', value: 0 } },
        {
          type: TypesEnum.OPERATOR,
          value: {
            reference: 'var2',
            currentVariable: { name: 'var2', type: 'INTEGER', value: 0 },
            operators: [
              { index: 0, type: 'VARIABLE', value: 'var2' },
              { index: 1, type: 'OPERATOR', value: '+' },
              { index: 2, type: 'VALUE', value: '1' }
            ],
            value: 'var2 + 1 '
          }
        },
        { type: TypesEnum.WRITER, value: { type: 'VARIABLE', value: 'var2' } },
        {
          type: TypesEnum.CONDITIONAL,
          value: {
            conditionals: [{ index: 0, type: 'VARIABLE', value: 'var2' }],
            condition: {
              value: 'var2 ',
              components: [{ type: TypesEnum.WRITER, value: { type: 'VARIABLE', value: 'var2' } }]
            },
            nocondition: { components: [] }
          }
        }
      ];

      const updated = renameVariableInComponents(components, 'var2', 'soma');

      expect(updated[1].value.reference).toBe('soma');
      expect(updated[1].value.currentVariable.name).toBe('soma');
      expect(updated[1].value.value).toBe('soma + 1 ');
      expect(updated[2].value.value).toBe('soma');
      expect(updated[3].value.condition.value).toBe('soma ');
      expect(updated[3].value.condition.components[0].value.value).toBe('soma');
    });
  });
});
