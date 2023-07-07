import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MyPosts from "../pages/MyPosts/MyPosts/MyPosts";
import NewPost from "../components/NewPost/NewPost";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ReadPost from "../pages/ReadPost/ReadPost";
import LandingPage from "../pages/LandingPage/LandingPage/LandingPage";
import LandingPageLayout from "../Layout/LandingPageLayout";
import ArticleLayout from "../Layout/ArticleLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout></LandingPageLayout>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Home></Home>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      // {
      //   path: ":id",
      //   element: <MyPosts></MyPosts>,
      // },
      {
        path: "new-post",
        element: <NewPost></NewPost>,
      },
    ],
  },
  {
    path: "article",
    element: <ArticleLayout></ArticleLayout>,
    children: [
      {
        path: "my-articles",
        element: <MyPosts></MyPosts>,
      },
      {
        path: ":id",
        element: <ReadPost></ReadPost>,
      },
      {
        path: "create-article",
        element: <NewPost></NewPost>,
      },
    ],
  },
]);

export default router;
