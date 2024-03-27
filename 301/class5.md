# React Fundamentals: Thinking in React and Higher-Order Functions

### React Docs - Thinking in React

1. **What is the single responsibility principle and how does it apply to components?**
   The single responsibility principle is a guideline that suggests a component or module should ideally only have one reason to change. In the context of React components, this principle implies that a component should only handle one functionality or task. This approach makes components more reusable and easier to test.

2. **What does it mean to build a ‘static’ version of your application?**
   Building a 'static' version of your application means creating a version that takes your data model and renders the UI but has no interactivity. Static versions can be built using components that only use `props` and do not use `state`.

3. **Once you have a static application, what do you need to add?**
   After building a static application, the next step is to implement interactivity by introducing `state` and determining which components should own which state.

4. **What are the three questions you can ask to determine if something is state?**
   - Is it passed in from a parent via props? If so, it probably isn't state.
   - Does it remain unchanged over time? If so, it probably isn't state.
   - Can you compute it based on any other state or props in your component? If so, it isn't state.

5. **How can you identify where state needs to live?**
   - Identify every component that renders something based on that state.
   - Find a common owner component (a single component above all the components that need the state in the hierarchy).
   - Either the common owner or another component higher up in the hierarchy should own the state.
   - If you can't find a component where it makes sense to own the state, create a new component to hold the state and add it somewhere in the hierarchy above the common owner component.

### Higher-Order Functions

1. **What is a “higher-order function”?**
   A higher-order function is a function that can take another function as an argument, or that returns a function as a result, or both. This concept is a cornerstone of functional programming.

2. **Explore the greaterThan function as defined in the reading. In your own words, what is line 2 of this function doing?**
   The line 2 of the `greaterThan` function is returning a new function that compares its argument to the predefined value (`n`) from the `greaterThan` function. Essentially, it's creating a function that can check if a number is greater than `n`.

3. **Explain how either map or reduce operates, with regards to higher-order functions.**
   `map` is a higher-order function that takes a function as an argument and returns a new array. This function is called for every element in the original array, and the return value of the function is used to create the new array. This allows for transforming each element in the original array independently.
   
   `reduce`, on the other hand, also takes a function and an optional initial value as arguments. It processes each element of the array to produce a single value. It does this by accumulating the result of each function call, passing the accumulated value along with the next element in the array to each successive call to the function.

## Things I Want to Know More About

I'm curious about practical examples and best practices for determining where state should live, especially in complex applications with deeply nested components. Additionally, I'm interested in exploring more about higher-order functions and their use cases beyond `map` and `reduce`, to see how they can be leveraged to write cleaner and more efficient code.
