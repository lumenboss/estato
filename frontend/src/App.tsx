import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignOut from "./pages/SignOut"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signout" element={<SignOut/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
