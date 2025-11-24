import { Route, Routes } from "react-router-dom"
import Addresses from "./components/Addresses"
import AddressForm from "./components/AddressForm"
import { AddressesContext } from "./AddressesContext"
import { UsersContext } from "./UsersContext"
import { useState } from "react"
import LogIn from "./components/LogIn"
import CreateUser from "./components/CreateUser"

function App() {
  const [addresses, setAddresses] = useState([])
  const [usernames, setUsernames] = useState([])
  const [numberofUsers, setNumberOfUsers] = useState(0)

  return(
    <AddressesContext.Provider value ={{addresses, setAddresses}}>
    <UsersContext.Provider value={{usernames, setUsernames, numberofUsers, setNumberOfUsers}}>
    <Routes>
      <Route path="/" element={<LogIn/>}>
        <Route index element={<CreateUser />} />
      </Route>
      <Route path="/addresses" element={<Addresses/>} />
      <Route path="/addressform" element={<AddressForm/>} />
    </Routes>
    </UsersContext.Provider>
    </AddressesContext.Provider>
  )
}

export default App