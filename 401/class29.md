# Reading: Advanced State with Reducers

## Extracting State Logic into a Reducer

- **Motivation for Adding a Reducer**: The motivation for adding a reducer is to manage complex state logic more effectively, especially when the state involves multiple variables or when state transitions become intricate.
- **Actions in the Context of a Reducer**: In the context of a reducer, actions are objects that describe changes to the state. They are dispatched to the reducer, which interprets the action and updates the state accordingly. Actions are different from directly setting state because they encapsulate state changes in a predictable and maintainable way.
- **Common List Operation**: `useReduce` is named for the common list operation "reduce", which iterates over a list and accumulates a value. Similarly, `useReducer` iterates over actions dispatched to it and accumulates state changes based on those actions.
- **Switching from useState to useReducer**: You should consider switching from useState to useReducer when the logic for updating state becomes too complex to handle with useState alone. useReducer provides a more structured approach to managing state and is particularly beneficial for managing state in large-scale applications with complex state transitions.

## Bookmark and Review

- [useReducer hook](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [Keeping Components Pure](https://reactjs.org/docs/hooks-reference.html#functional-updates)
- [Queueing a Series of State Updates](https://reactjs.org/docs/hooks-reference.html#usestate)

## Reflection

After reading and reviewing the class README, my learning goals include gaining a deeper understanding of how to manage complex state logic using reducers, mastering the useReducer hook in React, and learning best practices for keeping components pure and efficiently updating state in React applications.

