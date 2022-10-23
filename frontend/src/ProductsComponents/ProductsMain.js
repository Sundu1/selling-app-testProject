import React, { useState, useEffect, Fragment } from "react";
import { getProductsList } from "../model/getDataFromAPI";
import MainProductList from "./MainProductList";

export default function ProductsMain() {
  const [products, setProducts] = useState([]);
  const [productKeys, setProductKeys] = useState([]);

  useEffect(() => {
    getProductsList(setProducts, setProductKeys);
  }, []);

  const TotalCost = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD",
  }).format(
    products
      .map((product) => {
        return product.Quantity * product.ProductCost;
      })
      .reduce((i, j) => i + j, 0)
  );
  const TotalIndividualItems = products.length;

  const TotalQuantities = products
    .map((product) => product.Quantity)
    .reduce((i, j) => i + j, 0);

  return (
    <div className="pb-11">
      <div>
        <div className="flex justify-between p-2.5">
          <div className="text-5xl p-4">Products</div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-around w-3/4">
            <div className="p-2.5 rounded-lg bg-blue-100 w-60 h-20 font-bold text-lg">
              Total Individual Items
              <div className="text-blue-500 text-3xl">
                {TotalIndividualItems}
              </div>
            </div>
            <div className="p-2.5 rounded-lg w-60 bg-purple-100 font-bold  text-lg">
              Total Quantities
              <div className="text-blue-500 text-3xl">{TotalQuantities}</div>
            </div>
            <div className="p-2.5 rounded-lg w-60 bg-yellow-100 font-bold text-lg">
              Total Cost
              <div className="text-blue-500 text-3xl">{TotalCost}</div>
            </div>
          </div>
        </div>
        <div className="text-center p-2.5 flex justify-center">
          <div>
            <div className="h-3"></div>
            <MainProductList products={products} productKeys={productKeys} />
          </div>
        </div>
      </div>
    </div>
  );
}
