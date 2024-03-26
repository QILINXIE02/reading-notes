
# React Fundamentals: Passing Functions as Props

## Readings: Passing Functions as Props

Below you will find some reading material, code samples, and some additional resources that support the topic for this class and the upcoming lecture.

### Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

### React Docs - Lists and Keys

1. What does `.map()` return?
   The `.map()` function returns a new array containing the results of calling a function on every element in the original array.

2. If I want to loop through an array and display each value in JSX, how do I do that in React?
  You can loop through an array and display each value in JSX using the `.map()` method to return an array of JSX elements.

3. Each list item needs a unique  key.

4. What is the purpose of a key?
  The purpose of a key is to provide a unique identifier for each element in a list, which helps React identify which items have changed, been added, or been removed.

### The Spread Operator

1. What is the spread operator?
  The spread operator (`...`) allows an iterable such as an array or object to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

- 2.List 4 things that the spread operator can do.
  1. Combine arrays, 2. Copy arrays, 3. Combine objects, 4. Pass arguments to a function.

3. Give an example of using the spread operator to combine two arrays.
  `const combinedArray = [...firstArray, ...secondArray];`

4. Give an example of using the spread operator to add a new item to an array.
  `const newArray = [...oldArray, newItem];`

5. Give an example of using the spread operator to combine two objects into one.
 `const combinedObject = {...firstObject, ...secondObject};`

## Videos

### How to Pass Functions Between Components

1. In the video, what is the first step that the developer does to pass functions between components?
   The first step is defining the function in the parent component that will be passed down to the child component.
2. In your own words, what does the handleClick function do?
  The `handleClick` function is typically used to handle click events, such as user interactions with buttons or other clickable elements in the UI.

3. How can you pass a method from a parent component into a child component?
  You can pass a method from a parent to a child component as a prop.

4. How does the child component invoke a method that was passed to it from a parent component?
   The child component can invoke the method by calling it through the props object with the specific name given to the method when it was passed down.

## Things I Want to Know More About

1.How do these fundamental concepts in React contribute to building more complex and interactive user interfaces?

2.what are some real-world examples where mastering these concepts becomes crucial for developing robust applications?

