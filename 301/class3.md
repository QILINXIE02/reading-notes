
# React Fundamentals: Passing Functions as Props

## Readings: Passing Functions as Props

Below you will find some reading material, code samples, and some additional resources that support the topic for this class and the upcoming lecture.

### Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

### React Docs - Lists and Keys

- **Question**: What does `.map()` return?
  - **Answer**: The `.map()` function returns a new array containing the results of calling a function on every element in the original array.

- **Question**: If I want to loop through an array and display each value in JSX, how do I do that in React?
  - **Answer**: You can loop through an array and display each value in JSX using the `.map()` method to return an array of JSX elements.

- **Question**: Each list item needs a unique ____.
  - **Answer**: key.

- **Question**: What is the purpose of a key?
  - **Answer**: The purpose of a key is to provide a unique identifier for each element in a list, which helps React identify which items have changed, been added, or been removed.

### The Spread Operator

- **Question**: What is the spread operator?
  - **Answer**: The spread operator (`...`) allows an iterable such as an array or object to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

- **Question**: List 4 things that the spread operator can do.
  - **Answer**: 1. Combine arrays, 2. Copy arrays, 3. Combine objects, 4. Pass arguments to a function.

- **Question**: Give an example of using the spread operator to combine two arrays.
  - **Answer**: `const combinedArray = [...firstArray, ...secondArray];`

- **Question**: Give an example of using the spread operator to add a new item to an array.
  - **Answer**: `const newArray = [...oldArray, newItem];`

- **Question**: Give an example of using the spread operator to combine two objects into one.
  - **Answer**: `const combinedObject = {...firstObject, ...secondObject};`

## Videos

### How to Pass Functions Between Components

- **Question**: In the video, what is the first step that the developer does to pass functions between components?
  - **Answer**: The first step is defining the function in the parent component that will be passed down to the child component.

- **Question**: In your own words, what does the handleClick function do?
  - **Answer**: The `handleClick` function is typically used to handle click events, such as user interactions with buttons or other clickable elements in the UI.

- **Question**: How can you pass a method from a parent component into a child component?
  - **Answer**: You can pass a method from a parent to a child component as a prop.

- **Question**: How does the child component invoke a method that was passed to it from a parent component?
  - **Answer**: The child component can invoke the method by calling it through the props object with the specific name given to the method when it was passed down.

## Things I Want to Know More About



