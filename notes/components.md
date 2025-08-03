# React Components, States, Hooks and Props

React components are functions describing some UI, which must return `jsx` what it looks like and what data it should use. React calls the function component and uses the returned jsx to build a virtual DOM tree, which is then rendered into the browser DOM.

At it's core a component is a JavaScript function with extra react rules, these must be named with capital letters and return JSX. They can take Props (reacts equivalent to parameters) which allows the components to be customised. State allows components to be dynamic.

React has a virtual DOM which is reconciled with the browser DOM, this is more efficient than vanilla js, because only those parts which have changed are updated in the real DOM.

Components can never modify their parent components which make behaviour predictable, but props may be passed down to children.

Components can be nested, see the below example:
```jsx
function Header() {
  return <h1>My Site</h1>
}

function Page() {
  return (
    <div>
      <Header />
      <p>Welcome to the site!</p>
    </div>
  )
}
```

React apps are really just trees of components, but the key difference between this and vanilla js is the ability to update UI efficiently by managing state instead of manually updating the DOM.

This tree of components is declared in the mandatory `App` component, which works similairly to a `body` tag in html except that a lot of detail is abstracted to nested components.



## State

Components have modifiable state, which allows the efficient rerendering of components based on events or various conditions happening. See the following example:
```jsx
// Import a hook for using state
import { useState } from 'react'

function Counter() {
    // Current state, function which changes state with state initialised to 0
    // Create a memory slot for this component and give me the current value.
    const [count, setCount] = useState(0)


    // JSX for a button which is returned, onClick is a listener
    // which triggers a callback, which updates state by one
    // the brackets notation allows us to include variables directly
    // This is an example of what JSX offers over HTML
    // React re-renders a component when a change of state occurs.
    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    )
}

export default Counter
```
Component re-render flow:
1. User clicks button
2. Event listener `onClick` invokes callback function
3. `setCount(1)` tells react to update the state slot to 1
4. React schedules a re-render of the `Counter` component
5. React calls `Counter()` again
6. It calls `useState(0)` but it looks up the existing value in this State slot and ignores the argument
7. JSX is returned with the new value, and React updates the DOM efficiently.

Rerendering works by running the component function again, but interestingly, since state is stored internally in some persistent way, it is not reinitialised to zero when `useState(0)` is called for the second time.

"State drives the UI - And react keeps the UI in sync with that state automatically."

State values are stored in an internal list, one for each hook call in your component. Hook calls must be called at the top level, and called in the same order every render, because react matches each `useState(...)` call to the same memory slot every time using its position in the list, not by name. 

This is a second example: 
```jsx
function ToggleMessage() {
    const [visible, setVisible] = useState(true)
    const [clicks, setClicks] = useState(0)

    function handleClick() {
        setVisible(!visible)
        setClicks(clicks + 1)
    }

    // returned jsx
    // Conditional rendering with ? : 
    // && operator is used to return the second value if the first one is truthy
    // otherwise nothing is rendered
    return (
        <div>
            <button onClick ={handleClick}>
                {visible ? 'Hide Secret Message' : 'Show Secret Message'}
            </button>
            {visible && <p> This is a secret message!</p>}
            <p> You have toggled the button {clicks} times</p>
        </div>
    )
}
```

Note that `? :` syntax can be used in the return statement of `jsx` but not full control flow statements, these can be done before the return. The clean way to render something if and only if something is true is {conditon && jsx}. We can also return `null if we do not wish to render a component

## Hooks

Hooks allow us to use advanced features inside function components, things like changing state of a component (`useState()` which we have already seen). adding effects (code which runs after renders), and refs (keeping values without re-rendering).

Hooks give function components access to state, side effects, DOM refs and some more advanced patterns. These must be called at the top of the function and in the same order, as hooks for a component are stored internally in a ordered array.

"React is UI as a function of state, and hooks are how you get and manage that state in function components."

## Props

Props (short for properties) are arguments for function components that are passed from parent to child. Props are read only inside a component. They can be anything, and given default values
```jsx
<MyComponent count={5} active={true} info={{ name: "Sam" }} />

function Greeting({ name = "stranger" }) {
  return <p>Hello, {name}</p>
}
```
Passing functions as props is a key feature which is used for passing down state updaters or other important functionality.

Props are great for passing values locally, but for data that needs to be shared over many levels, for example an auth status or a theme, react contexts come into play.