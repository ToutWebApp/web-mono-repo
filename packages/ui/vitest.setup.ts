// Import jest-dom matchers
import '@testing-library/jest-dom/vitest';

// You can add other global setup here if needed
// For example, mocking global objects or functions

// Clean up after each test
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
