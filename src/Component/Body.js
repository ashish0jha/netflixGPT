import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Home from "./Home"
import { RouterProvider } from "react-router-dom";

const Body = () => {
    const AppRouter=createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/Browse",
            element:<Browse/>
        }
    ])
  return (
    <RouterProvider router={AppRouter}/>
  )
}

export default Body;