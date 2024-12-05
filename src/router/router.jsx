import { createBrowserRouter } from "react-router-dom";
import ForgetPassword from "../Components/ForgetPassword";
import MainLayout from "../MainLayout/MainLayout";
import AddVisaPage from "../Pages/AddVisaPage";
import AllVisas from "../Pages/AllVisas";
import Login from "../Pages/Login";
import MyApplications from "../Pages/MyApplications";
import MyVisas from "../Pages/MyVisas";
import Register from "../Pages/Register";
import VisaDetails from "../Pages/VisaDetails";
import HomePage from "./../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/addvisa", element: <AddVisaPage /> },
      { path: "/visa-details/1", element: <VisaDetails /> },
      { path: "/all-visas/1", element: <VisaDetails /> },
      { path: "/myvisas", element: <MyVisas /> },
      { path: "/myapplication", element: <MyApplications /> },
      { path: "/all-visas", element: <AllVisas /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      // Add more routes here
    ],
  },
]);

export default router;
