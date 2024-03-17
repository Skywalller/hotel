import React from "react";
import Image from "@/assets/image.png";
import { useNavigate } from "react-router-dom";

const Searched = () => {
  return (
    <div className='container mx-auto max-w-screen-xl mt-10 p-4'>
      <div className='h-full w-full flex flex-col gap-8'>
        <div className='flex flex-col gap-3'>
          <div className='text-3xl text-black font-bold'>Available Rooms</div>
          <div className='h-1.5 bg-black rounded-full w-40'></div>
        </div>

        <div className='flex flex-col gap-5'>
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </div>
    </div>
  );
};

export default Searched;

const RoomCard = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-white shadow-xl border border-gray-200 rounded-lg w-full h-64 flex p-4 gap-3'>
      <div className='flex h-full w-1/3 rounded-lg overflow-hidden'>
        <img src={Image} alt='img-room' className='object-cover object-center w-full h-full' />
      </div>
      <div className='flex flex-1 h-full rounded-lg flex-col px-2 gap-2'>
        <div className='flex flex-col gap-2'>
          <div className='text-2xl font-bold text-black'>Delux Room</div>
          <div className='h-1.5 bg-black rounded-full w-20'></div>
        </div>
        <div className='text-black'>
          Room with all modern amenities and convenience for the business or holiday travelers also
          wonderfully designed to create the perfect ambience of utmost leisure and comfort for all
          our clients
        </div>
        <div className='flex items-end mt-auto flex-col gap-2'>
          <div className='text-primary text-xl uppercase'>INR 2500</div>
          <button
            onClick={() => navigate("/project#1")}
            className='bg-primary px-4 py-2 rounded-md text-white hover:bg-primary/80 transition-colors'
          >
            Select a room
          </button>
        </div>
      </div>
    </div>
  );
};
