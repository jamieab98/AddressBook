import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Addresses from "./components/Addresses"
import AddressForm from "./components/AddressForm"
import { AddressesContext } from "./AddressesContext"
import { useState } from "react"

function App() {
  const [addresses, setAddresses] = useState([])

  return(
    <AddressesContext.Provider value ={{addresses, setAddresses}}>
    <Routes>
      <Route path="/" element={<Addresses/>} />
      <Route path="/addressform" element={<AddressForm/>} />
    </Routes>
    </AddressesContext.Provider>
  )
}

export default App