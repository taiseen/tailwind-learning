import { data } from '../constants';

const VideoPlay = ({ videoObj: { title, videoUrl } }) => {

  return (

    <section className="flex-auto w-[700px] bg-white rounded shadow p-4">

      <video
        src={videoUrl || data.videosDB[0].videoUrl}
        loop
        controls
        className="w-full rounded mb-2"
      >
      </video>
      <h3 className="text-gray-900 text-xl">{title || data.videosDB[0].title}</h3>

    </section>
  )
}

export default VideoPlay