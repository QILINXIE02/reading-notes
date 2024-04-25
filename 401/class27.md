# Reading: useState() Hook

## Thinking in React

- **Summarized Five Steps**:
  1. **Break the UI Into a Component Hierarchy**: Identify the components that make up your UI and break them down into smaller components.
  2. **Build a Static Version in React**: Build a static version of your UI using React components and props without worrying about state.
  3. **Identify the Minimal (but complete) Representation of UI State**: Determine which components should have state and what that state should be.
  4. **Where Should State Live?**: Identify the components where state should live and pass down the state and callbacks to child components via props.
  5. **Add Inverse Data Flow**: Implement the necessary callbacks to update the state of parent components based on user interactions in child components.

## State: A Component’s Memory

- **Local Variable Insufficiency**: A local variable isn't sufficient for managing a React component because it doesn't persist between renders. React components may re-render multiple times, causing local variables to lose their values.
- **Argument and Return Array of useState**: The argument to the useState hook is the initial state value, and its return array consists of the current state value and a function to update the state.
- **Accessing State from Another Component**: Component A can access state from Component B by passing the state as props from Component B to Component A.

## Bookmark and Review

- [Passing Props to a Component](https://reactjs.org/docs/components-and-props.html)
- [Rendering Lists](https://reactjs.org/docs/lists-and-keys.html)
- [State as Snapshot](https://reactjs.org/docs/hooks-state.html)
- [useState hook](https://reactjs.org/docs/hooks-state.html#hooks-and-state)
  
## Reflection

After reading and reviewing the class README, my learning goals include mastering the useState() hook for managing component state effectively, understanding how to lift state up in React component hierarchies, and practicing the thinking process in React to build scalable and maintainable UIs.

