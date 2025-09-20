import { BG_Page } from "../utils/constants"
import Header from "./Header"

const Games = () => {
  return (
    <div>
        <Header/>
        <div className="absolute">
            <img
            src={BG_Page} 
            alt="bg"
            className="h-screen object-cover md:h-auto brightness-[20%]"
            />
        </div>
        <div className="text-center relative text-white">
            <h3 className="py-72 text-6xl font-semibold">Coming Soon...</h3>
        </div>
    </div>
  )
}

export default Games;