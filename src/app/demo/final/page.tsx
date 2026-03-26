"use client";
import { useState } from "react";

const BASE_BG = "linear-gradient(165deg, #0a0e17 0%, #0d1a2d 50%, #0f1729 100%)";
const CARD_BG = "rgba(255,255,255,0.025)";
const CARD_BORDER = "1px solid rgba(255,255,255,0.05)";
const FONT = "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', sans-serif";

const navLinkStyle: React.CSSProperties = {
  fontSize: "13px",
  color: "#94A3B8",
  textDecoration: "none",
};
const ctaBtnStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #F59E0B, #D97706)",
  color: "#fff",
  borderRadius: "8px",
  padding: "8px 16px",
  fontSize: "13px",
  fontWeight: 600,
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
};

const QUICK_TAGS = [
  "SaaS スタートアップ",
  "生成AI",
  "フィンテック",
  "医療DX",
  "物流テック",
  "気候テック",
  "Nvidia",
  "OpenAI",
];

const RECENT_REPORTS = [
  {
    id: 1,
    title: "Anthropic — 企業調査レポート",
    date: "2026-03-25",
    tags: ["生成AI", "LLM"],
    summary: "Claude開発元。Series E $2.75B調達。エンタープライズ向けAPI展開を加速中。",
  },
  {
    id: 2,
    title: "Sakana AI — 競合分析",
    date: "2026-03-24",
    tags: ["生成AI", "日本"],
    summary: "東京拠点の生成AI研究機関。進化的アルゴリズムを活用したモデル開発が特徴。",
  },
  {
    id: 3,
    title: "Stripe — フィンテック市場動向",
    date: "2026-03-22",
    tags: ["フィンテック", "決済"],
    summary: "決済インフラの最大手。2026年IPOを視野に入れた事業拡大フェーズ。",
  },
  {
    id: 4,
    title: "Waymo — 自動運転業界レポート",
    date: "2026-03-20",
    tags: ["モビリティ", "AI"],
    summary: "Google傘下の自動運転企業。サンフランシスコ・LA・フェニックスで商用展開中。",
  },
];

const REPORT_SECTIONS = [
  { id: "overview", label: "概要" },
  { id: "business", label: "事業モデル" },
  { id: "market", label: "市場分析" },
  { id: "financials", label: "財務情報" },
  { id: "competition", label: "競合比較" },
  { id: "risks", label: "リスク" },
];

const SIDEBAR_ITEMS = [
  { id: "search", label: "検索", icon: "S" },
  { id: "reports", label: "レポート", icon: "R" },
  { id: "templates", label: "テンプレート", icon: "T" },
  { id: "settings", label: "設定", icon: "G" },
];

const SOURCES = [
  { title: "Anthropic Newsroom", url: "anthropic.com", date: "2026-03-20" },
  { title: "TechCrunch — Anthropic raises $2.75B", url: "techcrunch.com", date: "2026-02-15" },
  { title: "Forbes — AI Startup Rankings 2026", url: "forbes.com", date: "2026-01-10" },
  { title: "SEC Filing — Form D", url: "sec.gov", date: "2025-12-01" },
];

