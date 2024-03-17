import React from "react";
import { SmallNavbar } from "./Navbar";
import Image from "@/assets/image.png";

const CheckoutPage = () => {
  return (
    <>
      <div className='container mx-auto max-w-screen-2xl flex flex-col'>
        <SmallNavbar />
      </div>
      <hr className='border-t border-t-gray-200' />
      <div className='container mx-auto max-w-screen-xl mt-10 p-4'>
        <div className='h-full w-full flex flex-col gap-8'>
          <div className='flex flex-col gap-3'>
            <div className='text-3xl text-black font-bold'>Booking Information</div>
            <div className='h-1.5 bg-black rounded-full w-40'></div>
          </div>

          <div className='flex gap-5'>
            <div className='flex flex-col gap-4'>
              <div className='w-[400px] h-[300px] flex rounded-lg overflow-hidden'>
                <img
                  src={Image}
                  alt='img-room'
                  className='object-cover object-center w-full h-full'
                />
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                  <div className='text-xl text-black font-semibold'>Deluxe Room</div>
                  <div className='bg-black h-1 rounded-full w-14'></div>
                </div>
                <div className='flex flex-col gap-0.5 text-sm text-black/70'>
                  <div className='flex justify-between'>
                    <div className='font-semibold  '>Check-in Date</div>
                    <div>12 June 2021</div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='font-semibold '>Check-out Date</div>
                    <div>13 June 2021</div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='font-semibold '>Price</div>
                    <div>INR 2100 /room</div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='font-semibold '>Taxation</div>
                    <div>INR 1500</div>
                  </div>
                  <hr className='border-b border-b-gray-300' />
                  <div className='flex justify-between'>
                    <div className='font-semibold'>Total Payable</div>
                    <div>INR 1500</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-r border-r-gray-300 mx-3' />
            <div className='flex flex-1 rounded-lg flex-col justify-between'>
              <div className='flex flex-col gap-12'>
                <div className='flex gap-4 items-center'>
                  <div className='flex flex-col w-full gap-1'>
                    <div className='text-black/60 font-semibold'>First Name</div>
                    <input
                      type='text'
                      placeholder='Enter First Name'
                      className='py-1 border-b w-full border-b-black/30'
                    />
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                    <div className='text-black/60 font-semibold'>Last Name</div>
                    <input
                      type='text'
                      placeholder='Enter Last Name'
                      className='py-1 border-b w-full border-b-black/30'
                    />
                  </div>
                </div>
                <div className='flex gap-4 items-center'>
                  <div className='flex flex-col w-full gap-1'>
                    <div className='text-black/60 font-semibold'>Email</div>
                    <input
                      type='text'
                      placeholder='Enter email address'
                      className='py-1 border-b w-full border-b-black/30'
                    />
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                    <div className='text-black/60 font-semibold'>Phone No</div>
                    <input
                      type='text'
                      placeholder='Enter Phone Number'
                      className='py-1 border-b w-full border-b-black/30'
                    />
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <div className='text-black/60 font-semibold'>Select a payment method</div>
                <div className='flex flex-col gap-2'>
                  <label className='flex gap-2 cursor-pointer items-center'>
                    <input type='radio' className='accent-primary cursor-pointer size-4 mb-0.5' />
                    <div className='text-black/60'>Visa/Master Card</div>
                  </label>
                  <label className='flex gap-2 cursor-pointer items-center'>
                    <input type='radio' className='accent-primary cursor-pointer size-4 mb-0.5' />
                    <div className='text-black/60'>RazorPay</div>
                  </label>
                </div>
              </div>

              <button className='py-3 px-5 bg-primary text-white hover:bg-primary/70 rounded-lg transition-colors w-32'>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
