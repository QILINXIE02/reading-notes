# Reading: Component Lifecycle / useEffect Hook

## useEffect hook

- **Main Intended Use Case**: The main intended use case for the useEffect hook is to perform side effects in functional components. This includes data fetching, subscriptions, or manually changing the DOM in response to component updates.
- **Interaction with Component**: The effect's logic interacts with the component by executing after every render, including the initial render. It runs asynchronously after the DOM has been updated.
- **Importance of Return Value**: The return value from the effect's logic function is used for cleanup. It allows you to perform any necessary cleanup operations, such as unsubscribing from subscriptions or cancelling data fetching operations, when the component unmounts or before a new effect is run.

## Bookmark and Review

- [Responding to Events](https://reactjs.org/docs/handling-events.html)
- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- [Updating Arrays in State](https://reactjs.org/docs/hooks-reference.html#usestate)
- [Updating Objects in State](https://reactjs.org/docs/hooks-reference.html#usestate)

## Reflection

After reading and reviewing the class README, my learning goals include mastering the useEffect hook to handle side effects efficiently in React functional components, understanding the component lifecycle in React, and becoming proficient in handling events, conditional rendering, and state updates in React applications.

