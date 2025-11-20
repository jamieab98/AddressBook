import { Link } from "react-router-dom"

function NavBar(){

    return(
        <nav>
            <Link to = "/">Address</Link>
            <div/>
            <Link to = "/addressform">Address Form</Link>
        </nav>
    )
}

export default NavBar