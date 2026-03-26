"use client";
import { useState } from "react";

const BG = "linear-gradient(165deg, #0a0e17 0%, #0d1a2d 50%, #0f1729 100%)";
const TEXT_PRIMARY = "#E2E8F0";
const TEXT_MUTED = "#94A3B8";
const TEXT_FAINT = "#475569";
const ACCENT = "#3B82F6";
const AMBER = "#F59E0B";
const CARD_BG = "rgba(255,255,255,0.025)";
const CARD_BORDER = "1px solid rgba(255,255,255,0.05)";
const FONT = "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', sans-serif";

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  color: TEXT_PRIMARY,
  fontSize: "14px",
  fontFamily: FONT,
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.15s",
};

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <svg viewBox="0 0 100 100" width="24" height="24">
        <path
          d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75"
          stroke="#3B82F6"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", color: TEXT_PRIMARY, fontFamily: FONT }}>
        RAKUDA<span style={{ color: TEXT_MUTED, fontWeight: 400 }}>リサーチ</span>
      </span>
    </div>
  );
}

function Label({ children, optional }: { children: React.ReactNode; optional?: boolean }) {
  return (
    <label
      style={{
        display: "block",
        fontSize: "12px",
        fontWeight: 600,
        color: TEXT_MUTED,
        letterSpacing: "0.04em",
        marginBottom: "6px",
        fontFamily: FONT,
      }}
    >
      {children}
      {optional && (
        <span style={{ fontWeight: 400, color: TEXT_FAINT, marginLeft: "6px" }}>（任意）</span>
      )}
    </label>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: FONT, color: TEXT_PRIMARY }}>
      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "64px",
          background: "rgba(10,14,23,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
        }}
      >
        <a href="../" style={{ textDecoration: "none" }}><Logo /></a>
        <nav style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a href="../pricing" style={{ fontSize: "13px", color: TEXT_MUTED, textDecoration: "none" }}>料金</a>
          <a href="../contact" style={{ fontSize: "13px", color: TEXT_PRIMARY, textDecoration: "none", fontWeight: 600 }}>お問い合わせ</a>
          <a href="../login" style={{ fontSize: "13px", color: TEXT_MUTED, textDecoration: "none" }}>ログイン</a>
          <a
            href="../signup"
            style={{
              padding: "7px 16px",
              background: `linear-gradient(135deg, ${AMBER}, #D97706)`,
              borderRadius: "8px",
              color: "#0a0e17",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            無料で始める
          </a>
        </nav>
      </header>

      {/* Main */}
      <main style={{ paddingTop: "64px", minHeight: "calc(100vh - 100px)" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "60px 24px 80px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1 style={{ fontSize: "28px", fontWeight: 700, color: TEXT_PRIMARY, marginBottom: "10px" }}>
              お問い合わせ
            </h1>
            <p style={{ fontSize: "15px", color: TEXT_MUTED }}>
              ご質問やEnterpriseプランのご相談はこちらから
            </p>
          </div>

          {submitted ? (
            <div
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.25)",
                borderRadius: "12px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(16,185,129,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: TEXT_PRIMARY, marginBottom: "8px" }}>
                送信が完了しました
              </div>
              <div style={{ fontSize: "14px", color: TEXT_MUTED }}>
                通常1〜2営業日以内にご返信いたします
              </div>
            </div>
          ) : (
            <div style={{ background: CARD_BG, border: CARD_BORDER, borderRadius: "16px", padding: "32px" }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <Label>お名前</Label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="山田 太郎"
                      required
                      style={INPUT_STYLE}
                    />
                  </div>
                  <div>
                    <Label>メールアドレス</Label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="yamada@example.com"
                      required
                      style={INPUT_STYLE}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <Label optional>会社名</Label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="株式会社サンプル"
                    style={INPUT_STYLE}
                  />
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <Label>お問い合わせ種別</Label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    style={{
                      ...INPUT_STYLE,
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 14px center",
                      paddingRight: "40px",
                      cursor: "pointer",
                    }}
                  >
                    <option value="" disabled style={{ background: "#0d1a2d" }}>選択してください</option>
                    <option value="general" style={{ background: "#0d1a2d" }}>一般的な質問</option>
                    <option value="enterprise" style={{ background: "#0d1a2d" }}>Enterpriseプラン</option>
                    <option value="technical" style={{ background: "#0d1a2d" }}>技術的な質問</option>
                    <option value="other" style={{ background: "#0d1a2d" }}>その他</option>
                  </select>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <Label>お問い合わせ内容</Label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="ご質問・ご要望をご記入ください"
                    required
                    style={{
                      ...INPUT_STYLE,
                      resize: "vertical",
                      minHeight: "140px",
                      lineHeight: "1.6",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "13px",
                    background: `linear-gradient(135deg, ${AMBER}, #D97706)`,
                    border: "none",
                    borderRadius: "10px",
                    color: "#0a0e17",
                    fontSize: "15px",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: FONT,
                    letterSpacing: "0.02em",
                    transition: "opacity 0.15s",
                  }}
                >
                  送信する
                </button>
              </form>
            </div>
          )}

          {/* Contact Info */}
          <div
            style={{
              marginTop: "32px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <div
              style={{
                background: CARD_BG,
                border: CARD_BORDER,
                borderRadius: "10px",
                padding: "18px 20px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div>
                <div style={{ fontSize: "11px", color: TEXT_FAINT, marginBottom: "3px", letterSpacing: "0.05em", textTransform: "uppercase" }}>メール</div>
                <div style={{ fontSize: "13px", color: TEXT_PRIMARY }}>info@rakuda-ai.com</div>
              </div>
            </div>
            <div
              style={{
                background: CARD_BG,
                border: CARD_BORDER,
                borderRadius: "10px",
                padding: "18px 20px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <div>
                <div style={{ fontSize: "11px", color: TEXT_FAINT, marginBottom: "3px", letterSpacing: "0.05em", textTransform: "uppercase" }}>営業時間</div>
                <div style={{ fontSize: "13px", color: TEXT_PRIMARY }}>平日 10:00–18:00</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
          color: TEXT_FAINT,
          fontFamily: FONT,
        }}
      >
        <span>© 2026 Rakuda AI Inc.</span>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="../terms" style={{ color: TEXT_FAINT, textDecoration: "none" }}>利用規約</a>
          <a href="../privacy" style={{ color: TEXT_FAINT, textDecoration: "none" }}>プライバシーポリシー</a>
          <a href="mailto:info@rakuda-ai.com" style={{ color: TEXT_FAINT, textDecoration: "none" }}>お問い合わせ</a>
        </div>
      </footer>
    </div>
  );
}
