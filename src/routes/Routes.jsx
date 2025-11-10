import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddListing from "../pages/addListing/AddListing";
import MyListing from "../pages/myListing/MyListing";
import MyOrders from "../pages/myOrders/MyOrders";
import PetsSupplies from "../pages/petsSupplies/PetsSupplies";
import Conditions from "../pages/conditions/Conditions";
import ErrorPage from "../pages/errorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import PetSuppliesDetails from "../pages/petSuppliesDetails/PetSuppliesDetails";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import UpdateListing from "../pages/updateListing/UpdateListing";
import CategoryFilteredProducts from "../pages/categoryFilteredProducts/CategoryFilteredProducts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement : <ErrorPage></ErrorPage>,
    hydrateFallbackElement : <LoadingSpinner></LoadingSpinner>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path : "/category-filtered-product/:categoryName",
        Component :CategoryFilteredProducts
      },
      {
        path: '/pets-supplies',
        Component : PetsSupplies
      },
      {
        path: '/pets-supplies-details/:id',
        element : <PrivateRoute><PetSuppliesDetails></PetSuppliesDetails></PrivateRoute>,
        loader : ({params})=>fetch(`http://localhost:5000/listings/${params.id}`)
      },
      {
        path: '/addListing',
        element : <PrivateRoute><AddListing></AddListing></PrivateRoute>
      },
      {
        path: "/myListing",
        element : <PrivateRoute><MyListing></MyListing></PrivateRoute>
      },
      {
        path: "/myListing/update/:id",
        element : <PrivateRoute><UpdateListing></UpdateListing></PrivateRoute>,
        loader : ({params})=>fetch(`http://localhost:5000/listings/${params.id}`)
      },
      {
        path: "/myOrders",
        element : <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
      },
      {
        path: "/terms-condtions",
        Component : Conditions
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: '/auth/login',
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
