import { useNavigate } from "react-router-dom"

function LogIn() {
    const navigate = useNavigate();
    
    function handleLogin(){
        navigate("/addresses")
    }

    return(
        <>
            <p>Login Components</p>
            <button onClick={handleLogin}>Log In</button>
        </>
    )
}

export default LogIn