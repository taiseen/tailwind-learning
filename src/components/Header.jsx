import { useState } from 'react';
import images from '../img';
import data from '../data';


const Header = ({ themeToggling, setThemeToggling }) => {

    const [mobileMenu, setMobileMenu] = useState(false);


    return (

        <header className="fixed top-0 w-full bg-white dark:bg-slate-900 z-30">

            <div className="container mx-auto py-5 px-3 flex justify-between items-center">

                <div className='flex items-center gap-2'>
                    <img
                        alt="imgName"
                        className='w-8'
                        src={images.logo}
                    />
                    <span className='text-2xl font-bold text-indigo-900 dark:text-slate-100'>Taiseen</span>
                </div>


                {/* 🟨🟨🟨 UI For ==> Navigation Menu */}
                <nav className='hidden md:block space-x-6 '>
                    {
                        data.map(link =>
                            <a
                                key={link.title}
                                href={link.path}
                                className='font-bold text-gray-600 hover:text-gray-900 dark:text-slate-100 dark:hover:text-slate-400'
                            >
                                {link.title}
                            </a>
                        )
                    }
                </nav>


                <div className='flex items-center gap-5'>

                    <img
                        alt={themeToggling ? 'sun' : 'moon'}
                        src={themeToggling ? images.sun : images.moon}
                        className={`w-5 cursor-pointer transition ease-linear duration-500 ${themeToggling && 'rotate-[-360deg]'}`}
                        onClick={() => setThemeToggling(pre => !pre)}
                    />



                    {/* 🟨🟨🟨 UI For ==> Menu Btn */}
                    <div
                        onClick={() => setMobileMenu(pre => !pre)}
                        className={`space-y-1 md:hidden cursor-pointer ${mobileMenu ? 'hidden' : 'block'}`}
                    >
                        <div className='w-6 h-0.5 bg-black dark:bg-slate-100'></div>
                        <div className='w-6 h-0.5 bg-black dark:bg-slate-100'></div>
                        <div className='w-6 h-0.5 bg-black dark:bg-slate-100'></div>
                    </div>


                    {/* 🟨🟨🟨 UI For ==> Close Btn */}
                    <div
                        onClick={() => setMobileMenu(pre => !pre)}
                        className={`flex md:hidden z-20 cursor-pointer ${mobileMenu ? 'block' : 'hidden'}`}
                    >
                        {/* <VscChromeClose className='text-2xl' /> */}
                        <div className='w-6 h-0.5 bg-black dark:bg-slate-100 rotate-45'></div>
                        <div className='w-6 h-0.5 bg-black dark:bg-slate-100 -rotate-45 absolute'></div>
                    </div>


                    {/* 🟨🟨🟨 UI For ==> DropDown Menu */}
                    <div className={`md:hidden absolute top-0 left-0 w-full p-4 space-y-4 rounded-b-xl bg-indigo-400 dark:bg-slate-700
                    ${mobileMenu ? 'block' : 'hidden'}`}>
                        {
                            data.map(link =>
                                <a
                                    key={link.title}
                                    href={link.path}
                                    onClick={() => setMobileMenu(false)} // after click on link auto close this JSX
                                    className='font-bold text-gray-200 hover:text-gray-900 block text-center px-8'
                                >
                                    {link.title}
                                </a>
                            )
                        }
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;