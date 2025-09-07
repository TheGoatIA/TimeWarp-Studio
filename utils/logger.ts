
export enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

interface LogDetails {
  [key: string]: any;
}

const log = (level: LogLevel, event: string, message: string, details?: LogDetails) => {
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
