import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function LogIn() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [allLoginCreds, setAllLoginCreds] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        fetch('https://691f885431e684d7bfc9fffe.mockapi.io/LoginCredientials')
        .then(response=>response.json())
        .then(data=>setAllLoginCreds(data))
        .catch(error=>console.log(error))
    }, [])
    
    function handleLogin(e){
        e.preventDefault()
        setErrorMessage("")
        const filteredCred = allLoginCreds.find((logincreds)=>(logincreds.username.includes(username)))
        if (filteredCred.username === username && filteredCred.password === password){
            navigate("/addresses")
        }
        else {
            setErrorMessage("Incorrect Password or Username")
        }
    }

    return(
        <>
            <p>Login Components</p>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} id="username" autoComplete="username"/>
                <label htmlFor="password">Password:</label>
                <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password"/>
                <button type="submit">Log In</button>
            </form>
            <p>Create a new account</p>
            <p>{errorMessage}</p>
            <Outlet />
        </>
    )
}

export default LogIn