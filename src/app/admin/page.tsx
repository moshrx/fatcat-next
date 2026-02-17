import { Metadata } from "next";
import FileUploader from "@/components/admin/FileUploader";

export const metadata: Metadata = {
  title: "Admin | Fatcat Bakery",
};

export default function AdminPage() {
  const hasGoogleSheet = !!process.env.GOOGLE_SHEET_CSV_URL;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold text-brown-800">Menu Management</h1>

      {/* Google Sheets section */}
      <div className="mb-10 rounded-2xl border border-cream-200 bg-white p-6 shadow-md">
        <h2 className="mb-3 text-lg font-bold text-brown-700">
          Google Sheets Integration
        </h2>
        {hasGoogleSheet ? (
          <div className="rounded-xl bg-green-50 p-4 text-green-700">
            ✓ Connected — the menu updates automatically when the Google Sheet is
            edited. Changes appear within 60 seconds.
          </div>
        ) : (
          <div>
            <p className="mb-4 text-sm text-brown-400">
              Connect a Google Sheet so the client can edit the menu directly
              from their browser. No coding required.
            </p>
            <ol className="space-y-2 text-sm text-brown-500">
              <li>
                <span className="font-semibold text-brown-600">1.</span> Create a
                Google Sheet with these columns in row 1:{" "}
                <code className="rounded bg-cream-200 px-1.5 py-0.5 text-xs">
                  category, name, description, price, image, available
                </code>
              </li>
              <li>
                <span className="font-semibold text-brown-600">2.</span> Add menu
                items in the rows below
              </li>
              <li>
                <span className="font-semibold text-brown-600">3.</span> Go to{" "}
                <strong>File → Share → Publish to web</strong>
              </li>
              <li>
                <span className="font-semibold text-brown-600">4.</span> Select
                the sheet tab, choose{" "}
                <strong>Comma-separated values (.csv)</strong>, click Publish
              </li>
              <li>
                <span className="font-semibold text-brown-600">5.</span> Copy the
                published URL and add it to{" "}
                <code className="rounded bg-cream-200 px-1.5 py-0.5 text-xs">
                  .env.local
                </code>{" "}
                as:
              </li>
            </ol>
            <div className="mt-3 overflow-x-auto rounded-lg bg-brown-800 p-3 text-xs text-cream-200">
              GOOGLE_SHEET_CSV_URL=https://docs.google.com/spreadsheets/d/e/YOUR_ID/pub?output=csv
            </div>
          </div>
        )}
      </div>

      {/* Manual upload fallback */}
      <div className="mb-6">
        <h2 className="mb-2 text-lg font-bold text-brown-700">
          Or Upload Manually
        </h2>
        <p className="mb-4 text-sm text-brown-400">
          Upload a CSV or Excel file to override the menu directly.
        </p>
        <FileUploader />
      </div>

      {/* Format guide */}
      <div className="mt-10 rounded-2xl border border-cream-200 bg-white p-6">
        <h2 className="mb-3 text-lg font-bold text-brown-700">
          Spreadsheet Format
        </h2>
        <p className="mb-4 text-sm text-brown-400">
          Your spreadsheet should have these columns in the first row:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-cream-200 text-brown-600">
                <th className="pb-2 pr-4">Column</th>
                <th className="pb-2 pr-4">Required</th>
                <th className="pb-2">Example</th>
              </tr>
            </thead>
            <tbody className="text-brown-500">
              <tr className="border-b border-cream-100">
                <td className="py-2 pr-4 font-medium">category</td>
                <td className="py-2 pr-4">Yes</td>
                <td className="py-2">Cupcakes</td>
              </tr>
              <tr className="border-b border-cream-100">
                <td className="py-2 pr-4 font-medium">name</td>
                <td className="py-2 pr-4">Yes</td>
                <td className="py-2">Vanilla Bean Cupcake</td>
              </tr>
              <tr className="border-b border-cream-100">
                <td className="py-2 pr-4 font-medium">description</td>
                <td className="py-2 pr-4">Yes</td>
                <td className="py-2">Classic vanilla with buttercream</td>
              </tr>
              <tr className="border-b border-cream-100">
                <td className="py-2 pr-4 font-medium">price</td>
                <td className="py-2 pr-4">Yes</td>
                <td className="py-2">4.50</td>
              </tr>
              <tr className="border-b border-cream-100">
                <td className="py-2 pr-4 font-medium">image</td>
                <td className="py-2 pr-4">No</td>
                <td className="py-2">https://example.com/photo.jpg</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">available</td>
                <td className="py-2 pr-4">No</td>
                <td className="py-2">yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
