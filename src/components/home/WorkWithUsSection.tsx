"use client";

import React, { useState } from "react";
import Link from "next/link";
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

      {/* ─── GrowRev Transition Banner: "Unlock Your Potential" ─── */}
      <div className={styles.potentialBanner}>
        <h2 className={styles.potentialTitle}>
          Unlock Your <span className={styles.potentialGradient}>Potential</span>
        </h2>
        <a href="#contact-form" className={styles.potentialBtn}>
          Get Started Today
        </a>
      </div>

      <div className={styles.container} id="contact-form">
        {/* ─── 2-Column Work With Us Card (GrowRev Signature Layout) ─── */}
        <div className={styles.formCard}>
          <div className={styles.formTopNeon} aria-hidden="true" />

          {/* Card Header Eyebrow */}
          <div className={styles.cardHeaderEyebrow}>
            <div className={styles.laserLineLeft} />
            <span className={styles.eyebrowText}>Work With Us</span>
            <div className={styles.laserLineRight} />
          </div>

          <div className={styles.twoColumnLayout}>
            {/* ─── Left Column: Brand Statement & Biometric Icon ─── */}
            <div className={styles.infoCol}>
              <div className={styles.fingerprintBox}>
                <svg
                  className={styles.fingerScanIcon}
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="60"
                    height="60"
                    rx="14"
                    fill="#15171E"
                    stroke="rgba(0, 242, 254, 0.35)"
                    strokeWidth="1.5"
                  />
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
              </div>

              <h3 className={styles.infoHeadline}>
                The last step to Grow Results of your Business
              </h3>

              <p className={styles.infoParagraph}>
                Unlock the final piece of the puzzle with our proven strategies and expert guidance, designed to accelerate growth and maximize the success of your business in a competitive landscape.
              </p>
            </div>

            {/* ─── Right Column: Interactive Form ─── */}
            <div className={styles.formCol}>
              {success ? (
                <div className={styles.successBanner}>
                  <h4 style={{ color: "#34D399", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                    Inquiry Received Successfully
                  </h4>
                  <p style={{ margin: 0, color: "#CBD5E1", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    Thank you! Your information has been transmitted directly to our studio. We will review your requirements and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.formGrid}>
                  {errorMsg && <div className={styles.errorBanner}>{errorMsg}</div>}

                  {/* Row 1: First Name & Last Name */}
                  <div className={styles.rowTwo}>
                    <div className={styles.fieldGroup}>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Your First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.fieldGroup}>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Your Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number */}
                  <div className={styles.fieldGroup}>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  {/* Row 3: Email Address */}
                  <div className={styles.fieldGroup}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  {/* Row 4: Area of Help */}
                  <div className={styles.fieldGroup}>
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

                  {/* Row 5: Message Box */}
                  <div className={styles.fieldGroup}>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      placeholder="Tell us about your business goals and current bottlenecks..."
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.textarea}
                    />
                  </div>

                  {/* Disclaimer checkbox */}
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" required defaultChecked className={styles.checkboxInput} />
                    <span>
                      I agree to receive communications regarding our business systems and advisory consultation.
                    </span>
                  </label>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={styles.submitBtn}
                  >
                    <span>{loading ? "Transmitting..." : "Get Started Today"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════════
         BOTTOM NEON LIGHT TRAILS (Luminous sweeping multi-color wave beams)
         ═════════════════════════════════════════════════════════════════════════ */}
      <div className={styles.bottomLightContainer} aria-hidden="true">
        <div className={styles.lightStreamTrack}>
          {/* Layer 1: Electric Cyan & Purple Sweep */}
          <svg className={`${styles.lightWaveSvg} ${styles.lightBeam1}`} viewBox="0 0 1600 200" fill="none">
            <path
              d="M-200 150C200 70 500 180 900 110C1300 40 1500 140 1900 80"
              stroke="url(#trailGrad1)"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#glowFilter)"
            />
            <defs>
              <linearGradient id="trailGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F2FE" stopOpacity="0" />
                <stop offset="30%" stopColor="#00F2FE" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#9333EA" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#FD6BC4" stopOpacity="0" />
              </linearGradient>
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
          </svg>

          {/* Layer 2: Amber, Orange & Gold Sweep */}
          <svg className={`${styles.lightWaveSvg} ${styles.lightBeam2}`} viewBox="0 0 1600 200" fill="none">
            <path
              d="M-150 120C250 170 650 60 1050 150C1450 60 1650 160 1950 110"
              stroke="url(#trailGrad2)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#glowFilter2)"
            />
            <defs>
              <linearGradient id="trailGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FB9C55" stopOpacity="0" />
                <stop offset="35%" stopColor="#FB9C55" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#FD6BC4" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#9333EA" stopOpacity="0" />
              </linearGradient>
              <filter id="glowFilter2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="10" result="blur2" />
                <feComposite in="SourceGraphic" in2="blur2" operator="over" />
              </filter>
            </defs>
          </svg>

          {/* Layer 3: Intense Core Stream */}
          <svg className={`${styles.lightWaveSvg} ${styles.lightBeam3}`} viewBox="0 0 1600 200" fill="none">
            <path
              d="M-300 140C100 110 600 160 1100 90C1400 50 1700 130 2000 150"
              stroke="url(#trailGrad3)"
              strokeWidth="2.5"
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
