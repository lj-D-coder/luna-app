import Coupon from "@/app/(models)/Coupon";
import { NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";

export async function POST(req: any): Promise<NextResponse> {
  await connection();
  try {
    const couponData = await req.json(); // remove JSON.parse()
    await Coupon.create(couponData);
    console.log("Coupon created");
    return NextResponse.json({ message: "Coupon Created" }, { status: 201 });
  } catch (error: any) {
    console.error("Error caught", error); 
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
