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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

const FAQ_ITEMS = [
  {
    q: "無料トライアルの仕組みは？",
    a: "クレジットカード不要で14日間すべての機能を無制限でお試しいただけます。トライアル終了後は自動的にFreeプランに移行します。",
  },
  {
    q: "プランの変更はいつでもできますか？",
    a: "はい、いつでも変更可能です。アップグレードは即時反映され、ダウングレードは翌請求サイクルから適用されます。",
  },
  {
    q: "チームメンバーの追加方法は？",
    a: "Enterpriseプランでは設定画面の「チーム管理」からメールアドレスで招待できます。最大5名まで追加可能です。",
  },
  {
    q: "解約手続きは？",
    a: "設定画面の「プラン」セクションからいつでも解約できます。解約後も契約期間終了まではサービスをご利用いただけます。",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: CARD_BG,
        border: CARD_BORDER,
        borderRadius: "10px",
        overflow: "hidden",
        transition: "border-color 0.15s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "18px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          fontFamily: FONT,
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: 600, color: TEXT_PRIMARY, textAlign: "left" }}>{q}</span>
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke={TEXT_MUTED}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div style={{ padding: "0 20px 18px", fontSize: "13px", color: TEXT_MUTED, lineHeight: 1.7 }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "¥0",
      annualPrice: "¥0",
      unit: "/月",
      description: "個人の調査・試用に",
      features: [
        "月3レポートまで",
        "基本テンプレート",
        "Web検索のみ",
        "透かし付き出力",
      ],
      cta: "無料で始める",
      ctaStyle: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: "¥2,980",
      annualPrice: "¥2,480",
      unit: "/月",
      description: "本格的なリサーチ業務に",
      features: [
        "月30レポートまで",
        "カスタムテンプレート3つ",
        "PDF解析",
        "出典管理",
        "優先生成",
      ],
      cta: "Proを始める",
      ctaStyle: "solid" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "¥9,800",
      annualPrice: "¥7,980",
      unit: "/月",
      description: "チームでの運用・業務統合に",
      features: [
        "無制限レポート",
        "チーム5名まで",
        "API連携",
        "カスタムモデル対応",
        "SLA保証",
        "専任サポート",
      ],
      cta: "お問い合わせ",
      ctaStyle: "outline" as const,
      popular: false,
    },
  ];

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
        <Logo />
        <nav style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a href="/demo/final/pricing" style={{ fontSize: "13px", color: TEXT_PRIMARY, textDecoration: "none", fontWeight: 600 }}>料金</a>
          <a href="/demo/final/contact" style={{ fontSize: "13px", color: TEXT_MUTED, textDecoration: "none" }}>お問い合わせ</a>
          <a href="#" style={{ fontSize: "13px", color: TEXT_MUTED, textDecoration: "none" }}>ログイン</a>
          <a
            href="#"
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
      <main style={{ paddingTop: "64px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px 80px" }}>

          {/* Title */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1 style={{ fontSize: "32px", fontWeight: 700, color: TEXT_PRIMARY, marginBottom: "10px" }}>
              料金プラン
            </h1>
            <p style={{ fontSize: "15px", color: TEXT_MUTED }}>
              すべてのプランで14日間無料トライアル
            </p>
          </div>

          {/* Toggle */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                padding: "4px",
              }}
            >
              <button
                onClick={() => setAnnual(false)}
                style={{
                  padding: "7px 20px",
                  borderRadius: "7px",
                  border: "none",
                  background: !annual ? "rgba(255,255,255,0.1)" : "transparent",
                  color: !annual ? TEXT_PRIMARY : TEXT_MUTED,
                  fontSize: "13px",
                  fontWeight: !annual ? 600 : 400,
                  cursor: "pointer",
                  fontFamily: FONT,
                  transition: "all 0.15s",
                }}
              >
                月額
              </button>
              <button
                onClick={() => setAnnual(true)}
                style={{
                  padding: "7px 20px",
                  borderRadius: "7px",
                  border: "none",
                  background: annual ? "rgba(255,255,255,0.1)" : "transparent",
                  color: annual ? TEXT_PRIMARY : TEXT_MUTED,
                  fontSize: "13px",
                  fontWeight: annual ? 600 : 400,
                  cursor: "pointer",
                  fontFamily: FONT,
                  transition: "all 0.15s",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                年額
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#10B981",
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: "4px",
                    padding: "1px 6px",
                    letterSpacing: "0.03em",
                  }}
                >
                  最大20%OFF
                </span>
              </button>
            </div>
          </div>

          {/* Plan cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "72px" }}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: plan.popular ? "rgba(59,130,246,0.07)" : CARD_BG,
                  border: plan.popular ? `1px solid rgba(59,130,246,0.3)` : CARD_BORDER,
                  borderRadius: "16px",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: `linear-gradient(135deg, ${ACCENT}, #1D4ED8)`,
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "3px 14px",
                      borderRadius: "20px",
                      letterSpacing: "0.06em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div style={{ marginBottom: "20px" }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: plan.popular ? ACCENT : TEXT_MUTED, letterSpacing: "0.05em", marginBottom: "4px" }}>
                    {plan.name}
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "28px", fontWeight: 800, color: TEXT_PRIMARY, lineHeight: 1 }}>
                      {annual ? plan.annualPrice : plan.price}
                    </span>
                    <span style={{ fontSize: "13px", color: TEXT_MUTED, paddingBottom: "2px" }}>{plan.unit}</span>
                  </div>
                  {annual && plan.price !== "¥0" && (
                    <div style={{ fontSize: "11px", color: TEXT_FAINT }}>
                      月額換算（年間一括払い）
                    </div>
                  )}
                  <div style={{ fontSize: "12px", color: TEXT_FAINT, marginTop: "6px" }}>{plan.description}</div>
                </div>

                <div style={{ flex: 1, marginBottom: "24px" }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                      <CheckIcon />
                      <span style={{ fontSize: "13px", color: TEXT_MUTED }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={plan.name === "Enterprise" ? "/demo/final/contact" : "#"}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "10px 0",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "opacity 0.15s",
                    ...(plan.ctaStyle === "solid"
                      ? {
                          background: ACCENT,
                          color: "#fff",
                          border: "none",
                        }
                      : {
                          background: "transparent",
                          color: plan.popular ? ACCENT : TEXT_MUTED,
                          border: `1px solid ${plan.popular ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.12)"}`,
                        }),
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: TEXT_PRIMARY,
                textAlign: "center",
                marginBottom: "32px",
              }}
            >
              よくある質問
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {FAQ_ITEMS.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
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
          <a href="./terms" style={{ color: TEXT_FAINT, textDecoration: "none" }}>利用規約</a>
          <a href="./privacy" style={{ color: TEXT_FAINT, textDecoration: "none" }}>プライバシーポリシー</a>
          <a href="mailto:info@rakuda-ai.com" style={{ color: TEXT_FAINT, textDecoration: "none" }}>お問い合わせ</a>
        </div>
      </footer>
    </div>
  );
}
