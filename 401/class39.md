# Readings: Redux - Additional Topics

In this reading, we explore additional topics related to Redux, including Redux Toolkit (RTK), MobX, and a tutorial on Redux. Let's delve into each topic:

## Redux Toolkit (RTK)

### What concerns are addressed by Redux Toolkit?
Redux Toolkit addresses several concerns, including simplifying Redux-related boilerplate code, providing utilities for immutable update logic, and enabling efficient Redux store setup.

### What does configureStore() do?
configureStore() is a function provided by Redux Toolkit to simplify the Redux store setup process. It combines several store setup steps into one, including creating the Redux store, adding middleware, and enabling the Redux DevTools Extension.

### How would I use createSlice()?
createSlice() is a function provided by Redux Toolkit to define a slice of Redux state along with its associated reducers. It automatically generates action creators and reducer functions based on the provided slice object, making it easy to manage state in Redux.

## MobX

### What is MobX?
MobX is a state management library for JavaScript applications. It allows developers to create reactive applications by automatically updating the user interface in response to changes in the underlying data.

### How does MobX make it “impossible” to produce an inconsistent state?
MobX ensures consistency in state by tracking the dependencies between data and UI components. When the observed data changes, MobX automatically updates any dependent components, preventing the application from entering an inconsistent state.

### How would we build a reactive user interface?
To build a reactive user interface with MobX, we define observable state variables and annotate UI components with observers. This allows MobX to automatically re-render components when the observed state changes, ensuring a reactive and consistent user interface.

## Tutorial

### What take-away(s) did this tutorial provide?
The tutorial likely provided practical examples and hands-on exercises for working with Redux or Redux Toolkit. Takeaways may include understanding how to define Redux slices, use Redux middleware, and configure the Redux store effectively.

## Reflection & things to know more of 
After reading and reviewing the class README, my learning goals include mastering the usage of Redux Toolkit to streamline Redux development, understanding the principles of MobX for reactive state management, and applying the knowledge gained from the tutorial to enhance my Redux skills.
