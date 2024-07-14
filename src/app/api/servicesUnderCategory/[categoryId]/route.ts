import { NextRequest, NextResponse } from "next/server";
import Service from "@/app/(models)/Service";
import connection from "@/lib/utils/db-connect";
import Category from "@/app/(models)/Category";

export async function GET(request: NextRequest, { params }: { params: { categoryId: string } }) {
    await connection();
    try {
        const categoryName = params.categoryId;

       
        const categoryItem = await Category.find({ categoryName });

        const categoryId = categoryItem[0]._id;
        

        const services = await Service.find({ categoryId });
        return NextResponse.json({ services, message: "Services Fetched" }, { status: 200 },);

    } catch (error: any) {
        console.error("Error caught", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
