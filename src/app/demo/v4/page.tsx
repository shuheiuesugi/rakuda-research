"use client";

import { useState } from "react";

const REPORTS = [
  {
    id: 1,
    title: "Stripe, Inc. 企業調査レポート",
    company: "Stripe",
    date: "2026-03-25",
    status: "完了",
    category: "Fintech",
    summary: "グローバル決済インフラのリーダー企業。評価額$70B、TPV$1.4T規模。API中心の開発者体験で差別化。",
    pages: 24,
    sources: 18,
  },
  {
    id: 2,
    title: "Notion Labs 競合分析",
    company: "Notion",
    date: "2026-03-24",
    status: "完了",
    category: "SaaS",
    summary: "オールインワン生産性ツール。急成長するが競合との機能差が縮小傾向。エンタープライズ移行が鍵。",
    pages: 31,
    sources: 22,
  },
  {
    id: 3,
    title: "OpenAI 財務・事業分析",
    company: "OpenAI",
    date: "2026-03-23",
    status: "生成中",
    category: "AI",
    summary: "生成AIリーダー。ChatGPT/API事業で急成長。コスト構造・競合・規制リスクが課題。",
    pages: 0,
    sources: 0,
  },
  {
    id: 4,
    title: "Figma プロダクト戦略分析",
    company: "Figma",
    date: "2026-03-22",
    status: "完了",
    category: "Design Tool",
    summary: "デザインコラボレーションのデファクト。Adobe買収破談後の独自路線が注目される。",
    pages: 19,
    sources: 14,
  },
];

const SOURCES = [
  { id: 1, type: "Web", title: "Stripe 公式プレスリリース 2025Q4", url: "stripe.com/newsroom", date: "2025-11-12", relevance: 95 },
  { id: 2, type: "PDF", title: "Stripe Annual Report 2024", url: "stripe.com/annual-2024.pdf", date: "2025-03-01", relevance: 92 },
  { id: 3, type: "DB", title: "Crunchbase - Stripe Funding", url: "crunchbase.com/stripe", date: "2026-03-20", relevance: 88 },
  { id: 4, type: "Web", title: "Bloomberg: Stripe Valuation Analysis", url: "bloomberg.com/stripe-2025", date: "2025-09-08", relevance: 84 },
  { id: 5, type: "PDF", title: "McKinsey Digital Payments Report 2025", url: "mckinsey.com/payments", date: "2025-06-15", relevance: 79 },
];

const QUICK_SEARCHES = [
  "フィンテック最新動向",
  "AI スタートアップ 資金調達",
  "SaaS 競合分析",
  "グローバル決済市場",
];

const STATUS_COLORS: Record<string, string> = {
  完了: "#22c55e",
  生成中: "#3b82f6",
  下書き: "#f59e0b",
};

const STATUS_BG: Record<string, string> = {
  完了: "rgba(34,197,94,0.12)",
  生成中: "rgba(59,130,246,0.12)",
  下書き: "rgba(245,158,11,0.12)",
};

const SOURCE_TYPE_COLORS: Record<string, string> = {
  Web: "#60a5fa",
  PDF: "#f87171",
  DB: "#a78bfa",
};

const REPORT_SECTIONS = [
  { id: "overview", label: "事業概要" },
  { id: "financials", label: "財務分析" },
  { id: "competitors", label: "競合比較" },
  { id: "risks", label: "リスク要因" },
];

