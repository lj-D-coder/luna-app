import { NextRequest, NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";
import Banner from "@/app/(models)/Banner";

export async function GET(request: NextRequest) {
    await connection();
    try {
        const bannerData = await Banner.find();
        return NextResponse.json({ bannerData, message: "Banner Data Fetched" }, { status: 200 },);
    } catch (error: any) {
        console.error("Error caught", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export const revalidate = 0;