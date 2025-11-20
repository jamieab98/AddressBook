import { useEffect, useState } from "react"
import AddressCard from "./AddressCard"
import DisplayAddresses from "./DisplayAddresses"
import NavBar from "./NavBar"

function Addresses(){
    const addressapi = 'https://691f885431e684d7bfc9fffe.mockapi.io/addresses'
    const [addresses, setAddresses] = useState([])

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