import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MyPosts from "../pages/MyPosts/MyPosts/MyPosts";
import NewPost from "../components/NewPost/NewPost";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
    ],
  },
]);

export default router;
