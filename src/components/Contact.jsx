const Contact = () => {

  return (
    <section id='contact' className='dark:bg-slate-800 scroll-mt-20 pt-8'>

      <div className="container mx-auto text-center  dark:bg-slate-800 pb-16">

        <div className="space-y-3 mb-4">
          <h1 className="text-indigo-600 font-bold text-2xl dark:text-indigo-400">Contact</h1>
          <h1 className="text-3xl dark:text-slate-200">Have a Question?</h1>

          <p className="px-4 md:w-1/2 text-gray-400 mx-auto md:text-xl">
            Do you have any idea? Let's discuss it and see what we can do together.
          </p>
        </div>

        <form action="" className="flex flex-col gap-3 p-4 md:w-3/4 mx-auto">
          <input type="text" placeholder="Name" className="border py-2 px-3 rounded border-indigo-400 outline-none dark:bg-slate-800 dark:text-slate-200" />
          <input type="text" placeholder="Email" className="border py-2 px-3 rounded border-indigo-400 outline-none dark:bg-slate-800 dark:text-slate-200" />
          <textarea placeholder="Message" className="border py-2 px-3 rounded border-indigo-400 outline-none resize-none h-40 dark:bg-slate-800 dark:text-slate-200" />
          <button className="bg-indigo-600 py-2 px-4 text-white rounded-md">Submit</button>
        </form>

      </div>
    </section>
  )
}

export default Contact