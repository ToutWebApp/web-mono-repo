# UI Package (@repo/ui)

This package contains shared UI components for the monorepo, built using [shadcn/ui](https://ui.shadcn.com/).
It now includes a comprehensive set of components from the shadcn/ui library, providing a rich toolkit for building user interfaces.

## Structure

-   Components are located in `src/components/ui/`.
-   Global styles and CSS variables required by shadcn/ui are in `src/styles/globals.css`.
-   Components are exported via `src/index.ts`.

## Using Components

To use a component in one of the applications (e.g., `apps/web` or `apps/dashboard`):

1.  Ensure the application's `tailwind.config.js` is configured to include content from this UI package (e.g., `../../packages/ui/src/**/*.{ts,tsx}`).
2.  Import the `globals.css` from this package into your application's main layout file:
    ```typescript
    // e.g., in apps/web/app/layout.tsx
    import "@repo/ui/src/styles/globals.css"; // Adjust path as needed if using path aliases, e.g. "ui/styles/globals.css"
    ```
3.  Import components from `@repo/ui/src` (which references `packages/ui/src/index.ts`):
    ```typescript
    import { Button, Alert, Card } from "@repo/ui/src"; // Or "ui/src" if using a simpler alias

    // Use the component
    <Button variant="outline">Click Me</Button>
    ```

## Developing Components

### Adding New Components

New components from the shadcn/ui library can be added using its CLI. Navigate to the `packages/ui` directory (or use the `-c ./packages/ui` flag from the root) and run:

```bash
npx shadcn@latest add <component-name>
```
Follow the prompts. This will add the component source code directly into `src/components/ui/`. Remember to export the new component from `src/index.ts`.

### Customizing Components

Components added by shadcn/ui are copied to your codebase. You can directly edit the files in `src/components/ui/` to customize their appearance or behavior.

Refer to the [shadcn/ui documentation](https://ui.shadcn.com/docs) for more details on component APIs and customization.

## Tailwind CSS

This package uses Tailwind CSS and shares a common configuration from `packages/tailwind-config`. The local `packages/ui/tailwind.config.js` extends this shared configuration.

## Testing

This package uses [Vitest](https://vitest.dev/) for unit testing.

-   Test files are located alongside the components (e.g., `src/components/ui/alert.test.tsx`).
-   Run tests from the `packages/ui` directory:
    ```bash
    npm test
    ```
    (Or `pnpm test` / `yarn test` depending on your monorepo's package manager. The script currently configured is `test: "./node_modules/.bin/vitest"` due to environment specifics).
