import React, { useState, useEffect } from "react";
import { SERVER_API_URL } from "../config";

const PostProductsData = async (data) => {
  try {
    const response = await fetch(`${SERVER_API_URL}products/post/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err.message);
  }
};

const PostSaleData = async (sale) => {
  try {
    const response = await fetch(`${SERVER_API_URL}sales/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sale),
    });
  } catch (err) {
    console.error(err.message);
  }
};

const PostSaleItemsData = (saleItems) =>
  saleItems.forEach(async (item) => {
    try {
      console.log(item);
      const responseItem = await fetch(`${SERVER_API_URL}saleitems/`, {
        method: "POST",
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

export { PostProductsData, PostSaleData, PostSaleItemsData };
