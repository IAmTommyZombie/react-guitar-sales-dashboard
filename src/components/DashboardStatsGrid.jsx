import React from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";

const DashboardStatsGrid = () => {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <p className=" font-semibold text-xl text-gray-700 ">$37,261.37</p>
            <span className=" text-sm text-green-500 pl-2">+32%</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Expenses
          </span>
          <div className="flex items-center">
            <p className=" font-semibold text-xl text-gray-700 ">$3,672.52</p>
            <span className=" text-sm text-green-500 pl-2">+27%</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Customers
          </span>
          <div className="flex items-center">
            <p className=" font-semibold text-xl text-gray-700 ">983</p>
            <span className=" text-sm text-green-500 pl-2">+61%</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Orders</span>
          <div className="flex items-center">
            <p className=" font-semibold text-xl text-gray-700 ">2,209</p>
            <span className=" text-sm text-red-500 pl-2">-4%</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardStatsGrid;

function BoxWrapper({ children }) {
  return (
    <div
      className="bg-white
     rounded-sm
     p-4
     flex-1
     border
     border-gray-200
     flex
     items-center"
    >
      {children}
    </div>
  );
}
