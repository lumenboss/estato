import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header.tsx"
import About from "./pages/About.tsx"
import Auth from "./pages/Auth.tsx"
import Home from "./pages/Home.tsx"
import Profile from "./pages/Profile.tsx"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
