import { NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";
import Testimony from "@/app/(models)/Testimony";


export async function GET(req: any): Promise<NextResponse> {
    await connection();
    try {
        //const { category } = req.query
        const testimonyData = await Testimony.find();
        return NextResponse.json({ testimonyData, "message": "Testimony Data Fetched" }, { status: 200 });
    } catch (error: any) {
        console.error("Error caught", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
