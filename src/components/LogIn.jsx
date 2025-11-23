import { useNavigate } from "react-router-dom"

function LogIn() {
    const navigate = useNavigate();
    
    function handleLogin(){
        navigate("/addresses")
    }

    return(
        <>
            <p>Login Components</p>
            <form>
                <label>Username:</label>
                <input type="text" placeholder="username"/>
                <label>Password:</label>
                <input type="text" placeholder="password"/>
            </form>
            <button onClick={handleLogin}>Log In</button>
        </>
    )
}

export default LogIn