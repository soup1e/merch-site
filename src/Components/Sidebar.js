import React from "react";

function Sidebar({ cartItems, handleRemoveItem }) {
  return (
    <React.Fragment>
      <div className="fixed right-0 top-0 h-full w-52 flex flex-col text-white bg-gray-800 border border-gray-600 ">
        <div className="font-bold text-xl p-4 border-b-2 border-gray-600">
          Cart
        </div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="w-full p-4 hover:bg-gray-600 border-b-2 border-gray-600 flex flex-col justify-between"
          >
            <div className="flex flex-row items-center justify-between mb-2">
              <h1 className="text-lg font-bold text-white">{item.name}</h1>
              <button
                className="text-sm font-light text-red-400"
                onClick={() => handleRemoveItem(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
            <div className="text-sm font-light text-gray-200 mb-4">
              {item.description}
            </div>
            <div className="flex flex-row items-center justify-around mb-2">
              <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {item.quantity}
              </div>
              <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {item.price}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center m-4">
          <button
            type="button"
            className="text-white bg-blue-600  hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-900 font-medium rounded-md text-xs px-4 py-2 inline-flex justify-center text-center"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
