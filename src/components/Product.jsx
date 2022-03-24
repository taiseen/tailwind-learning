const Product = ({ item: { title, img } }) => {

  return (

    <a href={img} className="h-[250px] w-[350px] overflow-hidden m-5 border-4 border-gray-800 rounded shadow group">

      <img src={img} alt={title} title={title}
        className="h-full w-full object-cover group-hover:scale-[1.2] duration-300" />

    </a >
  )
}

export default Product