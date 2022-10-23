import { SERVER_API_URL } from "../config";

const getSingleProduct = async (id, setData) => {
  try {
    const response = await fetch(`${SERVER_API_URL}products/${id}/`);
    const data = await response.json();

    // console.log(data);
    setData({
      ProductKey: data.ProductKey,
      ProductSKU: data.ProductSKU,
      ProductDescription: data.ProductDescription,
      ProductColor: data.ProductColor,
      ProductStyle: data.ProductStyle,
      ProductPrice: data.ProductPrice,
      ProductSubcategoryKey: data.ProductSubcategoryKey,
      ModelName: data.ModelName,
      ProductName: data.ProductName,
      ProductSize: data.ProductSize,
      ProductCost: data.ProductCost,
      Quantity: data.Quantity,
    });
  } catch (err) {
    console.error(err.message);
  }
};

const getSingleSaleData = async (setSingleSale, id) => {
  try {
    const response = await fetch(`${SERVER_API_URL}sales/${id}`);
    const data = await response.json();
    if (!data) return;
    setSingleSale({ ...data });
  } catch (err) {
    console.error(err.message);
  }
};

const getSingleSaleItem = async (setSingleItem, id) => {
  try {
    const response = await fetch(`${SERVER_API_URL}saleitems/${id}`);
    const data = await response.json();
    if (!data) return;
    setSingleItem([...data]);
  } catch (err) {
    console.error(err.message);
  }
};

export { getSingleProduct, getSingleSaleData, getSingleSaleItem };
