import { useState } from 'react';
import { VideoList, VideoPlay } from './components';
import { data } from './constants';


function App() {

  const [videoObj, setVideoObj] = useState({});

  const clickHandler = (obj) => {
    setVideoObj(obj);
  }

  return (

    <main className="max-w-7xl mx-auto mt-20 flex items-start flex-wrap gap-5">

      <VideoPlay videoObj={videoObj} />

      <section className="w-[350px] h-[504px]  flex-auto  bg-white overflow-y-scroll p-4 rounded shadow scrollbar space-y-4">
        {
          data.videosDB.map(video => (
            <VideoList
              key={video.title}
              video={video}
              clickHandler={clickHandler}
              videoObj={videoObj}
            />
          ))
        }
      </section>

    </main>
  );
}

export default App;
