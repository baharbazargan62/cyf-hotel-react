import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order({ orderType }) {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders => orders + 1);
  }
  return (
    <li className="list-group-item d-flex justify-content-around align-items-center">
      {orderType}: {orders} <RestaurantButton orderOneProps={orderOne} />
    </li>
  );
}
export default Order;
