
export enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

interface LogDetails {
  [key: string]: any;
}

// Check for a debug flag in the URL to enable logging in production.
// This is a simple and effective way for developers to access logs without
// cluttering the console for regular users.
// To enable, add `?debug=true` to the application URL.
const isLoggingEnabled = new URLSearchParams(window.location.search).has('debug');

const log = (level: LogLevel, event: string, message: string, details?: LogDetails) => {
  // Only execute the log function if the debug flag is present in the URL.
  if (!isLoggingEnabled) {
    return;
  }

  const logObject = {
    timestamp: new Date().toISOString(),
    level,
    event,
    message,
    details,
  };

  switch (level) {
    case LogLevel.INFO:
      console.log(`[${level}] - ${event}: ${message}`, details || '');
      break;
    case LogLevel.WARN:
      console.warn(`[${level}] - ${event}: ${message}`, details || '');
      break;
    case LogLevel.ERROR:
      console.error(`[${level}] - ${event}: ${message}`, details || '');
      break;
  }
};

export const logger = {
  info: (event: string, message: string, details?: LogDetails) => log(LogLevel.INFO, event, message, details),
  warn: (event: string, message: string, details?: LogDetails) => log(LogLevel.WARN, event, message, details),
  error: (event: string, message: string, details?: LogDetails) => log(LogLevel.ERROR, event, message, details),
};
