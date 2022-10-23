import { SERVER_API_URL } from "../config";

const DeleteData = async (id) => {
  try {
    const response = await fetch(`${SERVER_API_URL}products/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

const DeleteSaleData = async (id) => {
  try {
    const response = await fetch(`${SERVER_API_URL}sales/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err.message);
  }
};

const DeleteSaleItem = async (saleKey) => {
  try {
    const response = await fetch(`${SERVER_API_URL}saleitems/${saleKey}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err.message);
  }
};

export { DeleteData, DeleteSaleData, DeleteSaleItem };
