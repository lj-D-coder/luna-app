import Service from "@/app/(models)/Service";
import { NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";
// import type { NextApiRequest, NextApiResponse } from 'next'


export async function GET(req: any): Promise<NextResponse> {

  await connection();
  try {
    //const { category } = req.query
    console.log(req)
    const services = await Service.find();
    return NextResponse.json({ services }, { status: 200 });
  } catch (error: any) {
    console.error("Error caught", error); 
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
