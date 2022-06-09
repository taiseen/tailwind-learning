import images from '../img';

const About = () => {


    return (
        <section id='about_me' className='dark:bg-slate-800'>

            <div className="container mx-auto flex flex-col-reverse md:flex-row gap-20 py-24 px-8 md:px-0">
                <div className="relative">
                    <img src={images.dots} alt="dot" className='h-1/4 absolute top-0 left-0 -z-10' />
                    <div className='h-fit rounded-full overflow-hidden'>
                        <img src={images.person2} alt="me" />
                    </div>
                </div >


                <div className='my-auto flex flex-col gap-3'>
                    <h1 className='font-bold text-indigo-600 text-2xl dark:text-indigo-400'>About Me</h1>
                    <h1 className='text-3xl font-medium dark:text-slate-300'>Better Design</h1>
                    <h1 className='text-3xl font-medium dark:text-slate-300'>Better Experience</h1>
                    <p className='text-gray-400 md:text-xl'>I design & build digital products. I'm also a multi-disciplinary maker with over 2.5 years of experience in wide range of design disciplines </p>

                    <h2 className='text-gray-400 font-medium'>HTML</h2>
                    <div className='w-full bg-gray-200 h-1.5 rounded-md'>
                        <div className='w-[90%] bg-indigo-500 h-1.5 rounded-md'></div>
                    </div>

                    <h2 className='text-gray-400 font-medium pt-3'>CSS</h2>
                    <div className='w-full bg-gray-200 h-1.5 rounded-md'>
                        <div className='w-[85%] bg-indigo-500 h-1.5 rounded-md'></div>
                    </div>

                    <h2 className='text-gray-400 font-medium pt-3'>JavaScript</h2>
                    <div className='w-full bg-gray-200 h-1.5 rounded-md'>
                        <div className='w-[80%] bg-indigo-500 h-1.5 rounded-md'></div>
                    </div>

                    <h2 className='text-gray-400 font-medium pt-3'>React</h2>
                    <div className='w-full bg-gray-200 h-1.5 rounded-md'>
                        <div className='w-[85%] bg-indigo-500 h-1.5 rounded-md'></div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default About