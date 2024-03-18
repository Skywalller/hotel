import React, { useRef, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { ReactComponent as EditIcon } from "@/assets/editIcon.svg";

const data = [
  { _id: 1, date: "18-March-2024", inventory: 1, price: 99, availability: false },
  { _id: 2, date: "19-March-2024", inventory: 1, price: 99, availability: true },
  { _id: 3, date: "20-March-2024", inventory: 1, price: 99, availability: true },
  { _id: 4, date: "21-March-2024", inventory: 1, price: 99, availability: true },
  { _id: 5, date: "22-March-2024", inventory: 1, price: 99, availability: true },
  { _id: 6, date: "23-March-2024", inventory: 1, price: 99, availability: true },
  { _id: 7, date: "24-March-2024", inventory: 1, price: 99, availability: true },
  { _id: 8, date: "25-March-2024", inventory: 1, price: 99, availability: true },
  { _id: 9, date: "26-March-2024", inventory: 1, price: 99, availability: true },
  { _id: 10, date: "27-March-2024", inventory: 1, price: 99, availability: true },
];

const Inventory = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const ref = useRef(null);
  const [selectedData, setSelectedData] = useState({
    date: "18-March-2024",
    inventory: 1,
    price: 99,
    availability: false,
  });
  return (
    <>
      <BulkModal />
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
                onClick={() => document.getElementById("bulk-ari-modal").showModal()()}
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
                {data.map((item, index) => {
                  return (
                    <tr key={index} className='border-b border-b-gray-100'>
                      <td className='p-4 text-start'>{item.date}</td>
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
                            setSelectedData(item);
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

const Modal = React.forwardRef(({ data, setData }, ref) => {
  return (
    <dialog id={data._id} className='modal' ref={ref}>
      <div className='modal-box bg-white'>
        <div className='h-full w-full flex flex-col gap-7 py-2'>
          <div className='flex flex-col gap-1'>
            <div className='text-xl text-black font-bold'>Edit Data</div>
            <div className='h-1 bg-black rounded-full w-12'></div>
          </div>

          <div className='flex flex-col gap-5 w-full'>
            <div>18-March-2024</div>
            <div className='flex gap-4 w-full'>
              <div className='flex flex-col gap-1 flex-1'>
                <div className='font-semibold'>Price</div>
                <input
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

            <div className='justify-end flex gap-1 modal-action'>
              <button
                className='shadow-inner border border-gray-200 rounded-lg text-black px-3 py-2'
                onClick={() => ref.current.close()}
              >
                Cancel
              </button>
              <button className='shadow-inner border bg-primary hover:bg-primary/80 transition-colors  rounded-lg text-white px-3 py-2'>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
});

const BulkModal = () => {
  const [data, setData] = useState({ inventory: 0, availability: false, price: 0 });
  const [date, setDate] = useState({ startDate: null, endDate: null });
  return (
    <dialog id='bulk-ari-modal' className='modal'>
      <div className='modal-box bg-white h-[650px] max-w-[750px]'>
        <div className='h-full w-full flex flex-col gap-10 py-4'>
          <div className='flex flex-col gap-1'>
            <div className='text-xl text-black font-bold'>Edit Bulk Data</div>
            <div className='h-1 bg-black rounded-full w-16'></div>
          </div>

          <div className='flex flex-col gap-7 w-full h-full'>
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
                onClick={() => document.getElementById("bulk-ari-modal").close()}
              >
                Cancel
              </button>
              <button className='shadow-inner border bg-primary hover:bg-primary/80 transition-colors  rounded-lg text-white px-3 py-2'>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
};
