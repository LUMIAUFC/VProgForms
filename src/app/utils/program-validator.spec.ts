import { TypesEnum } from '../enums/types.enum';
import { mapVcatError, validateProgram } from './program-validator';

const intVar = (name: string, value = 0) => ({
  type: TypesEnum.VARIABLE,
  value: { name, type: 'INTEGER', value }
});

describe('program-validator', () => {
  describe('validateProgram', () => {
    it('deve retornar válido para lista vazia ou nula', () => {
      expect(validateProgram([])).toEqual({ valid: true });
      expect(validateProgram(null)).toEqual({ valid: true });
      expect(validateProgram(undefined)).toEqual({ valid: true });
    });

    it('deve aceitar variável numérica com valor 0', () => {
      expect(validateProgram([intVar('soma', 0)])).toEqual({ valid: true });
    });

    it('deve rejeitar variável numérica com valor vazio ou nulo', () => {
      const result = validateProgram([
        { type: TypesEnum.VARIABLE, value: { name: 'soma', type: 'INTEGER', value: null } }
      ]);
      expect(result).toEqual({
        valid: false,
        messageKey: 'VALIDATION.VARIABLE_VALUE_EMPTY',
        params: { name: 'soma' }
      });
    });

    it('deve aceitar variável STRING com valor vazio', () => {
      const result = validateProgram([
        { type: TypesEnum.VARIABLE, value: { name: 'texto', type: 'STRING', value: '' } }
      ]);
      expect(result).toEqual({ valid: true });
    });

    it('deve rejeitar variável com nome vazio ou com espaços', () => {
      expect(
        validateProgram([
          { type: TypesEnum.VARIABLE, value: { name: '   ', type: 'INTEGER', value: 0 } }
        ]).messageKey
      ).toBe('VALIDATION.VARIABLE_NAME_EMPTY');

      expect(
        validateProgram([
          { type: TypesEnum.VARIABLE, value: { name: 'meu valor', type: 'INTEGER', value: 0 } }
        ]).messageKey
      ).toBe('VALIDATION.VARIABLE_NAME_INVALID');
    });

    it('deve rejeitar OPERATOR sem variável destino, com expressão incompleta ou variável fora de escopo', () => {
      expect(
        validateProgram([{ type: TypesEnum.OPERATOR, value: { name: '', value: '' } }]).messageKey
      ).toBe('VALIDATION.OPERATOR_TARGET_EMPTY');

      expect(
        validateProgram([
          intVar('soma'),
          intVar('x'),
          {
            type: TypesEnum.OPERATOR,
            value: {
              reference: 'soma',
              value: 'x + ',
              operators: [
                { type: 'VARIABLE', value: 'x' },
                { type: 'OPERATOR', value: '+' },
                { type: 'ATTRIBUTE', value: '' }
              ]
            }
          }
        ]).messageKey
      ).toBe('VALIDATION.OPERATOR_EXPRESSION_INCOMPLETE');

      expect(
        validateProgram([
          {
            type: TypesEnum.OPERATOR,
            value: {
              reference: 'soma',
              value: 'x ',
              operators: [{ type: 'VARIABLE', value: 'x' }]
            }
          },
          intVar('soma'),
          intVar('x')
        ])
      ).toEqual({
        valid: false,
        messageKey: 'VALIDATION.VARIABLE_NOT_IN_SCOPE',
        params: { name: 'soma' }
      });
    });

    it('deve rejeitar WRITER sem tipo, sem variável selecionada ou com variável inexistente/órfã', () => {
      expect(
        validateProgram([{ type: TypesEnum.WRITER, value: { type: '', value: '' } }]).messageKey
      ).toBe('VALIDATION.WRITER_INCOMPLETE');

      expect(
        validateProgram([{ type: TypesEnum.WRITER, value: { type: 'VARIABLE', value: '' } }])
          .messageKey
      ).toBe('VALIDATION.WRITER_INCOMPLETE');

      expect(
        validateProgram([{ type: TypesEnum.WRITER, value: { type: 'VARIABLE', value: 'var2' } }])
      ).toEqual({
        valid: false,
        messageKey: 'VALIDATION.VARIABLE_NOT_IN_SCOPE',
        params: { name: 'var2' }
      });

      expect(
        validateProgram([{ type: TypesEnum.WRITER, value: { type: 'TEXT', value: 'Olá' } }])
      ).toEqual({ valid: true });
    });

    it('deve validar CONDITIONAL e seus blocos aninhados', () => {
      expect(
        validateProgram([
          {
            type: TypesEnum.CONDITIONAL,
            value: {
              conditionals: [{ type: '', value: '' }],
              condition: { value: '', components: [] },
              nocondition: { components: [] }
            }
          }
        ]).messageKey
      ).toBe('VALIDATION.CONDITIONAL_INCOMPLETE');

      expect(
        validateProgram([
          intVar('x'),
          {
            type: TypesEnum.CONDITIONAL,
            value: {
              conditionals: [{ type: 'VARIABLE', value: 'x' }],
              condition: {
                value: 'x > 0',
                components: [{ type: TypesEnum.OPERATOR, value: { reference: '', value: '' } }]
              },
              nocondition: { components: [] }
            }
          }
        ]).messageKey
      ).toBe('VALIDATION.OPERATOR_TARGET_EMPTY');
    });

    it('deve prevenir loop infinito no FOR_CODITIONAL com passo <= 0 ou direção incompatível', () => {
      expect(
        validateProgram([
          intVar('i'),
          {
            type: TypesEnum.FOR_CODITIONAL,
            value: {
              variable: 'i',
              startType: 'VALUE',
              startValue: '0',
              finishType: 'VALUE',
              finishValue: '10',
              incrementType: '+',
              incrementValue: '0',
              components: []
            }
          }
        ]).messageKey
      ).toBe('VALIDATION.FOR_INVALID_STEP');

      expect(
        validateProgram([
          intVar('i'),
          {
            type: TypesEnum.FOR_CODITIONAL,
            value: {
              variable: 'i',
              startType: 'VALUE',
              startValue: '0',
              finishType: 'VALUE',
              finishValue: '10',
              incrementType: '-',
              incrementValue: '1',
              components: []
            }
          }
        ]).messageKey
      ).toBe('VALIDATION.FOR_INVALID_DIRECTION');

      expect(
        validateProgram([
          intVar('i'),
          {
            type: TypesEnum.FOR_CODITIONAL,
            value: {
              variable: 'i',
              startType: 'VALUE',
              startValue: '10',
              finishType: 'VALUE',
              finishValue: '0',
              incrementType: '+',
              incrementValue: '1',
              components: []
            }
          }
        ]).messageKey
      ).toBe('VALIDATION.FOR_INVALID_DIRECTION');

      expect(
        validateProgram([
          intVar('i'),
          {
            type: TypesEnum.FOR_CODITIONAL,
            value: {
              variable: 'i',
              startType: 'VALUE',
              startValue: '0',
              finishType: 'VALUE',
              finishValue: '10',
              incrementType: '+',
              incrementValue: '1',
              components: []
            }
          }
        ])
      ).toEqual({ valid: true });
    });
  });

  describe('mapVcatError', () => {
    it('deve mapear erro getError/TypeError interno para mensagem amigável', () => {
      const error = new TypeError("Cannot read properties of undefined (reading 'getError')");
      expect(mapVcatError(error)).toEqual({
        messageKey: 'EXECUTION_ERROR.INTERNAL_SYNTAX'
      });
    });

    it('deve mapear erro de limite de instruções para laço infinito', () => {
      expect(mapVcatError({ id: 'exceed_max_instructions', message: 'exceeded' })).toEqual({
        messageKey: 'EXECUTION_ERROR.INFINITE_LOOP'
      });
    });

    it('deve preservar mensagem legível do vcat quando não for erro interno', () => {
      expect(mapVcatError({ message: 'Erro na linha 3: variável não declarada' })).toEqual({
        messageKey: 'EXECUTION_ERROR.GENERIC',
        rawMessage: 'Erro na linha 3: variável não declarada'
      });
    });
  });
});
