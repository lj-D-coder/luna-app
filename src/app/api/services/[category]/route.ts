import { NextRequest, NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";
import SubCategory from "@/app/(models)/SubCategory";
import Category from "@/app/(models)/Category";

export async function GET(request: NextRequest, { params }: { params: { category: string } }) {
  await connection();
  try {
    const categoryName = params.category;
    const categoryItem = await Category.find({ categoryName });

    const categoryId = categoryItem[0]._id;

    // Sort by the 'orderNo' field in ascending order
    const subCategoryList = await SubCategory.find({ categoryId }).sort({ orderNo: 1 });
    return NextResponse.json({ subCategoryList, message: "Sub category Fetched" }, { status: 200 });

  } catch (error: any) {
    console.error("Error caught", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
