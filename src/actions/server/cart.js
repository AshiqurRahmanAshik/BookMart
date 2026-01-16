"use server";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { ObjectId } from "mongodb";

const { dbConnect, collections } = require("@/lib/dbConnect");
const cartCollection = dbConnect(collections.CART);

export const handleCart = async ({ product, inc = true }) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user || !product?._id) {
    return { success: false };
  }

  const productId = new ObjectId(product._id);

  // 1️⃣ Check if item already exists in cart
  const query = {
    email: user.email,
    productId,
  };

  const isAdded = await cartCollection.findOne(query);

  if (isAdded) {
    // 2️⃣ Update quantity
    const result = await cartCollection.updateOne(query, {
      $inc: { quantity: inc ? 1 : -1 },
    });

    return { success: result.modifiedCount > 0 };
  }

  // 3️⃣ Insert new cart item
  const discountedPrice =
    product.price - (product.price * (product.discount || 0)) / 100;

  const newData = {
    productId,
    email: user.email,
    title: product.title,
    quantity: 1,
    image: product.image,
    price: Math.round(discountedPrice),
    username: user.name,
    createdAt: new Date(),
  };

  const result = await cartCollection.insertOne(newData);

  return { success: result.acknowledged };
};
