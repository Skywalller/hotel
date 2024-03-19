import React, { useEffect, useRef, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { ReactComponent as EditIcon } from "@/assets/editIcon.svg";
import axios from "axios";

const Inventory = () => {
  const [resultedData, setResultedData] = useState(null);
  const [flag, flagSet] = useState(false);
  useEffect(() => {
    async function getHotel() {
      try {
        const response = await fetch("http://localhost:3000/v3", {
          method: "GET",
        });
        const data = await response.json();
        setResultedData(data.rooms[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getHotel();
  }, [flag]);
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const ref = useRef(null);
  const bulkModalRef = useRef(null);
  const [selectedData, setSelectedData] = useState(null);
  return (
    <>
      <BulkModal ref={bulkModalRef} />
      <Modal data={selectedData} setData={setSelectedData} ref={ref} />
      <div className='w-full h-full p-2'>
        <div className='h-full w-full flex flex-col gap-8'>
          <div className='flex flex-col gap-1.5'>
            <div className='text-2xl text-black font-bold'>Inventory</div>
            <div className='h-1 bg-black rounded-full w-16'></div>
          </div>

          <div className='flex flex-col gap-7 w-full h-full'>
            <div className='flex gap-2 justify-end w-full'>
              <button
                onClick={() => bulkModalRef?.current?.showModal()}
                className='px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors shadow-inner shadow-black/20'
              >
                Bulk Update
              </button>
              <Datepicker
                minDate={new Date()}
                value={value}
                primaryColor='teal'
                onChange={(newValue) => setValue(newValue)}
                inputClassName='bg-transparent placeholder:text-black mt-0.5 w-full leading-none'
                placeholder='Select a date'
                toggleClassName='text-black size-3'
                containerClassName='flex items-start shadow-inner px-4 py-2 rounded-lg border border-gray-200 w-64'
              />
            </div>

            <table className='shadow-inner rounded-lg w-full relative table-fixed'>
              <thead className='bg-gray-100 sticky'>
                <tr>
                  <th className='p-4  font-semibold rounded-l-lg text-start'>Date</th>
                  <th className='p-4 font-semibold text-start'>Rate</th>
                  <th className='p-4 font-semibold  text-start'>Inventory</th>
                  <th className='p-4 font-semibold rounded-r-lg  text-center'>Availability</th>
                  <th className='p-4'></th>
                </tr>
              </thead>
              <tbody className='border border-gray-50 text-sm'>
                {resultedData &&
                  Object.entries(resultedData?.data[2024][3])?.map(([date, item]) => {
                    return (
                      <tr key={date} className='border-b border-b-gray-100'>
                        <td className='p-4 text-start'>{date} March 2024</td>
                        <td className='p-4 text-start'>INR {item.price}</td>
                        <td className='p-4 text-start'>{item.inventory}</td>
                        <td className='p-4 text-center'>
                          <input
                            type='checkbox'
                            disabled
                            checked={item.availability}
                            className='toggle toggle-success'
                          />
                        </td>
                        <td className='p-4 text-center'>
                          <button
                            className='hover:scale-125 transition-transform'
                            onClick={() => {
                              setSelectedData({ date, item });
                              setTimeout(() => ref.current.showModal(), 100);
                            }}
                          >
                            <EditIcon />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;

const Modal = React.forwardRef(({ data, setData, flagSet }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  async function update() {
    setIsLoading(true);
    console.log(data);
    try {
      const response = await axios.post("http://localhost:3000/v3/update", {
        data,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }
  console.log(data);
  return (
    <dialog id={data?._id} className='modal' ref={ref}>
      {data && (
        <div className='modal-box bg-white'>
          <div className='h-full w-full flex flex-col gap-7 py-2'>
            <div className='flex flex-col gap-1'>
              <div className='text-xl text-black font-bold'>Edit Data</div>
              <div className='h-1 bg-black rounded-full w-12'></div>
            </div>

            <div className='flex flex-col gap-5 w-full'>
              <div>{data.date} March 2024</div>
              <div className='flex gap-4 w-full'>
                <div className='flex flex-col gap-1 flex-1'>
                  <div className='font-semibold'>Price</div>
                  <input
                    type='text'
                    className='bg-gray-100 shadow-inner  rounded-lg p-2'
                    value={data.item.price}
                    onChange={(e) =>
                      setData((pre) => ({
                        ...pre,
                        item: {
                          ...pre.item,
                          price: e.target.value,
                        },
                      }))
                    }
                  />
                </div>
                <div className='flex flex-col gap-1 flex-1'>
                  <div className='font-semibold'>Inventory</div>
                  <input
                    type='text'
                    className='bg-gray-100  shadow-inner rounded-lg p-2'
                    value={data.item.inventory}
                    onChange={(e) =>
                      setData((pre) => ({
                        ...pre,
                        item: { ...pre.item, inventory: e.target.value },
                      }))
                    }
                  />
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='font-semibold leading-6'>Availability</div>
                <input
                  type='checkbox'
                  className='toggle toggle-success'
                  checked={data.item.availability}
                  onChange={(e) =>
                    setData((pre) => ({
                      ...pre,
                      item: {
                        ...pre.item,
                        availability: e.target.checked,
                      },
                    }))
                  }
                />
              </div>

              <div className='justify-end flex gap-1 modal-action'>
                <button
                  className='shadow-inner border border-gray-200 rounded-lg text-black px-3 py-2'
                  onClick={(e) => {
                    e.preventDefault();
                    ref.current.close();
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    update();
                    flagSet((pre) => !pre);
                    ref.current.close();
                  }}
                  disabled={isLoading}
                  className={`shadow-inner border bg-primary hover:bg-primary/80 transition-colors  rounded-lg text-white px-3 py-2 box-center w-20`}
                >
                  {isLoading && <span className='loading'></span>}
                  {isLoading ? "" : "Update"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
});

const BulkModal = React.forwardRef(({}, ref) => {
  const [data, setData] = useState({ inventory: 0, availability: false, price: 0 });
  const [date, setDate] = useState({ startDate: null, endDate: null });
  return (
    <dialog autoFocus id='bulk-ari-modal' ref={ref} className='modal'>
      <div className='modal-box bg-white h-[650px] max-w-[750px]'>
        <div className='h-full w-full flex flex-col gap-10 py-4'>
          <div className='flex flex-col gap-1'>
            <div className='text-xl text-black font-bold'>Edit Bulk Data</div>
            <div className='h-1 bg-black rounded-full w-16'></div>
          </div>

          <form className='flex flex-col gap-7 w-full h-full'>
            <Datepicker
              minDate={new Date()}
              value={date}
              primaryColor='teal'
              onChange={(newValue) => setDate(newValue)}
              inputClassName='bg-transparent placeholder:text-black mt-0.5 w-full leading-none'
              placeholder='Select a date'
              toggleClassName='text-black size-3'
              containerClassName='flex items-start shadow-inner px-4 py-2 rounded-lg border border-gray-200 w-64'
            />
            <div className='flex gap-4 w-full'>
              <div className='flex flex-col gap-1 flex-1'>
                <div className='font-semibold'>Price</div>
                <input
                  autoFocus
                  type='text'
                  className='bg-gray-100 shadow-inner  rounded-lg p-2'
                  value={data.price}
                  onChange={(e) => setData((pre) => ({ ...pre, price: e.target.value }))}
                />
              </div>
              <div className='flex flex-col gap-1 flex-1'>
                <div className='font-semibold'>Inventory</div>
                <input
                  type='text'
                  className='bg-gray-100  shadow-inner rounded-lg p-2'
                  value={data.inventory}
                  onChange={(e) => setData((pre) => ({ ...pre, inventory: e.target.value }))}
                />
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='font-semibold leading-6'>Availability</div>
              <input
                type='checkbox'
                className='toggle toggle-success'
                checked={data.availability}
                onChange={(e) => setData((pre) => ({ ...pre, availability: e.target.checked }))}
              />
            </div>

            <div className='justify-end flex gap-1 modal-action mt-auto'>
              <button
                className='shadow-inner border border-gray-200 rounded-lg text-black px-3 py-2'
                onClick={(e) => {
                  e.preventDefault();
                  ref?.current?.close();
                }}
              >
                Cancel
              </button>
              <button className='shadow-inner border bg-primary hover:bg-primary/80 transition-colors  rounded-lg text-white px-3 py-2'>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
});
