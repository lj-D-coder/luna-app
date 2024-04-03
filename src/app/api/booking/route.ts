import Booking from "@/app/(models)/Booking";
import { NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";

export async function POST(req: any): Promise<NextResponse> {
  await connection();
  try {
    const bookingData = await req.json(); // remove JSON.parse()
  
    // console.log(body);
    await Booking.create(bookingData);
    console.log("Booking created");
    return NextResponse.json({ message: "Booking Created" }, { status: 201 });
  } catch (error: any) {
    console.error("Error caught", error); 
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}



export async function GET(): Promise<NextResponse> {
  await connection();
  try {
    const bookings = await Booking.find();
    return NextResponse.json({ bookings }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
