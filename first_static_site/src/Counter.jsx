// Import a hook for using state
import { useState } from 'react'

function Counter() {
    // Current state, function which changes state with state initialised to 0
    const [count, setCount] = useState(0)


    // JSX for a button which is returned, onClick is a listener
    // which triggers a callback, which updates state by one
    // the brackets notation allows us to include variables directly
    // This is an example of what JSX offers over HTML
    // React re-renders a component when a change of state occurs
    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    )
}

export default Counter