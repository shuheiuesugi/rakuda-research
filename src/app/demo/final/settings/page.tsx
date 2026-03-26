"use client";
import { useState } from "react";

const BG = "linear-gradient(165deg, #0a0e17 0%, #0d1a2d 50%, #0f1729 100%)";
const TEXT_PRIMARY = "#E2E8F0";
const TEXT_MUTED = "#94A3B8";
const TEXT_FAINT = "#475569";
const ACCENT = "#3B82F6";
const CARD_BG = "rgba(255,255,255,0.025)";
const CARD_BORDER = "1px solid rgba(255,255,255,0.05)";
const FONT = "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', sans-serif";

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

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!value)}
      style={{
        width: "44px",
        height: "24px",
        borderRadius: "12px",
        background: value ? ACCENT : "rgba(255,255,255,0.12)",
        border: "none",
        cursor: "pointer",
        position: "relative",
        transition: "background 0.2s",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "2px",
          left: value ? "22px" : "2px",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "#fff",
          transition: "left 0.2s",
          display: "block",
        }}
      />
    </button>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: CARD_BG,
        border: CARD_BORDER,
        borderRadius: "12px",
        padding: "24px",
        marginBottom: "20px",
      }}
    >
      <h2
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: TEXT_MUTED,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: "20px",
          fontFamily: FONT,
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ fontSize: "12px", color: TEXT_FAINT, marginBottom: "6px", fontFamily: FONT }}>{label}</div>
      <div
        style={{
          fontSize: "14px",
          color: TEXT_PRIMARY,
          fontFamily: FONT,
          padding: "10px 14px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "8px",
        }}
      >
        {value}
      </div>
    </div>
  );
}

