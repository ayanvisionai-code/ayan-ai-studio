import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@<>\r\n]+@[^\s@<>\r\n]+\.[^\s@<>\r\n]+$/;

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  // Check if Work With Us schema
  const isWorkWithUs = Boolean(data.firstName || data.lastName || data.message || data.phone || data.areaOfHelp);

  let email = "";
  let subject = "New Inquiry — Ayan AI Studio";
  let textBody = "";
  let htmlBody = "";

  const submittedAt = new Date().toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" });

  const row = (label: string, value: string, { mono = false }: { mono?: boolean } = {}) => `
    <tr>
      <td style="padding: 24px 0 0 0; border-top: 1px solid #222222;">
        <p style="margin: 0 0 8px 0; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; color: #8A8A8A;">${label}</p>
        <p style="margin: 0; font-family: ${mono ? "'Courier New', Courier, monospace" : "Arial, Helvetica, sans-serif"}; font-size: 15px; line-height: 1.6; color: #FAFAFA;">${value.replace(/\n/g, "<br/>")}</p>
      </td>
    </tr>
  `;

  if (isWorkWithUs) {
    const firstName = typeof data.firstName === "string" ? data.firstName.trim() : "";
    const lastName = typeof data.lastName === "string" ? data.lastName.trim() : "";
    const rawEmail = typeof data.email === "string" ? data.email.trim() : "";
    const phone = typeof data.phone === "string" ? data.phone.trim() : "";
    const areaOfHelp = typeof data.areaOfHelp === "string" ? data.areaOfHelp.trim() : (typeof data.service === "string" ? data.service.trim() : "General Consultation");
    const message = typeof data.message === "string" ? data.message.trim() : "";

    if (!firstName) {
      return NextResponse.json({ error: "Please enter your first name." }, { status: 400 });
    }
    if (!rawEmail || !EMAIL_RE.test(rawEmail)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!message || message.length < 5) {
      return NextResponse.json({ error: "Please describe what you are looking to build or optimize." }, { status: 400 });
    }

    email = rawEmail;
    const fullName = `${firstName} ${lastName}`.trim();
    subject = `New Work With Us Inquiry — ${fullName} (${areaOfHelp})`;

    textBody = [
      "AYAN AI STUDIO — NEW WORK WITH US INQUIRY",
      "",
      `Client Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Area of Help: ${areaOfHelp}`,
      "",
      "Message / Operational Context:",
      message,
      "",
      `Submitted: ${submittedAt}`,
    ].join("\n");

    htmlBody = `
      <!doctype html>
      <html>
        <body style="margin: 0; padding: 0; background-color: #050505;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #050505;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #0a0a0a; border: 1px solid #222222; border-radius: 12px;">
                  <tr>
                    <td style="padding: 32px 32px 0 32px;">
                      <p style="margin: 0 0 4px 0; font-family: Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; color: #00F2FE;">Ayan AI Studio</p>
                      <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 22px; color: #FAFAFA;">New Work With Us Inquiry</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 0 32px 32px 32px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        ${row("Full Name", escapeHtml(fullName))}
                        ${row("Email Address", escapeHtml(email), { mono: true })}
                        ${phone ? row("Phone", escapeHtml(phone)) : ""}
                        ${row("Area of Help", escapeHtml(areaOfHelp))}
                        ${row("Message / Project Scope", escapeHtml(message))}
                        ${row("Submitted", escapeHtml(submittedAt))}
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 32px; border-top: 1px solid #222222;">
                      <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #8A8A8A;">Reply directly to this email to contact the prospective client.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
  } else {
    // Legacy Diagnostic format
    const { service, currentOperation, desiredOutcome, additionalContext } = data;
    const rawEmail = typeof data.email === "string" ? data.email.trim() : "";

    if (!rawEmail || !EMAIL_RE.test(rawEmail)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    email = rawEmail;
    const sType = typeof service === "string" ? service : "System Diagnostic";
    const op = typeof currentOperation === "string" ? currentOperation.trim() : "";
    const out = typeof desiredOutcome === "string" ? desiredOutcome.trim() : "";
    const ctx = typeof additionalContext === "string" ? additionalContext.trim() : "";

    subject = `New Diagnostic Inquiry — ${sType}`;
    textBody = [
      "AYAN AI STUDIO — NEW DIAGNOSTIC INQUIRY",
      "",
      `Request Type: ${sType}`,
      "",
      "Current Operation:",
      op,
      "",
      "Desired Outcome:",
      out,
      "",
      `Contact Email: ${email}`,
      ...(ctx ? ["", "Additional Context:", ctx] : []),
      "",
      `Submitted: ${submittedAt}`,
    ].join("\n");

    htmlBody = `
      <!doctype html>
      <html>
        <body style="margin: 0; padding: 0; background-color: #050505;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #050505;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #0a0a0a; border: 1px solid #222222; border-radius: 12px;">
                  <tr>
                    <td style="padding: 32px 32px 0 32px;">
                      <p style="margin: 0 0 4px 0; font-family: Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; color: #FAFAFA;">Ayan AI Studio</p>
                      <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 22px; color: #FAFAFA;">New Diagnostic Inquiry</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 0 32px 32px 32px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        ${row("Request Type", escapeHtml(sType))}
                        ${op ? row("Current Operation", escapeHtml(op)) : ""}
                        ${out ? row("Desired Outcome", escapeHtml(out)) : ""}
                        ${row("Contact Email", escapeHtml(email), { mono: true })}
                        ${ctx ? row("Additional Context", escapeHtml(ctx)) : ""}
                        ${row("Submitted", escapeHtml(submittedAt))}
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 32px; border-top: 1px solid #222222;">
                      <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #8A8A8A;">Reply directly to this email to respond to the sender.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.warn("Contact email notice: RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL is not set in environment. Submission received successfully in mock mode.");
    return NextResponse.json({ success: true, message: "Inquiry received." });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    if (result.error) {
      console.error("Resend API error:", result.error.message);
      return NextResponse.json({ error: "We couldn't send your request. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form submission failed:", err instanceof Error ? err.message : "Unknown error");
    return NextResponse.json({ error: "We couldn't send your request. Please try again." }, { status: 500 });
  }
}
