# React Fundamentals: React and Forms

## Readings: React and Forms

### How to use Forms in React

1. **What is a ‘Controlled Component’?**
   A Controlled Component is a component that renders form elements and controls them by keeping the form data in the component's state. In a controlled component, the value of the input field is controlled by React state, and any changes to the input update the state, making the React state the "single source of truth" for the form data.

2. **Should we wait to store the users' responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.**
   We should update the state with their responses as soon as they enter them. This approach ensures that the component's state is always up-to-date with the user's input and allows for more interactive features such as input validation, instant feedback, and enabling or disabling form submission buttons based on the form's current values.

3. **How do we target what the user is entering if we have an event handler on an input field?**
   We can target what the user is entering by using the `event.target.value` property within the event handler function. This property gives us access to the current value of the input field that triggered the event.

### The Conditional (Ternary) Operator Explained

1. **Why would we use a ternary operator?**
   The ternary operator is used for conditional rendering in JSX. It allows us to render different elements or components based on a condition in a concise and readable way. It is especially useful in React for inline conditional expressions without the need for verbose `if-else` statements.

2. **Rewrite the following statement using a ternary statement:**

```jsx
if(x === y){
  console.log(true);
} else {
  console.log(false);
}

console.log(x === y ? true : false); or console.log(x === y);


## Things I Want to Know More About
1. How can controlled components in React improve form handling in large-scale applications?
2. What are some best practices for validating form inputs in React applications?