const sidebarItems = [
  { label: "検索", icon: "M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z", href: "../" },
  { label: "レポート", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z", href: "../" },
  { label: "テンプレート", icon: "M4 5h16M4 10h16M4 15h10", href: "../" },
  { label: "設定", icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z", href: "../settings", active: true },
];

export default function SettingsPage() {
  const [notifyReport, setNotifyReport] = useState(true);
  const [notifyWeekly, setNotifyWeekly] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("sk-rakuda-XXXXXXXXXXXXXXXXXXXXXXXXXX");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        fontFamily: FONT,
        color: TEXT_PRIMARY,
      }}
    >
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
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            山
          </div>
          <span style={{ fontSize: "13px", color: TEXT_MUTED }}>山田 太郎</span>
        </div>
      </header>

      {/* Body */}
      <div style={{ display: "flex", paddingTop: "64px", minHeight: "100vh" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: "200px",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            padding: "24px 0",
            flexShrink: 0,
            position: "sticky",
            top: "64px",
            height: "calc(100vh - 64px)",
          }}
        >
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 20px",
                textDecoration: "none",
                color: item.active ? TEXT_PRIMARY : TEXT_MUTED,
                background: item.active ? "rgba(59,130,246,0.12)" : "transparent",
                borderLeft: item.active ? `2px solid ${ACCENT}` : "2px solid transparent",
                fontSize: "13px",
                fontWeight: item.active ? 600 : 400,
                transition: "all 0.15s",
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.icon} />
              </svg>
              {item.label}
            </a>
          ))}
        </aside>

        {/* Main */}
        <main style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "22px", fontWeight: 700, color: TEXT_PRIMARY, marginBottom: "8px" }}>設定</h1>
            <p style={{ fontSize: "13px", color: TEXT_MUTED, marginBottom: "32px" }}>アカウントとプランの管理</p>

            {/* Profile */}
            <SectionCard title="プロフィール">
              <Field label="名前" value="山田 太郎" />
              <Field label="メールアドレス" value="yamada@example.com" />
              <Field label="会社名" value="株式会社サンプル" />
              <button
                style={{
                  marginTop: "8px",
                  padding: "8px 20px",
                  background: "rgba(59,130,246,0.15)",
                  border: `1px solid rgba(59,130,246,0.35)`,
                  borderRadius: "8px",
                  color: ACCENT,
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: FONT,
                }}
              >
                編集
              </button>
            </SectionCard>

            {/* Plan */}
            <SectionCard title="プラン">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: TEXT_PRIMARY, marginBottom: "4px" }}>Freeプラン</div>
                  <div style={{ fontSize: "13px", color: TEXT_MUTED }}>月3レポートまで利用可能</div>
                  <div style={{ marginTop: "12px", display: "flex", gap: "12px" }}>
                    <div style={{ fontSize: "12px", color: TEXT_FAINT }}>
                      今月の利用：<span style={{ color: TEXT_PRIMARY, fontWeight: 600 }}>2 / 3レポート</span>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      height: "4px",
                      width: "200px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "2px",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ height: "100%", width: "66%", background: ACCENT, borderRadius: "2px" }} />
                  </div>
                </div>
                <button
                  style={{
                    padding: "10px 24px",
                    background: ACCENT,
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: FONT,
                    whiteSpace: "nowrap",
                  }}
                >
                  プランを変更
                </button>
              </div>
            </SectionCard>

            {/* API */}
            <SectionCard title="API連携">
              <div style={{ fontSize: "13px", color: TEXT_MUTED, marginBottom: "12px" }}>
                APIキーを使用して外部サービスと連携できます
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 14px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              >
                <code style={{ flex: 1, fontSize: "13px", color: TEXT_PRIMARY, fontFamily: "monospace", letterSpacing: "0.04em" }}>
                  sk-rakuda-••••••••••••••••XXXX
                </code>
                <button
                  onClick={handleCopy}
                  style={{
                    padding: "5px 14px",
                    background: copied ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.07)",
                    border: `1px solid ${copied ? "rgba(16,185,129,0.4)" : "rgba(255,255,255,0.1)"}`,
                    borderRadius: "6px",
                    color: copied ? "#10B981" : TEXT_MUTED,
                    fontSize: "12px",
                    cursor: "pointer",
                    fontFamily: FONT,
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {copied ? "コピー完了" : "コピー"}
                </button>
              </div>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: ACCENT,
                  fontSize: "13px",
                  cursor: "pointer",
                  padding: 0,
                  fontFamily: FONT,
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                新しいキーを生成
              </button>
            </SectionCard>

            {/* Notifications */}
            <SectionCard title="通知設定">
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "14px", color: TEXT_PRIMARY, marginBottom: "2px" }}>レポート完了通知</div>
                    <div style={{ fontSize: "12px", color: TEXT_FAINT }}>レポートの生成が完了したときに通知</div>
                  </div>
                  <Toggle value={notifyReport} onChange={setNotifyReport} />
                </div>
                <div style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "14px", color: TEXT_PRIMARY, marginBottom: "2px" }}>週次サマリー</div>
                    <div style={{ fontSize: "12px", color: TEXT_FAINT }}>毎週月曜日に利用状況をメールで受信</div>
                  </div>
                  <Toggle value={notifyWeekly} onChange={setNotifyWeekly} />
                </div>
              </div>
            </SectionCard>

            {/* Account */}
            <SectionCard title="アカウント">
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <button
                  style={{
                    padding: "10px 20px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    color: TEXT_MUTED,
                    fontSize: "13px",
                    cursor: "pointer",
                    fontFamily: FONT,
                    textAlign: "left",
                    width: "fit-content",
                  }}
                >
                  ログアウト
                </button>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "#EF4444",
                    fontSize: "13px",
                    cursor: "pointer",
                    padding: 0,
                    fontFamily: FONT,
                    textAlign: "left",
                    width: "fit-content",
                    opacity: 0.7,
                  }}
                >
                  アカウントを削除
                </button>
              </div>
            </SectionCard>
          </div>
        </main>
      </div>

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
