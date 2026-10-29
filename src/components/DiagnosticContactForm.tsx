"use client";

import React, { useState } from "react";
import styles from "./DiagnosticContactForm.module.css";

const SERVICE_OPTIONS = [
  "A New Website",
  "Automation & AI Agents",
  "A Custom Application",
  "An Integrated System",
] as const;

type ServiceType = (typeof SERVICE_OPTIONS)[number];

interface DiagnosticContactFormProps {
  defaultService?: ServiceType;
  title?: string;
  subtitle?: string;
}

export default function DiagnosticContactForm({
  defaultService = "An Integrated System",
  title = "Start a Business Conversation",
  subtitle = "A focused diagnostic conversation about what's slow, manual, or disconnected in your business.",
}: DiagnosticContactFormProps) {
  const [service, setService] = useState<ServiceType>(defaultService);
  const [email, setEmail] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [desiredOutcome, setDesiredOutcome] = useState("");
  const [additionalContext, setAdditionalContext] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email || !currentOperation || !desiredOutcome) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          email,
          currentOperation,
          desiredOutcome,
          additionalContext: additionalContext.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.formContainer}>
        <div className={styles.formCard}>
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>Inquiry Received</h3>
            <p className={styles.successMessage}>
              Thank you. We have received your diagnostic inquiry. We review operations directly and will get back to you within 24 hours with architectural thoughts and next steps.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.formCard} onSubmit={handleSubmit} noValidate>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {errorMessage && (
          <div className={styles.error} role="alert">
            {errorMessage}
          </div>
        )}

        <div className={styles.fieldGroup}>
          <label className={styles.label}>1. What are you looking to build or solve?</label>
          <div className={styles.serviceChips} role="radiogroup" aria-label="Service type">
            {SERVICE_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`${styles.serviceChip} ${service === opt ? styles.serviceChipSelected : ""}`}
                onClick={() => setService(opt)}
                role="radio"
                aria-checked={service === opt}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="diagnostic-email" className={styles.label}>
            2. Your Business Email <span style={{ color: "var(--growrev-cyan)" }}>*</span>
          </label>
          <input
            id="diagnostic-email"
            type="email"
            className={styles.input}
            placeholder="founder@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="diagnostic-operation" className={styles.label}>
            3. What does your current operation look like? <span style={{ color: "var(--growrev-cyan)" }}>*</span>
          </label>
          <textarea
            id="diagnostic-operation"
            className={styles.textarea}
            placeholder="e.g. We use HubSpot + Airtable + manual Slack messages, and our onboarding takes 3 days of copying information between tools."
            value={currentOperation}
            onChange={(e) => setCurrentOperation(e.target.value)}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="diagnostic-outcome" className={styles.label}>
            4. What outcome do you need to achieve? <span style={{ color: "var(--growrev-cyan)" }}>*</span>
          </label>
          <textarea
            id="diagnostic-outcome"
            className={styles.textarea}
            placeholder="e.g. Leads should be qualified autonomously, synced directly into our billing system, and client workspaces created automatically."
            value={desiredOutcome}
            onChange={(e) => setDesiredOutcome(e.target.value)}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="diagnostic-context" className={styles.label}>
            5. Additional Context or Link (Optional)
          </label>
          <input
            id="diagnostic-context"
            type="text"
            className={styles.input}
            placeholder="Your current website, volume, or timeline"
            value={additionalContext}
            onChange={(e) => setAdditionalContext(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`btn-growrev-primary ${styles.submitBtn}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting Inquiry..." : "Submit Business Inquiry →"}
        </button>

        <p style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--growrev-text-dim)" }}>
          Direct founder review. No spam, no sales commission pressure.
        </p>
      </form>
    </div>
  );
}
