import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const SERVICE_OPTIONS = [
  "A New Website",
  "Automation & AI Agents",
  "A Custom Application",
  "An Integrated System",
] as const;

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

  const { service, currentOperation, desiredOutcome, email, additionalContext } = body as Record<string, unknown>;

  if (typeof service !== "string" || !SERVICE_OPTIONS.includes(service as (typeof SERVICE_OPTIONS)[number])) {
    return NextResponse.json({ error: "Please select a valid service type." }, { status: 400 });
  }
  if (typeof currentOperation !== "string" || currentOperation.trim().length < 3) {
    return NextResponse.json({ error: "Please describe your current operation." }, { status: 400 });
  }
  if (typeof desiredOutcome !== "string" || desiredOutcome.trim().length < 3) {
    return NextResponse.json({ error: "Please describe the outcome you're looking for." }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (additionalContext !== undefined && additionalContext !== null && typeof additionalContext !== "string") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const trimmedEmail = email.trim();
  const context = typeof additionalContext === "string" ? additionalContext.trim() : "";

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Contact form misconfigured: missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL.");
    return NextResponse.json(
      { error: "The inquiry system is temporarily unavailable. Please try again later." },
      { status: 500 }
    );
  }

  const submittedAt = new Date().toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" });

  const textBody = [
    "AYAN AI STUDIO — NEW DIAGNOSTIC INQUIRY",
    "",
    `Request Type: ${service}`,
    "",
    "Current Operation:",
    currentOperation.trim(),
    "",
    "Desired Outcome:",
    desiredOutcome.trim(),
    "",
    `Contact Email: ${trimmedEmail}`,
    ...(context ? ["", "Additional Context:", context] : []),
    "",
    `Submitted: ${submittedAt}`,
  ].join("\n");

  const row = (label: string, value: string, { mono = false }: { mono?: boolean } = {}) => `
    <tr>
      <td style="padding: 24px 0 0 0; border-top: 1px solid #222222;">
        <p style="margin: 0 0 8px 0; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; color: #8A8A8A;">${label}</p>
        <p style="margin: 0; font-family: ${mono ? "'Courier New', Courier, monospace" : "Arial, Helvetica, sans-serif"}; font-size: 15px; line-height: 1.6; color: #FAFAFA;">${value.replace(/\n/g, "<br/>")}</p>
      </td>
    </tr>
  `;

  const htmlBody = `
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
                      ${row("Request Type", escapeHtml(service))}
                      ${row("Current Operation", escapeHtml(currentOperation.trim()))}
                      ${row("Desired Outcome", escapeHtml(desiredOutcome.trim()))}
                      ${row("Contact Email", escapeHtml(trimmedEmail), { mono: true })}
                      ${context ? row("Additional Context", escapeHtml(context)) : ""}
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

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: trimmedEmail,
      subject: `New Inquiry — ${service}`,
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
