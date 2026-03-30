import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const sport = String(body?.sport ?? "").trim();
    const nachricht = String(body?.nachricht ?? "").trim();

    if (!name || !email || !sport || !nachricht) {
      return Response.json(
        { ok: false, error: "Bitte alle Felder ausfüllen." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { ok: false, error: "Bitte eine gültige E-Mail-Adresse eingeben." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSport = escapeHtml(sport);
    const safeNachricht = escapeHtml(nachricht).replace(/\n/g, "<br />");

    const { error } = await resend.emails.send({
      from: "Kontakt <onboarding@resend.dev>",
      to: "postpost@gmx.de",
      reply_to: email,
      subject: `Neue Anfrage von ${safeName}`,
      html: `
        <div style="margin:0; padding:0; background:#050505;">
          <div style="max-width:680px; margin:0 auto; padding:40px 20px;">
            <div style="background:#0a0a0a; border:1px solid rgba(255,255,255,0.08); padding:40px 32px; color:#ffffff; font-family:Arial, Helvetica, sans-serif;">
              
              <div style="margin-bottom:28px;">
                <div style="display:inline-block; font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:#00C9A7; margin-bottom:14px;">
                  Neue Kontaktanfrage
                </div>
                <h1 style="margin:0; font-size:40px; line-height:0.95; font-weight:800; letter-spacing:-0.03em; color:#ffffff;">
                  PETERFY PERFORMANCE
                </h1>
              </div>

              <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:24px;">
                <div style="margin-bottom:18px;">
                  <div style="font-size:12px; text-transform:uppercase; letter-spacing:0.14em; color:#00C9A7; margin-bottom:6px;">
                    Name
                  </div>
                  <div style="font-size:18px; line-height:1.6; color:rgba(255,255,255,0.88);">
                    ${safeName}
                  </div>
                </div>

                <div style="margin-bottom:18px;">
                  <div style="font-size:12px; text-transform:uppercase; letter-spacing:0.14em; color:#00C9A7; margin-bottom:6px;">
                    E-Mail
                  </div>
                  <div style="font-size:18px; line-height:1.6; color:rgba(255,255,255,0.88);">
                    <a href="mailto:${safeEmail}" style="color:#ffffff; text-decoration:none;">
                      ${safeEmail}
                    </a>
                  </div>
                </div>

                <div style="margin-bottom:18px;">
                  <div style="font-size:12px; text-transform:uppercase; letter-spacing:0.14em; color:#00C9A7; margin-bottom:6px;">
                    Sportart / Ziel
                  </div>
                  <div style="font-size:18px; line-height:1.6; color:rgba(255,255,255,0.88);">
                    ${safeSport}
                  </div>
                </div>

                <div style="margin-top:28px;">
                  <div style="font-size:12px; text-transform:uppercase; letter-spacing:0.14em; color:#00C9A7; margin-bottom:10px;">
                    Nachricht
                  </div>
                  <div style="font-size:18px; line-height:1.8; color:rgba(255,255,255,0.78);">
                    ${safeNachricht}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      return Response.json(
        { ok: false, error: error.message || "E-Mail konnte nicht gesendet werden." },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        error: error?.message || "Unbekannter Serverfehler",
      },
      { status: 500 }
    );
  }
}