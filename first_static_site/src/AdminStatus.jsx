import { useState } from 'react'

function AdminStatus() {
    const [isAdmin, setAdmin] = useState(false)

    function toggleAdmin() {
        setAdmin(!isAdmin)
    }

    return (
        <div>
            <ToggleAdmin isAdmin={isAdmin} toggleAdmin={toggleAdmin}/>
            <AdminMessage isAdmin={isAdmin} />
            <SecretComponent isAdmin={isAdmin} />
        </div>
    )
}

function ToggleAdmin({isAdmin, toggleAdmin}) {
    return (
        <button onClick={toggleAdmin}>{isAdmin ? 'Disable Admin' : 'Enable Admin'}</button>
    )
}

function AdminMessage({isAdmin}) {
    return (
        <p>You are {!isAdmin && 'not'} an admin</p>
    )
}

function SecretComponent({isAdmin}) {
    if (!isAdmin) return null;
    return (
        <p> This is the secret information only admins can see!!!</p>
    )
}

export default AdminStatus