import { Link } from 'react-router-dom';
import { BsBook } from 'react-icons/bs';

const NavBar = () => {

  return (
    <Link to='/' className="bg-gray-800 h-20 w-full flex items-center pl-4 space-x-3">

      <BsBook className='text-white text-4xl ' />
      <p className='text-white text-3xl'>My Codding Book</p>

    </Link>
  )
}

export default NavBar