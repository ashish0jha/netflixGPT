const VideoTitle = ({title,overview}) => {

  return (
    <div className="absolute aspect-video h-screen top-0 pl-40 pt-64 bg-gradient-to-r from-black">
        <div className="text-white">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-lg w-2/3">{overview}</p>
            
        </div>
        <div>
           <button className="px-12 py-2 bg-white rounded-md font-semibold hover:scale-105 text-black">▶︎  Play</button> 
           <button className="px-12 py-2 bg-gray-800 bg-opacity-50 font-semibold text-white rounded-md m-4 hover:scale-105">ⓘ More info</button> 
        </div>
    </div>
  )
}

export default VideoTitle;