import { useEffect, useState } from 'react';
import images from './../constant/images';

const Header = () => {

  const [menuBar, setMenuBar] = useState(false);
  const [screenSize, setScreenSize] = useState(0);
  const [toggleSearch, setToggleSearch] = useState(false);


  // this useEffect is responsible only for ==> 
  // set browser window width size 
  useEffect(() => {
    // figure out or set user screen size initially... 
    const handleResize = () => setScreenSize(window.innerWidth);

    // track all of the resize options
    window.addEventListener('resize', handleResize);

    // figure out initial width...
    handleResize();

    // after finishing work, remove event listener...
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // this useEffect is responsible only for ==> 
  // toggling menu base on browser window width size
  useEffect(() => {
    if (screenSize <= 1026) {
      // at mobile 📱 screen | menu hide
      setMenuBar(false);
      // mobile menu auto close after user scrolling at ui...
      window.addEventListener('scroll', () => setMenuBar(false))
    } else {
      // at desktop 💻 screen | menu show
      setMenuBar(true);
      // scrolling time mobile menu ❗NOT auto close after user scrolling at ui...
      window.addEventListener('scroll', () => setMenuBar(true))
    }

    // when screen-size change | run this for UI re-rendering... 
  }, [screenSize]);




  // this function run only at Mobile Screen Size || Mobile Screen Clicking...
  const atMobileScreenMenuClick = () => (screenSize <= 1026) && setMenuBar(false);


  const searchBtnClick = () => {
    setToggleSearch(pre => !pre);

    // only active at mobile screen...
    if (screenSize <= 1026) return setMenuBar(false);
  }







  return (

    <header className='fixed top-0 left-0 right-0 z-10 bg-black py-6 px-2 lg:px-6 xl:px-[9%] flex items-center justify-end lg:justify-between gap-4 '>

      <div>
        {/* 🟨🟨🟨 Mobile Menu Icon */}
        <div className={`fas icons lg:hidden mr-4 duration-300 ${menuBar ? 'fa-times rotate-[180deg]' : 'fa-bars'}`}
          onClick={() => { setMenuBar(pre => !pre); setToggleSearch(false) }}
        > </div>

        {/* 🟨🟨🟨 🔎 Search Icon */}
        <div onClick={searchBtnClick}
          className={`fas icons  ${toggleSearch ? 'fa-times mr-2' : 'fa-search'}`}
        > </div>
      </div>

      <nav className={`absolute top-[99%] left-0 right-0 bg-black lg:block lg:relative duration-300 pb-4 lg:pb-0 ${menuBar ? 'on' : 'off'}`}>
        <a href="/#home" className='links' onClick={atMobileScreenMenuClick}>home</a>
        <a href="/#menu" className='links' onClick={atMobileScreenMenuClick}>menu</a>
        <a href="/#about" className='links' onClick={atMobileScreenMenuClick}>about</a>
        <span className="hidden lg:inline-block w-[190px]"></span>
        <a href="/#review" className='links' onClick={atMobileScreenMenuClick}>review</a>
        <a href="/#contact" className='links' onClick={atMobileScreenMenuClick}>contact</a>
        <a href="/#blogs" className='links' onClick={atMobileScreenMenuClick}>blogs</a>
      </nav>

      <a href="/#" className="fas fa-shopping-cart icons"> </a>

      <a href="#home" className="absolute top-6 left-4 lg:left-[49%] lg:translate-x-[-50%]">
        <img src={images.logo} alt="" />
      </a>

      <form action="" className={`h-7 py-8 px-4 border-t border-white/30 flex items-center bg-black absolute top-[99%] left-0 right-0 duration-100 ${toggleSearch ? 'on' : 'off'}`}>

        <input type="search" placeholder='search here' id='searchBox' className='w-full bg-black outline-none text-lg text-white' />
        <label htmlFor="searchBox" className='fas fa-search text-2xl text-white cursor-pointer hover:text-yellow-500 dropDown'></label>

      </form>
    </header>
  )
}

Header.defaultProps = { title: 'hi' }

export default Header;