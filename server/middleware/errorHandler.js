import { defineEventHandler, sendError } from 'h3';

export default defineEventHandler((event) => {
  event.res.on('finish', () => {
    if (event.res.statusCode >= 400) {
      const message = event.res.statusMessage || 'Internal Server Error';
      sendError(event, new Error(message));
    }
  });
});
