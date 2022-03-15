import { useState } from "react"

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'home', link: '/#home' },
    { name: 'about', link: '/#about' },
    { name: 'contact', link: '/#contact' },
    { name: 'blog', link: '/#blog' },
    { name: 'gallery', link: '/#gallery' },
  ]

  return (
    <>
      {
        !isOpen
          ? <i onClick={() => setIsOpen(!isOpen)}
            className="fas fa-bars fixed top-4 right-4 z-10 text-3xl cursor-pointer"></i>

          : <i onClick={() => setIsOpen(!isOpen)}
            className="fas fa-close fixed top-4 right-4 z-10 text-3xl cursor-pointer 
          hover:text-red-500 duration-300"></i>
      }

      <div className={`fixed top-0 right-0 w-60 h-full p-10 bg-gray-400 shadow-md shadow-gray-800 
      flex items-center ease-in-out duration-300
          ${isOpen
          ? 'translate-x-0'
          : 'translate-x-80'}`}>

        <ul className="space-y-4 pt-4 text-2xl w-full">
          {
            links.map(link => (
              <li key={link.name}>
                <a href={link.link}
                  onClick={() => setIsOpen(!isOpen)}
                  className="block p-2 pl-6 rounded capitalize bg-green-200 hover:bg-green-400" >
                  {link.name}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}
export default Sidebar;