import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Home from "./Home"
import { RouterProvider } from "react-router-dom";
import FullMovie from "./FullMovie";
import GptSearchPage from "./GptSearchPage";
import TVshows from "./TVshows";

const Body = () => {
    const AppRouter=createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/Browse",
            element:<Browse/>
        },
        {
          path:"/Browse/:movieId",
          element:<FullMovie/>
        },
        {
          path:"/Browse/gptsearch",
          element:<GptSearchPage/>
        },
        {
          path:"/Browse/shows",
          element:<TVshows/>
        }
    ])

  return (
    <RouterProvider router={AppRouter}/>
  )
}

export default Body;