import { useEffect, useState } from "react"
import AddressCard from "./AddressCard"

function Addresses(){
    const addressapi = 'https://691f885431e684d7bfc9fffe.mockapi.io/addresses'
    const [addresses, setAddresses] = useState([])

    useEffect(() => {
        fetch(addressapi)
        .then(response => response.json())
        .then(data => setAddresses(data))
        .catch(error => console.log(error))
    }, [])

    function handleClick(){
        console.log(addresses)
    }

    return(
        <>
            <AddressCard addresses={addresses}/>
            <button onClick={handleClick}>Click To Log Data</button>
        </>
    )
}

export default Addresses