import { NextRequest, NextResponse } from "next/server";
import Service from "@/app/(models)/Service";
import connection from "@/lib/utils/db-connect";

export async function GET(request: NextRequest, { params }: { params: { categoryId: string } }) {
    await connection();
    try {
        const categoryId = params.categoryId;
        const services = await Service.find({ categoryId });
        return NextResponse.json({ services, message: "Services Fetched" }, { status: 200 },);

    } catch (error: any) {
        console.error("Error caught", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
