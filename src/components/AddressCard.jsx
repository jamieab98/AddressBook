function AddressCard({address}){

    return(
        <div key={address.id}>
            <div>Place: {address.place}</div>
            <div>Address: {address.address}</div>
            <div>State: {address.state}</div>
        </div>
    )
}

export default AddressCard