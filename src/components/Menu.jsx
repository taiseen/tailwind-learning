import { menuItems } from '../constant/data';
import images from '../constant/images';


const Menu = () => {

    return (
        <section className='section' id='menu'>

            <div className="flex flex-col items-center text-white gap-5">
                <img src={images.titleImg} alt="title" />
                <h3 className='text-4xl'>Our Menu</h3>
            </div>

            <div className='gridAutoFit mt-8 p-6 md:p-0'>
                {
                    menuItems.map(({ id, image, ratting, title, price, action }) => (
                        <div className="text-white flex flex-col items-center border border-yellow-400/50 p-4 hover:border-yellow-500 group duration-300" key={id}>

                            <img src={image} alt="" className='h-[200px] group-hover:scale-110 duration-300' />

                            <div className='text-center'>
                                <div className="text-yellow-400 mb-4">
                                    <i className={ratting[0]}></i>
                                    <i className={ratting[0]}></i>
                                    <i className={ratting[0]}></i>
                                    <i className={ratting[0]}></i>
                                    <i className={ratting[1]}></i>
                                </div>
                                <h3 className='capitalize text-2xl'>{title}</h3>
                                <p className='text-xl py-4'>${price}</p>
                                <a href="/#" className='btn mb-4'>{action}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Menu