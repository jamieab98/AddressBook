import NavBar from "./NavBar"
import { useState } from "react"

function AddressForm(){
    const [location, setLocation] = useState("")
    const [address, setAddress] = useState("")
    const [state, setState] = useState("")

    function handleSubmit(e){
        e.preventDefault()
    }

    return(
        <>
            <NavBar/>
            <h2>Address From</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="location">Name of Place</label>
                <input type="text" placeholder="Name..." value={location} id="location" onChange={(e)=>(setLocation(e.target.value))}/>
                <label htmlFor="address">Address</label>
                <input type="text" placeholder="Address" value={address} id="address" autoComplete="address" onChange={(e)=>(setAddress(e.target.value))}/>
                <label htmlFor="state">State</label>
                <input type="text" placeholder="State" value={state} id="state" onChange={(e)=>(setState(e.target.value))}/>
                <button type="submit">Submit New Address</button>
            </form>
        </>
    )
}

export default AddressForm