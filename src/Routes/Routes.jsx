import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MyPosts from "../pages/MyPosts/MyPosts/MyPosts";
import NewPost from "../components/NewPost/NewPost";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ReadPost from "../pages/ReadPost/ReadPost";
import LandingPage from "../pages/LandingPage/LandingPage/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Home></Home>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      },
      {
        path: "my-posts",
        element: <MyPosts></MyPosts>,
      },
      {
        path: "new-post",
        element: <NewPost></NewPost>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "blog/:id",
        element: <ReadPost></ReadPost>
      }
    ],
  },
]);

export default router;
