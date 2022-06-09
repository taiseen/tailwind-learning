import images from '../img';


const DigitalService = () => (
  <div className='w-full md:w-5/12 lg:w-1/5 shadow-lg rounded-lg m-1 my-3 md:my-4 cursor-pointer'>
    <img src={images.item} alt="" className='' />

  </div>
)



const Work = () => {


  return (
    <section id='work' className='dark:bg-slate-800 scroll-mt-20 pt-8'>

      <div className="container mx-auto text-center space-y-4 dark:bg-slate-800">

        <h1 className="text-indigo-600 font-bold text-2xl dark:text-indigo-400">Work</h1>
        <h1 className="text-3xl dark:text-slate-200">What do I offer?</h1>

        <p className="px-4 md:w-1/2 text-gray-400 mx-auto md:text-xl">
          My approach to website design is to create a website that strengthens your company's brand while ensuring ease of use and simplicity for your audience.
        </p>

        <div className="p-5 flex flex-wrap items-center justify-center">
          {
            [1, 1, 1, 1, 1, 1, 1, 1].map((data, idx) => <DigitalService key={idx} />)
          }
        </div>

      </div>
    </section>
  )
}

export default Work;