import { Link } from "react-router-dom"

function NavBar(){

    return(
        <nav>
            <Link to = "/addresses">Address</Link>
            <div/>
            <Link to = "/addressform">Address Form</Link>
            <div/>
            <Link to = "/">Log Out</Link>
        </nav>
    )
}

export default NavBar