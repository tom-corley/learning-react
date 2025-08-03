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