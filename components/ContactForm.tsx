"use client";

import { FormEvent, useEffect, useState } from "react";
import { site } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "mt-2 w-full rounded-lg border border-line bg-bg-elevated px-4 py-3 text-ink outline-none transition placeholder:text-ink-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState<string>(site.form.subject);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const focusName = () => {
      if (window.location.hash === "#hire-form") {
        document.getElementById("hire-name")?.focus();
      }
    };
    focusName();
    window.addEventListener("hashchange", focusName);
    return () => window.removeEventListener("hashchange", focusName);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to enable submissions.",
      );
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          company: company || undefined,
          subject,
          message,
          from_name: site.name,
          replyto: email,
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setSubject(site.form.subject);
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        id="hire-form"
        className="rounded-xl border border-line bg-bg-elevated px-6 py-10"
        role="status"
      >
        <p className="font-display text-2xl font-semibold text-ink">
          Thanks - I’ll get back to you soon.
        </p>
        <p className="mt-3 text-ink-muted">
          Your message was sent successfully.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-accent transition hover:text-accent-deep"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      id="hire-form"
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-line bg-bg-elevated/60 p-6 md:p-8"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Name
          <input
            id="hire-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-ink">
        Company / organization
        <span className="ml-1 font-normal text-ink-muted">(optional)</span>
        <input
          name="company"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClass}
          placeholder="Company name"
        />
      </label>

      <label className="block text-sm font-medium text-ink">
        Subject
        <input
          name="subject"
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClass}
        />
      </label>

      <label className="block text-sm font-medium text-ink">
        Message
        <textarea
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
          placeholder="Tell me about the role, timeline, or what you’d like to build together."
        />
      </label>

      {status === "error" ? (
        <p className="text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
        <a
          href={site.resumePath}
          download
          className="rounded-full border border-line bg-bg px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
        >
          Download resume
        </a>
      </div>
    </form>
  );
}
