"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function HomePlanner() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, name: data.name || "Homepage project planner" }) });
      if (!response.ok) throw new Error();
      router.push("/thank-you");
    } catch {
      setError("Please check the fields or contact us on WhatsApp.");
      setBusy(false);
    }
  }

  return <form className="project-planner" onSubmit={submit} aria-label="Quick project planner">
    <input type="hidden" name="name" value="Homepage project planner" />
    <label><span>Required service</span><select name="service" required defaultValue=""><option value="" disabled>Select service</option><option>Architectural Design</option><option>Grey Structure</option><option>Turnkey Construction</option><option>Interior Design</option><option>Renovation</option><option>Project Management</option></select></label>
    <label><span>Plot size</span><input name="area" placeholder="e.g. 10 marla" /></label>
    <label><span>Project location</span><input name="location" placeholder="DHA, Bahria, Islamabad" required /></label>
    <label><span>Estimated budget</span><select name="budget" defaultValue=""><option value="" disabled>Select range</option><option>To be discussed</option><option>Under PKR 10 million</option><option>PKR 10–25 million</option><option>PKR 25–50 million</option><option>PKR 50 million+</option></select></label>
    <label><span>Expected start</span><input name="start" type="month" /></label>
    <label className="planner-phone"><span>Phone / WhatsApp</span><input name="phone" inputMode="tel" placeholder="+92 3XX XXXXXXX" required /></label>
    <button type="submit" disabled={busy}>{busy ? "Sending…" : "Plan my project"}</button>
    {error && <p className="planner-error" role="alert">{error}</p>}
  </form>;
}