export default function V4Page() {
  const [query, setQuery] = useState("");
  const [activeReport, setActiveReport] = useState<(typeof REPORTS)[0] | null>(null);
  const [activeSection, setActiveSection] = useState("overview");
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const inReportView = activeReport !== null;

  const styles = {
    root: {
      display: "flex",
      flexDirection: "column" as const,
      height: "100vh",
      background: "linear-gradient(165deg, #0a0e17 0%, #0d1a2d 50%, #0f1729 100%)",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
      color: "#E2E8F0",
      overflow: "hidden",
    },

    topBar: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "0 24px",
      height: "56px",
      flexShrink: 0,
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      background: "rgba(0,0,0,0.15)",
    },

    logo: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexShrink: 0,
    },

    logoText: {
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "0.06em",
      background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },

    topSearchWrap: {
      flex: 1,
      maxWidth: "480px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "7px 14px",
      background: isSearchFocused ? "rgba(59,130,246,0.08)" : "rgba(255,255,255,0.04)",
      border: isSearchFocused ? "1px solid rgba(59,130,246,0.35)" : "1px solid rgba(255,255,255,0.07)",
      borderRadius: "8px",
      transition: "all 0.15s ease",
    },

    topSearchInput: {
      background: "transparent",
      border: "none",
      outline: "none",
      color: "#E2E8F0",
      fontSize: "13px",
      flex: 1,
      fontFamily: "inherit",
    },

    avatar: {
      marginLeft: "auto",
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      fontWeight: 700,
      color: "#fff",
      flexShrink: 0,
    },

    main: {
      flex: 1,
      overflow: "hidden",
      position: "relative" as const,
    },
  };

  return (
    <div style={styles.root}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <div style={styles.logo}>
          <svg width="28" height="28" viewBox="0 0 110 100" fill="none">
            <path
              d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75"
              stroke="url(#topbarGrad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />
            <defs>
              <linearGradient id="topbarGrad" x1="10" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60a5fa" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
          </svg>
          <span style={styles.logoText}>RAKUDA RESEARCH</span>
        </div>

        {inReportView && (
          <div style={styles.topSearchWrap}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              style={styles.topSearchInput}
              placeholder="企業・テーマを検索..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        )}

        {inReportView && (
          <button
            onClick={() => setActiveReport(null)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 12px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "7px",
              color: "#94A3B8",
              fontSize: "12px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            ホームへ
          </button>
        )}

        <div style={styles.avatar}>S</div>
      </div>

      {/* Main Area */}
      <div style={styles.main}>
        {!inReportView ? (
          <SearchHome
            query={query}
            setQuery={setQuery}
            onSelectReport={setActiveReport}
            reports={REPORTS}
            quickSearches={QUICK_SEARCHES}
          />
        ) : (
          <ReportView
            report={activeReport}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            onShowSources={() => setShowSourceModal(true)}
          />
        )}
      </div>

      {/* FAB: New Search */}
      {inReportView && (
        <button
          onClick={() => setActiveReport(null)}
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(59,130,246,0.4)",
            zIndex: 50,
          }}
          title="新規検索"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      )}

      {/* Source Modal */}
      {showSourceModal && (
        <SourceModal sources={SOURCES} onClose={() => setShowSourceModal(false)} />
      )}
    </div>
  );
}

