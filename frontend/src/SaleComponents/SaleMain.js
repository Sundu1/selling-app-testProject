import React, { useState, useEffect } from "react";
import { getSaleData } from "../model/getDataFromAPI";
import SaleMainlist from "./SaleMainlist";

const SaleMain = () => {
  const [sales, setSales] = useState([]);
  const [salesKeys, setSalesKeys] = useState([]);
  const [salesItems, setSalesItems] = useState([]);

  useEffect(() => {
    getSaleData(setSales, setSalesKeys, setSalesItems);
  }, []);

  const totalRevenue = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD",
  }).format(
    salesItems
      .map((item) => {
        return item.Quantity * item.Price;
      })
      .reduce((i, j) => i + j, 0)
  );

  return (
    <div className="pb-11">
      <div className="flex justify-between p-2.5 text-center ">
        <div className="text-5xl p-4">Sales</div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-around w-3/4">
          <div className="p-2.5 rounded-lg bg-blue-100 w-60 h-20 font-bold text-lg">
            Total Sale counts
            <div className="text-blue-500 text-3xl">{sales.length}</div>
          </div>
          <div className="p-2.5 rounded-lg w-60 bg-purple-100 font-bold  text-lg">
            Total Sale Revenue
            <div className="text-blue-500 text-3xl">{totalRevenue}</div>
          </div>
          <div className="p-2.5 rounded-lg w-60 bg-white font-bold text-lg"></div>
        </div>
      </div>
      <div className="text-center p-2.5 flex justify-center">
        <div className="h-3">
          <SaleMainlist
            sales={sales}
            salesKeys={salesKeys}
            salesItems={salesItems}
          />
        </div>
      </div>
    </div>
  );
};

export default SaleMain;
