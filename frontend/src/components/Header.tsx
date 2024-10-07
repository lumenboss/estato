import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="shadow-md py-2 px-2 sm:px-6 md:px-8 lg:px-24 bg-blue-400 flex justify-between items-center sm:gap-3 max-sm:flex-col">
        <span className=" py-1 italic text-white text-2xl font-serif sm:text-3xl">Estato</span>
        <nav className=" flex items-center gap-1 sm:gap-4 max-sm:gap-4 lg:gap-8">
            <form className="h-8 max-w-max p-1 rounded-sm bg-white flex items-center">
                <input type="search" placeholder="Search" className="p-1 w-40 sm:w-48 md:w-72 focus:outline-none"/>
                <FaSearch />
            </form>
            <ul className="flex items-center gap-3 sm:gap-3 md:gap-5 lg:gap-10">
                <li className="hidden sm:inline  text-white hover:underline max-sm:text-sm"> <Link to="/" className="py-2">Home</Link> </li>
                <li className="hidden sm:inline  text-white hover:underline max-sm:text-sm"> <Link to="/about" className="py-2">About</Link> </li>
                <li className="hidden sm:inline  text-white hover:underline max-sm:text-sm"> <Link to="/profile" className="py-2">Profile</Link> </li>
                <li className=" text-white"> <Link to="/signin" className="py-2">Sign in</Link> </li>

            </ul>

        </nav>

    </header>
  )
}

export default Header