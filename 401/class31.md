# Reading: Context API

## Choosing the State Structure

When structuring state, it's essential to adhere to certain principles to ensure scalability, maintainability, and performance. Here are the five principles for structuring state:

1. **Single source of truth**: Keep all state in a centralized location to avoid inconsistencies.
2. **State is read-only**: State should be immutable to prevent unexpected mutations.
3. **Changes are made with pure functions**: Use pure functions (reducers) to update state in a predictable manner.
4. **Isolate state changes**: Group related state together to simplify updates and reduce side effects.
5. **Normalize nested/relational data**: Flatten nested structures and store relational data separately to improve performance and simplify data access.

## Passing State Deeply with Context

Contexts in React aim to solve the problem of prop drilling, where props need to be passed through multiple layers of components. Here's a summary:

- **Problem**: Prop drilling leads to cluttered code and reduced readability.
- **Solution**: Contexts provide a way to pass data through the component tree without having to pass props down manually at every level.
- **Technique**: Before using `useContext`, try lifting state up or using render props patterns to manage shared state.
- **Complementary hook**: `useReducer` complements `useContext`, especially for complex applications where state management requires more granular control and logic.

## Bookmark and Review

Keep these resources handy for reference:

- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
- [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)

## Things I Want to Know More About

- Practical examples: How are Context APIs used in real-world applications, and what are some common patterns and best practices?
- Performance considerations: How do Context APIs impact performance, especially when dealing with deeply nested component trees or large-scale applications?
- Advanced usage: Are there any advanced features or techniques for working with Context APIs beyond basic state management?
