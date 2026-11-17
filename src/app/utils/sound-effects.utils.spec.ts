import { TypesEnum } from '../enums/types.enum';
import {
  SOUND_EFFECT_PROFILES,
  SoundEffectType,
  computeToneSchedule,
  resolveBlockLabel
} from './sound-effects.utils';

describe('sound-effects.utils', () => {
  it('deve possuir perfis declarados para todos os efeitos sonoros esperados', () => {
    const expectedEffects: SoundEffectType[] = [
      'add',
      'moveUp',
      'moveDown',
      'delete',
      'clearAll',
      'toggle',
      'success',
      'error'
    ];

    expectedEffects.forEach((effect) => {
      expect(SOUND_EFFECT_PROFILES[effect].length).toBeGreaterThan(0);
    });
  });

  it('deve calcular os deslocamentos de tempo sequenciais sem mutar os passos', () => {
    const steps = [
      { frequency: 440, durationMs: 50 },
      { frequency: 587.33, durationMs: 100, type: 'triangle' as OscillatorType, gain: 0.05 }
    ];

    const schedule = computeToneSchedule(steps);

    expect(schedule).toEqual([
      {
        frequency: 440,
        startOffsetSec: 0,
        durationSec: 0.05,
        type: 'sine',
        gain: 0.07
      },
      {
        frequency: 587.33,
        startOffsetSec: 0.05,
        durationSec: 0.1,
        type: 'triangle',
        gain: 0.05
      }
    ]);
  });

  it('deve extrair o rótulo do bloco de acordo com o tipo ou usar fallback', () => {
    expect(
      resolveBlockLabel({ type: TypesEnum.VARIABLE, value: { name: 'total' } }, 'Variável')
    ).toBe('total');
    expect(
      resolveBlockLabel({ type: TypesEnum.OPERATOR, value: { reference: 'soma' } }, 'Atribuição')
    ).toBe('soma');
    expect(
      resolveBlockLabel({ type: TypesEnum.WRITER, value: { value: 'Olá' } }, 'Escreva')
    ).toBe('Olá');
    expect(
      resolveBlockLabel(
        { type: TypesEnum.CONDITIONAL, value: { condition: { value: 'x > 0 ' } } },
        'Se…Então'
      )
    ).toBe('x > 0');
    expect(
      resolveBlockLabel({ type: TypesEnum.FOR_CODITIONAL, value: { variable: 'i' } }, 'Repita_Para')
    ).toBe('i');
    expect(resolveBlockLabel({ type: TypesEnum.OPERATOR, value: { reference: '' } }, 'Atribuição')).toBe(
      'Atribuição'
    );
  });
});
