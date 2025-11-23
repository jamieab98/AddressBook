import NavBar from "./NavBar"
import { useContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { AddressesContext } from "../AddressesContext"

function AddressForm(){
    const {setAddresses} = useContext(AddressesContext)
    const [location, setLocation] = useState("")
    const [address, setAddress] = useState("")
    const [state, setState] = useState("")
    const statesList = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    const addressapi = 'https://691f885431e684d7bfc9fffe.mockapi.io/addresses'

    function handleSubmit(e){
        e.preventDefault()
        const newAddress = {
        id: uuidv4(),
        place: location,
        address: address,
        state: state.toUpperCase()
    }
        if (location === ""){
            console.log("location is empty")
        }
        else if (address === ""){
            console.log("address is empty")
        }
        else if (!statesList.includes(state.toUpperCase())){
            console.log("invalid state")
        }
        else {
            fetch(addressapi, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newAddress),
            })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setAddresses((prev) => [...prev, data])
            })
            .catch(error => console.log(error))
        }
    }

    return(
        <>
            <NavBar/>
            <h2>Address Form</h2>
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