import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/home.jsx";
import Login from "../Pages/Login/login.jsx";
import AddCourse from "../components/CreateNewCourse/AddCourse.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "//login",
    element: <Login />,
  },
  {
    path: "//addcourse",
    element: <AddCourse />,
  },
]);

export default routes;
