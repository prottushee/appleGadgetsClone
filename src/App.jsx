import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import RootLayout from "./pages/RootLayout";  
import Home from "./pages/Home";     
import Login from "./pages/Login";  
// import ForgotPassword from "./pages/ForgotPassword";  
// import Signup from "./pages/Signup"; 
import SingleProduct from "./pages/SingleProduct";  
import NotFound from "./pages/NotFound";  
// import Checkout from "./pages/Checkout";  
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product/:slug", element: <SingleProduct /> },
      // { path: "/checkout", element: <Checkout /> },
      { path: "/login", element: <Login /> },
      // { path: "/signup", element: <Signup /> },
      // { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "*", element: <NotFound /> },  
    ],
  },
]);

function App() {
  return (
      <RouterProvider router = { router } />
  );
}

export default App;
