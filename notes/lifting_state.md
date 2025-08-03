# Intercomponent Communication in React

A very important pattern in React for letting components (paticurlarly sibling or parent/child relationships) communicate is the idea of lifting state up the DOM.

State should be lifted to the lowest common ancestor. For example in the following structure:
```jsx
function Parent() {
  return (
    <div>
      <TextInput />
      <Display />
    </div>
  )
}
```
If TextInput stores the users input in it's own `useState`, there is no way for `Display` to see it, because sibling components cannot access eachother's state. So instead:

1. Pass the state up to `Parent`
2. `Parent` passes the value 
    - to `Display` so it can be shown
    - the value and setter to `TextInput` so it can be updated.
3. Now both components have a common source of truth.

Re-renders of App cause a cascading re-render of all children, which is efficient and works well.

### Finished example:

MessageController:
```jsx
import Display from "./Display"
import TextInput from "./TextInput"
import { useState } from 'react'

function MessageController() {
    const [message, setMessage] = useState("")

    return (
        <div>
            <TextInput message={message} setMessage={setMessage}/>
            <Display message={message} />
        </div>
    )
}

export default MessageController
```
TextInput: 
```jsx
function TextInput({message, setMessage}) {
    function handleChange(event) {
        setMessage(event.target.value)
    }

    return (
        <input
            type="text"
            value={message}
            onChange={handleChange}
        />
    )
}

export default TextInput 
```
Display:
```jsx
function Display({message}) {
    return (
        <p>{message}</p>
    )
}

export default Display
```



