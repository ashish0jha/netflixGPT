const VideoTitle = ({title,overview}) => {
  return (
    <div className="p-40">
        <div >
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-xl">{overview}</p>
        </div>
        <div>
           <button className="px-12 py-2 bg-gray-200 rounded-md hover:bg-gray-300 hover:scale-105">Play</button> 
           <button className="px-12 py-2 bg-gray-200 rounded-md m-4 hover:bg-gray-300 hover:scale-105">More info</button> 
        </div>
    </div>
  )
}

export default VideoTitle;