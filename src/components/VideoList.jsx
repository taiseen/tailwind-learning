import { useState } from "react";

const VideoList = ({ video, clickHandler, videoObj }) => {

  const { title, videoUrl } = video;
  const { title: videoName } = videoObj;
  const [videoDuration, setVideoDuration] = useState('');

  // for getting active click...
  const isClick = title === videoName;

  let media = new Audio(videoUrl);
  media.onloadedmetadata = function () {
    setVideoDuration(media.duration.toFixed(0)); 
    // this would give duration of the video/audio file
  };

  return (

    <div className={`
     text-center sm:flex items-center rounded shadow p-2 cursor-pointer bg-gray-200 hover:bg-gray-300 group
      ${isClick && 'bg-gray-500'}
    `}
      onClick={() => clickHandler(video)}>

      <div className="relative">
        <video src={videoUrl} className="w-full pb-2 sm:w-32 sm:pb-0 rounded mr-2" />
        <span className="absolute bottom-3 right-1 sm:bottom-1 sm:right-3 bg-black/60 text-white rounded px-1.5 ">{videoDuration}</span>
      </div>

      <h3 className={`text-xl group-hover:text-black ${isClick && 'text-white'}`}>{title}</h3>

    </div>
  )
}

export default VideoList



// import { useState , useRef } from "react";

// const VideoList = ({ video, clickHandler, videoObj }) => {

//   const { title, videoUrl } = video;
//   const { title: videoName } = videoObj;
//   const [videoDuration, setVideoDuration] = useState('');

//   const videoRef = useRef(null);

//   // for getting active click...
//   const isClick = title === videoName;

//   const handleLoadedMetadata = () => {
//     const video = videoRef.current;
//     if (!video) return;
//     setVideoDuration(Math.trunc(video.duration))
//     // console.log(`The video is ${Math.trunc(video.duration)} seconds long.`);
//   };

//   return (

//     <div className={`
//      text-center sm:flex items-center rounded shadow p-2 cursor-pointer bg-gray-200 hover:bg-gray-300 group
//       ${isClick && 'bg-gray-500'}
//     `}
//       onClick={() => clickHandler(video)}>

//       <div className="relative">
//         <video src={videoUrl} ref={videoRef} onLoadedMetadata={handleLoadedMetadata} className="w-full pb-2 sm:w-32 sm:pb-0 rounded mr-2" />
//         <span className="absolute bottom-3 right-1 sm:bottom-1 sm:right-3 bg-black/60 text-white rounded px-1.5 ">{videoDuration}</span>
//       </div>

//       <h3 className={`text-xl group-hover:text-black ${isClick && 'text-white'}`}>{title}</h3>

//     </div>
//   )
// }

// export default VideoList