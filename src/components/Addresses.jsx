import { useContext, useEffect } from "react"
import DisplayAddresses from "./DisplayAddresses"
import NavBar from "./NavBar"
import { AddressesContext } from "../AddressesContext"

function Addresses(){
    const {addresses, setAddresses} = useContext(AddressesContext)
    const addressapi = 'https://691f885431e684d7bfc9fffe.mockapi.io/addresses'

    useEffect(() => {
        fetch(addressapi)
        .then(response => response.json())
        .then(data => setAddresses(data))
        .catch(error => console.log(error))
    }, [])

    return(
        <>
            <NavBar/>
            <h2>Addresses</h2>
            <DisplayAddresses addresses={addresses}/>
        </>
    )
}

export default Addresses