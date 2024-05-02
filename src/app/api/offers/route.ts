import { NextRequest, NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";
import Offer from "@/app/(models)/Offer";

export async function GET(request: NextRequest) {
    await connection();
    const { searchParams } = new URL(request.url);
    try {
        const offerData = await Offer.find({});
        return NextResponse.json({ offerData, message: "Offer Data Fetched" }, { status: 200 });
    } catch (error: any) {
        console.error("Error caught", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
