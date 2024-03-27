# React Lifecycle

1. Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?
The `render` method happens first, followed by `componentDidMount`.

2. What is the very first thing to happen in the lifecycle of React?
 The very first thing in the lifecycle of a React component is the execution of the `constructor`.

3. Put the following things in the order that they happen: componentDidMount, render, constructor, componentWillUnmount, React Updates
   1. constructor, 2. render, 3. componentDidMount, 4. React Updates, 5. componentWillUnmount

4. What does `componentDidMount` do?
   `componentDidMount` is a lifecycle method that is called after the component is rendered to the DOM. It is a good place to set up any subscriptions, fetch data, or perform any operations that require the component to be present in the DOM.

### Videos

#### React State Vs Props

1. What types of things can you pass in the props?
  You can pass a variety of data types in the props, including numbers, strings, functions, objects, and even other React components.

2. What is the big difference between props and state?
   The main difference is that props are passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

3. When do we re-render our application?
  A re-render can occur as a result of changes to either the state or the props of a component.

4. What are some examples of things that we could store in state?
   Examples include user inputs, application data, and UI state such as active buttons or forms being displayed.

## Things I Want to Know More About
 React Context: I want to explore how React Context can be used for global state management in larger applications, and how it compares to other state management solutions like Redux.

