import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="py-2 px-2 sm:px-6 bg-blue-400 flex justify-between items-center sm:gap-3 max-sm:flex-col">
        <span className=" py-1 italic text-white text-2xl font-serif sm:text-3xl">Estato</span>
        <nav className="flex items-center gap-1 sm:gap-4 max-sm:">
            <form className="h-8 max-w-max p-1 rounded-sm bg-white flex items-center">
                <input type="search" placeholder="Search" className="p-1 w-40 sm:w-48 focus:outline-none"/>
                <FaSearch />
            </form>
            <ul className="flex items-center gap-3 sm:gap-3 md:gap-5">
                <li className="hidden sm:inline p-1 text-white hover:underline max-sm:text-sm"> <Link to="/">Home</Link> </li>
                <li className="hidden sm:inline p-1 text-white hover:underline max-sm:text-sm"> <Link to="/about">About</Link> </li>
                <li className="hidden sm:inline p-1 text-white hover:underline max-sm:text-sm"> <Link to="/profile">Profile</Link> </li>
                <li className="p-1 text-white"> <Link to="/signin">Sign in</Link> </li>

            </ul>

        </nav>

    </header>
  )
}

export default Header