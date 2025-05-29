import React from 'react';
import { render, screen } from '@testing-library/react';
import { Alert, AlertTitle, AlertDescription } from './alert'; // Path relative to this test file

describe('Alert Component', () => {
  test('renders with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Test Title</AlertTitle>
        <AlertDescription>Test Description</AlertDescription>
      </Alert>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('has ARIA role="alert"', () => {
    render(
      <Alert>
        <AlertTitle>Test Title</AlertTitle>
        <AlertDescription>Test Description</AlertDescription>
      </Alert>
    );
    // The role="alert" is typically on the main Alert container
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  test('applies destructive variant classes', () => {
    // Note: This test is somewhat brittle as it relies on specific class names.
    // A better approach for variant testing might involve visual regression tests
    // or snapshot tests if class names are not stable.
    // For shadcn/ui, the variant classes are usually quite stable.
    const { container } = render(
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Error Description</AlertDescription>
      </Alert>
    );
    // Check for a class that is indicative of the destructive variant.
    // This class comes from the `buttonVariants` (which Alert uses internally for styling)
    // `bg-destructive text-destructive-foreground`
    // We can check for one of them, e.g., `bg-destructive`.
    // The actual rendered element will have multiple classes.
    expect(container.firstChild).toHaveClass('bg-destructive');
    expect(container.firstChild).toHaveClass('text-destructive-foreground');
  });

  test('AlertTitle renders its children', () => {
    render(<AlertTitle>Specific Title</AlertTitle>);
    expect(screen.getByText('Specific Title')).toBeInTheDocument();
  });

  test('AlertDescription renders its children', () => {
    render(<AlertDescription>Specific Description</AlertDescription>);
    expect(screen.getByText('Specific Description')).toBeInTheDocument();
  });
});
