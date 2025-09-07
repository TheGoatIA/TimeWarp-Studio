// This declaration is necessary to inform TypeScript about the global gtag function.
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Interface for standard Google Analytics event parameters.
 */
interface EventParams {
  category: string;
  label?: string;
  value?: number;
}

/**
 * Tracks a custom event using Google Analytics (gtag.js).
 * This function safely checks for the existence of the `gtag` function
 * before attempting to send an event.
 *
 * @param eventName The name of the event to track (e.g., 'select_content').
 * @param params An object containing the event parameters (category, label, value).
 */
export const trackEvent = (eventName: string, params: EventParams): void => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      event_category: params.category,
      event_label: params.label,
      value: params.value,
    });
  } else {
    // Fallback for local development or if gtag fails to load
    console.log(`[Analytics Event (gtag not found)] Name: ${eventName}, Params:`, params);
  }
};
