import { SERVER_API_URL } from "../config";

const getProductsList = async (setProducts, setKeys) => {
  try {
    const response = await fetch(`${SERVER_API_URL}products`);
    const data = await response.json();

    if (!Object.keys(data[0])) return;
    setKeys(() => [...Object.keys(data[0])]);
    setProducts(() => [...data]);
  } catch (err) {
    console.error(err.message);
  }
};

const getSaleData = async (setSales, setSalesKeys, setSalesItems) => {
  try {
    const response = await fetch(`${SERVER_API_URL}sales`);
    const data = await response.json();

    const responseItem = await fetch(`${SERVER_API_URL}saleitems`);
    const dataItem = await responseItem.json();

    if (!dataItem) return;
    if (!data) return;
    if (!Object.keys(data[0])) return;
    setSalesKeys(() => [...Object.keys(data[0])]);
    setSales(() => [...data]);
    setSalesItems(() => [...dataItem]);
  } catch (err) {
    console.error(err.message);
  }
};

export { getProductsList, getSaleData };
