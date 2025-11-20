function AddressCard({addresses}){

    return(
        <>
            <div>Address Cards</div>
            {addresses.map((address) => (
                <div key={address.id}>
                <div>Place: {address.place}</div>
                <div>Address: {address.address}</div>
                <div>State: {address.state}</div>
                </div>
            ))}
        </>
    )
}

export default AddressCard