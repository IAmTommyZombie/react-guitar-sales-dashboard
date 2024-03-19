import React from "react";
import { Link } from "react-router-dom";
import { getOrderStatus } from "../lib/utility/order-status";

const recentOrderData = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "James Hetfield",
    order_date: "2024-03-17T03:24:00",
    order_total: "$1435.50",
    current_order_status: "PLACED",
    shipment_address: "El Cerito, CA 94530",
  },
  {
    id: "7",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Dave Mustaine",
    order_date: "2024-03-14T05:24:00",
    order_total: "$2296.35",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "2",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Dave Davidson",
    order_date: "2024-03-17T07:14:00",
    order_total: "$1836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Boston, MA 02134",
  },
  {
    id: "3",
    product_id: "9854",
    customer_id: "87832",
    customer_name: "Scott Ian",
    order_date: "2024-03-16T12:40:00",
    order_total: "$1334.50",
    current_order_status: "SHIPPED",
    shipment_address: "Queens, New York 11106",
  },
  {
    id: "4",
    product_id: "8763",
    customer_id: "09832",
    customer_name: "Kurt Cobain",
    order_date: "2024-03-14T03:24:00",
    order_total: "$3876.00",
    current_order_status: "OUT_FOR_DELIVERY",
    shipment_address: "Seattle, WA 98101",
  },
  {
    id: "5",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Saul Hudson",
    order_date: "2024-03-14T05:24:00",
    order_total: "$1496.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90210",
  },
];

const RecentOrders = () => {
  return (
    <div className=" bg-white px-4 pt-3 pb-4 rounded-sm border-gray-200 flex-1">
      <p className=" font-bold text-gray-700">Recent Orders</p>
      <div className="mt-3">
        <table className=" w-full text-gray-700 border-x border-gray-200 rounded-sm">
          <thead>
            <tr>
              <td>ID</td>
              <td>Product ID</td>
              <td>Customer Name</td>
              <td>Order Date</td>
              <td>Order Total</td>
              <td>Shipping Address</td>
              <td>Order Status</td>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id}>
                <td>
                  <Link to={`/order/${order.id}`}>#{order.id}</Link>
                </td>
                <td>
                  <Link to={`/product/${order.id}`}>{order.product_id}</Link>
                </td>
                <td>
                  <Link to={`/customer/${order.customer_id}`}>
                    {order.customer_name}
                  </Link>
                </td>
                <td>{new Date(order.order_date).toLocaleDateString()}</td>
                <td>{order.order_total}</td>
                <td>{order.shipment_address}</td>
                <td>{getOrderStatus(order.current_order_status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
