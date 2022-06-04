import { SideBarData } from "../constants/SideBarData"
import { NavLink } from "react-router-dom"

const SideBar = () => {

  const activeLink = 'flex items-center p-4 mb-2 text-2xl text-white space-x-3 cursor-pointer hover:bg-red-300 bg-red-300 text-black';
  const normalLink = 'flex items-center p-4 mb-2 text-2xl text-white space-x-3 cursor-pointer hover:bg-red-300 hover:text-black';

  return (
    <>
      {
        SideBarData.map(link => (

          <NavLink
            to={link.path}
            key={link.path}
            className={
              ({ isActive }) => isActive ? activeLink : normalLink
            }>

            <span>{link.icon}</span>
            <span>{link.title}</span>

          </NavLink>
        ))
      }
    </>
  )
}

export default SideBar