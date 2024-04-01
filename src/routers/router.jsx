import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import SingleBook from "../shop/SingleBook";
import Books from "../shop/Books";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children: [
        {
            path: '/',
            name:'home',
            element:<Home/>
        },
        {
            path: '/books',
            element:<Books/>
        },
        {
          path:"/book/:id",
          element:<SingleBook/>,
          loader:({params}) => fetch(`http://localhost:3000/bookdetails/${params.id}`)
      }
      ]
    },
  ]);

  export default router