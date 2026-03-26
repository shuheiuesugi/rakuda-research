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

function CheckIcon({ size = 14, color = "#10B981" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const inputStyle = (focused: boolean): React.CSSProperties => ({
    width: "100%",
    height: "46px",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${focused ? "rgba(245,158,11,0.5)" : "rgba(255,255,255,0.1)"}`,
    borderRadius: "10px",
    padding: "0 14px",
    fontSize: "14px",
    color: "#E2E8F0",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: FONT,
    transition: "border-color 0.2s",
  });

  const FREE_PLAN_FEATURES = [
    "月3レポートまで無料",
    "AIによる企業・業界分析",
    "ソース引用付きレポート",
  ];

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
          <a href="../login" style={navLinkStyle}>ログイン</a>
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
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "14px",
                background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg viewBox="0 0 100 100" width="26" height="26">
                  <path d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75"
                    stroke="#F59E0B" strokeWidth="7" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#E2E8F0", marginBottom: "6px" }}>
              RAKUDAリサーチを始める
            </h1>
            {/* Free Plan Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)",
              borderRadius: "20px", padding: "4px 14px", marginTop: "8px",
            }}>
              <span style={{ fontSize: "12px", color: "#F59E0B", fontWeight: 600 }}>
                Freeプラン — 月3レポート無料
              </span>
            </div>
          </div>

          {/* Free Plan Features */}
          <div style={{
            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "10px", padding: "12px 16px", marginBottom: "24px",
          }}>
            {FREE_PLAN_FEATURES.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <CheckIcon />
                <span style={{ fontSize: "12px", color: "#94A3B8" }}>{f}</span>
              </div>
            ))}
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
            Googleでサインアップ
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
            <span style={{ fontSize: "12px", color: "#475569", whiteSpace: "nowrap" }}>または</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
          </div>

          {/* Name Input */}
          <div style={{ marginBottom: "14px" }}>
            <label style={{ fontSize: "13px", fontWeight: 500, color: "#94A3B8", display: "block", marginBottom: "6px" }}>
              氏名
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
              placeholder="山田 太郎"
              style={inputStyle(nameFocus)}
            />
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
          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontSize: "13px", fontWeight: 500, color: "#94A3B8", display: "block", marginBottom: "6px" }}>
              パスワード
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              placeholder="8文字以上"
              style={inputStyle(passwordFocus)}
            />
            {password.length > 0 && password.length < 8 && (
              <p style={{ fontSize: "11px", color: "#F59E0B", marginTop: "4px" }}>8文字以上で入力してください</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "20px" }}>
            <button
              onClick={() => setAgreed(!agreed)}
              style={{
                width: "18px", height: "18px", borderRadius: "4px", flexShrink: 0,
                background: agreed ? "linear-gradient(135deg, #F59E0B, #D97706)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${agreed ? "#F59E0B" : "rgba(255,255,255,0.15)"}`,
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.15s", marginTop: "1px",
              }}
            >
              {agreed && <CheckIcon size={11} color="#fff" />}
            </button>
            <span style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.5 }}>
              <a href="#" style={{ color: "#3B82F6", textDecoration: "none" }}>利用規約</a>
              {" "}と{" "}
              <a href="#" style={{ color: "#3B82F6", textDecoration: "none" }}>プライバシーポリシー</a>
              に同意します
            </span>
          </div>

          {/* Signup Button */}
          <button
            disabled={!agreed}
            style={{
              width: "100%", height: "46px",
              background: agreed
                ? "linear-gradient(135deg, #F59E0B, #D97706)"
                : "rgba(255,255,255,0.06)",
              border: "none", borderRadius: "10px",
              color: agreed ? "#fff" : "#475569",
              fontSize: "15px", fontWeight: 600,
              cursor: agreed ? "pointer" : "not-allowed",
              fontFamily: FONT, transition: "all 0.2s",
              marginBottom: "24px",
            }}
            onMouseEnter={(e) => { if (agreed) e.currentTarget.style.opacity = "0.9"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            アカウント作成
          </button>

          {/* Login Link */}
          <p style={{ textAlign: "center", fontSize: "13px", color: "#94A3B8" }}>
            すでにアカウントをお持ちの方{" "}
            <a href="../login" style={{ color: "#3B82F6", textDecoration: "none", fontWeight: 500 }}>
              ログイン
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
          <a href="#" style={{ fontSize: "12px", color: "#475569", textDecoration: "none" }}>利用規約</a>
          <a href="#" style={{ fontSize: "12px", color: "#475569", textDecoration: "none" }}>プライバシーポリシー</a>
        </div>
        <p style={{ fontSize: "12px", color: "#475569" }}>© 2026 Rakuda AI Inc.</p>
      </footer>
    </div>
  );
}
