import { SERVER_API_URL } from "../config";
import axios from "axios";

const UploadProductFileToAPI = async (data) => {
  try {
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const url = `${SERVER_API_URL}products/upload/`;
    const formData = new FormData();
    formData.append("file", data);
    axios.post(url, formData, config);
  } catch (err) {
    console.error(err.message);
  }
};

export { UploadProductFileToAPI };
