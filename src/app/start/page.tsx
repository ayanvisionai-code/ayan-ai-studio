"use client";
import { useState, KeyboardEvent } from "react";
import SectionEyebrow from "@/components/SectionEyebrow";
import styles from "./page.module.css";

const SERVICE_OPTIONS = ["A New Website", "Automation & AI Agents", "A Custom Application", "An Integrated System"];

const goalOptionsByService: Record<string, string[]> = {
  "A New Website": ["Generate more leads", "Look credible / more premium", "Replace an outdated site", "Not sure yet"],
  "Automation & AI Agents": ["Client Onboarding & Experience", "Sales & Lead Routing", "Internal Data Silos", "We don't know, everything feels slow"],
  "A Custom Application": ["Internal tool for my team", "Client-facing portal", "Replace spreadsheets / manual tracking", "Not sure yet"],
  "An Integrated System": ["Client Onboarding & Experience", "Sales & Lead Routing", "Internal Data Silos", "We don't know, everything feels slow"],
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function BackLink({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={styles.backLink}>
      ← Back
    </button>
  );
}

export default function StartPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    currentOperation: "",
    desiredOutcome: "",
    email: "",
    additionalContext: "",
  });
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => {
    setFieldError(null);
    setStep((s) => s + 1);
  };
  const prevStep = () => {
    setFieldError(null);
    setSubmitError(null);
    setStep((s) => s - 1);
  };

  const goalOptions = goalOptionsByService[formData.service] || [];

  const handleSubmit = async () => {
    if (!EMAIL_RE.test(formData.email.trim())) {
      setFieldError("Please enter a valid email address.");
      return;
    }
    setFieldError(null);
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: formData.service,
          currentOperation: formData.currentOperation,
          desiredOutcome: formData.desiredOutcome,
          email: formData.email.trim(),
          additionalContext: formData.additionalContext,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        setSubmitError(data?.error || "We couldn't send your request. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setStep(5);
    } catch {
      setSubmitError("We couldn't reach the server. Check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  const handleEmailKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isSubmitting) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <main>
      <header className="page-header" style={{ paddingTop: "calc(var(--nav-height) + 4rem)", paddingBottom: "2.5rem", borderBottom: "none" }}>
        <SectionEyebrow label="Diagnostic Inquiry" variant="teal" />
        <h1 className="page-title">
          Let&rsquo;s map <span className="title-gradient">what you need.</span>
        </h1>
        <p className="page-subtitle" style={{ maxWidth: "640px", color: "var(--growrev-text-muted)" }}>
          We don&rsquo;t do traditional high-pressure sales calls. Whether you need one thing done right or a whole system, tell us where you&rsquo;re starting.
        </p>
      </header>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container" style={{ maxWidth: "700px" }}>

          <div className={`${styles.card} animate-fade-up delay-3`}>

            {step === 1 && (
              <div className={styles.stepInner} style={{ animation: "fadeUp 0.4s ease-out" }}>
                <div className={styles.stepHeading}>
                  <h2>What do you need?</h2>
                </div>
                <div className={styles.optionList}>
                  {SERVICE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={styles.optionButton}
                      onClick={() => { setFormData({ ...formData, service: opt }); nextStep(); }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className={styles.stepInner} style={{ animation: "fadeUp 0.4s ease-out" }}>
                <BackLink onClick={prevStep} />
                <div className={styles.stepHeading}>
                  <h2>Tell us about your current operation.</h2>
                  <p>What&rsquo;s happening in your business today — what&rsquo;s manual, what&rsquo;s slow, or what feels like it&rsquo;s breaking?</p>
                </div>
                <textarea
                  aria-label="Current operation"
                  rows={5}
                  placeholder="Describe how things currently work…"
                  className={`${styles.field} ${styles.textarea}`}
                  value={formData.currentOperation}
                  onChange={(e) => setFormData({ ...formData, currentOperation: e.target.value })}
                />
                {fieldError && <p className={styles.fieldError} role="alert">{fieldError}</p>}
                <div className={styles.ctaRow}>
                  <button
                    type="button"
                    className="btn-growrev-primary"
                    onClick={() => {
                      if (formData.currentOperation.trim().length < 3) {
                        setFieldError("Please share a little about your current operation.");
                        return;
                      }
                      nextStep();
                    }}
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className={styles.stepInner} style={{ animation: "fadeUp 0.4s ease-out" }}>
                <BackLink onClick={prevStep} />
                <div className={styles.stepHeading}>
                  <h2>What outcome are you looking for?</h2>
                  <p>What should be different once this is solved?</p>
                </div>
                {goalOptions.length > 0 && (
                  <div className={styles.chipGroup} role="group" aria-label="Suggested outcomes">
                    {goalOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        aria-pressed={formData.desiredOutcome === opt}
                        className={styles.chip}
                        onClick={() => setFormData({ ...formData, desiredOutcome: opt })}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
                {goalOptions.length > 0 && <div className={styles.orDivider}>Or describe it yourself</div>}
                <textarea
                  aria-label="Desired outcome"
                  rows={4}
                  placeholder="Describe it in your own words…"
                  className={`${styles.field} ${styles.textarea}`}
                  value={formData.desiredOutcome}
                  onChange={(e) => setFormData({ ...formData, desiredOutcome: e.target.value })}
                />
                {fieldError && <p className={styles.fieldError} role="alert">{fieldError}</p>}
                <div className={styles.ctaRow}>
                  <button
                    type="button"
                    className="btn-growrev-primary"
                    onClick={() => {
                      if (formData.desiredOutcome.trim().length < 3) {
                        setFieldError("Please share the outcome you're looking for.");
                        return;
                      }
                      nextStep();
                    }}
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className={styles.stepInner} style={{ animation: "fadeUp 0.4s ease-out" }}>
                <BackLink onClick={prevStep} />
                <div className={styles.stepHeading}>
                  <h2>Where should we send the diagnostic brief?</h2>
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="email" className={styles.fieldLabel}>Email — required</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="founder@company.com"
                    className={styles.field}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onKeyDown={handleEmailKeyDown}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="additionalContext" className={styles.fieldLabelOptional}>
                    Anything else you&rsquo;d like us to understand? (optional)
                  </label>
                  <textarea
                    id="additionalContext"
                    rows={3}
                    className={`${styles.field} ${styles.textarea}`}
                    value={formData.additionalContext}
                    onChange={(e) => setFormData({ ...formData, additionalContext: e.target.value })}
                  />
                </div>

                {fieldError && <p className={styles.fieldError} role="alert">{fieldError}</p>}
                {submitError && <p className={styles.fieldError} role="alert">{submitError}</p>}

                <div className={styles.ctaRow}>
                  <button
                    type="button"
                    className="btn-growrev-primary"
                    style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Request…" : "Send Request →"}
                  </button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div style={{ textAlign: "center", animation: "fadeUp 0.4s ease-out" }}>
                <div className={styles.successIcon}>✓</div>
                <h2 style={{ fontSize: "2rem", color: "var(--foreground)", marginBottom: "1rem" }}>Request Received.</h2>
                <p>We have your details and can now review what you&rsquo;re trying to solve. An architect will reach out within 24 hours.</p>
              </div>
            )}

          </div>

        </div>
      </section>
    </main>
  );
}
