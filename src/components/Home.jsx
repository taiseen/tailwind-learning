import Typed from 'react-typed';
import images from '../img';


const Home = ({ themeToggling }) => {

    const typingWord = ['Developer', 'Web Dev...', 'Designer'];


    return (
        <section className='h-screen relative overflow-hidden 
        bg-gradient-to-t from-indigo-200  
        dark:from-slate-800 dark:to-slate-900'
            id='home'
        >
            <img
                alt="imgName"
                src={images.person1}
                className='absolute -bottom-5 lg:top-72 right-0 lg:left-0 mx-auto lg:h-5/6 object-cover z-20'
            />

            <div className={`hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big rounded-full bg-indigo-900  dark:bg-slate-800 ${themeToggling ? 'z-10' : '-z-10'}`}></div>

            <div className='z-20 font-bold absolute top-1/3 
                               left-36     text-2xl
                            sm:left-10  sm:text-4xl 
                            md:left-1/4 md:text-5xl 
                            lg:left-24  lg:text-6xl 
                            xl:left-46  xl:text-7xl
            '>
                <span className='text-gray-600 dark:text-slate-100'>Freelance</span>
                <p className='text-red-500 '>
                    <Typed
                        strings={typingWord}
                        typeSpeed={90}
                        backSpeed={90}
                        loop
                    />
                </p>
            </div>


            <div className='hidden lg:block bg-white p-6 rounded-md w-1/4 absolute top-1/4 right-24 shadow-lg dark:bg-slate-900 dark:shadow-slate-900 z-10'>

                <h1 className='text-4xl text-indigo-900 font-bold dark:text-slate-300'>Hi, I'm Taiseen</h1>
                <p className='py-4 pb-6 text-gray-600 text-xl dark:text-slate-400'>
                    With over 2 year's of experience on web design & development. Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt eaque odio quos, repellat beatae illo quis pariatur? Esse assumenda hic quia saepe minus et!
                </p>
                <a href="#contact" className='bg-indigo-600 py-2 px-4 text-white text-xl rounded-md'>Hire Me</a>
            </div>

        </section>
    )
}

export default Home