import { useState } from "react";

function LoginControl() {
    const [loggedIn, setLogin] = useState(false)

    function changeLoggedIn() {
        setLogin(!loggedIn)
    }

    return (
        <div>
            <p>{loggedIn ? `Welcome back!` : 'You are logged out'}</p>
            <button onClick={changeLoggedIn}>{loggedIn ? 'Log out' : 'Log in'}</button>
        </div>
    )
}

export default LoginControl