import { useState } from "react";
import { Link } from "react-router-dom"

const NavBar = () => {

    const [toggleNav, setToggleNav] = useState(false);

    const links = [
        { name: 'All Places', link: '/' },
        { name: 'Add New Places', link: '/new-place' },
        { name: 'Favorites', link: '/favorites' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 py-2 md:py-4 flex items-center justify-around bg-red-900 text-white">

            <div className="text-3xl font-medium mr-auto md:mr-0 pl-4 ">
                <Link to="/">Place's</Link>
            </div>

            <i onClick={() => setToggleNav(!toggleNav)}
                className={`fas mr-4 text-2xl cursor-pointer md:hidden
                ${toggleNav ? 'fa-times' : 'fa-bars'}`}></i>


            <nav className={`absolute top-[110%] w-full flex flex-col text-xl duration-300 ease-in-out 
                             md:static md:w-max md:flex-row md:space-x-10 md:on
                             ${toggleNav ? 'on' : 'off'}`}>
                {
                    links.map((goTo, i) => (
                        <Link
                            key={i}
                            to={goTo.link}
                            onClick={() => setToggleNav(!toggleNav)}
                            className="bg-red-800 mx-3 my-1 p-2 rounded 
                            md:bg-transparent md:my-0 md:p-0  
                            hover:text-gray-200 hover:underline decoration-red-300 underline-offset-4 duration-100">
                            {goTo.name}
                        </Link>
                    ))
                }
            </nav>
        </header>
    );
}

export default NavBar;