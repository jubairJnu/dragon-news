import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Homes/Home/Home";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/SignUp";
import Private from "../Component/Private/Private";
import Profile from "../Component/Profile/Profile";
import Orders from "../Component/Orders/Orders";
import Catagory from "../Layouts/catagory/Catagory";
import News from "../Pages/Homes/News/News";
import NewsLayout from "../Layouts/newsLayout/NewsLayout";




const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Catagory></Catagory>,
        loader:() => fetch('http://localhost:5000/news')
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'profile',
        element:<Private> <Profile></Profile> </Private>
      },
      {
        path:'order',
        element:<Private> <Orders></Orders> </Private>
      },
      {
        path:'catagory/:id',
        element:<Catagory></Catagory>,
        loader:({params})=> fetch(`http://localhost:5000/catagory/${params.id}`)
      }
    ]
  },
  {
    path:'news',
    element:<NewsLayout/>,
    children:[
      {
        path:':id',
        element:<News></News>,
        loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
      
    
  }
])
export default router;
