"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (e) {
          // response is not json
        }
        throw new Error(errorData?.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-cream-200 bg-white p-8 text-center shadow-md">
        <span className="mb-4 block text-4xl">✉️</span>
        <h3 className="mb-2 text-xl font-bold text-brown-700">Thank You!</h3>
        <p className="text-brown-400">
          We&apos;ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-cream-200 bg-white p-8 shadow-md"
    >
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-brown-600">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-cream-300 bg-cream-50 px-4 py-2.5 text-brown-800 outline-none focus:border-warm-400 focus:ring-2 focus:ring-warm-200"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-brown-600">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-cream-300 bg-cream-50 px-4 py-2.5 text-brown-800 outline-none focus:border-warm-400 focus:ring-2 focus:ring-warm-200"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brown-600">
          Phone (optional)
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-cream-300 bg-cream-50 px-4 py-2.5 text-brown-800 outline-none focus:border-warm-400 focus:ring-2 focus:ring-warm-200"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-brown-600">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-cream-300 bg-cream-50 px-4 py-2.5 text-brown-800 outline-none focus:border-warm-400 focus:ring-2 focus:ring-warm-200"
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-accent px-6 py-3 font-semibold text-cream-50 transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
