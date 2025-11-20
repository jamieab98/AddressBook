import { useEffect, useState } from "react"

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
            <div>Addresses Component</div>
            <button onClick={handleClick}>Click To Log Data</button>
        </>
    )
}

export default Addresses