import { createBrowserRouter } from "react-router-dom";
import NewPost from "../components/NewPost/NewPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewPost></NewPost>,
  },
]);

export default router;
