import images from '../img';


const DigitalService = () => (
  <div className='w-full md:w-3/12 shadow-lg rounded-lg p-5 my-3 mx-2 flex flex-col items-center gap-3 cursor-pointer dark:shadow-slate-600'>
    <img src={images.icon} alt="" className='w-10' />
    <h1 className='font-medium text-lg dark:text-slate-200'>UI/UX Design</h1>
    <p className='text-gray-400'>I specialized in creating interactive websites for individuals and small businesses</p>
    <a href="/#" className='text-indigo-600 font-seminole text-sm dark:text-indigo-400'>Read More</a>
  </div>
)



const Service = () => {


  return (
    <section id='service' className='dark:bg-slate-800 scroll-mt-20 pt-8'>

      <div className="container mx-auto text-center space-y-4 dark:bg-slate-800">
        <h1 className="text-indigo-600 font-bold text-2xl dark:text-indigo-400">Service</h1>
        <h1 className="text-3xl dark:text-slate-200">What do I offer?</h1>

        <p className="px-4 md:w-1/2 text-gray-400 mx-auto md:text-xl">
          My approach to website design is to create a website that strengthens your company's brand while ensuring ease of use and simplicity for your audience.
        </p>

        <div className="p-5 flex flex-wrap items-center justify-center">
          {
            [1, 1, 1, 1, 1, 1].map((data, idx) => <DigitalService key={idx} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Service;