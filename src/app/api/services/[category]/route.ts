import { NextRequest, NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";
import SubCategory from "@/app/(models)/SubCategory";

export async function GET(request: NextRequest, { params }: { params: { category: string } }) {
  await connection();
  try {
    const parentCategoryName = params.category;
    const subCategoryList = await SubCategory.find({ parentCategoryName });
    return NextResponse.json({ subCategoryList, message: "Sub category Fetched" }, { status: 200 },);

  } catch (error: any) {
    console.error("Error caught", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
