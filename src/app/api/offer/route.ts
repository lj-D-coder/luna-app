import { NextRequest, NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";
import Offer from "@/app/(models)/Offer";

export async function GET(request: NextRequest) {
    await connection();
    try {
        const offerData = await Offer.findById("662e7abcd922e7a8416776f9");
        return NextResponse.json({ offerData, message: "Offer Data Fetched" }, { status: 200 });
    } catch (error: any) {
        console.error("Error caught", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
