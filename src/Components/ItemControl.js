import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ItemSelect from "./ItemSelect";
import { v4 } from "uuid";

function ItemControl() {
  const handleItemSelect = (itemID) => {
    const selectedItem = items.find((item) => item.id === itemID);

    if (selectedItem && selectedItem.quantity > 0) {
      const existingItem = cartItems.find((item) => item.id === itemID);
      if (existingItem) {
        const updateCartItems = cartItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCartItems(updateCartItems);
      } else {
        const updateCartItems = [
          ...cartItems,
          { ...selectedItem, quantity: 1 },
        ];
        setCartItems(updateCartItems);
      }

      const updateItems = items.map((item) =>
        item.id === selectedItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setItems(updateItems);
    }
  };

  const handleRemoveItem = (itemID) => {
    const existingItem = cartItems.find((item) => item.id === itemID);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        const updateCartItems = cartItems.filter(
          (item) => item.id !== existingItem.id
        );
        setCartItems(updateCartItems);
      } else if (existingItem.quantity > 0) {
        const updateCartItems = cartItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        setCartItems(updateCartItems);
      }
      const updateItems = items.map((item) =>
        item.id === existingItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setItems(updateItems);
    }
  };

  const [cartItems, setCartItems] = useState([]);

  const [items, setItems] = useState([
    {
      id: 2,
      name: "PlayStation 5",
      description: "Sony console",
      quantity: 12,
      price: "$499.99",
    },
    {
      id: 1,
      name: "Xbox Series X",
      description: "Microsoft console",
      quantity: 1,
      price: "$499.99",
    },
  ]);

  return (
    <React.Fragment>
      <ItemSelect items={items} handleItemSelect={handleItemSelect} />
      <Sidebar
        cartItems={cartItems}
        setCartItems={setCartItems}
        handleRemoveItem={handleRemoveItem}
      />
    </React.Fragment>
  );
}

export default ItemControl;
