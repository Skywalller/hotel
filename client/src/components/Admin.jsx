import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const links = [
  { name: "Home", path: "/admin/home" },
  { name: "Manage Inventory", path: "/admin/inventory" },
  { name: "Booking", path: "/admin/booking" },
  { name: "Manage Rates", path: "/admin/rates" },
  { name: "Settings", path: "/admin/settings" },
];

const Admin = () => {
  return (
    <>
      <div className='fixed left-0 top-0 bottom-0 w-[330px] bg-primary rounded-r-3xl shadow-lg shadow-primary/70'>
        <div className='w-full h-full p-4 py-6 flex flex-col justify-between'>
          <div className='flex flex-col gap-28'>
            <div className='text-2xl font-bold tracking-tight text-black'>
              <span className='text-white/90'>Stay</span>
              <span>Hotel.</span>
            </div>
            <div className='flex flex-col text-black  gap-3 px-3'>
              {links.map((link, index) => (
                <Link key={index} link={link} />
              ))}
            </div>
          </div>

          <div className='bg-white shadow-inner shadow-black/40 rounded-2xl w-full h-16 flex items-center p-4 gap-2 cursor-pointer'>
            <div className='rounded-full size-10 bg-primary box-center'>A</div>
            <div className='text-black/70 font-semibold'>Anakin Mariko</div>
          </div>
        </div>
      </div>
      <div className='ml-[330px] min-h-screen w-[calc(100vw-330px)] p-4'>
        <Outlet />
      </div>
    </>
  );
};

export default Admin;

const Link = ({ link }) => {
  return (
    <>
      <NavLink
        to={link.path || "#"}
        children={(props) => {
          return (
            <div
              className={`${
                props.isActive
                  ? "bg-white shadow-inner shadow-black/40"
                  : "hover:bg-white transition-colors"
              }  w-full p-2 rounded-lg group`}
            >
              <div
                className={`${
                  props.isActive
                    ? "text-primary"
                    : "text-white group-hover:text-primary transition-colors"
                }`}
              >
                {link.name}
              </div>
            </div>
          );
        }}
      />
    </>
  );
};
