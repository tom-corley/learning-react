import { useState } from 'react'

function ToggleMessage() {
    const [visible, setVisible] = useState(true)
    const [clicks, setClicks] = useState(0)

    function handleClick() {
        setVisible(!visible)
        setClicks(clicks + 1)
    }

    // returned jsx
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

export default ToggleMessage