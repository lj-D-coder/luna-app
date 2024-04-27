import Category from "@/app/(models)/Category";
import { NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";

export async function GET(req: any): Promise<NextResponse> {
    await connection();
    try {
        const categoryItem = await Category.find().sort({ orderNo: 1 });
        return NextResponse.json({ categoryItem, message: "Category Fetched" }, { status: 200 },);
    } catch (error: any) {
        console.error("Error caught", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}


export const revalidate = 0;
