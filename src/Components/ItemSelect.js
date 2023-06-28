import React from "react";

function ItemSelect({ items, handleItemSelect }) {
  return (
    <React.Fragment>
      <div className="flex flex-row p-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-min h-auto p-6 border rounded-lg shadow bg-gray-800 border-gray-700"
          >
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {item.name}
            </h1>
            <p className="mb-3 font-normal text-gray-300">{item.description}</p>
            <p className="mb-2 text-sm font-extralight tracking-tight text-white">
              Quantity: {item.quantity}
            </p>
            <div class="flex items-center justify-between gap-4">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                {item.price}
              </span>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleItemSelect(item.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ItemSelect;
