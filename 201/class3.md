# Learn HTML: Ordered and Unordered Lists

## When to Use Unordered Lists in HTML:

1. You should use an unordered list (ul) in your HTML document when you want to create a list of items that are not inherently ordered or ranked. Unordered lists are typically used for items that have no particular sequence or importance, and they are displayed with bullet points.
Changing the Bullet Style of Unordered List Items:

2. You can change the bullet style of unordered list items using CSS. To do this, you can use the list-style-type property. For example:


    <ul style="list-style-type: circle;">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
//This will change the bullet style to circles. Other values for list-style-type include 'disc,' 'square,' and 'none' among others.

3. When to Use Ordered Lists vs. Unordered Lists:

    Use an ordered list (ol) when you want to create a list of items that have a specific sequence or ranking. Ordered lists are used when the order of items matters, and they are displayed with numbers by default. Unordered lists are used when the order doesn't matter, and they are displayed with bullet points.
    Two Ways to Change Numbers on Ordered List Items:

    You can change the numbers on list items provided by an ordered list using CSS. Two common ways to do this are:
    1. Changing the numbering style: Use the list-style-type property to change the style of the numbers (e.g., 'lower-roman' for lowercase Roman numerals).
    2. Restarting the numbering: Use the start attribute on the `<ol>` element to specify the starting number for the list.


## Learn CSS: The Box Model

In the story titled "The Box Model," the CSS properties of margin and padding are portrayed as characters with distinct roles:

Margin (Mr. Margin): Mr. Margin decides how far apart the element should be from other elements. If there are multiple elements (characters) on a stage (webpage), Mr. Margin ensures they maintain a comfortable distance, preventing them from getting too close to one another.

Padding (Ms. Padding): Patty Paddington is responsible for the internal spacing within the element. She ensures that the content (the character's ) inside the element has enough space to breathe. Patty adds space inside the element to keep the content away from the edges.


<body>
    <p>You can learn more about the CSS Box Model <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model">here</a>.</p>
</body>


Four Parts of an HTML Element's Box (Box Model):

- Content: This is the actual content (text, images, etc.) of the HTML element.
- Padding: Padding is the space between the content and the element's border.
- Border: The border surrounds the padding and content, providing a visual boundary.
-= Margin: Margin is the space outside the border, determining the element's spacing from other elements on the page.


# Learn JS
Learn JavaScript: Arrays, Operators, Expressions, Conditionals, Loops

1. Data Types in Arrays:
Arrays in JavaScript can store various data types, including numbers, strings, objects, other arrays, functions, and even a mix of these types.
People Array:

2. The people array is a valid JavaScript array. To access values stored in the array, for example:
javascript

const name = people[0][0]; // 'pete'
const age = people[0][1];  // 32
Five Shorthand Operators for Assignment in JavaScript:

+=: Adds the right operand to the left operand and assigns the result to the left operand (e.g., x += 5 is equivalent to x = x + 5).
-=: Subtracts the right operand from the left operand and assigns the result to the left operand.
*=: Multiplies the left operand by the right operand and assigns the result to the left operand.
/=: Divides the left operand by the right operand and assigns the result to the left operand.
%=: Calculates the remainder when the left operand is divided by the right operand and assigns the result to the left operand.


4.  Evaluating the Expression in javascript: 

`let a = 10;
let b = 'dog';
let c = false;
`
// evaluate this
(a + c) + b;

In this expression, (a + c) is evaluated first, resulting in a number (10 + 0 = 10). Then, 10 + b is evaluated, which results in a string concatenation, so the final result would be the string '10dog'.


5. Conditional Statement in JavaScript: A real-world example of when a conditional statement should be used is in a weather application. You can use a conditional statement to check the current weather conditions (e.g., sunny, rainy, cloudy) and provide different actions or information to the user based on the condition. For example, you might display a message like "Bring an umbrella" if the weather is rainy, and "Enjoy the sunshine" if it's sunny.


Use of a Loop in JavaScript:
6. A loop is useful in JavaScript when you need to perform repetitive tasks, such as iterating over an array, processing a list of items, or executing a set of instructions multiple times. For example, you can use a for loop to go through each item in an array and perform a specific action on each item, like displaying their names or calculating their total.



## Things I want to know more about:
How to effectively design a website.
Practical more of CSS stylings and JavaScript in the browser.
10/23/2023