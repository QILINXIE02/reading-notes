# Reading: Component Based UI

## React Quick Start

- **Building Blocks of a React App**: The building blocks of a React app are components, which are reusable UI elements that encapsulate their own logic and state.
- **Difference Between HTML Element and React Component**: An HTML element represents a static part of the UI, while a React component is a dynamic entity that can have its own behavior and state.
- **JSX**: JSX is a syntax extension for JavaScript that allows us to write HTML-like code within JavaScript. It helps in creating React elements in a more intuitive and readable way.
- **Embedding JavaScript Expressions in JSX**: JavaScript expressions can be embedded in JSX by wrapping them in curly braces `{}`. For example, `{2 + 2}` will be evaluated to `4`.
- **Iteration and Conditional Logic in JSX**: JSX supports JavaScript expressions, so you can use standard JavaScript iteration and conditional statements like `map()` for iteration and `if` statements for conditional rendering.
- **Responding to User Inputs**: React components can respond to user inputs by attaching event handlers to DOM elements, such as `onClick`, `onChange`, etc.
- **React Components Managing Data with Hooks**: The word `useState` indicates that a React component manages data with a Hook.
- **Sharing Data Between React Components**: Data can be shared between React components by lifting state up to a common ancestor or using context API for global state management.

## Render and Commit

- **Three Steps of Refreshing a React UI**: The three steps are reconciliation, rendering, and commit phase.
- **Triggering Updates to a Component**: Updates to a component after the initial render can be triggered by calling `setState` or using hooks like `useEffect`.
- **Recreating DOM Nodes on Every Rerender**: No, React uses a virtual DOM to efficiently update only the parts of the DOM that have changed.
- **After Updating the DOM**: After updating the DOM, React still needs to apply the changes to the real DOM (commit phase) before the user sees the update.

## Bookmark and Review

- [Your First Component](https://reactjs.org/docs/components-and-props.html)
- [Importing and Exporting Components](https://reactjs.org/docs/components-and-props.html#exporting-components)
- [Writing Markup with JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Sass Cheatsheet](https://devhints.io/sass)
- [React Cheatsheet](https://devhints.io/react)

## Additional Questions

- **Airbnb React/JSX Style Guide**: The Airbnb React/JSX Style Guide emphasizes patterns such as camelCase for naming variables and functions, PascalCase for naming components, and using arrow functions for functional components.
- **Learning Goals**: After reviewing the class README, my learning goals include mastering React component lifecycle, understanding state management with Redux, and building scalable and maintainable UI components.

