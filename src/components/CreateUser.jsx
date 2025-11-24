import { useState, useContext } from "react"
import { v4 as uuidv4 } from "uuid"
import { UsersContext } from "../UsersContext"

function CreateUser(){
    const LoginAPI = 'https://691f885431e684d7bfc9fffe.mockapi.io/LoginCredientials'
    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPasswordVerification, setNewPasswordVerification] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [existingUsernames, setExisitngUsernames] = useState([])
    const {usernames, setUsernames, setNumberOfUsers} = useContext(UsersContext)

    function newUserSubmit(e){
        fetch(LoginAPI)
        .then(response=>response.json())
        .then((logins)=>{
            setExisitngUsernames(logins.map(login=>login.username))
        })
        .catch(error=>console.log(error))
        e.preventDefault()
        setErrorMessage("")
        if (existingUsernames.includes(newUsername)){
            setErrorMessage("This username already exists. Please select a new one")
        }
        else if (newPassword !== newPasswordVerification){
            setErrorMessage("Passwords do not match. Please try again")
        }
        else{
            fetch(LoginAPI, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    username: newUsername,
                    password: newPassword,
                    id: uuidv4()
                })
            })
            .then(response=>response.json())
            .then((data)=>{
                setUsernames((prev)=>[...prev, data.username])
                setNumberOfUsers(usernames.length + 1)
            })
            .catch(error=>console.log(error))
            setNewUsername("")
            setNewPassword("")
            setNewPasswordVerification("")
        }
    }

    return(
        <>
            <p>Create New User</p>
            <form onSubmit={newUserSubmit}>
                <label htmlFor="newusername">New Username</label>
                <input type="text" placeholder="username" id="newusername" value={newUsername} onChange={(e)=>setNewUsername(e.target.value)}></input>
                <label htmlFor="newpassword">Password</label>
                <input type="text" placeholder="password" id="newpassword" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}></input>
                <label htmlFor="newpasswordverification">Password Verification</label>
                <input type="text" placeholder="password" id="newpasswordverification" value={newPasswordVerification} onChange={(e)=>setNewPasswordVerification(e.target.value)}></input>
                <button type="submit">Create User</button>
            </form>
            <p>{errorMessage}</p>
        </>
    )
}

export default CreateUser