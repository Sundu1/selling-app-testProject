import React, { useEffect, useState } from "react";
import { Line, Bar, Pie, defaults } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { getProductsList } from "../model/getDataFromAPI";
import { getSaleData } from "../model/getDataFromAPI";
import LoadSpinning from "../ProductsComponents/LoadSpinning";

const DashBoard = () => {
  const [products, setProducts] = useState([]);
  const [productskeys, setProductsKeys] = useState([]);
  const [sales, setSales] = useState([]);
  const [salesKeys, setSalesKeys] = useState([]);
  const [salesItems, setSalesItems] = useState([]);

  useEffect(() => {
    getProductsList(setProducts, setProductsKeys);
    getSaleData(setSales, setSalesKeys, setSalesItems);
  }, []);

  sales.sort((a, b) => new Date(a.OrderDate) - new Date(b.OrderDate));

  const dataLine = {
    labels: sales.map((sale) => sale.OrderDate),
    datasets: [
      {
        label: "Monthly sale",
        data: sales.map((sale) => {
          return salesItems
            .map((item) => {
              return item.Sale === sale.OrderNumber
                ? item.Price * item.Quantity
                : "";
            })
            .reduce((prev, acc) => +(prev + acc));
        }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataPie = {
    labels: salesItems.map((item) => item.Product),
    datasets: [
      {
        label: "Monthly sale",
        data: salesItems.map((product) => product.Price * product.Quantity),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pb-11">
      <div className="flex justify-between p-2.5 text-center ">
        <div className="text-5xl p-4">DashBoard</div>
      </div>
      <div className="w-[50em]">
        <div className=" h-[20em] w-[40em]">
          {!sales.length ? (
            <LoadSpinning />
          ) : (
            <div className="flex">
              <div className="">
                <Line data={dataLine} height={400} width={600} />
              </div>
              <div>
                <Pie data={dataPie} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
