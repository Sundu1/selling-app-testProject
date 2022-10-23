import React, { useState, useEffect, Fragment } from "react";
import EditProduct from "./EditProduct";
import CreateNewProduct from "./CreateNewProduct";
import DeleteProducts from "./DeleteProducts";
import UploadProductFile from "./UploadProductFile";
import LoadSpinning from "./LoadSpinning";

const MainProductList = ({ products, productKeys }) => {
  const [checked, setChecked] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  // sort begins
  const [productsSort, setProductsSort] = useState([]);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    setProductsSort([...products]);
  }, [products]);

  const sortById = (e) => {
    if (e.target.textContent !== "ProductKey") return;
    const productsCopy = [...productsSort];
    productsCopy.sort((productA, productB) => {
      if (sorted.reversed) {
        return productA.ProductKey - productB.ProductKey;
      }
      return productB.ProductKey - productA.ProductKey;
    });
    setProductsSort(productsCopy);
    setSorted({ sorted: "id", reversed: !sorted.reversed });
  };

  // sort ends here

  // pagination begins
  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = productsSort.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const Pagination = ({ productsTotal, productsPerPage, paginate }) => {
    const pages = [];
    for (let i = 1; i < productsTotal / productsPerPage; i++) pages.push(i);

    return (
      <div className="flex justify-center content-center">
        {pages.map((number) => {
          return (
            <div
              className="bg-teal-200 hover:bg-teal-800 font-bold p-1 rounded w-8 border-r click:bg-black"
              key={number}
              onClick={() => paginate(number)}
            >
              {number}
            </div>
          );
        })}
      </div>
    );
  };
  // pagination ends here

  // search begin
  const searchItem = (e) => {
    if (e.target.value === "") {
      return setProductsSort([...products]), setSearchPhrase(e.target.value);
    } else {
      const matchedProducts = productsSort.filter((product) => {
        return `${product.ProductKey} ${product.ProductName}`
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setProductsSort(matchedProducts);
      setSearchPhrase(e.target.value);
    }
  };

  // search ends here
  const handleChecked = (e, id) => {
    if (e.target.checked) setChecked((old) => [...old, id]);
    else {
      const index = checked.indexOf(id);
      if (index > -1) {
        checked.splice(index, 1);
      }
    }
  };

  const handleCheckedAllItems = (e) => {
    const checkboxs = document.querySelectorAll("#checkbox");
    if (e.target.checked)
      products.forEach((product) => {
        setChecked((old) => [...old, product.ProductKey]);
        checkboxs.forEach((input) => (input.checked = true));
      });
    else {
      products.forEach(() => checked.splice(0, products.length));
      checkboxs.forEach((input) => (input.checked = false));
    }
  };

  return (
    <Fragment>
      <div className="flex justify-around p-2 w-[35em]">
        <DeleteProducts ids={checked} />
        <CreateNewProduct products={products} productKeys={productKeys} />
        <UploadProductFile />
        <div className="flex">
          <input
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-600
                                dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search products"
            value={searchPhrase}
            onChange={searchItem}
          />
        </div>
      </div>
      <div className="p-1 bg-gray-100 rounded-xl h-[30rem]">
        <table className="w-[95em] text-xs">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onClick={(e) => handleCheckedAllItems(e)}
                />
              </th>
              <th className="p-2">Edit</th>
              <th className="p-2" onClick={(e) => sortById(e)}>
                ProductKey
              </th>
              <th className="p-2">ProductSubcategoryKey</th>
              <th className="p-2">ProductSKU</th>
              <th className="p-2">ProductName</th>
              <th className="p-2">ModelName</th>
              <th className="p-2">ProductDescription</th>
              <th className="p-2">ProductColor</th>
              <th className="p-2">ProductSize</th>
              <th className="p-2">ProductStyle</th>
              <th className="p-2">ProductCost</th>
              <th className="p-2">ProductPrice</th>
              <th className="p-2">Quantity</th>
              {/* {productKeys.map((productKey, i) => {
                return (
                  <th key={i} className="p-2" onClick={(e) => sortById(e)}>
                    {productKey.length > 15
                      ? `${productKey}`.substring(0, 20) + "..."
                      : productKey}
                  </th>
                );
              })} */}
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((pro, i) => {
              return (
                <tr key={i}>
                  <td className="p-1.5">
                    <input
                      id="checkbox"
                      type="checkbox"
                      onClick={(e) => handleChecked(e, pro.ProductKey)}
                    />
                  </td>
                  <td>
                    <EditProduct id={pro.ProductKey} />
                  </td>
                  {Object.values(pro).map((pr, i) => {
                    return (
                      <td className="p-1.5" key={i}>
                        {pr.length > 20 ? `${pr}`.substring(0, 20) + "..." : pr}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {currentProducts.length ? "" : <LoadSpinning />}
      </div>
      <Pagination
        productsTotal={products.length}
        productsPerPage={productsPerPage}
        paginate={paginate}
      />
    </Fragment>
  );
};

export default MainProductList;
