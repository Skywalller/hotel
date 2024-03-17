import React from "react";
import Hero from "./components/Hero";
import Searched from "./components/Searched";
import About from "./components/About";
import { useRoutes, Navigate } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import Admin from "./components/Admin";
import Inventory from "./components/Inventory";

const HomePage = () => {
  return (
    <div className='flex flex-col gap-6'>
      <Hero />
      <Searched />
      <About />
    </div>
  );
};

const App = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/:id",
      element: <CheckoutPage />,
    },
    {
      path: "/admin",
      element: <Admin />,
      children: [
        { path: "/admin", element: <Navigate to='/admin/home' /> },
        { path: "/admin/inventory", element: <Inventory /> },
        { path: "/admin/home", element: <>Home</> },
        { path: "/admin/booking", element: <>Booking</> },
        { path: "/admin/rates", element: <>Rates</> },
        { path: "/admin/settings", element: <>Settings</> },
      ],
    },
  ]);
  return <>{router}</>;
};
export default App;
