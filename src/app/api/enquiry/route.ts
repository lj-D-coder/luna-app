import Enquiry from "@/app/(models)/Enquiry";
import { NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";

export async function POST(req: any): Promise<NextResponse> {
  await connection();
  try {
    const formData = await req.json(); // remove JSON.parse()
  
    await Enquiry.create(formData);
    console.log("New Enquiry saved");
    return NextResponse.json({ message: "Message Sent Successfully." }, { status: 201 });
  } catch (error: any) {
    console.error("Error caught", error); 
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

