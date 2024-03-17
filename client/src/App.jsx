import React from "react";
import Hero from "./components/Hero";
import Searched from "./components/Searched";
import About from "./components/About";
import { useRoutes } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import Admin from "./components/Admin";

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
    },
  ]);
  return <>{router}</>;
};
export default App;
