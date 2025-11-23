import { useNavigate } from "react-router-dom"
import { useState } from "react";

function LogIn() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    function handleLogin(e){
        e.preventDefault()
        console.log(username)
        console.log(password)
    }

    return(
        <>
            <p>Login Components</p>
            <form onSubmit={handleLogin}>
                <label>Username:</label>
                <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <label>Password:</label>
                <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Log In</button>
            </form>
        </>
    )
}

export default LogIn