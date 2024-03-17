import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ReactComponent as Location } from "@/assets/location.svg";
import { ReactComponent as Search } from "@/assets/search.svg";
import Datepicker from "react-tailwindcss-datepicker";

const Hero = () => {
  return (
    <div className='h-[700px] w-screen p-3'>
      <div className='rounded-xl h-full w-full relative bg-[url(@/assets/image.png)] bg-cover bg-center'>
        <div className='bg-black/70 rounded-xl bg-blend-luminosity absolute inset-0 h-full w-full -z-0' />
        <div className='container flex flex-col max-w-screen-2xl mx-auto h-full'>
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Hero;

const HeroSection = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center relative px-10'>
      <div className='flex w-full mb-10 flex-col gap-10'>
        <div className='flex flex-col gap-1.5'>
          <div className='text-5xl font-bold text-white'>Zaildar Royal Garden</div>
          <div className='text-xl text-white/70 flex items-center gap-1.5 leading-3'>
            <Location />
            <div>Zaildar Royal Garden Tyakshi, Turtuk, Ladakh</div>
          </div>
        </div>
        <div className='items-center flex gap-10'>
          <div className='flex flex-col gap-1.5'>
            <div className='text-white text-4xl font-bold uppercase'>12k+</div>
            <div className='text-white/80'>Satisfied Visitors</div>
          </div>
          <div className='flex flex-col gap-1.5'>
            <div className='text-white text-4xl font-bold uppercase'>12k+</div>
            <div className='text-white/80'>Satisfied Visitors</div>
          </div>
          <div className='flex flex-col gap-1.5'>
            <div className='text-white text-4xl font-bold uppercase'>12k+</div>
            <div className='text-white/80'>Satisfied Visitors</div>
          </div>
        </div>
      </div>
      <SearchSection />
    </div>
  );
};

const SearchSection = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div className='absolute -bottom-11 h-20 right-10 left-10 bg-white shadow-xl px-12 py-3 rounded-full'>
      <div className='flex gap-1 h-full items-center justify-between'>
        <div className='flex flex-col justify-center'>
          <div className='text-black font-semibold'>Check in Date</div>
          <Datepicker
            useRange={false}
            asSingle
            value={value.startDate}
            primaryColor='teal'
            onChange={(newValue) => setValue((pre) => ({ ...pre, startDate: newValue }))}
            inputClassName='bg-white text-sm placeholder:text-black'
            placeholder='Select a date'
            toggleClassName='text-black size-3'
            containerClassName='flex items-start'
          />
        </div>
        <div className='border-r border-r-gray-400 h-2/3'></div>
        <div className='flex flex-col'>
          <div className='text-black font-semibold'>Check out Date</div>
          <Datepicker
            useRange={false}
            asSingle
            value={value.endDate}
            primaryColor='teal'
            onChange={(newValue) => setValue((pre) => ({ ...pre, endDate: newValue }))}
            inputClassName='bg-white text-sm placeholder:text-black'
            placeholder='Select a date'
            toggleClassName='text-black size-3'
            containerClassName='flex'
          />
        </div>
        <div className='border-r border-r-gray-400 h-2/3'></div>
        <div className='flex flex-col'>
          <div className='text-black font-semibold'>Rooms</div>
          <select className='cursor-pointer bg-white text-sm appearance-none disabled:text-black/70'>
            <option disabled selected>
              Select Rooms
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className='border-r border-r-gray-400 h-2/3'></div>
        <div className='flex flex-col'>
          <div className='text-black font-semibold'>Adults per room</div>
          <select className='cursor-pointer bg-white text-sm'>
            <option disabled selected>
              Select Adults
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className='border-r border-r-gray-400 h-2/3'></div>
        <div className='flex flex-col'>
          <div className='text-black font-semibold'>Children</div>
          <select className='cursor-pointer bg-white text-sm'>
            <option disabled selected>
              Select Children
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <button className='relative -right-8 rounded-full bg-primary size-14 z-50 box-center hover:bg-primary/80  transition-colors'>
          <Search />
        </button>
      </div>
    </div>
  );
};
