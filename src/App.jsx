import { BrowserRouter, Routes,Route } from "react-router-dom"
import Layout from "./components/layout.jsx"
import Home from "./pages/home.jsx"
import Login from "./pages/login.jsx"
import Bookings from "./pages/bookings.jsx"
import SignUp from "./pages/signup.jsx"
import Upgrade from "./pages/upgrade.jsx"
import DriverPanel from "./pages/driverPanel.jsx"


 
function App() {
 

  return (
    <>
    <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/trips" element={<Bookings/>}/>
        <Route path="/driver-panel" element={<DriverPanel/>}/>
        <Route path="/upgrade" element={<Upgrade/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
