import React from "react";

const Navbar = () => {
  return (
    <div className='h-16 py-8 relative z-10 flex items-center justify-between'>
      <div className='text-3xl font-bold tracking-tight text-white'>
        <span className='text-primary'>Stay</span>
        <span>Hotel.</span>
      </div>
      <div className='flex items-center gap-6 font-medium text-white'>
        <div className='text-primary cursor-pointer'>Home</div>
        <div className=''>Reservations</div>
        <div className=''>Favourite</div>
        <div className=''>Contact</div>
      </div>
    </div>
  );
};

export default Navbar;

export const SmallNavbar = () => {
  return (
    <div className='h-16 py-8 relative z-10 flex items-center justify-center'>
      <div className='text-3xl font-bold tracking-tight text-black'>
        <span className='text-primary'>Stay</span>
        <span>Hotel.</span>
      </div>
    </div>
  );
};
