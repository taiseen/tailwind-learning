import { services } from '../constant/data';

const Services = () => {

    return (
        <section className='section gridAutoFit'>
            {
                services.map(({ id, icon, title, details, delay }) => (
                    <div className=' text-white text-center p-4' key={id} data-aos="fade-up" data-aos-delay={delay}>

                        <i className={`${icon} bg-yellow-400/80 text-black mb-4 w-16 h-16 leading-[64px] rounded-full text-3xl`}></i>

                        <h3 className='pb-4 text-2xl lg:text-4xl capitalize'>{title}</h3>

                        <p>{details}</p>
                    </div>
                ))
            }
        </section>
    )
}

export default Services