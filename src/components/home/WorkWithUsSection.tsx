"use client";

import React, { useState } from "react";
import styles from "./WorkWithUsSection.module.css";

const HELP_AREAS = [
  "AI Automation & Autonomous Agents",
  "High-Converting Web Development",
  "Local SEO & Search Visibility",
  "AI Chat Assistants",
  "Full Operating System Architecture",
  "General Consultation & Custom Request",
];

export default function WorkWithUsSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    areaOfHelp: HELP_AREAS[0],
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSuccess(true);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section} id="contact">
      {/* Background Top Ambient Radiance */}
      <div className={styles.ambientGlowTop} aria-hidden="true" />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          {/* Subtitle with dual laser lines */}
          <div className={styles.subtitleWrapper}>
            <div className={`${styles.laserLine} ${styles.laserLineLeft}`} />
            <span className={styles.subtitleText}>Work With Us</span>
            <div className={`${styles.laserLine} ${styles.laserLineRight}`} />
          </div>

          {/* Biometric Cyber Fingerprint Scan SVG */}
          <svg className={styles.fingerScanIcon} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="60" rx="14" fill="#121318" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="1.5" />
            <path
              d="M30 14C21.1634 14 14 21.1634 14 30C14 34.4183 15.7909 38.4183 18.6863 41.3137"
              stroke="#00F2FE"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M41.3137 41.3137C44.2091 38.4183 46 34.4183 46 30C46 21.1634 38.8366 14 30 14"
              stroke="#00F2FE"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M30 20C24.4772 20 20 24.4772 20 30C20 32.7614 21.1193 35.2614 22.9289 37.0711"
              stroke="#4FACFE"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M37.0711 37.0711C38.8807 35.2614 40 32.7614 40 30C40 24.4772 35.5228 20 30 20"
              stroke="#4FACFE"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M30 26C27.7909 26 26 27.7909 26 30V36C26 38.2091 27.7909 40 30 40C32.2091 40 34 38.2091 34 36V30C34 27.7909 32.2091 26 30 26Z"
              stroke="#9333EA"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="30" cy="30" r="2" fill="#00F2FE" />
          </svg>

          <h2 className={styles.title}>
            The Last Step to Build Your <br />
            <span className={styles.titleGradient}>Operating Advantage.</span>
          </h2>

          <p className={styles.description}>
            Unlock the final piece of the puzzle with our proven architecture and direct founder guidance, designed to accelerate operational throughput and scale your business.
          </p>
        </div>

        {/* ─── Form Card ─── */}
        <div className={styles.formCard}>
          <div className={styles.formTopNeon} aria-hidden="true" />

          {success ? (
            <div className={styles.successBanner}>
              <h3 style={{ color: "#34D399", fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                Inquiry Received Successfully
              </h3>
              <p style={{ margin: 0 }}>
                Thank you! Your project details have been transmitted directly to our principal engineers. We will review your operations and provide direct recommendations within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.formGrid}>
              {errorMsg && <div className={styles.errorBanner}>{errorMsg}</div>}

              {/* Row 1: First Name & Last Name */}
              <div className={styles.rowTwo}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="firstName" className={styles.label}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Marcus"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="lastName" className={styles.label}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Vance"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>

              {/* Row 2: Work Email & Phone Number */}
              <div className={styles.rowTwo}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="marcus@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>

              {/* Row 3: Area of Help */}
              <div className={styles.fieldGroup}>
                <label htmlFor="areaOfHelp" className={styles.label}>
                  In Which Area Do You Need Help? *
                </label>
                <select
                  id="areaOfHelp"
                  name="areaOfHelp"
                  value={formData.areaOfHelp}
                  onChange={handleChange}
                  className={styles.select}
                >
                  {HELP_AREAS.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Project Message Box */}
              <div className={styles.fieldGroup}>
                <label htmlFor="message" className={styles.label}>
                  Describe Your Current Challenge &amp; Goal *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us what is currently slow, manual, or disconnected in your business..."
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={loading}
                className={styles.submitBtn}
              >
                <span>{loading ? "Transmitting Scope..." : "Initiate Business Diagnostic →"}</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════════
         BOTTOM NEON LIGHT TRAILS (Light moving from left to right)
         ═════════════════════════════════════════════════════════════════════════ */}
      <div className={styles.bottomLightContainer} aria-hidden="true">
        <div className={styles.lightStreamTrack}>
          {/* Layer 1: Electric Cyan & Purple Sweep */}
          <svg className={`${styles.lightWaveSvg} ${styles.lightBeam1}`} viewBox="0 0 1600 180" fill="none">
            <path
              d="M-200 140C200 80 500 170 900 110C1300 50 1500 130 1900 90"
              stroke="url(#trailGrad1)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#glowFilter)"
            />
            <defs>
              <linearGradient id="trailGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F2FE" stopOpacity="0" />
                <stop offset="30%" stopColor="#00F2FE" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#9333EA" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FD6BC4" stopOpacity="0" />
              </linearGradient>
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
          </svg>

          {/* Layer 2: Amber & Magenta Secondary Sweep */}
          <svg className={`${styles.lightWaveSvg} ${styles.lightBeam2}`} viewBox="0 0 1600 180" fill="none">
            <path
              d="M-150 110C250 160 650 70 1050 140C1450 70 1650 150 1950 120"
              stroke="url(#trailGrad2)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#glowFilter2)"
            />
            <defs>
              <linearGradient id="trailGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FB9C55" stopOpacity="0" />
                <stop offset="40%" stopColor="#FB9C55" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#FD6BC4" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#9333EA" stopOpacity="0" />
              </linearGradient>
              <filter id="glowFilter2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur2" />
                <feComposite in="SourceGraphic" in2="blur2" operator="over" />
              </filter>
            </defs>
          </svg>

          {/* Layer 3: Intense Core Stream */}
          <svg className={`${styles.lightWaveSvg} ${styles.lightBeam3}`} viewBox="0 0 1600 180" fill="none">
            <path
              d="M-300 130C100 110 600 150 1100 100C1400 60 1700 120 2000 140"
              stroke="url(#trailGrad3)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="trailGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="50%" stopColor="#00F2FE" stopOpacity="1" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