function SearchHome({
  query,
  setQuery,
  onSelectReport,
  reports,
  quickSearches,
}: {
  query: string;
  setQuery: (v: string) => void;
  onSelectReport: (r: (typeof REPORTS)[0]) => void;
  reports: typeof REPORTS;
  quickSearches: string[];
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "64px 24px 32px",
        height: "100%",
        overflowY: "auto",
      }}
    >
      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <svg width="52" height="52" viewBox="0 0 110 100" fill="none" style={{ marginBottom: "16px" }}>
          <path
            d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75"
            stroke="url(#heroGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient id="heroGrad" x1="10" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60a5fa" />
              <stop offset="1" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
        <h1
          style={{
            margin: "0 0 8px",
            fontSize: "32px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          RAKUDA RESEARCH
        </h1>
        <p style={{ margin: 0, fontSize: "15px", color: "#475569" }}>
          企業・市場・テーマをAIが深掘りリサーチ
        </p>
      </div>

      {/* Search Bar */}
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "14px 18px",
          background: focused ? "rgba(59,130,246,0.07)" : "rgba(255,255,255,0.04)",
          border: focused ? "1px solid rgba(59,130,246,0.4)" : "1px solid rgba(255,255,255,0.08)",
          borderRadius: "12px",
          marginBottom: "16px",
          boxShadow: focused ? "0 0 0 3px rgba(59,130,246,0.12)" : "none",
          transition: "all 0.2s ease",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={focused ? "#60a5fa" : "#475569"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#E2E8F0",
            fontSize: "16px",
            flex: 1,
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', sans-serif",
          }}
          placeholder="企業名・業界・テーマを入力..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <button
          style={{
            padding: "7px 16px",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            border: "none",
            borderRadius: "7px",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
            flexShrink: 0,
          }}
        >
          検索
        </button>
      </div>

      {/* Quick Searches */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "48px", maxWidth: "640px" }}>
        {quickSearches.map((q) => (
          <button
            key={q}
            onClick={() => setQuery(q)}
            style={{
              padding: "5px 12px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              color: "#94A3B8",
              fontSize: "12px",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.15s ease",
            }}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Recent Reports */}
      <div style={{ width: "100%", maxWidth: "820px" }}>
        <div style={{ fontSize: "11px", fontWeight: 600, color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "14px" }}>
          最近のレポート
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "12px" }}>
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} onClick={() => onSelectReport(report)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReportCard({ report, onClick }: { report: (typeof REPORTS)[0]; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "18px 20px",
        background: hovered ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.025)",
        border: hovered ? "1px solid rgba(59,130,246,0.25)" : "1px solid rgba(255,255,255,0.05)",
        borderRadius: "12px",
        cursor: "pointer",
        transition: "all 0.15s ease",
        transform: hovered ? "translateY(-1px)" : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "8px" }}>
        <div style={{ fontSize: "14px", fontWeight: 600, color: "#E2E8F0", lineHeight: 1.4 }}>{report.title}</div>
        <span style={{
          fontSize: "10px",
          fontWeight: 700,
          padding: "3px 7px",
          borderRadius: "5px",
          color: STATUS_COLORS[report.status],
          background: STATUS_BG[report.status],
          flexShrink: 0,
          letterSpacing: "0.02em",
        }}>
          {report.status}
        </span>
      </div>
      <p style={{ margin: "0 0 12px", fontSize: "12px", color: "#94A3B8", lineHeight: 1.7 }}>
        {report.summary}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "10px", color: "#475569", background: "rgba(255,255,255,0.05)", padding: "2px 7px", borderRadius: "4px" }}>
          {report.category}
        </span>
        <span style={{ fontSize: "11px", color: "#475569" }}>{report.date}</span>
        {report.pages > 0 && (
          <span style={{ fontSize: "11px", color: "#475569", marginLeft: "auto" }}>
            {report.pages}p · {report.sources}ソース
          </span>
        )}
        {report.status === "生成中" && (
          <span style={{ fontSize: "11px", color: "#3b82f6", marginLeft: "auto", display: "flex", alignItems: "center", gap: "4px" }}>
            <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#3b82f6", animation: "pulse 1.5s infinite" }} />
            処理中...
          </span>
        )}
      </div>
    </div>
  );
}

