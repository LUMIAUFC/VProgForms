import { TypesEnum } from '../enums/types.enum';

export type SoundEffectType =
  | 'add'
  | 'moveUp'
  | 'moveDown'
  | 'delete'
  | 'clearAll'
  | 'toggle'
  | 'recordStart'
  | 'recordStop'
  | 'success'
  | 'error';

export interface ToneStep {
  readonly frequency: number;
  readonly durationMs: number;
  readonly type?: OscillatorType;
  readonly gain?: number;
}

export interface ScheduledTone {
  readonly frequency: number;
  readonly startOffsetSec: number;
  readonly durationSec: number;
  readonly type: OscillatorType;
  readonly gain: number;
}

const DEFAULT_GAIN = .5;

export const SOUND_EFFECT_PROFILES: Readonly<Record<SoundEffectType, readonly ToneStep[]>> = {
  add: [
    { frequency: 523.25, durationMs: 45 },
    { frequency: 659.25, durationMs: 55 }
  ],
  moveUp: [
    { frequency: 440, durationMs: 50 },
    { frequency: 587.33, durationMs: 60 }
  ],
  moveDown: [
    { frequency: 587.33, durationMs: 50 },
    { frequency: 440, durationMs: 60 }
  ],
  delete: [
    { frequency: 392, durationMs: 55 },
    { frequency: 261.63, durationMs: 70 }
  ],
  clearAll: [
    { frequency: 440, durationMs: 45 },
    { frequency: 349.23, durationMs: 45 },
    { frequency: 261.63, durationMs: 70 }
  ],
  toggle: [
    { frequency: 493.88, durationMs: 40 }
  ],
  recordStart: [
    { frequency: 587.33, durationMs: 55 },
    { frequency: 880, durationMs: 75 }
  ],
  recordStop: [
    { frequency: 659.25, durationMs: 55 },
    { frequency: 440, durationMs: 75 }
  ],
  success: [
    { frequency: 523.25, durationMs: 60 },
    { frequency: 783.99, durationMs: 90 }
  ],
  error: [
    { frequency: 220, durationMs: 70, type: 'triangle', gain: .5 },
    { frequency: 196, durationMs: 90, type: 'triangle', gain: .5 }
  ]
};

export const computeToneSchedule = (
  steps: readonly ToneStep[]
): readonly ScheduledTone[] =>
  steps.reduce<{ readonly tones: readonly ScheduledTone[]; readonly offsetSec: number }>(
    (acc, step) => {
      const durationSec = Math.max(0.01, step.durationMs / 1000);
      const tone: ScheduledTone = {
        frequency: step.frequency,
        startOffsetSec: acc.offsetSec,
        durationSec,
        type: step.type ?? 'sine',
        gain: step.gain ?? DEFAULT_GAIN
      };
      return {
        tones: [...acc.tones, tone],
        offsetSec: acc.offsetSec + durationSec
      };
    },
    { tones: [], offsetSec: 0 }
  ).tones;

const BLOCK_LABEL_EXTRACTORS: Readonly<Record<string, (value: any) => string>> = {
  [TypesEnum.VARIABLE]: (value: any) => String(value?.name ?? '').trim(),
  [TypesEnum.OPERATOR]: (value: any) => String(value?.reference ?? '').trim(),
  [TypesEnum.WRITER]: (value: any) => String(value?.value ?? '').trim(),
  [TypesEnum.CONDITIONAL]: (value: any) => String(value?.condition?.value ?? '').trim(),
  [TypesEnum.FOR_CODITIONAL]: (value: any) => String(value?.variable ?? '').trim()
};

export const resolveBlockLabel = (component: any, fallbackLabel: string = ''): string => {
  const extractor = BLOCK_LABEL_EXTRACTORS[component?.type];
  const extracted = extractor ? extractor(component?.value) : '';
  return extracted !== '' ? extracted : fallbackLabel;
};
