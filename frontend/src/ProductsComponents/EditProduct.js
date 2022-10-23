import React, { useEffect, useState, Fragment } from "react";
import { getSingleProduct, deleteSingleProduct } from "../model/getSingleData";
import { BsPencilSquare } from "react-icons/bs";

const EditProduct = ({ id }) => {
  const [modalToggle, setModalToggle] = useState(false);
  const [data, setData] = useState({
    ProductKey: "",
    ProductSKU: "",
    ProductDescription: "",
    ProductColor: "",
    ProductStyle: "",
    ProductPrice: "",
    ProductSubcategoryKey: "",
    ModelName: "",
    ProductName: "",
    ProductSize: "",
    ProductCost: "",
    Quantity: "",
  });

  const handleModalToggle = () => {
    setModalToggle(!modalToggle);
    getSingleProduct(id, setData);
  };

  const handleProductPost = () => {
    console.log(data);
  };

  return (
    <Fragment>
      <div className="flex justify-center content-center">
        <button
          className="bg-green-500 p-1 rounded hover:bg-green-800 hover:p-1.5"
          onClick={handleModalToggle}
        >
          <BsPencilSquare className="text-white" />
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
                      Quantity
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      // value={Quantity}
                      // onChange={(e) => setQuantity(e.target.value)}
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

export default EditProduct;
