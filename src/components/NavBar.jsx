
const NavBar = ({ filterHandler, filter }) => {

  console.log(filter);
  const links = [
    { name: 'all' },
    { name: 'blog' },
    { name: 'coffee' },
    { name: 'fruits' },
    { name: 'place' },
  ]

  const activeClick = links.filter(link => link.name === filter);
  console.log(activeClick[0].name)

  return (
    <ul className="flex items-center justify-center flex-wrap py-5 text-center">
      {
        links.map(link => (
          <li
            key={link.name}
            onClick={() => filterHandler(link.name)}
            className={`h-10 w-[140px] bg-white text-gray-800 cursor-pointer m-5 rounded shadow leading-10 text-lg capitalize duration-300 hover:bg-orange-400 hover:text-white 
            ${ link.name === filter ? 'bg-orange-400 text-white' : ''}`}>
            {link.name}
          </li>
        ))
      }
    </ul >
  )
}

export default NavBar