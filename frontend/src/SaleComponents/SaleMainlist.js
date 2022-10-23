import React, { useEffect, useState, Fragment } from "react";
import LoadSpinning from "../ProductsComponents/LoadSpinning";
import CreateSale from "./CreateSale";
import EditSale from "./EditSale";
import DeleteSale from "./DeleteSale";

const SaleMainlist = ({ sales, salesKeys, salesItems }) => {
  const [checked, setChecked] = useState([]);

  const handleChecked = (e, id) => {
    if (e.target.checked) setChecked((old) => [...old, id]);
    else {
      const index = checked.indexOf(id);
      if (index > -1) {
        checked.splice(index, 1);
      }
    }
  };
  console.log(new Set(checked));

  const handleCheckedAllItems = (e) => {
    const checkboxs = document.querySelectorAll("#checkbox");
    if (e.target.checked)
      sales.forEach((sale) => {
        setChecked((old) => [...old, sale.OrderNumber]);
        checkboxs.forEach((input) => (input.checked = true));
      });
    else {
      sales.forEach(() => checked.splice(0, sales.length));
      checkboxs.forEach((input) => {
        input.checked = false;
      });
    }
  };
  return (
    <Fragment>
      <div className="flex p-2">
        <DeleteSale ids={checked} />
        <CreateSale sales={sales} />
      </div>
      <div className="flex justify-center p-1 bg-gray-100 rounded-xl h-[25rem]">
        <div>
          <table className="w-[95em] text-xs">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onClick={(e) => handleCheckedAllItems(e)}
                  />
                </th>
                <th>Edit</th>
                <th>OrderNumber</th>
                <th>OrderDate</th>
                <th>StockDate</th>
                <th>CustomerKey</th>
                <th>TerritoryKey</th>
                <th>Products</th>
                <th>total Sale Price</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale, i) => {
                return (
                  <tr key={i} className="">
                    <td className="p-1.5">
                      <input
                        id="checkbox"
                        type="checkbox"
                        onClick={(e) => handleChecked(e, sale.OrderNumber)}
                      />
                    </td>
                    <td className="p-1.5">
                      <EditSale id={sale.OrderNumber} />
                    </td>
                    {Object.values(sale).map((sale, i) => {
                      return (
                        <td className="p-1.5" key={i}>
                          {sale}
                        </td>
                      );
                    })}
                    <td className="w-1">
                      {salesItems.map((item) => {
                        return item.Sale === sale.OrderNumber
                          ? item.Product + ","
                          : null;
                      })}
                    </td>
                    <td>
                      {salesItems
                        .map((item) => {
                          return item.Sale === sale.OrderNumber
                            ? item.Price * item.Quantity
                            : "";
                        })
                        .reduce((prev, acc) => +(prev + acc))}
                      $
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {sales.length ? "" : <LoadSpinning />}
      </div>
    </Fragment>
  );
};

export default SaleMainlist;