export default function FinalPage() {
  const [appMode, setAppMode] = useState(false);
  const [selectedReport, setSelectedReport] = useState(RECENT_REPORTS[0]);
  const [searchValue, setSearchValue] = useState("");
  const [activeSection, setActiveSection] = useState("overview");
  const [activeSidebar, setActiveSidebar] = useState("reports");

  const handleReportClick = (report: typeof RECENT_REPORTS[0]) => {
    setSelectedReport(report);
    setAppMode(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      setAppMode(true);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: BASE_BG, fontFamily: FONT, color: "#E2E8F0" }}>
      {/* Header */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, height: "64px",
        background: "rgba(10,14,23,0.85)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)", zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg viewBox="0 0 100 100" width="24" height="24" style={{ flexShrink: 0 }}>
            <path d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75"
              stroke="#3B82F6" strokeWidth="6" fill="none" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", color: "#E2E8F0" }}>
            RAKUDA<span style={{ color: "#94A3B8", fontWeight: 400 }}>リサーチ</span>
          </span>
        </div>
        <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a href="./pricing" style={navLinkStyle}>料金</a>
          <a href="./contact" style={navLinkStyle}>お問い合わせ</a>
          {appMode ? (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                onClick={() => setAppMode(false)}
                style={{ ...navLinkStyle, background: "none", border: "none", cursor: "pointer" }}
              >
                ホームに戻る
              </button>
              <a href="./settings" style={{ ...navLinkStyle, background: "none", border: "none", cursor: "pointer", textDecoration: "none" }}>設定</a>
              <div style={{
                width: "34px", height: "34px", borderRadius: "50%",
                background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "13px", fontWeight: 700, color: "#fff", cursor: "pointer",
              }}>U</div>
            </div>
          ) : (
            <>
              <a href="./login" style={navLinkStyle}>ログイン</a>
              <a href="./signup" style={ctaBtnStyle}>無料で始める</a>
            </>
          )}
        </nav>
      </header>

      {/* Main Content */}
      {!appMode ? (
        /* ===== HOME STATE: Search Engine Style ===== */
        <main style={{ paddingTop: "64px", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Hero Search Area */}
          <div style={{ width: "100%", maxWidth: "720px", padding: "80px 24px 40px", textAlign: "center" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: "20px", padding: "4px 14px", marginBottom: "28px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3B82F6", display: "inline-block" }} />
              <span style={{ fontSize: "12px", color: "#3B82F6", fontWeight: 500 }}>AI駆動の企業リサーチ</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#E2E8F0", marginBottom: "12px", lineHeight: 1.2 }}>
              深いリサーチを、<br />数分で。
            </h1>
            <p style={{ fontSize: "16px", color: "#94A3B8", marginBottom: "40px", lineHeight: 1.6 }}>
              企業・業界・競合をAIが網羅的に調査。VCデューデリジェンスに必要な情報を一括生成します。
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} style={{ position: "relative", marginBottom: "20px" }}>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="企業名・テーマを入力してリサーチ開始"
                style={{
                  width: "100%", height: "60px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "16px", padding: "0 120px 0 24px",
                  fontSize: "16px", color: "#E2E8F0",
                  outline: "none", boxSizing: "border-box",
                  fontFamily: FONT,
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
              />
              <button
                type="submit"
                style={{
                  position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)",
                  background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
                  color: "#fff", border: "none", borderRadius: "10px",
                  padding: "10px 20px", fontSize: "14px", fontWeight: 600,
                  cursor: "pointer", fontFamily: FONT,
                }}
              >
                リサーチ開始
              </button>
            </form>

            {/* Quick Tags */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
              {QUICK_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => { setSearchValue(tag); setAppMode(true); }}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px", padding: "6px 14px",
                    fontSize: "13px", color: "#94A3B8",
                    cursor: "pointer", fontFamily: FONT,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)");
                    (e.currentTarget.style.color = "#E2E8F0");
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)");
                    (e.currentTarget.style.color = "#94A3B8");
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Reports Grid */}
          <div style={{ width: "100%", maxWidth: "1100px", padding: "0 24px 80px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "14px", fontWeight: 600, color: "#94A3B8", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                最近のレポート
              </h2>
              <button
                onClick={() => setAppMode(true)}
                style={{ fontSize: "13px", color: "#3B82F6", background: "none", border: "none", cursor: "pointer", fontFamily: FONT }}
              >
                すべて見る
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
              {RECENT_REPORTS.map((report) => (
                <div
                  key={report.id}
                  onClick={() => handleReportClick(report)}
                  style={{
                    background: CARD_BG, border: CARD_BORDER,
                    borderRadius: "14px", padding: "20px",
                    cursor: "pointer", transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget.style.background = "rgba(255,255,255,0.045)");
                    (e.currentTarget.style.borderColor = "rgba(59,130,246,0.25)");
                    (e.currentTarget.style.transform = "translateY(-2px)");
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget.style.background = CARD_BG);
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)");
                    (e.currentTarget.style.transform = "translateY(0)");
                  }}
                >
                  <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
                    {report.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: "10px", fontWeight: 600,
                        color: "#3B82F6", background: "rgba(59,130,246,0.1)",
                        borderRadius: "4px", padding: "2px 8px",
                        letterSpacing: "0.04em",
                      }}>{tag}</span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#E2E8F0", marginBottom: "8px", lineHeight: 1.4 }}>
                    {report.title}
                  </h3>
                  <p style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.6, marginBottom: "14px" }}>
                    {report.summary}
                  </p>
                  <span style={{ fontSize: "11px", color: "#475569" }}>{report.date}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      ) : (
        /* ===== APP MODE: Sidebar + Report ===== */
        <div style={{ paddingTop: "64px", display: "flex", height: "100vh" }}>
          {/* Left Sidebar */}
          <aside style={{
            width: "200px", flexShrink: 0,
            background: "rgba(10,14,23,0.9)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            display: "flex", flexDirection: "column",
            paddingTop: "16px", overflow: "hidden",
            position: "fixed", top: "64px", bottom: 0, left: 0,
          }}>
            {/* Sidebar Nav */}
            <div style={{ padding: "0 8px", marginBottom: "20px" }}>
              {SIDEBAR_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSidebar(item.id)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", gap: "10px",
                    padding: "9px 12px", borderRadius: "8px", marginBottom: "2px",
                    background: activeSidebar === item.id ? "rgba(59,130,246,0.12)" : "transparent",
                    border: activeSidebar === item.id ? "1px solid rgba(59,130,246,0.2)" : "1px solid transparent",
                    color: activeSidebar === item.id ? "#3B82F6" : "#94A3B8",
                    fontSize: "13px", fontWeight: activeSidebar === item.id ? 600 : 400,
                    cursor: "pointer", textAlign: "left", fontFamily: FONT, transition: "all 0.15s",
                  }}
                >
                  <span style={{
                    width: "20px", height: "20px", borderRadius: "5px",
                    background: activeSidebar === item.id ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "10px", fontWeight: 700, flexShrink: 0,
                    color: activeSidebar === item.id ? "#3B82F6" : "#94A3B8",
                  }}>{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", margin: "0 12px 16px" }} />

            {/* Report List */}
            <div style={{ padding: "0 8px", flex: 1, overflowY: "auto" }}>
              <p style={{ fontSize: "10px", fontWeight: 600, color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0 12px", marginBottom: "8px" }}>
                レポート
              </p>
              {RECENT_REPORTS.map((report) => (
                <button
                  key={report.id}
                  onClick={() => setSelectedReport(report)}
                  style={{
                    width: "100%", textAlign: "left", padding: "8px 12px",
                    borderRadius: "6px", marginBottom: "2px",
                    background: selectedReport.id === report.id ? "rgba(59,130,246,0.1)" : "transparent",
                    border: "1px solid transparent",
                    cursor: "pointer", fontFamily: FONT, transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => { if (selectedReport.id !== report.id) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                  onMouseLeave={(e) => { if (selectedReport.id !== report.id) e.currentTarget.style.background = "transparent"; }}
                >
                  <div style={{ fontSize: "12px", color: selectedReport.id === report.id ? "#E2E8F0" : "#94A3B8", lineHeight: 1.4, fontWeight: selectedReport.id === report.id ? 500 : 400 }}>
                    {report.title.split(" — ")[0]}
                  </div>
                  <div style={{ fontSize: "11px", color: "#475569", marginTop: "2px" }}>{report.date}</div>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Report Area */}
          <main style={{
            marginLeft: "200px", flex: 1, overflowY: "auto",
            padding: "32px 40px 80px", maxWidth: "calc(100vw - 200px - 300px)",
          }}>
            {/* Report Header */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                {selectedReport.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: "11px", fontWeight: 600, color: "#3B82F6",
                    background: "rgba(59,130,246,0.1)", borderRadius: "5px", padding: "3px 10px",
                  }}>{tag}</span>
                ))}
                <span style={{
                  fontSize: "11px", color: "#475569",
                  background: "rgba(255,255,255,0.04)", borderRadius: "5px", padding: "3px 10px",
                }}>生成: {selectedReport.date}</span>
              </div>
              <h1 style={{ fontSize: "26px", fontWeight: 700, color: "#E2E8F0", marginBottom: "8px", lineHeight: 1.3 }}>
                {selectedReport.title}
              </h1>
              <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.6 }}>{selectedReport.summary}</p>
            </div>

            {/* Section Tabs */}
            <div style={{
              display: "flex", gap: "4px", marginBottom: "28px",
              background: "rgba(255,255,255,0.03)", borderRadius: "10px", padding: "4px",
              overflowX: "auto",
            }}>
              {REPORT_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  style={{
                    padding: "7px 16px", borderRadius: "7px",
                    background: activeSection === section.id ? "rgba(59,130,246,0.15)" : "transparent",
                    border: activeSection === section.id ? "1px solid rgba(59,130,246,0.25)" : "1px solid transparent",
                    color: activeSection === section.id ? "#3B82F6" : "#94A3B8",
                    fontSize: "13px", fontWeight: activeSection === section.id ? 600 : 400,
                    cursor: "pointer", whiteSpace: "nowrap", fontFamily: FONT, transition: "all 0.15s",
                  }}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Report Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Summary Card */}
              <div style={{ background: CARD_BG, border: CARD_BORDER, borderRadius: "14px", padding: "24px" }}>
                <h2 style={{ fontSize: "15px", fontWeight: 700, color: "#E2E8F0", marginBottom: "16px" }}>エグゼクティブサマリー</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "20px" }}>
                  {[
                    { label: "設立年", value: "2021" },
                    { label: "本社", value: "San Francisco, CA" },
                    { label: "従業員数", value: "約850名" },
                    { label: "最終調達", value: "$2.75B (Series E)" },
                    { label: "累計調達", value: "$7.3B+" },
                    { label: "企業価値", value: "$61.5B（推定）" },
                  ].map((item) => (
                    <div key={item.label} style={{
                      background: "rgba(255,255,255,0.02)", borderRadius: "8px", padding: "14px",
                      border: "1px solid rgba(255,255,255,0.04)",
                    }}>
                      <div style={{ fontSize: "11px", color: "#475569", marginBottom: "4px", fontWeight: 500 }}>{item.label}</div>
                      <div style={{ fontSize: "14px", color: "#E2E8F0", fontWeight: 600 }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.8 }}>
                  AnthropicはAI安全性研究を重視する生成AI企業。大規模言語モデル「Claude」シリーズを開発・提供。
                  GoogleとAmazonの戦略的投資を受け、エンタープライズ向けClaudeのAPI展開を急拡大中。
                  競合OpenAIとの差別化軸は「Constitutional AI」による安全性へのアプローチ。
                </p>
              </div>

              {/* Business Model */}
              <div style={{ background: CARD_BG, border: CARD_BORDER, borderRadius: "14px", padding: "24px" }}>
                <h2 style={{ fontSize: "15px", fontWeight: 700, color: "#E2E8F0", marginBottom: "16px" }}>事業モデル</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { name: "Claude API", desc: "開発者・企業向けAPI課金。トークン単位の従量制。メイン収益源。", pct: 68 },
                    { name: "Claude.ai Pro/Team", desc: "個人・チーム向けサブスクリプション。月額$20〜。", pct: 22 },
                    { name: "エンタープライズ契約", desc: "大企業向けカスタム契約。SLA・コンプライアンス対応込み。", pct: 10 },
                  ].map((item) => (
                    <div key={item.name}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                        <span style={{ fontSize: "13px", fontWeight: 600, color: "#E2E8F0" }}>{item.name}</span>
                        <span style={{ fontSize: "12px", color: "#94A3B8" }}>{item.pct}%</span>
                      </div>
                      <div style={{ height: "5px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", marginBottom: "6px" }}>
                        <div style={{ height: "100%", width: `${item.pct}%`, background: "linear-gradient(90deg, #3B82F6, #1D4ED8)", borderRadius: "3px" }} />
                      </div>
                      <p style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk */}
              <div style={{ background: CARD_BG, border: CARD_BORDER, borderRadius: "14px", padding: "24px" }}>
                <h2 style={{ fontSize: "15px", fontWeight: 700, color: "#E2E8F0", marginBottom: "16px" }}>主要リスク</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { level: "高", color: "#EF4444", bg: "rgba(239,68,68,0.08)", text: "OpenAI・Googleとの激しい競合。モデル性能・価格競争が継続" },
                    { level: "中", color: "#F59E0B", bg: "rgba(245,158,11,0.08)", text: "AI規制強化（EU AI Act等）による事業制約の可能性" },
                    { level: "中", color: "#F59E0B", bg: "rgba(245,158,11,0.08)", text: "大規模モデルの開発コストが収益化を上回るリスク" },
                    { level: "低", color: "#3B82F6", bg: "rgba(59,130,246,0.08)", text: "キーパーソン（Dario Amodei CEO等）の退職リスク" },
                  ].map((risk, i) => (
                    <div key={i} style={{
                      display: "flex", gap: "12px", alignItems: "flex-start",
                      background: risk.bg, borderRadius: "8px", padding: "12px 14px",
                    }}>
                      <span style={{
                        fontSize: "10px", fontWeight: 700, color: risk.color,
                        background: `${risk.bg}`, border: `1px solid ${risk.color}`,
                        borderRadius: "4px", padding: "1px 7px", flexShrink: 0, marginTop: "1px",
                      }}>{risk.level}</span>
                      <span style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.5 }}>{risk.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          {/* Right Sources Panel */}
          <aside style={{
            width: "280px", flexShrink: 0,
            background: "rgba(10,14,23,0.9)",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            position: "fixed", top: "64px", bottom: 0, right: 0,
            overflowY: "auto", padding: "24px 16px",
          }}>
            <h3 style={{ fontSize: "12px", fontWeight: 600, color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
              情報ソース
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {SOURCES.map((src, i) => (
                <div key={i} style={{
                  background: CARD_BG, border: CARD_BORDER,
                  borderRadius: "8px", padding: "12px",
                }}>
                  <div style={{ fontSize: "12px", fontWeight: 500, color: "#E2E8F0", marginBottom: "4px", lineHeight: 1.4 }}>
                    {src.title}
                  </div>
                  <div style={{ fontSize: "11px", color: "#3B82F6", marginBottom: "2px" }}>{src.url}</div>
                  <div style={{ fontSize: "10px", color: "#475569" }}>{src.date}</div>
                </div>
              ))}
            </div>

            {/* AI Confidence */}
            <div style={{ marginTop: "24px", padding: "16px", background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.12)", borderRadius: "10px" }}>
              <h4 style={{ fontSize: "11px", fontWeight: 600, color: "#94A3B8", marginBottom: "10px" }}>AI信頼度スコア</h4>
              {[
                { label: "事実精度", val: 94 },
                { label: "情報鮮度", val: 87 },
                { label: "網羅性", val: 82 },
              ].map((s) => (
                <div key={s.label} style={{ marginBottom: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "11px", color: "#94A3B8" }}>{s.label}</span>
                    <span style={{ fontSize: "11px", color: "#3B82F6", fontWeight: 600 }}>{s.val}%</span>
                  </div>
                  <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "2px" }}>
                    <div style={{ height: "100%", width: `${s.val}%`, background: "linear-gradient(90deg, #3B82F6, #60A5FA)", borderRadius: "2px" }} />
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => { setSearchValue(""); setAppMode(false); }}
        style={{
          position: "fixed", bottom: "28px", right: appMode ? "308px" : "28px",
          width: "52px", height: "52px", borderRadius: "50%",
          background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(59,130,246,0.35)",
          transition: "all 0.3s", zIndex: 50,
        }}
        title="新規リサーチ"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "12px", color: "#475569" }}>2026 RAKUDA AI</span>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="./pricing" style={{ fontSize: "12px", color: "#475569", textDecoration: "none" }}>料金</a>
          <a href="./contact" style={{ fontSize: "12px", color: "#475569", textDecoration: "none" }}>お問い合わせ</a>
          <a href="./terms" style={{ fontSize: "12px", color: "#475569", textDecoration: "none" }}>利用規約</a>
          <a href="./privacy" style={{ fontSize: "12px", color: "#475569", textDecoration: "none" }}>プライバシーポリシー</a>
        </div>
      </footer>
    </div>
  );
}
