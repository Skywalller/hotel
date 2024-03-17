import React from "react";
import Image from "@/assets/image.png";

const About = () => {
  return (
    <div className='container mx-auto max-w-screen-xl p-4'>
      <div className='h-full w-full flex flex-col gap-8'>
        <div className='flex flex-col gap-3'>
          <div className='text-3xl text-black font-bold'>About the place</div>
          <div className='h-1.5 bg-black rounded-full w-40'></div>
        </div>

        <div className='flex rounded-lg h-[500px] gap-3'>
          <div className='w-2/3 rounded-lg overflow-hidden'>
            <img src={Image} alt='img-room' className='object-cover object-center w-full h-full' />
          </div>
          <div className='flex flex-1 flex-col gap-3'>
            <div className='h-1/2 w-full rounded-lg overflow-hidden'>
              <img
                src={Image}
                alt='img-room'
                className='object-cover object-center w-full h-full'
              />
            </div>
            <div className='h-1/2 w-full rounded-lg overflow-hidden'>
              <img
                src={Image}
                alt='img-room'
                className='object-cover object-center w-full h-full'
              />
            </div>
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='flex text-black/80 w-2/3'>
            Zaildar Royal Garden Zaildar Royal Garden Located at Zaildar Royal Garden Tyakshi,
            Turtuk, Ladakh 194101 It is an excellent choice for travelers seeking a accommodation
            option. With its prime location,Zaildar Royal Garden-Zaildar Royal Gardenshines as a
            preferred choice among tourists and travelers, thanks to its dedication to exceptional
            hospitality.Indulge in the warm ambiance, impeccable service, and modern amenities at
            Zaildar Royal Garden-Zaildar Royal Garden during your City visit. Whether you're
            exploring the city's vibrant culture or attending business meetings, our hotel is your
            perfect home away fr om home. Book your stay today and experience the essence of City
            hospitality.
          </div>
          <div className='border h-[300px] flex-1 border-gray-200 rounded-lg shadow-md'></div>
        </div>

        <div className='h-50'></div>
      </div>
    </div>
  );
};

export default About;
