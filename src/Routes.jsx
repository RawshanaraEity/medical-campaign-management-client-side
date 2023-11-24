import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Errorpage from "./Pages/ErrorPage/Errorpage";
import Home from "./Pages/Home/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
      
    },
  ]);