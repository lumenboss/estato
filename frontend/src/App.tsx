import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header.tsx"
import About from "./pages/About.tsx"
import Home from "./pages/Home.tsx"
import Profile from "./pages/Profile.tsx"
import SignIn from "./pages/SignIn.tsx"
import SignUp from "./pages/SignUp.tsx"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
