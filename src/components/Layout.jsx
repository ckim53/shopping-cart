import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState([]);

  function handleAdd(itemId, itemQuantity) {
    const updatedItems = items.map(item => {
        if (item.id === itemId) {
          const diff = itemQuantity > item.quantity 
          ? itemQuantity - item.quantity 
          : item.quantity - itemQuantity
          
          setQuantity(itemQuantity > item.quantity ? quantity + diff : quantity - diff);

          return {
            ...item,
            inCart: true,
            quantity: itemQuantity
          };
        }
        return item;
      });
    setItems(updatedItems);
}

  return (
    <>
      <NavBar quantity={quantity} />
      <Outlet context={{ setItems, items, quantity, handleAdd }} />
    </>
  );
};

export default Layout;