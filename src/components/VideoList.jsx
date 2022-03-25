
const VideoList = ({ video, clickHandler, videoObj }) => {

  const { title, videoUrl } = video;
  const { title: videoName } = videoObj;

  // for getting active click...
  const isClick = title === videoName;

  
  return (

    <div className={`
     text-center sm:flex items-center rounded shadow p-2 cursor-pointer bg-gray-200 hover:bg-gray-300 group
      ${isClick && 'bg-gray-500'}
    `}
      onClick={() => clickHandler(video)}>

      <div className="relative">
        <video src={videoUrl} className="w-full pb-2 sm:w-32 sm:pb-0 rounded mr-2" />
        <span className="absolute bottom-3 right-1 sm:bottom-1 sm:right-3 bg-black/60 text-white rounded px-1.5 ">0:00</span>
      </div>

      <h3 className={`text-xl group-hover:text-black ${isClick && 'text-white'}`}>{title}</h3>

    </div>
  )
}

export default VideoList