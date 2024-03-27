# Delving Into In-Memory Storage and Understanding JavaScript Errors

## Readings: In memory storage

### Understanding the JavaScript Call Stack

1. **What is a ‘call’?**
   A ‘call’ refers to the invocation of a function. In the context of the JavaScript call stack, each time a function is executed, it is considered a call.

2. **How many ‘calls’ can happen at once?**
   In the JavaScript call stack, only one call can be processed at a time due to JavaScript's single-threaded nature. This means that JavaScript can only execute one piece of code at a time.

3. **What does LIFO mean?**
   LIFO stands for Last In, First Out. It is a principle used to describe the order in which functions are called and executed within the call stack. The last function that gets called is the first to be completed and removed from the stack.

4. **Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.**
`function firstFunction(){
secondFunction();
}

function secondFunction(){
thirdFunction();
}

function thirdFunction(){
console.log('Hello World');
}

firstFunction();`

Call Stack Visualization:
- thirdFunction()  // First in, first out
- secondFunction()
- firstFunction()  // Last in, last out

5. **What causes a Stack Overflow?**
A Stack Overflow occurs when there is an infinite loop of function calls, causing the call stack to exceed its limit. This usually happens due to recursive functions that do not have a proper exit condition.

### JavaScript error messages

1. **What is a ‘reference error’?**
A ‘reference error’ occurs when trying to access a variable that has not been declared or is not within the current scope.

2. **What is a ‘syntax error’?**
A ‘syntax error’ happens when there is an incorrect use of the rules of the language, resulting in the JavaScript engine being unable to parse the code.

3. **What is a ‘range error’?**
A ‘range error’ occurs when a value is not within the expected range or a number is outside its allowed range of values.

4. **What is a ‘type error’?**
A ‘type error’ occurs when an operation cannot be performed, typically due to a value being of the wrong type, such as attempting to call a non-function or accessing properties on `undefined`.

5. **What is a breakpoint?**
A breakpoint is a tool used in debugging that allows developers to pause the execution of code at a specific point. This pause helps inspect the current state of the program to find and diagnose issues.

6. **What does the word ‘debugger’ do in your code?**
The word ‘debugger’, used in code, acts as a breakpoint in JavaScript. When the JavaScript engine encounters the `debugger` statement, it stops the execution of the code, allowing developers to inspect the values of variables at that point in time.

## Things I Want to Know More About

I'm interested in learning more about effective debugging techniques and tools that can help in quickly identifying and resolving errors in complex JavaScript applications. Additionally, I'd like to explore advanced concepts related to in-memory storage and how it impacts performance in web applications.
