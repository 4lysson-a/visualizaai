import posthog from 'posthog-js';

export class LocalStorage {
  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static remove(key) {
    localStorage.removeItem(key);
  }

  static logout() {
    posthog.reset();
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key !== 'version' && key !== 'initial_loading') {
        localStorage.removeItem(key);
      }
    });
  }
}
