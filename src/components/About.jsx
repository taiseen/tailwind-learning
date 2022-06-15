import images from "../constant/images"


const About = () => {

    return (
        <section className="section flex items-center flex-wrap gap-12" id="about">

            <div className="flex-grow w-[350px]">
                <img src={images.aboutImg} alt="about" />
            </div>

            <div className="flex-grow w-[450px] text-white p-4">
                <h3 className="title text-3xl capitalize">Step into burger haven</h3>

                <p className="text-2xl leading-8 py-5 font-thin">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci quae natus hic ullam tempore cum harum amet eligendi aliquid maxime, perferendis, ad iusto autem similique laudantium esse deleniti blanditiis recusandae fugiat iure itaque unde. Aspernatur deleniti officiis iure recusandae quisquam, quas quia quibusdam est omnis, alias obcaecati eligendi tenetur dolores nisi?</p>

                <div className="text-xl capitalize flex flex-wrap gap-1 mt-4">
                    
                    <h3 className="flex-grow text-lg w-[160px] md:w-[250px] md:text-xl mb-3">
                        <i className="fas fa-check pr-2 text-yellow-400"></i> best price
                    </h3>
                    
                    <h3 className="flex-grow text-lg w-[160px] md:w-[250px] md:text-xl mb-3">
                        <i className="fas fa-check pr-2 text-yellow-400"></i> best service
                    </h3>

                    <h3 className="flex-grow text-lg w-[160px] md:w-[250px] md:text-xl mb-3">
                        <i className="fas fa-check pr-2 text-yellow-400"></i> fresh ingredient
                    </h3>

                    <h3 className="flex-grow text-lg w-[160px] md:w-[250px] md:text-xl mb-3">
                        <i className="fas fa-check pr-2 text-yellow-400"></i> basked buns
                    </h3>

                    <h3 className="flex-grow text-lg w-[160px] md:w-[250px] md:text-xl mb-3">
                        <i className="fas fa-check pr-2 text-yellow-400"></i> natural cheese
                    </h3>

                    <h3 className="flex-grow text-lg w-[160px] md:w-[250px] md:text-xl mb-3">
                        <i className="fas fa-check pr-2 text-yellow-400"></i> veg & nin-veg
                    </h3>
                </div>

                <a href="/#" className="btn"> read more </a>
                
            </div>

        </section>
    )
}

export default About