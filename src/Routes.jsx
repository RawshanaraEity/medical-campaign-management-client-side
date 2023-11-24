import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Errorpage from "./Pages/ErrorPage/Errorpage";


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