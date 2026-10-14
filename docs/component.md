# Component Rules

## Creating a MVVM React Component

The MVVM (Model-View-ViewModel) pattern is a software architectural pattern that facilitates a
separation of the graphical user interface development from business logic or back-end logic (the data
model). This is done by introducing a ViewModel layer, which handles the presentation logic and state.

In the context of React, the MVVM pattern can be implemented using:

- **Model:** Defines the data structure and types.
- **View:** The React components (UI).
- **ViewModel:** Handles the logic and state management.

### Benefits of MVVM

- **Separation of Concerns:** By separating the view, logic, and data, each part can be developed
  and tested independently.
- **Maintainability/Testability:** The code is easier to maintain due to the clear separation between
  the UI and business logic.

## Component Structure

A typical React component in this structure includes the following files in a folder named based on the
component name "component-name":

- `ComponentName.ctrl.tsx`: The main component file.
- `componentName.model.tsx`: TypeScript models and interfaces.
- `useComponentName.vm.ts`: Custom hooks for handling component logic.
- `componentName.util.tsx`: Utility functions.

> **Note on styling:** This project uses Tailwind CSS v4 utility classes. Component styling should be
> applied via Tailwind utility classes (using `cn()` from `@/lib/utils` for conditional/merged classes).
> Global custom styles live in `src/index.css`.
