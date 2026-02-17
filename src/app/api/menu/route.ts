import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";
import Papa from "papaparse";
import { getMenuByCategory } from "@/lib/menu-data";
import { parseMenuFile } from "@/lib/menu-parser";

const MENU_FILE = path.join(process.cwd(), "public", "data", "menu.csv");

export async function GET() {
  try {
    const categories = await getMenuByCategory();
    return NextResponse.json(categories);
  } catch {
    return NextResponse.json(
      { error: "Failed to load menu data" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const extension = file.name.split(".").pop()?.toLowerCase();
    if (!extension || !["csv", "xlsx", "xls"].includes(extension)) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload .csv or .xlsx" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const items = parseMenuFile(buffer, extension);

    const csv = Papa.unparse(
      items.map((item) => ({
        category: item.category,
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image || "",
        available: item.available ? "yes" : "no",
      }))
    );

    await fs.writeFile(MENU_FILE, csv, "utf-8");

    revalidatePath("/menu");
    revalidatePath("/");

    return NextResponse.json({
      success: true,
      message: `Menu updated with ${items.length} items`,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to update menu",
      },
      { status: 500 }
    );
  }
}
