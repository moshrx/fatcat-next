import Papa from "papaparse";
import * as XLSX from "xlsx";
import { MenuItem } from "@/types/menu";

interface RawRow {
  category?: string;
  name?: string;
  description?: string;
  price?: string;
  image?: string;
  available?: string;
}

function toMenuItem(row: RawRow): MenuItem | null {
  if (!row.category || !row.name || !row.description || !row.price) {
    return null;
  }

  const price = parseFloat(row.price);
  if (isNaN(price)) return null;

  const available = row.available
    ? ["yes", "true", "1"].includes(row.available.toLowerCase().trim())
    : true;

  return {
    category: row.category.trim(),
    name: row.name.trim(),
    description: row.description.trim(),
    price,
    image: row.image?.trim() || undefined,
    available,
  };
}

export function parseCSV(content: string): MenuItem[] {
  const result = Papa.parse<RawRow>(content, {
    header: true,
    skipEmptyLines: true,
  });

  const items: MenuItem[] = [];
  for (const row of result.data) {
    const item = toMenuItem(row);
    if (item) items.push(item);
  }

  if (items.length === 0) {
    throw new Error(
      "No valid menu items found. Ensure CSV has columns: category, name, description, price"
    );
  }

  return items;
}

export function parseExcel(buffer: Buffer): MenuItem[] {
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) throw new Error("Excel file has no sheets");

  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json<RawRow>(sheet);

  const items: MenuItem[] = [];
  for (const row of rows) {
    const item = toMenuItem(row);
    if (item) items.push(item);
  }

  if (items.length === 0) {
    throw new Error(
      "No valid menu items found. Ensure spreadsheet has columns: category, name, description, price"
    );
  }

  return items;
}

export function parseMenuFile(buffer: Buffer, extension: string): MenuItem[] {
  if (extension === "csv") {
    return parseCSV(buffer.toString("utf-8"));
  } else if (extension === "xlsx" || extension === "xls") {
    return parseExcel(buffer);
  }
  throw new Error("Unsupported file type. Please upload .csv, .xlsx, or .xls");
}
