function AddressCard({address}){

    return(
        <p key={address.id}>
            <div>Place: {address.place}</div>
            <div>Address: {address.address}</div>
            <div>State: {address.state}</div>
        </p>
    )
}

export default AddressCard