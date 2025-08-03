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