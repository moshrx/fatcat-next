"use client";

import { useState, useRef } from "react";

export default function FileUploader() {
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function uploadFile(file: File) {
    setStatus("uploading");
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/menu", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Menu updated successfully!");
      } else {
        setStatus("error");
        setMessage(data.error || "Upload failed");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) uploadFile(file);
  }

  return (
    <div className="space-y-6">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center transition-colors ${
          dragOver
            ? "border-accent bg-cream-200"
            : "border-cream-300 bg-white hover:border-warm-400 hover:bg-cream-100"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileChange}
          className="hidden"
        />

        {status === "uploading" ? (
          <div>
            <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-cream-300 border-t-accent" />
            <p className="text-brown-500">Uploading...</p>
          </div>
        ) : (
          <>
            <span className="mb-3 block text-4xl">📄</span>
            <p className="mb-1 font-semibold text-brown-700">
              Drop your spreadsheet here
            </p>
            <p className="text-sm text-brown-400">
              or click to browse — accepts .csv, .xlsx, .xls
            </p>
          </>
        )}
      </div>

      {status === "success" && (
        <div className="rounded-xl bg-green-50 p-4 text-center text-green-700">
          ✓ {message}
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl bg-red-50 p-4 text-center text-red-700">
          ✗ {message}
        </div>
      )}
    </div>
  );
}
