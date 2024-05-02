import { NextRequest, NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";
import Service from "@/app/(models)/Service";

export async function GET(request: NextRequest) {
  await connection();
  try {
    // Sort by the 'rating' field in descending order and limit to top 10
    const topServiceList = await Service.find().sort({ rating: -1 }).limit(10);
    return NextResponse.json({ topServiceList, message: "Top rated services fetched" }, { status: 200 });

  } catch (error: any) {
    console.error("Error caught", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
