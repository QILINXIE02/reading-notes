# Reading: Application State with Redux

Redux is a predictable state container for JavaScript apps, primarily used with React. It helps manage the application's state in a centralized store, making it easier to maintain and manage.

## Dan Abramov Redux Tutorials

### First Principle of Redux
The first principle of Redux is that the entire state of the application is stored in a single immutable state tree. This state tree is represented as a plain JavaScript object.

### Store and Reducers
- **Store**: The store in Redux is an object that holds the application's state. It provides methods for accessing the state, dispatching actions, and registering listeners.
- **Reducers**: Reducers are pure functions responsible for specifying how the application's state changes in response to actions. They take the previous state and an action as arguments and return the new state.

### Redux Store Methods
1. **getState()**: Returns the current state of the Redux store.
2. **dispatch(action)**: Dispatches an action to the Redux store. This action triggers the state change.
3. **subscribe(listener)**: Registers a listener function that will be called whenever the state in the Redux store changes.

### combineReducers()
`combineReducers()` is a utility function provided by Redux that combines multiple reducers into a single reducer function. It helps manage different parts of the state tree independently by delegating the state updates to the corresponding reducers.

## Bookmark and Review

- [World's Easiest Guide to Redux](https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6)
- [Testing Reducers](https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1)
- [Redux Docs](https://redux.js.org/)

## Reflection &  things to know more of 
- I look forward to learning more about advanced Redux concepts such as middleware and asynchronous actions.
- My learning goals include gaining a deeper understanding of Redux's core principles and how to effectively integrate it into React applications.
