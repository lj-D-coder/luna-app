import { NextRequest, NextResponse } from "next/server";
import Service from "@/app/(models)/Service";
import connection from "@/lib/utils/db-connect";

export async function GET(request: NextRequest, { params }: { params: { category: string } }) {
  await connection();
  try {
    const category = params.category;
    const services = await Service.find({ category });
    return NextResponse.json({ services }, { status: 200 });
  } catch (error: any) {
    console.error("Error caught", error); 
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
