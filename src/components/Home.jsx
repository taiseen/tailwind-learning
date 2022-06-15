import images from '../constant/images'

const Home = () => {

    return (
        <section id='home' className={`section mt-10 bg-[url('../assets/home-bg.png')] bg-center bg-cover`}>

            <div className="container mx-auto text-center text-white flex flex-col items-center justify-center">
                
                <img src={images.burgerBanner} alt="Burger" className='md:w-[50%] lg:w-[50%]' />
                
                <h3 className='text-2xl lg:text-6xl mb-8'>So meaty you'll going crazy</h3>

                <p className='text-lg lg:text-xl tracking-wider lg:w-[950px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet, ducimus earum odit impedit fugiat vel ratione voluptatibus, quaerat pariatur culpa labore dolor ut aut.</p>

                <a href="/#menu" className='btn w-fit'>Our Menu</a>
            </div>

        </section>
    )
}

export default Home