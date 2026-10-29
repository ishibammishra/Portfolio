let audioCtx: AudioContext | null = null;
let soundEnabled = true;

export function getAudioContext(): AudioContext | null {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      try {
        audioCtx = new AudioContextClass();
      } catch (e) {
        console.warn('AudioContext failed to initialize', e);
      }
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playClickSound(
  soundType: 'snap' | 'nav' | 'modal' | number = 'snap',
  durationOrEnabled?: number | boolean,
  isEnabled?: boolean
) {
  let allow = soundEnabled;
  let duration = 0.04;
  let freq = 600;

  if (typeof durationOrEnabled === 'boolean') {
    allow = durationOrEnabled;
  } else if (typeof durationOrEnabled === 'number') {
    duration = durationOrEnabled;
    if (isEnabled !== undefined) {
      allow = isEnabled;
    }
  }

  if (!allow) return;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (typeof soundType === 'number') {
      freq = soundType;
    } else if (soundType === 'nav') {
      freq = 750;
      duration = 0.05;
    } else if (soundType === 'modal') {
      freq = 880;
      duration = 0.07;
    } else if (soundType === 'snap') {
      freq = 520;
      duration = 0.035;
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
}

export function toggleSound(): boolean {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    playClickSound(800);
  }
  return soundEnabled;
}

export function isSoundEnabled(): boolean {
  return soundEnabled;
}
