"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const CartButton = ({ product }) => {
  const { status } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd2Cart = async () => {
    if (status === "loading") return;

    if (status !== "authenticated") {
      router.push(`/login?callbackUrl=${pathname}`);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product,
          inc: true,
        }),
      });

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: result.alreadyAdded ? "Already in Cart" : "Added to Cart",
          text: product?.title,
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        Swal.fire("Oops!", result.message || "Something went wrong", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to add cart", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleAdd2Cart}
      disabled={isLoading || status === "loading"}
      className="btn btn-primary w-full flex gap-2 items-center"
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : (
        <>
          <FaCartPlus />
          Add to Cart
        </>
      )}
    </button>
  );
};

export default CartButton;
