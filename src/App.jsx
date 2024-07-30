import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Vedio from "./page/Vedio";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import Faviort from "./page/Faviort";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    }, {
      path: "/faivorte",
      element: <Faviort/>,
    },
    {
      path: "/:id",
      element: <Vedio/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },    {
      path: "/signUp",
      element: <SignUp/>,
    },
  ]);
  return (
    <RouterProvider router={router} />

  )
}

export default App
