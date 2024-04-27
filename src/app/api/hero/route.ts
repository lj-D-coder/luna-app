import { NextRequest, NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";
import Hero from "@/app/(models)/Hero";

export async function GET(request: NextRequest) {
    await connection();
    try {
        const heroData = await Hero.find();
        return NextResponse.json({ heroData, message: "HeroData Data Fetched" }, { status: 200 },);
    } catch (error: any) {
        console.error("Error caught", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export const revalidate = 0;