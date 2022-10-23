import React, { useState, useEffect, Fragment } from "react";
import { PostProductsData } from "../model/postData";

const CreateNewProduct = ({ products, productKeys }) => {
  const [modalToggle, setModalToggle] = useState(false);
  const [ProductKey, setProductKey] = useState("");
  const [ProductSubcategoryKey, setProductSubcategoryKey] = useState("");
  const [ProductSKU, setProductSKU] = useState("");
  const [ProductName, setProductName] = useState("");
  const [ModelName, setModelName] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductColor, setProductColor] = useState("");
  const [ProductSize, setProductSize] = useState("");
  const [ProductStyle, setProductStyle] = useState("");
  const [ProductCost, setProductCost] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [Quantity, setQuantity] = useState("");

  const handleModalToggle = () => {
    setModalToggle(!modalToggle);
  };

  const data = {
    ProductKey,
    ProductSubcategoryKey,
    ProductSKU,
    ProductName,
    ModelName,
    ProductDescription,
    ProductColor,
    ProductSize,
    ProductStyle,
    ProductCost,
    ProductPrice,
    Quantity,
  };

  const handleProductPost = (e) => {
    PostProductsData(data);
    window.location.reload(true);
  };

  return (
    <Fragment>
      <div className="flex justify-center">
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
                  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-modal-toggle="authentication-modal"
          onClick={handleModalToggle}
        >
          Add Product
        </button>
      </div>

      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={
          modalToggle
            ? "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
            : "hidden"
        }
      >
        <div className="flex justify-center h-full w-full">
          <div
            className="flex justify-center h-full backdrop-blur-sm w-full"
            onClick={handleModalToggle}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="modal_input_div rounded-xl">
              <form className="space-y-6" action="#">
                <div className="grid grid-cols-2">
                  <div className="flex justify-between p-2.5 w-96">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2.5"
                    >
                      ProductKey
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={ProductKey}
                      onChange={(e) => setProductKey(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between p-2.5 w-96">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2.5"
                    >
                      ProductSubcategoryKey
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      onChange={(e) => setProductSubcategoryKey(e.target.value)}
                      value={ProductSubcategoryKey}
                      required
                    />
                  </div>
                  <div className="flex justify-between p-2.5 w-96">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2.5"
                    >
                      ProductSKU
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={ProductSKU}
                      onChange={(e) => setProductSKU(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between p-2.5 w-96">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2.5"
                    >
                      ModelName
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={ModelName}
                      onChange={(e) => setModelName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between p-2.5 w-96">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2.5"
                    >
                      ProductDescription
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={ProductDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between p-2.5 w-96">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2.5"
                    >
                      ProductName
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={ProductName}
                      onChange={(e) => setProductName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between p-2.5 w-96">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2.5"
                    >
                      ProductColor
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={ProductColor}
                      onChange={(e) => setProductColor(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between p-2.5 w-96">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2.5"
                    >
                      ProductSize
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={ProductSize}
                      onChange={(e) => setProductSize(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between p-2.5 w-96">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2.5"
                    >
                      ProductStyle
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={ProductStyle}
                      onChange={(e) => setProductStyle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between p-2.5 w-96">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2.5"
                    >
                      ProductCost
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={ProductCost}
                      onChange={(e) => setProductCost(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between p-2.5 w-96">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2.5"
                    >
                      ProductPrice
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={ProductPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between p-2.5 w-96">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2.5"
                    >
                      Quantity
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={Quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-96 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleProductPost}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateNewProduct;
