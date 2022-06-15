import images from "../constant/images"
import { reviews } from '../constant/data';


const Review = () => {
  return (
    <section className="section" id="review">

      <div className="flex flex-col items-center text-white gap-5">
        <img src={images.titleImg} alt="title" />
        <h3 className='text-4xl'>Review's</h3>
      </div>

      <div className="gridAutoFit mt-8 px-4">
        {
          reviews.map(({ id, userName, userImage, ratting, review }) => (
            <div className="text-white text-center flex flex-col items-center p-4 border border-yellow-400/50" key={id}>

              <div className="h-[110px] w-[110px] rounded-full overflow-hidden mt-2 ">
                <img src={userImage} alt="userImage" className="" />
              </div>

              <h3 className="text-2xl pt-2">{userName}</h3>

              <p className="text-lg font-thin pt-3 pb-2">{review}</p>

              <div className="text-yellow-400/80 space-x-2 py-2">
                <i className={ratting[0]}></i>
                <i className={ratting[0]}></i>
                <i className={ratting[0]}></i>
                <i className={ratting[0]}></i>
                <i className={ratting[1]}></i>
              </div>
            </div>
          ))
        }

      </div>


    </section>
  )
}

export default Review