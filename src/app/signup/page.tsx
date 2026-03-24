"use client";

import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <>
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: 64,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        borderBottom: "1px solid #DFE3EC",
      }}>
        <div style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 24px",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}>
          <a href="./" style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              textDecoration: "none",
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 40" style={{ height: "20px", width: "auto" }}>
                <path d="M4,32 C4,32 12,6 24,6 C34,6 28,28 36,28 C44,28 38,4 48,4 C60,4 68,32 68,32" stroke="#1a1a2e" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                <text x="80" y="28" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="22" fontWeight="300" fill="#1a1a2e" letterSpacing="3">RAKUDAリサーチ</text>
              </svg>
            </a>
        </div>
      </header>

      <main style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        background: "#F7F8FB",
      }}>
        {!submitted ? (
          <div style={{
            width: "100%",
            maxWidth: 420,
          }}>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <h1 style={{
                fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Noto Sans JP', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#1A1D26",
                marginBottom: 10,
              }}>
                無料で始める
              </h1>
              <p style={{
                fontSize: "0.92rem",
                color: "#4A5068",
                lineHeight: 1.8,
              }}>
                アカウントを作成してリサーチを始めましょう
              </p>
            </div>

            {/* Checklist */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              marginBottom: 28,
              flexWrap: "wrap",
            }}>
              {["永久無料プランあり", "クレカ不要", "30秒で登録完了"].map((text) => (
                <span key={text} style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: "0.78rem",
                  color: "#16A34A",
                  fontWeight: 500,
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="7" fill="rgba(22,163,74,0.08)" />
                    <path d="M4 7.2L6 9.2L10 5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {text}
                </span>
              ))}
            </div>

            {/* Card */}
            <div style={{
              background: "white",
              border: "1px solid #DFE3EC",
              borderRadius: 16,
              padding: "32px 28px",
              boxShadow: "0 4px 12px rgba(26,27,38,0.06), 0 1px 4px rgba(26,27,38,0.04)",
            }}>
              {/* Google OAuth */}
              <button
                type="button"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "12px 20px",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "#1A1D26",
                  background: "white",
                  border: "1px solid #DFE3EC",
                  borderRadius: 10,
                  cursor: "pointer",
                  transition: "background 160ms, border-color 160ms",
                  fontFamily: "inherit",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#F7F8FB";
                  e.currentTarget.style.borderColor = "#1A2B4A";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.borderColor = "#DFE3EC";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Googleで登録
              </button>

              {/* Divider */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                margin: "22px 0",
              }}>
                <div style={{ flex: 1, height: 1, background: "#EEF1F6" }} />
                <span style={{ fontSize: "0.75rem", color: "#8B92A8", whiteSpace: "nowrap" }}>または</span>
                <div style={{ flex: 1, height: 1, background: "#EEF1F6" }} />
              </div>

              {/* Email form */}
              <form onSubmit={handleEmailSubmit}>
                <label htmlFor="signup-email" style={{
                  display: "block",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#1A1D26",
                  marginBottom: 6,
                }}>
                  メールアドレス
                </label>
                <input
                  id="signup-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    fontSize: "0.88rem",
                    border: "1px solid #DFE3EC",
                    borderRadius: 8,
                    outline: "none",
                    transition: "border-color 160ms",
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#4F8FFF")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#DFE3EC")}
                />

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    marginTop: 14,
                    padding: "12px 20px",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: "white",
                    background: "#4F8FFF",
                    border: "none",
                    borderRadius: 10,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "background 160ms, transform 160ms",
                    boxShadow: "0 4px 16px rgba(79,143,255,0.25)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#3A7FFF";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "#4F8FFF";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  無料アカウントを作成
                </button>
              </form>
            </div>

            {/* Legal links */}
            <p style={{
              textAlign: "center",
              fontSize: "0.75rem",
              color: "#8B92A8",
              marginTop: 18,
              lineHeight: 1.7,
            }}>
              登録することで<a href="./terms" style={{ color: "#4F8FFF", textDecoration: "underline", textUnderlineOffset: 2 }}>利用規約</a>と
              <a href="./privacy" style={{ color: "#4F8FFF", textDecoration: "underline", textUnderlineOffset: 2 }}>プライバシーポリシー</a>に同意したものとみなされます。
            </p>

            {/* Book-call link */}
            <div style={{
              textAlign: "center",
              marginTop: 24,
              paddingTop: 20,
              borderTop: "1px solid #EEF1F6",
            }}>
              <p style={{
                fontSize: "0.82rem",
                color: "#4A5068",
              }}>
                導入前に相談したい方は{" "}
                <a href="./book-call" style={{
                  color: "#4F8FFF",
                  fontWeight: 600,
                  textDecoration: "underline",
                  textDecorationColor: "rgba(79,143,255,0.3)",
                  textUnderlineOffset: 3,
                }}>
                  無料相談を予約
                </a>
              </p>
            </div>
          </div>
        ) : (
          /* Confirmation */
          <div style={{
            width: "100%",
            maxWidth: 440,
            textAlign: "center",
          }}>
            <div style={{
              background: "white",
              border: "1px solid #DFE3EC",
              borderRadius: 16,
              padding: "48px 32px",
              boxShadow: "0 4px 12px rgba(26,27,38,0.06)",
            }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "rgba(22,163,74,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                fontSize: "1.8rem",
              }}>
                &#x2709;
              </div>
              <h1 style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#1A1D26",
                marginBottom: 12,
              }}>
                確認メールを送信しました
              </h1>
              <p style={{
                fontSize: "0.92rem",
                color: "#4A5068",
                lineHeight: 1.8,
                marginBottom: 8,
              }}>
                <strong style={{ color: "#1A1D26" }}>{email}</strong> に確認メールを送信しました。
              </p>
              <p style={{
                fontSize: "0.85rem",
                color: "#8B92A8",
                lineHeight: 1.7,
                marginBottom: 28,
              }}>
                メール内のリンクをクリックしてアカウントを有効化してください。<br />
                メールが届かない場合は迷惑メールフォルダをご確認ください。
              </p>
              <a
                href="./"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "10px 22px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#1A2B4A",
                  background: "white",
                  border: "1px solid #DFE3EC",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "background 160ms",
                }}
              >
                トップページに戻る
              </a>
            </div>
          </div>
        )}
      </main>

      <footer style={{ borderTop: "1px solid #E5E5E5", background: "#fff", padding: "40px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20">
              <path d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75" stroke="#1A1A2E" strokeWidth="7" fill="none" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.15em", color: "#111" }}>RAKUDA AI</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "32px" }}>
            <div>
              <h3 style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: "12px" }}>サポート</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                <li><a href="mailto:info@rakuda-ai.com" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>info@rakuda-ai.com</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: "12px" }}>リンク</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                <li><a href="./terms" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>利用規約</a></li>
                <li><a href="./privacy" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>プライバシーポリシー</a></li>
                <li><a href="./tokushoho" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>特定商取引法</a></li>
                <li><a href="./security" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>セキュリティ</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #E5E5E5", paddingTop: "24px", textAlign: "center" as const, fontSize: "12px", color: "#9CA3AF" }}>
            &copy; 2026 Rakuda AI Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
