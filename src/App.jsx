import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Addresses from "./components/Addresses"
import AddressForm from "./components/AddressForm"
function App() {

  return(
    <Routes>
      <Route path="/" element={<Addresses/>} />
      <Route path="/addressform" element={<AddressForm/>} />
    </Routes>
  )
}

export default App