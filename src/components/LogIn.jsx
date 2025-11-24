import { useNavigate } from "react-router-dom"
import { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { UsersContext } from "../UsersContext";

function LogIn() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [allLoginCreds, setAllLoginCreds] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const LoginAPI = 'https://691f885431e684d7bfc9fffe.mockapi.io/LoginCredientials'
    const {usernames, setUsernames} = useContext(UsersContext)

    useEffect(() => {
        fetch(LoginAPI)
        .then(response=>response.json())
        .then((data)=>{
            setUsernames(data.map(d=>d.username))
            setAllLoginCreds(data)
        })
        .catch(error=>console.log(error))
    }, [])
    
    function handleLogin(e){
        e.preventDefault()
        console.log(usernames)
        setErrorMessage("")
        fetch(LoginAPI)
        .then(response=>response.json())
        .then((data)=>{
            setAllLoginCreds(data)
            setUsernames(data.map(d=>d.username))
        })
        .catch(error=>setErrorMessage(error))
        const filteredCred = allLoginCreds.find((logincreds)=>(logincreds.username.includes(username)))
        if (!usernames.includes(username)){
            setErrorMessage("Username does not exist")
        }
        else if (filteredCred.username === username && filteredCred.password === password){
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