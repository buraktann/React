import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage.jsx"
import Products from "./pages/Products/Products"
import Navbar from "./components/Navbar/Navbar.jsx"

export default function App() {
  return <> 
  <Navbar />
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />}> </Route>
    <Route path="/products" element={<Products />}></Route>
    <Route path="*" element={<div>Not Found</div>}></Route>
  </Routes> 
  </BrowserRouter>
  </>

}