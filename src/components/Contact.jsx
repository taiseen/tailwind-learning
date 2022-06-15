import images from "../constant/images"
import { contactInfo } from '../constant/data';


const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="section" id='contact'>

      <div className="flex flex-col items-center text-white gap-5">
        <img src={images.titleImg} alt="title" />
        <h3 className='text-4xl'>Contact us</h3>
      </div>

      <div className="flex flex-wrap gap-8 mt-8">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d161589.1957853984!2d-120.58579639448303!3d50.74161987471286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e2cd33d0d3b31%3A0xd23e96aa9a6945e7!2sKamloops%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sbd!4v1655238859266!5m2!1sen!2sbd" loading="lazy" className="flex-grow w-[300px] h-[300px] lg:h-[600px] p-3 mb-4 lg:mb-0"></iframe>


        <div className="flex-grow w-[300px]">
          <div className="flex flex-wrap gap-4 mb-6">
            {
              contactInfo.map(({ id, icon, title, info }) => (
                <div key={id} className='flex-grow w-[180px] text-center text-white mb-4'>
                  <i className={`${icon} h-[50px] w-[50px] leading-[50px] rounded-full bg-yellow-400/80 text-black text-2xl`}></i>
                  <h3 className="capitalize text-xl py-2 font-thin">{title}</h3>
                  <p className="text-lg font-thin">{info}</p>
                </div>
              ))
            }
          </div>

          <form action="" className="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" className="inputBox" />
            <input type="email" placeholder="Email" className="inputBox" />
            <input type="number" placeholder="Phone" className="inputBox" />
            <textarea placeholder="Messages" className="inputBox h-[150px] resize-none  " />
            <input type="submit" value='Send Message' className="inputBox cursor-pointer hover:bg-yellow-400 hover:text-black" />
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact