# The Parts of a React App

1. Components: React apps are built entirely from components, which are functions or classes which return JSX for example:
    ```jsx
    function Greeting() {
        return <h1> Hello </h1>
    }
    ```
    - These have capitalised names, and must return one parent element of JSX
    - Components are reusable and can be composed (nested)
2. JSX: A syntax extension for javascript allowing code that looks like HTML which later gets compiled into javascript. it allows expressions to be embedded inside the HTML like text.
3. Props: These are like function arguments, they are passed into components which allow branching logic or configurable set up, these are read-only and flow down from parent to child.
4. State: This allows components to remember values over time, state is internal to a component and changes cause re-renders.
5. Events: These are used to handle user interaction, you use handler functions to change state, or call other logic. 


    