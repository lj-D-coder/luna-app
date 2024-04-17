import Coupon from "@/app/(models)/Coupon";
import { NextRequest, NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";

export async function GET(request: NextRequest, { params }: { params: { code: string } }) {

  await connection();
  try {
    const code = params.code;
  
    const coupon = await Coupon.findOne({ code });
    if (!coupon) {
      return NextResponse.json({ message: "Coupon not found" }, { status: 404 });
    }

    const now = new Date();
    const isValid = coupon.isActive && coupon.expiryDate > now;

    return NextResponse.json({ valid: isValid, discount: isValid ? coupon.discount : 0 }, { status: 200 });
  } catch (error: any) {
    console.error("Error caught", error); 
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
