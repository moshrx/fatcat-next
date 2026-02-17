import fs from "fs/promises";
import path from "path";
import { parseCSV } from "./menu-parser";
import { MenuItem, MenuCategory } from "@/types/menu";

const MENU_FILE = path.join(process.cwd(), "public", "data", "menu.csv");

/**
 * Fetch menu from Google Sheets (published as CSV).
 * Falls back to local CSV file if the env var is not set or fetch fails.
 */
async function fetchMenuCSV(): Promise<string> {
  const sheetUrl = process.env.GOOGLE_SHEET_CSV_URL;

  if (sheetUrl) {
    try {
      const res = await fetch(sheetUrl, { next: { revalidate: 60 } });
      if (res.ok) return await res.text();
    } catch {
      // Fall through to local file
    }
  }

  // Fallback: read local CSV
  return fs.readFile(MENU_FILE, "utf-8");
}

export async function getMenuItems(): Promise<MenuItem[]> {
  const content = await fetchMenuCSV();
  return parseCSV(content);
}

export async function getMenuByCategory(): Promise<MenuCategory[]> {
  const items = await getMenuItems();
  const categoryMap = new Map<string, MenuItem[]>();

  for (const item of items) {
    if (!item.available) continue;
    const existing = categoryMap.get(item.category) || [];
    existing.push(item);
    categoryMap.set(item.category, existing);
  }

  return Array.from(categoryMap.entries()).map(([name, items]) => ({
    name,
    items,
  }));
}