function ReportView({
  report,
  activeSection,
  setActiveSection,
  onShowSources,
}: {
  report: (typeof REPORTS)[0];
  activeSection: string;
  setActiveSection: (s: string) => void;
  onShowSources: () => void;
}) {
  return (
    <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
      {/* Sidebar TOC */}
      <div style={{ width: "220px", flexShrink: 0, borderRight: "1px solid rgba(255,255,255,0.05)", padding: "24px 0", overflowY: "auto" }}>
        <div style={{ padding: "0 16px", marginBottom: "20px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "#60a5fa", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "6px" }}>{report.company}</div>
          <div style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.5 }}>{report.title}</div>
        </div>
        <div style={{ padding: "0 8px" }}>
          <div style={{ fontSize: "10px", fontWeight: 600, color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "0 8px", marginBottom: "6px" }}>セクション</div>
          {REPORT_SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left" as const,
                padding: "8px 12px",
                borderRadius: "7px",
                border: "none",
                background: activeSection === s.id ? "rgba(59,130,246,0.12)" : "transparent",
                color: activeSection === s.id ? "#60a5fa" : "#475569",
                fontSize: "13px",
                cursor: "pointer",
                fontFamily: "inherit",
                marginBottom: "2px",
                transition: "all 0.12s ease",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div style={{ margin: "20px 16px 0", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ fontSize: "10px", color: "#475569", marginBottom: "10px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const }}>メタ情報</div>
          {[
            { label: "生成日", value: report.date },
            { label: "ページ数", value: report.pages > 0 ? `${report.pages}p` : "-" },
            { label: "参照数", value: report.sources > 0 ? `${report.sources}件` : "-" },
          ].map((m) => (
            <div key={m.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", marginBottom: "6px" }}>
              <span style={{ color: "#475569" }}>{m.label}</span>
              <span style={{ color: "#94A3B8" }}>{m.value}</span>
            </div>
          ))}
          <button
            onClick={onShowSources}
            style={{
              marginTop: "10px",
              width: "100%",
              padding: "7px 0",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "7px",
              color: "#94A3B8",
              fontSize: "12px",
              cursor: "pointer",
              fontFamily: "inherit",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
            </svg>
            ソースを確認
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "32px 48px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {/* Report Header */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span style={{
                fontSize: "11px",
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: "5px",
                color: STATUS_COLORS[report.status],
                background: STATUS_BG[report.status],
              }}>
                {report.status}
              </span>
              <span style={{ fontSize: "11px", color: "#475569" }}>{report.category}</span>
            </div>
            <h1 style={{ margin: "0 0 8px", fontSize: "26px", fontWeight: 700, color: "#E2E8F0", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              {report.title}
            </h1>
            <p style={{ margin: 0, fontSize: "14px", color: "#94A3B8", lineHeight: 1.7 }}>
              {report.summary}
            </p>
          </div>

          {/* Section: Overview */}
          {activeSection === "overview" && (
            <div>
              <FullSectionTitle>事業概要</FullSectionTitle>
              <BodyText>
                {report.company}は、グローバルでオンライン決済インフラを提供するフィンテック企業。
                2010年創業、Patrick CollisionとJohn Collisonの兄弟が共同創業した。
                API経由で決済処理・不正検知・サブスクリプション管理・請求書発行等を提供し、
                企業向けStripe AtlasやStripe Issuingを含む金融インフラ全般にサービスを拡張している。
                <InlineCite n={1} />
              </BodyText>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px", margin: "24px 0" }}>
                {[
                  { label: "決済処理額 (TPV)", value: "$1.4T", sub: "2024年度推定" },
                  { label: "年間収益", value: "$15.4B", sub: "2024年 推定" },
                  { label: "企業評価額", value: "$70B", sub: "2023年ラウンド" },
                ].map((kpi) => (
                  <div key={kpi.label} style={{ padding: "18px 20px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "10px" }}>
                    <div style={{ fontSize: "11px", color: "#475569", marginBottom: "6px" }}>{kpi.label}</div>
                    <div style={{ fontSize: "24px", fontWeight: 700, color: "#E2E8F0", letterSpacing: "-0.02em", marginBottom: "3px" }}>{kpi.value}</div>
                    <div style={{ fontSize: "11px", color: "#475569" }}>{kpi.sub}</div>
                  </div>
                ))}
              </div>

              <FullSectionTitle>事業ハイライト</FullSectionTitle>
              <ul style={{ margin: "0 0 24px", padding: "0 0 0 20px", color: "#94A3B8", fontSize: "14px", lineHeight: 2.1 }}>
                <li>Amazon, Shopify, Salesforceなど大手とのパートナーシップ多数<InlineCite n={2} /></li>
                <li>100カ国以上でサービス展開、135以上の通貨をサポート<InlineCite n={1} /></li>
                <li>開発者中心のアプローチでエコシステムを形成。APIドキュメントが業界最高水準</li>
                <li>B2B決済・組み込み金融領域への拡大戦略を推進中<InlineCite n={4} /></li>
              </ul>
            </div>
          )}

          {/* Section: Financials */}
          {activeSection === "financials" && (
            <div>
              <FullSectionTitle>収益推移 (推定)</FullSectionTitle>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: "14px" }}>
                  <thead>
                    <tr>
                      {["指標", "2021", "2022", "2023", "2024E"].map((h) => (
                        <th key={h} style={{ padding: "10px 14px", textAlign: h === "指標" ? "left" as const : "right" as const, color: "#475569", fontWeight: 600, fontSize: "11px", borderBottom: "1px solid rgba(255,255,255,0.07)", letterSpacing: "0.05em" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: "収益 (USD)", vals: ["$7.4B", "$10.0B", "$13.0B", "$15.4B"] },
                      { label: "TPV (USD)", vals: ["$640B", "$817B", "$1.0T", "$1.4T"] },
                      { label: "YoY成長率", vals: ["-", "+35%", "+30%", "+18%"] },
                      { label: "Take Rate", vals: ["1.16%", "1.22%", "1.30%", "1.10%"] },
                    ].map((row) => (
                      <tr key={row.label}>
                        <td style={{ padding: "12px 14px", color: "#94A3B8", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{row.label}</td>
                        {row.vals.map((v, i) => (
                          <td key={i} style={{ padding: "12px 14px", textAlign: "right" as const, color: "#E2E8F0", borderBottom: "1px solid rgba(255,255,255,0.04)", fontVariantNumeric: "tabular-nums" }}>{v}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ padding: "10px 14px", background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: "8px", fontSize: "12px", color: "#94A3B8" }}>
                推定値: 非公開企業のため公式財務データは非開示。出典: [2][5]
              </div>
            </div>
          )}

          {/* Section: Competitors */}
          {activeSection === "competitors" && (
            <div>
              <FullSectionTitle>競合比較マトリクス</FullSectionTitle>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: "14px" }}>
                  <thead>
                    <tr>
                      {["企業", "評価額", "主要市場", "強み", "弱み"].map((h) => (
                        <th key={h} style={{ padding: "10px 14px", textAlign: "left" as const, color: "#475569", fontWeight: 600, fontSize: "11px", borderBottom: "1px solid rgba(255,255,255,0.07)", letterSpacing: "0.05em" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Stripe", val: "$70B", market: "グローバル", strong: "開発者体験・API", weak: "コスト高" },
                      { name: "Adyen", val: "$35B", market: "欧州・大企業", strong: "エンタープライズ", weak: "SMB弱い" },
                      { name: "Square (Block)", val: "$40B", market: "北米SMB", strong: "POS統合", weak: "グローバル展開" },
                      { name: "Braintree", val: "非公開", market: "北米", strong: "PayPal連携", weak: "独自性低い" },
                      { name: "Checkout.com", val: "$11B", market: "欧中東", strong: "新興市場", weak: "知名度" },
                    ].map((row, i) => (
                      <tr key={row.name}>
                        <td style={{ padding: "12px 14px", color: i === 0 ? "#60a5fa" : "#E2E8F0", fontWeight: i === 0 ? 600 : 400, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{row.name}</td>
                        <td style={{ padding: "12px 14px", color: "#E2E8F0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{row.val}</td>
                        <td style={{ padding: "12px 14px", color: "#94A3B8", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{row.market}</td>
                        <td style={{ padding: "12px 14px", color: "#22c55e", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{row.strong}</td>
                        <td style={{ padding: "12px 14px", color: "#f87171", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{row.weak}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section: Risks */}
          {activeSection === "risks" && (
            <div>
              <FullSectionTitle>主要リスク要因</FullSectionTitle>
              {[
                { level: "高", color: "#f87171", bg: "rgba(248,113,113,0.06)", border: "rgba(248,113,113,0.2)", title: "規制リスク", desc: "EU PSD2・米国州別規制の強化により、コンプライアンスコストが上昇。PCI DSS対応の継続的更新が必要。特に暗号資産関連規制の動向に注意。" },
                { level: "高", color: "#f59e0b", bg: "rgba(245,158,11,0.06)", border: "rgba(245,158,11,0.2)", title: "競合激化", desc: "Apple Pay/Google Pay等BigTechの決済参入、および新興フィンテックによる価格競争が激化。特に新興国市場でのローカルプレイヤーの台頭が懸念。" },
                { level: "中", color: "#60a5fa", bg: "rgba(96,165,250,0.06)", border: "rgba(96,165,250,0.2)", title: "経済サイクル依存", desc: "TPVはEC取引量に連動するため、景気後退局面での収益減少リスクあり。2022-23の調整局面でも影響が顕在化した。" },
                { level: "低", color: "#22c55e", bg: "rgba(34,197,94,0.06)", border: "rgba(34,197,94,0.2)", title: "技術的障害", desc: "99.99%のSLAを掲げるが、大規模インシデント時の顧客離反リスクは現状限定的。過去のダウンタイム事例は迅速に対応されている。" },
              ].map((risk) => (
                <div key={risk.title} style={{ padding: "18px 20px", borderRadius: "10px", background: risk.bg, border: `1px solid ${risk.border}`, marginBottom: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, color: risk.color, background: `${risk.color}20`, padding: "3px 8px", borderRadius: "4px", letterSpacing: "0.03em" }}>
                      リスク: {risk.level}
                    </span>
                    <span style={{ fontSize: "15px", fontWeight: 600, color: "#E2E8F0" }}>{risk.title}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: "13px", color: "#94A3B8", lineHeight: 1.8 }}>{risk.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FullSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ margin: "0 0 14px", fontSize: "15px", fontWeight: 700, color: "#E2E8F0", display: "flex", alignItems: "center", gap: "8px" }}>
      <span style={{ display: "inline-block", width: "3px", height: "16px", background: "linear-gradient(180deg,#60a5fa,#a78bfa)", borderRadius: "2px" }} />
      {children}
    </h2>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ margin: "0 0 20px", fontSize: "14px", lineHeight: 1.85, color: "#94A3B8" }}>
      {children}
    </p>
  );
}

function InlineCite({ n }: { n: number }) {
  return (
    <sup style={{ color: "#60a5fa", fontSize: "10px", marginLeft: "1px", cursor: "pointer" }}>[{n}]</sup>
  );
}

function SourceModal({ sources, onClose }: { sources: typeof SOURCES; onClose: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }} />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          zIndex: 101,
          width: "100%",
          maxWidth: "560px",
          maxHeight: "80vh",
          background: "linear-gradient(160deg, #0f1729 0%, #0d1a2d 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "14px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Modal Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "#E2E8F0" }}>参照ソース一覧</div>
            <div style={{ fontSize: "11px", color: "#475569", marginTop: "2px" }}>{sources.length}件のソースを参照</div>
          </div>
          <button
            onClick={onClose}
            style={{ width: "28px", height: "28px", borderRadius: "7px", border: "none", background: "rgba(255,255,255,0.06)", color: "#94A3B8", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ flex: 1, overflowY: "auto", padding: "12px" }}>
          {sources.map((src) => (
            <div
              key={src.id}
              style={{
                padding: "14px 16px",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "10px",
                marginBottom: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <span style={{ fontSize: "10px", fontWeight: 700, color: SOURCE_TYPE_COLORS[src.type], background: `${SOURCE_TYPE_COLORS[src.type]}20`, padding: "2px 7px", borderRadius: "4px" }}>
                  {src.type}
                </span>
                <span style={{ fontSize: "12px", color: "#475569", marginLeft: "auto" }}>関連度 {src.relevance}%</span>
                <div style={{ width: "48px", height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "2px" }}>
                  <div style={{ height: "100%", width: `${src.relevance}%`, background: SOURCE_TYPE_COLORS[src.type], borderRadius: "2px" }} />
                </div>
              </div>
              <div style={{ fontSize: "13px", fontWeight: 500, color: "#E2E8F0", marginBottom: "4px" }}>{src.title}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "11px", color: "#3b82f6" }}>{src.url}</span>
                <span style={{ fontSize: "11px", color: "#475569" }}>{src.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
