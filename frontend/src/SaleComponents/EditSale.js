import React, { useEffect, useState, Fragment } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { getSingleSaleData, getSingleSaleItem } from "../model/getSingleData";
import LoadSpinning from "../ProductsComponents/LoadSpinning";
import { UpdateSaleData, UpdateSaleItemsData } from "../model/updateData";

const EditSale = ({ id }) => {
  const [toggle, setToggle] = useState(false);
  const [singleSale, getSingleSale] = useState({});
  const [singleItem, setSingleItem] = useState("");

  const [dataToPost, setDataToPost] = useState({
    OrderDate: "",
    StockDate: "",
    OrderNumber: "",
    CustomerKey: "",
    TerritoryKey: "",
  });

  const SalesKeys = Object.keys(dataToPost);
  const [saleItemsData, setSaleItemsData] = useState([
    {
      Product: "",
      Quantity: "",
      Price: "",
    },
  ]);

  const handleModalToggle = () => {
    setToggle(!toggle);
    getSingleSaleData(getSingleSale, id);
    getSingleSaleItem(setSingleItem, id);
  };

  const handleProductPost = (e) => {
    e.preventDefault();
    UpdateSaleData(singleSale, id);
    setTimeout(() => {
      UpdateSaleItemsData(singleItem);
      window.location.reload(true);
    }, 1000);
  };

  const handleOnChangeSaleItem = (e, index) => {
    if (singleSale.OrderNumber === "")
      return alert("Please choose OrderNumber");

    const { name, value } = e.target;
    const list = [...singleItem];
    list[index][name] = value;
    list[index]["Sale"] = singleSale.OrderNumber;
    setSingleItem(list);
  };

  const handleSaleItemAdd = () => {
    setSingleItem([...singleItem, { Product: "", Quantity: "", Price: "" }]);
  };

  const handleSaleItemRemove = (e, index) => {
    e.preventDefault();
    const list = [...singleItem];
    console.log(list);
    list.splice(index, 1);
    setSingleItem(list);
  };

  return (
    <Fragment>
      <div className="flex justify-center content-center">
        <button
          className="bg-green-500 p-1 rounded hover:bg-green-800"
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
          toggle
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
                  {SalesKeys.map((key, i) => {
                    return (
                      <div key={i} className="flex justify-between p-2.5 w-96">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 p-2.5"
                        >
                          {key}
                        </label>
                        <input
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                          value={singleSale[key]}
                          onChange={(e) =>
                            getSingleSale((old) => ({
                              ...old,
                              [key]: e.target.value,
                            }))
                          }
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="bg-gray-200 w-[49rem] h-[11rem] overflow-auto rounded-xl">
                  <div className="">
                    <table className="">
                      <thead>
                        <tr>
                          <th className="text-lg">Product</th>
                          <th className="text-lg">Quantity</th>
                          <th className="text-lg">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {singleItem &&
                          singleItem.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td className="border-x-[20px]">
                                  <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                              focus:ring-blue-500 focus:border-blue-500 w-36 p-2.5 dark:bg-gray-600
                                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    name="Product"
                                    value={item.Product}
                                    onChange={(e) =>
                                      handleOnChangeSaleItem(e, i)
                                    }
                                  />
                                </td>
                                <td className="border-x-[5px]">
                                  <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                              focus:ring-blue-500 focus:border-blue-500 w-36 p-2.5 dark:bg-gray-600
                                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    name="Quantity"
                                    value={item.Quantity}
                                    onChange={(e) =>
                                      handleOnChangeSaleItem(e, i)
                                    }
                                  />
                                </td>
                                <td className="border-x-[5px]">
                                  <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                              focus:ring-blue-500 focus:border-blue-500 w-36 p-2.5 dark:bg-gray-600
                                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    name="Price"
                                    value={item.Price}
                                    onChange={(e) =>
                                      handleOnChangeSaleItem(e, i)
                                    }
                                  />
                                </td>
                                <td>
                                  {singleItem.length !== 1 && (
                                    <button
                                      className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none
                                              focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600
                                              dark:hover:bg-red-700 dark:focus:ring-red-800"
                                      onClick={(e) =>
                                        handleSaleItemRemove(e, i)
                                      }
                                    >
                                      Delete
                                    </button>
                                  )}
                                </td>
                                <td>
                                  {singleItem.length - 1 === i && (
                                    <button
                                      className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                                              focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
                                                dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                      onClick={handleSaleItemAdd}
                                    >
                                      add product
                                    </button>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-96 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleProductPost}
                >
                  Update Sale
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditSale;
