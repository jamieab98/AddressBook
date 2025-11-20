import AddressCard from "./AddressCard"
function DisplayAddresses({addresses}){

    return(
        <>
            {addresses.map((address) => (
                <AddressCard address={address}></AddressCard>
            ))}
        </>
    )
}

export default DisplayAddresses