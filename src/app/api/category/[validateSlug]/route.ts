import Category from "@/app/(models)/Category";
import { NextRequest, NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";

export async function GET(request: NextRequest,{ params }: { params: { validateSlug: string } } ) {
  await connection();
  try {
    const categoryName = params.validateSlug;

    if (!categoryName) {
      return NextResponse.json({ message: "Category name not provided" }, { status: 400 });
    }

    const categoryItem = await Category.find({ categoryName });

    if (categoryItem.length === 0) {
      // No category items found
      return NextResponse.json({ message: "No category items found" }, { status: 404 });
    }

    return NextResponse.json({ message: "success", categoryItem }, { status: 200 });
  } catch (error: any) {
    console.error("Error caught", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
