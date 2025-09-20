import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Home from "./Home"
import { RouterProvider } from "react-router-dom";
import FullMovie from "./FullMovie";
import GptSearchPage from "./GptSearchPage";
import TVshows from "./TVshows";
import Games from "./Games";
import ShowsDetails from "./ShowsDetails";

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
        },
        {
          path:"/Browse/games",
          element:<Games/>
        },
        {
          path:"/Browse/shows/:seriesId",
          element:<ShowsDetails/>
        },
    ])

  return (
    <RouterProvider router={AppRouter}/>
  )
}

export default Body;