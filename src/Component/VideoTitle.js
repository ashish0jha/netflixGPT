import { useNavigate } from "react-router-dom";

const VideoTitle = ({title,overview,id}) => {
  const navigate=useNavigate();
  return (
    <div className="absolute aspect-video md:h-screen top-0 pl-6 md:pl-40 pt-52 md:pt-64 md:bg-gradient-to-r from-black">
        <div className="text-white">
            <h1 className="text-lg md:text-3xl font-bold">{title}</h1>
            <p className="hidden md:inline-block text-lg w-2/3">{overview}</p>
        </div>
        <div>
           <button className="px-12 py-2 bg-white rounded-md font-semibold hover:scale-105 text-black"
           onClick={()=>{
            navigate(`/Browse/${id}`);
           }}>▶︎  Play</button> 
           <button className="hidden md:inline-block px-12 py-2 bg-gray-800 bg-opacity-50 font-semibold text-white rounded-md m-4 hover:scale-105"
           onClick={()=>{
            navigate(`/Browse/${id}`);
           }}>ⓘ More info</button> 
        </div>
    </div>
  )
}

export default VideoTitle;