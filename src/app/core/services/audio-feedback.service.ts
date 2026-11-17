import { Injectable, Optional } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { announceBlockBoundaryExit } from '../../utils/block-boundary.utils';
import {
  SOUND_EFFECT_PROFILES,
  SoundEffectType,
  computeToneSchedule
} from '../../utils/sound-effects.utils';

const SOUND_ENABLED_STORAGE_KEY = 'soundEnabled';

@Injectable({
  providedIn: 'root'
})
export class AudioFeedbackService {
  private soundEnabled: boolean;
  private audioContext: AudioContext | null = null;

  constructor(@Optional() private translate?: TranslateService) {
    this.soundEnabled = this.readStoredPreference();
  }

  get isSoundEnabled(): boolean {
    return this.soundEnabled;
  }

  toggleSound(): boolean {
    this.soundEnabled = !this.soundEnabled;
    this.persistPreference(this.soundEnabled);
    if (this.soundEnabled) {
      this.playEffect('toggle');
    }
    return this.soundEnabled;
  }

  playEffect(effect: SoundEffectType): void {
    if (!this.soundEnabled) {
      return;
    }

    try {
      const ctx = this.ensureAudioContext();
      if (!ctx) {
        return;
      }

      if (ctx.state === 'suspended') {
        void ctx.resume();
      }

      const schedule = computeToneSchedule(SOUND_EFFECT_PROFILES[effect] ?? []);
      const baseTime = ctx.currentTime;

      schedule.forEach((tone) => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const startTime = baseTime + tone.startOffsetSec;
        const endTime = startTime + tone.durationSec;

        oscillator.type = tone.type;
        oscillator.frequency.setValueAtTime(tone.frequency, startTime);

        gainNode.gain.setValueAtTime(0.0001, startTime);
        gainNode.gain.exponentialRampToValueAtTime(tone.gain, startTime + Math.min(0.008, tone.durationSec / 2));
        gainNode.gain.exponentialRampToValueAtTime(0.0001, endTime);

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start(startTime);
        oscillator.stop(endTime);
      });
    } catch {
      // Ambientes sem suporte à Web Audio API não devem interromper a interação.
    }
  }

  announce(
    messageKey: string,
    params?: Record<string, string | number>,
    delayMs?: number
  ): void {
    const message = this.translate ? this.translate.instant(messageKey, params) : messageKey;
    announceBlockBoundaryExit(message, delayMs);
  }

  notifyAction(
    effect: SoundEffectType,
    messageKey?: string,
    params?: Record<string, string | number>,
    announceDelayMs?: number
  ): void {
    this.playEffect(effect);
    if (messageKey) {
      this.announce(messageKey, params, announceDelayMs);
    }
  }

  private readStoredPreference(): boolean {
    try {
      return localStorage.getItem(SOUND_ENABLED_STORAGE_KEY) !== 'false';
    } catch {
      return true;
    }
  }

  private persistPreference(enabled: boolean): void {
    try {
      localStorage.setItem(SOUND_ENABLED_STORAGE_KEY, String(enabled));
    } catch {
      // Ignora falhas de acesso ao localStorage.
    }
  }

  private ensureAudioContext(): AudioContext | null {
    if (this.audioContext) {
      return this.audioContext;
    }

    const AudioCtx =
      (typeof window !== 'undefined' &&
        (window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)) ||
      null;

    if (!AudioCtx) {
      return null;
    }

    this.audioContext = new AudioCtx();
    return this.audioContext;
  }
}
