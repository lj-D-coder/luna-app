import { NextRequest, NextResponse } from "next/server";
import connection from "@/lib/utils/db-connect";
import Search from "@/app/(models)/Search";

type SearchResult = {
  keyword: string;
  urlSlug: string;
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  await connection();
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query") || "";
    const searchResults = await Search.find({
      keyword: { $in: [new RegExp(query, "i")] },
    });

    // Flatten the results array
    const searches: SearchResult[] = [];
    searchResults.forEach((result: { keyword: string[]; urlSlug: string }) => {
      result.keyword.forEach((keyword: string) => {
        searches.push({ keyword, urlSlug: result.urlSlug });
      });
    });

    return NextResponse.json({ searches }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: "Error", error: error.message }, { status: 500 });
  }
}

export async function POST(req: any): Promise<NextResponse> {
  await connection();
  try {
    const searchData = await req.json(); // remove JSON.parse()

    await Search.create(searchData);
    console.log("Search data created");
    return NextResponse.json({ message: "Search data Created" }, { status: 201 });
  } catch (error: any) {
    console.error("Error caught", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
