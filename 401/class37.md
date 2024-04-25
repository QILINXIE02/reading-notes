# Readings: Redux - Combined Reducers

In Redux, combined reducers are often used to manage state in large-scale applications where multiple reducers handle different parts of the state tree.

## Multiple Reducers Example

### Why create multiple reducers?
Creating multiple reducers allows us to organize our application's state management logic into smaller, more manageable pieces. Each reducer can focus on a specific slice of the application state.

### How would you combine multiple reducers?
The `combineReducers` function from Redux is used to combine multiple reducers into a single root reducer. This root reducer manages the overall state of the application by delegating specific state updates to the corresponding reducers.

### How will you manage state as an immutable object? why?
Managing state as an immutable object ensures that state changes are predictable and can be traced throughout the application. Immutable state helps prevent unintended side effects and simplifies debugging by enforcing a clear data flow.

## Redux Docs: Using Combined Reducers

### combineReducers is a utility function to simplify the most common use case when writing ___ _____ .
combineReducers is a utility function to simplify the most common use case when writing Redux applications with multiple reducers.

### Explain how combineReducers assembles the new state tree.
combineReducers assembles the new state tree by calling each individual reducer with the current state and the action. It then combines the results into a single state object, where each reducer manages its slice of the state.

### How would you define initial state in an app using combineReducers?
Initial state in an app using combineReducers can be defined by passing an object where each key corresponds to a slice of the state managed by a reducer. Each reducer defines its own initial state.

## Redux Docs: Combined Reducer Syntax

### Why will you want to split your reducing functions as your app becomes more complex?
As an app becomes more complex, splitting reducing functions allows for better organization and maintainability. It separates concerns and makes it easier to reason about state changes.

### The _____ helper function turns an object whose values are different reducing functions into a single reducing function you can pass to ____.
The `combineReducers` helper function turns an object whose values are different reducing functions into a single reducing function you can pass to the Redux store.

### What is a popular convention when naming reducers?
A popular convention when naming reducers is to use descriptive names that indicate the slice of state they manage, followed by the term "reducer". For example, `todosReducer` or `authReducer`.

## Reflection & things to know more of 
My learning goals after reading and reviewing the class README include gaining a deeper understanding of how to effectively organize and manage application state using Redux, particularly with combined reducers. I also aim to improve my skills in writing clean and maintainable Redux code.
