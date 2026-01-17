import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

export async function POST(req) {
  try {
    // ✅ session পাওয়া যাবে
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const { product, inc } = await req.json();

    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product missing" },
        { status: 400 },
      );
    }

    // 🔥 DEBUG (একবার console এ দেখো)
    console.log("USER EMAIL:", session.email);
    console.log("PRODUCT:", product.title);

    // 👉 এখানে cart DB logic বসবে
    // user email দিয়ে cart update করবে

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Cart API Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
