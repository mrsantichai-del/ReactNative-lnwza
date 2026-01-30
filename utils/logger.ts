// Enable logs automatically in development mode, disabled in production
let ENABLE_LOGS = typeof __DEV__ !== 'undefined' ? Boolean(__DEV__) : false;

/**
 * Enable or disable non-error logging at runtime (for debugging)
 * Set to true during development when you need more output.
 */
export const setEnableLogs = (v: boolean) => {
  ENABLE_LOGS = Boolean(v);
};

export const isEnabled = () => ENABLE_LOGS;

export const log = (...args: any[]) => {
  if (ENABLE_LOGS) console.log(...args);
};

export const warn = (...args: any[]) => {
  if (ENABLE_LOGS) console.warn(...args);
};

// Errors should always be visible to help troubleshooting
export const error = (...args: any[]) => {
  console.error(...args);
};
