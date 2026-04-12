import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';

// jsdom does not implement IntersectionObserver
globalThis.IntersectionObserver ??= class IntersectionObserver {
  readonly root = null;
  readonly rootMargin = '0px';
  readonly thresholds: readonly number[] = [0];
  constructor(private cb: IntersectionObserverCallback) {}
  observe() { this.cb([{ isIntersecting: true } as IntersectionObserverEntry], this as unknown as IntersectionObserver); }
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
} as unknown as typeof IntersectionObserver;

afterEach(() => {
  cleanup();
});
