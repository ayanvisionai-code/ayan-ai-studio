"use client";
import { useState } from "react";

export default function StartPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    revenue: "",
    bottleneck: "",
    email: ""
  });

  const nextStep = () => setStep(step + 1);

  return (
    <main>
      <header className="page-header" style={{ paddingBottom: "3rem", borderBottom: "none" }}>
        <span className="section-eyebrow animate-fade-up">Begin Evolution</span>
        <h1 className="page-title animate-fade-up delay-1">Let's map your chaos.</h1>
        <p className="page-subtitle animate-fade-up delay-2" style={{ maxWidth: "600px" }}>
          We don't do traditional sales calls. We perform operational diagnostics. Help us understand your current friction.
        </p>
      </header>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          
          <div className="glass-panel animate-fade-up delay-3" style={{ padding: "4rem", minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            
            {step === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem", animation: "fadeUp 0.4s ease-out" }}>
                <h2 style={{ fontSize: "2rem", color: "var(--foreground)" }}>What is the scale of your current operation?</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {["Pre-revenue / Startup", "$1M - $5M ARR", "$5M - $20M ARR", "Enterprise ($20M+)"].map((opt) => (
                    <button 
                      key={opt}
                      onClick={() => { setFormData({...formData, revenue: opt}); nextStep(); }}
                      style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", color: "var(--foreground)", fontSize: "1.1rem", textAlign: "left", cursor: "pointer", transition: "all var(--transition-fast)" }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--foreground)"}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border)"}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem", animation: "fadeUp 0.4s ease-out" }}>
                <h2 style={{ fontSize: "2rem", color: "var(--foreground)" }}>Where is your primary operational bottleneck?</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {["Client Onboarding & Experience", "Sales & Lead Routing", "Internal Data Silos", "We don't know, everything feels slow"].map((opt) => (
                    <button 
                      key={opt}
                      onClick={() => { setFormData({...formData, bottleneck: opt}); nextStep(); }}
                      style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", color: "var(--foreground)", fontSize: "1.1rem", textAlign: "left", cursor: "pointer", transition: "all var(--transition-fast)" }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--foreground)"}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border)"}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem", animation: "fadeUp 0.4s ease-out" }}>
                <h2 style={{ fontSize: "2rem", color: "var(--foreground)" }}>Where should we send the diagnostic brief?</h2>
                <input 
                  type="email" 
                  placeholder="founder@company.com" 
                  style={{ padding: "1.5rem", background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", color: "var(--foreground)", fontSize: "1.2rem", outline: "none" }}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <button 
                  className="btn-primary" 
                  style={{ alignSelf: "flex-start", marginTop: "1rem" }}
                  onClick={() => setStep(4)}
                >
                  Request Architecture Review
                </button>
              </div>
            )}

            {step === 4 && (
              <div style={{ textAlign: "center", animation: "fadeUp 0.4s ease-out" }}>
                <div style={{ fontSize: "4rem", marginBottom: "2rem" }}>✓</div>
                <h2 style={{ fontSize: "2rem", color: "var(--foreground)", marginBottom: "1rem" }}>Diagnostic Initiated.</h2>
                <p>We are reviewing your operational footprint. An architect will reach out within 24 hours.</p>
              </div>
            )}

          </div>

        </div>
      </section>
    </main>
  );
}
