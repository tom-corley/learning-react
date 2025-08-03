import { useState } from 'react'

function GuestList() {
    const [guests, setGuests] = useState([])

    function renderGuests() {
        return guests.map((g,i) => <p key={i}>{g}</p>)
    }

    return (
        <div>
            {renderGuests()}
            <GuestInput guests={guests} setGuests={setGuests}/>
        </div>
    )
}

function GuestInput({guests, setGuests}) {
    const [name, setName] = useState("")
    const [error, setError] = useState(false)

    function handleAddGuest() {
        if (!name.trim()) {
            setError(true)
            return
        }
        setGuests([...guests, name])
        setName("")
        setError(false)
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter guest name'
            />
            <button onClick={handleAddGuest}>Add Guest</button>
            {error && <p style={{ color: "red"}}>Name cannot be empty</p>}
        </div>
    )
}

export default GuestList

