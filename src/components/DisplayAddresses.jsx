import AddressCard from "./AddressCard"
function DisplayAddresses({addresses}){

    return(
        <>
            {addresses.map((address) => (
                <AddressCard address={address} key={address.id}></AddressCard>
            ))}
        </>
    )
}

export default DisplayAddresses