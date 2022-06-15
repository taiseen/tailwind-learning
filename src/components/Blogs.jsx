import { blogs } from '../constant/data';
import images from '../constant/images';


const Blogs = () => {

  return (
    <section className="section" id='blogs'>

      <div className="flex flex-col items-center text-white gap-5">
        <img src={images.titleImg} alt="title" />
        <h3 className='text-4xl'>Daily Post's</h3>
      </div>

      <div className="gridAutoFit px-2 my-8 ">
        {
          blogs.map(({ id, image, title, icons, post }) => (

            <div key={id} className='text-white group'>
              <div className="h-[300px] overflow-hidden relative">

                <img src={image} alt="blog" className='w-full h-full object-cover group-hover:scale-[1.1] duration-300' />

                <div className="flex items-center justify-between p-4 bg-black absolute bottom-0 left-0 right-0 z-10 translate-y-14  group-hover:translate-y-0 duration-300">

                  <a href="/#" className='hover:text-yellow-400'>
                    <i className={`${icons[0]} pr-2 text-yellow-400`}></i> 21st may, 2022
                  </a>

                  <a href="/#" className='hover:text-yellow-400'>
                    <i className={`${icons[1]} pr-2 text-yellow-400`}></i> by admin
                  </a>
                </div>

              </div>

              <div className="text-center p-4">
                <h3 className='text-2xl capitalize pb-2'>{title}</h3>
                <p className='font-thin border-b border-yellow-400/50 group-hover:border-yellow-400 pb-4 duration-300'>{post}</p>
                <a href="/#" className='btn'>read more</a>
              </div>
            </div>
          ))
        }

      </div>

    </section>
  )
}

export default Blogs
