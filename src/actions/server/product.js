"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// Named export for all products
export const getProducts = async () => {
  const productsCollection = await dbConnect(collections.PRODUCTS);
  const products = await productsCollection.find({}).toArray();

  return products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));
};

// Named export for single product
export const getSingleProduct = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const productsCollection = await dbConnect(collections.PRODUCTS);
  const product = await productsCollection.findOne({ _id: new ObjectId(id) });

  if (!product) return null;

  return {
    ...product,
    _id: product._id.toString(),
  };
};
