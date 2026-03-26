"use client";
import { useState } from "react";

const BASE_BG = "linear-gradient(165deg, #0a0e17 0%, #0d1a2d 50%, #0f1729 100%)";
const FONT = "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', sans-serif";

const navLinkStyle: React.CSSProperties = {
  fontSize: "13px",
  color: "#94A3B8",
  textDecoration: "none",
};

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const inputStyle = (focused: boolean): React.CSSProperties => ({
    width: "100%",
    height: "46px",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${focused ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.1)"}`,
    borderRadius: "10px",
    padding: "0 14px",
    fontSize: "14px",
    color: "#E2E8F0",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: FONT,
    transition: "border-color 0.2s",
  });

  return (
    <div style={{ minHeight: "100vh", background: BASE_BG, fontFamily: FONT, color: "#E2E8F0" }}>
      {/* Header */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, height: "64px",
        background: "rgba(10,14,23,0.85)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)", zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px",
      }}>
        <a href="../" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <svg viewBox="0 0 100 100" width="24" height="24" style={{ flexShrink: 0 }}>
            <path d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75"
              stroke="#3B82F6" strokeWidth="6" fill="none" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", color: "#E2E8F0" }}>
            RAKUDA<span style={{ color: "#94A3B8", fontWeight: 400 }}>リサーチ</span>
          </span>
        </a>
        <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a href="../pricing" style={navLinkStyle}>料金</a>
          <a href="../contact" style={navLinkStyle}>お問い合わせ</a>
          <a href="../signup" style={{
            background: "linear-gradient(135deg, #F59E0B, #D97706)",
            color: "#fff", borderRadius: "8px", padding: "8px 16px",
            fontSize: "13px", fontWeight: 600, textDecoration: "none",
          }}>サインアップ</a>
        </nav>
      </header>

      {/* Main: Centered Card */}
      <main style={{
        paddingTop: "64px", minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "64px 24px",
      }}>
        <div style={{
          width: "100%", maxWidth: "420px",
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "20px", padding: "40px 36px",
        }}>
          {/* Logo + Title */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "14px",
                background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg viewBox="0 0 100 100" width="26" height="26">
                  <path d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75"
                    stroke="#3B82F6" strokeWidth="7" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#E2E8F0", marginBottom: "6px" }}>
              RAKUDAリサーチにログイン
            </h1>
            <p style={{ fontSize: "14px", color: "#94A3B8" }}>アカウントにアクセスする</p>
          </div>

          {/* Google OAuth Button */}
          <button style={{
            width: "100%", height: "46px",
            background: "#fff", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center",
            gap: "10px", cursor: "pointer", fontFamily: FONT,
            fontSize: "14px", fontWeight: 500, color: "#1a1a1a",
            marginBottom: "20px", transition: "background 0.15s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
          >
            <GoogleIcon />
            Googleでログイン
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
            <span style={{ fontSize: "12px", color: "#475569", whiteSpace: "nowrap" }}>または</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
          </div>

          {/* Email Input */}
          <div style={{ marginBottom: "14px" }}>
            <label style={{ fontSize: "13px", fontWeight: 500, color: "#94A3B8", display: "block", marginBottom: "6px" }}>
              メールアドレス
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              placeholder="you@example.com"
              style={inputStyle(emailFocus)}
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: "8px" }}>
            <label style={{ fontSize: "13px", fontWeight: 500, color: "#94A3B8", display: "block", marginBottom: "6px" }}>
              パスワード
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              placeholder="パスワードを入力"
              style={inputStyle(passwordFocus)}
            />
          </div>

          {/* Forgot Password */}
          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <a href="#" style={{ fontSize: "12px", color: "#3B82F6", textDecoration: "none" }}>
              パスワードを忘れた方
            </a>
          </div>

          {/* Login Button */}
          <button style={{
            width: "100%", height: "46px",
            background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
            border: "none", borderRadius: "10px",
            color: "#fff", fontSize: "15px", fontWeight: 600,
            cursor: "pointer", fontFamily: FONT,
            transition: "opacity 0.15s", marginBottom: "24px",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            ログイン
          </button>

          {/* Signup Link */}
          <p style={{ textAlign: "center", fontSize: "13px", color: "#94A3B8" }}>
            アカウントをお持ちでない方{" "}
            <a href="../signup" style={{ color: "#3B82F6", textDecoration: "none", fontWeight: 500 }}>
              サインアップ
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: "center", padding: "24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "8px" }}>
          <a href="../terms" style={{ fontSize: "12px", color: "#475569", textDecoration: "none" }}>利用規約</a>
          <a href="../privacy" style={{ fontSize: "12px", color: "#475569", textDecoration: "none" }}>プライバシーポリシー</a>
        </div>
        <p style={{ fontSize: "12px", color: "#475569" }}>© 2026 Rakuda AI Inc.</p>
      </footer>
    </div>
  );
}
