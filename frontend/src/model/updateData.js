import { SERVER_API_URL } from "../config";

const UpdateSaleData = async (data, OrderNumber) => {
  try {
    const response = await fetch(`${SERVER_API_URL}sales/${OrderNumber}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error(err.message);
  }
};

const UpdateSaleItemsData = (saleItems) =>
  saleItems.forEach(async (item) => {
    try {
      console.log(item);
      const responseItem = await fetch(`${SERVER_API_URL}saleitems/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
    } catch (error) {
      console.err(error.message);
      console.log(error.message);
    }
  });

export { UpdateSaleData, UpdateSaleItemsData };
