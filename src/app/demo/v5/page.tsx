"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type ReportStatus = "完了" | "生成中" | "下書き";
type SourceType = "Web記事" | "PDF文書" | "データベース";
type SourceStatus = "取得済" | "処理中" | "エラー";
type NavItem = "検索" | "レポート" | "テンプレート" | "設定";

interface Source {
  id: number;
  type: SourceType;
  title: string;
  url: string;
  status: SourceStatus;
  date: string;
  relevance: number;
}

interface Report {
  id: string;
  company: string;
  status: ReportStatus;
  createdAt: string;
  sources: number;
  pages: number;
}

interface ReportSection {
  id: string;
  title: string;
  content: string;
  citations: number[];
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const RECENT_REPORTS: Report[] = [
  { id: "r001", company: "Notion Labs", status: "完了", createdAt: "2026-03-26", sources: 24, pages: 12 },
  { id: "r002", company: "Figma Inc.", status: "完了", createdAt: "2026-03-25", sources: 18, pages: 9 },
  { id: "r003", company: "Linear B.V.", status: "生成中", createdAt: "2026-03-26", sources: 31, pages: 0 },
  { id: "r004", company: "Vercel Inc.", status: "下書き", createdAt: "2026-03-24", sources: 7, pages: 4 },
  { id: "r005", company: "Retool Inc.", status: "完了", createdAt: "2026-03-23", sources: 22, pages: 11 },
];

const SOURCES: Source[] = [
  { id: 1, type: "Web記事", title: "Notion Labs、シリーズC 2750億円調達完了を発表", url: "techcrunch.com", status: "取得済", date: "2026-03-20", relevance: 97 },
  { id: 2, type: "PDF文書", title: "Notion 2025 Annual Report — Product & Revenue", url: "ir.notion.so", status: "取得済", date: "2026-02-15", relevance: 94 },
  { id: 3, type: "データベース", title: "Crunchbase: Notion Labs funding history", url: "crunchbase.com", status: "取得済", date: "2026-03-25", relevance: 91 },
  { id: 4, type: "Web記事", title: "競合分析: Confluence vs Notion エンタープライズ市場", url: "g2.com", status: "処理中", date: "2026-03-26", relevance: 88 },
  { id: 5, type: "PDF文書", title: "SaaS Collaboration Market Report 2025-2030", url: "gartner.com", status: "取得済", date: "2026-01-10", relevance: 85 },
  { id: 6, type: "データベース", title: "PitchBook: Knowledge Management SaaS comps", url: "pitchbook.com", status: "取得済", date: "2026-03-22", relevance: 82 },
];

const REPORT_SECTIONS: ReportSection[] = [
  {
    id: "s1",
    title: "事業概要",
    content: "Notion Labsはサンフランシスコを拠点とするオールインワン型ワークスペースSaaSを提供する企業。ドキュメント・データベース・プロジェクト管理を単一プラットフォームで統合し、ARR $400M（2025年推定）、MAU 3,500万人を達成。エンタープライズシフトを加速させており、2025年度のエンタープライズ比率は全ARRの38%に到達。",
    citations: [1, 2],
  },
  {
    id: "s2",
    title: "財務分析",
    content: "2025年度推定ARR $400M（前年比+67%）。シリーズCラウンドで評価額 $10B超。グロスマージン85%程度と高水準を維持。主要コストはR&Dおよびエンタープライズ営業に集中。Rule of 40スコアは推定65前後であり、同レンジのSaaS上位10%に位置する。",
    citations: [2, 3],
  },
  {
    id: "s3",
    title: "競合比較",
    content: "主要競合はAtlassian Confluence（エンタープライズ強い）、Microsoft Loop（バンドル戦略）、Coda（No-code DB）。Notionの差別化は「シンプルなUXとカスタマイズ性の両立」。G2 Crowdでの平均スコアは4.7/5.0（Confluence 4.1）。AI機能「Notion AI」の月次アクティブ利用率は62%と高い。",
    citations: [4, 5],
  },
  {
    id: "s4",
    title: "リスク要因",
    content: "1. Microsoft Loopの無償バンドル攻勢（Teams連携優位）。2. エンタープライズ向けセキュリティ・ガバナンス機能がSalesforce/ServiceNowと比較して未成熟。3. AI機能の差別化持続性（GPT/Claudeベース）。4. 海外展開（日本・欧州）でのローカライズコスト増大。",
    citations: [4, 5, 6],
  },
];

const STATS = [
  { label: "レポート数", value: "142", unit: "件", trend: "+12 今月" },
  { label: "ソース数", value: "3,841", unit: "件", trend: "+287 今月" },
  { label: "平均生成時間", value: "4.2", unit: "分", trend: "-0.8分 改善" },
  { label: "AI精度スコア", value: "94.1", unit: "%", trend: "+1.3pt 先月比" },
];

// ─── Icon Components ──────────────────────────────────────────────────────────

function IconSearch({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconReport({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function IconTemplate({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

function IconSettings({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconChevronRight({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function IconExternalLink({ size = 12, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconUser({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconGlobe({ size = 13, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconFile({ size = 13, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <polyline points="13 2 13 9 20 9" />
    </svg>
  );
}

function IconDatabase({ size = 13, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function IconTrendUp({ size = 12, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function RakudaLogo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{
        width: 32, height: 32, flexShrink: 0,
        background: "linear-gradient(135deg, #1e3a5f 0%, #1e2d5f 100%)",
        borderRadius: 8,
        border: "1px solid rgba(96,165,250,0.25)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="22" height="18" viewBox="0 0 110 90">
          <path
            d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75"
            fill="none"
            stroke="url(#logoGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {!collapsed && (
        <div>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
            background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            lineHeight: 1.1,
          }}>
            RAKUDA
          </div>
          <div style={{ fontSize: 8.5, fontWeight: 600, letterSpacing: "0.14em", color: "#475569", lineHeight: 1 }}>
            RESEARCH
          </div>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: ReportStatus | SourceStatus }) {
  const map: Record<string, { bg: string; color: string; dot: string }> = {
    "完了":   { bg: "rgba(34,197,94,0.12)",  color: "#4ade80", dot: "#4ade80" },
    "生成中": { bg: "rgba(251,191,36,0.12)", color: "#fbbf24", dot: "#fbbf24" },
    "下書き": { bg: "rgba(148,163,184,0.1)", color: "#94a3b8", dot: "#94a3b8" },
    "取得済": { bg: "rgba(59,130,246,0.12)", color: "#60a5fa", dot: "#60a5fa" },
    "処理中": { bg: "rgba(251,191,36,0.12)", color: "#fbbf24", dot: "#fbbf24" },
    "エラー": { bg: "rgba(239,68,68,0.12)",  color: "#f87171", dot: "#f87171" },
  };
  const s = map[status] ?? map["下書き"];
  const isPulsing = status === "生成中" || status === "処理中";

  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "2px 8px", borderRadius: 20,
      background: s.bg, color: s.color,
      fontSize: 10.5, fontWeight: 600, letterSpacing: "0.04em",
    }}>
      <span style={{
        width: 5, height: 5, borderRadius: "50%", background: s.dot,
        boxShadow: isPulsing ? `0 0 0 2px ${s.dot}44` : "none",
        display: "inline-block",
        animation: isPulsing ? "pulse 1.4s ease-in-out infinite" : "none",
      }} />
      {status}
    </span>
  );
}

function SourceTypeIcon({ type }: { type: SourceType }) {
  const map: Record<SourceType, { icon: React.ReactNode; color: string; bg: string }> = {
    "Web記事":   { icon: <IconGlobe size={13} color="#60a5fa" />, color: "#60a5fa", bg: "rgba(59,130,246,0.1)" },
    "PDF文書":   { icon: <IconFile size={13} color="#f472b6" />,  color: "#f472b6", bg: "rgba(244,114,182,0.1)" },
    "データベース": { icon: <IconDatabase size={13} color="#a78bfa" />, color: "#a78bfa", bg: "rgba(167,139,250,0.1)" },
  };
  const s = map[type];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: 24, height: 24, borderRadius: 6,
      background: s.bg, flexShrink: 0,
    }}>
      {s.icon}
    </span>
  );
}

function ProgressBar({ value, color = "#3B82F6" }: { value: number; color?: string }) {
  return (
    <div style={{ width: "100%", height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
      <div style={{
        height: "100%", width: `${value}%`, borderRadius: 2,
        background: `linear-gradient(90deg, ${color}, ${color}cc)`,
        transition: "width 0.5s ease",
      }} />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ResearchDemoV5() {
  const [activeNav, setActiveNav] = useState<NavItem>("レポート");
  const [activeReport, setActiveReport] = useState<Report>(RECENT_REPORTS[0]);
  const [activeSection, setActiveSection] = useState<string>("s1");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCitations, setExpandedCitations] = useState<Set<string>>(new Set());

  const activeSection_ = REPORT_SECTIONS.find((s) => s.id === activeSection) ?? REPORT_SECTIONS[0];

  const navItems: { id: NavItem; icon: React.ReactNode }[] = [
    { id: "検索",      icon: <IconSearch size={15} /> },
    { id: "レポート",  icon: <IconReport size={15} /> },
    { id: "テンプレート", icon: <IconTemplate size={15} /> },
    { id: "設定",      icon: <IconSettings size={15} /> },
  ];

  const toggleCitation = (key: string) => {
    setExpandedCitations((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  // ─── Styles ──────────────────────────────────────────────────────────────

  const pageStyle: React.CSSProperties = {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Yu Gothic UI', sans-serif",
    background: "linear-gradient(165deg, #0a0e17 0%, #0d1a2d 50%, #0f1729 100%)",
    minHeight: "100vh",
    color: "#E2E8F0",
    display: "flex",
    flexDirection: "column",
  };

  const layoutStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    height: "100vh",
    overflow: "hidden",
  };

  const sidebarStyle: React.CSSProperties = {
    width: 200,
    flexShrink: 0,
    borderRight: "1px solid rgba(255,255,255,0.05)",
    background: "rgba(10,14,23,0.6)",
    display: "flex",
    flexDirection: "column",
    padding: "20px 0",
    gap: 0,
    backdropFilter: "blur(12px)",
  };

  const mainStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    overflow: "hidden",
    padding: "20px",
    gap: 16,
  };

  const leftPanelStyle: React.CSSProperties = {
    flex: "0 0 60%",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    overflow: "hidden",
  };

  const rightPanelStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 14,
    overflow: "hidden",
    minWidth: 0,
  };

  const cardBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.025)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: 12,
  };

  const glassCard: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 12,
    backdropFilter: "blur(8px)",
  };

  const accentCard: React.CSSProperties = {
    background: "rgba(59,130,246,0.06)",
    border: "1px solid rgba(59,130,246,0.2)",
    borderRadius: 12,
  };

  return (
    <div style={pageStyle}>
      {/* Keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.18); }
      `}</style>

      <div style={layoutStyle}>
        {/* ── Sidebar ── */}
        <aside style={sidebarStyle}>
          {/* Logo */}
          <div style={{ padding: "0 16px 20px" }}>
            <RakudaLogo />
          </div>

          {/* Nav */}
          <nav style={{ padding: "0 8px", display: "flex", flexDirection: "column", gap: 2 }}>
            {navItems.map(({ id, icon }) => {
              const isActive = activeNav === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveNav(id)}
                  style={{
                    display: "flex", alignItems: "center", gap: 9,
                    padding: "8px 10px",
                    borderRadius: 8,
                    border: "none",
                    background: isActive ? "rgba(59,130,246,0.15)" : "transparent",
                    color: isActive ? "#60a5fa" : "#94A3B8",
                    fontSize: 12.5, fontWeight: isActive ? 600 : 400,
                    cursor: "pointer", width: "100%", textAlign: "left",
                    transition: "all 0.15s",
                    outline: "none",
                  }}
                >
                  <span style={{ color: isActive ? "#60a5fa" : "#475569" }}>{icon}</span>
                  {id}
                  {isActive && (
                    <span style={{ marginLeft: "auto", color: "#3B82F6" }}>
                      <IconChevronRight size={12} />
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Divider */}
          <div style={{ margin: "16px 12px", borderTop: "1px solid rgba(255,255,255,0.05)" }} />

          {/* Recent Reports */}
          <div style={{ padding: "0 12px", flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.1em", color: "#475569", textTransform: "uppercase", marginBottom: 8 }}>
              最近のレポート
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, overflowY: "auto" }}>
              {RECENT_REPORTS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setActiveReport(r)}
                  style={{
                    display: "flex", flexDirection: "column", gap: 2,
                    padding: "7px 8px", borderRadius: 7,
                    border: "none",
                    background: activeReport.id === r.id ? "rgba(59,130,246,0.1)" : "transparent",
                    color: activeReport.id === r.id ? "#E2E8F0" : "#94A3B8",
                    cursor: "pointer", textAlign: "left",
                    transition: "all 0.15s",
                    outline: "none",
                  }}
                >
                  <div style={{ fontSize: 11.5, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {r.company}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <StatusBadge status={r.status} />
                    <span style={{ fontSize: 9.5, color: "#475569" }}>{r.createdAt.slice(5)}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* User */}
          <div style={{
            margin: "12px 8px 0",
            padding: "10px",
            borderRadius: 8,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.05)",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%",
              background: "linear-gradient(135deg, #3B82F6, #a78bfa)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <IconUser size={13} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#E2E8F0" }}>Shuhei</div>
              <div style={{ fontSize: 9.5, color: "#475569" }}>アナリスト</div>
            </div>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main style={mainStyle}>
          {/* ── Left Panel (60%) ── */}
          <div style={leftPanelStyle}>
            {/* Search Bar */}
            <div style={{ ...glassCard, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
              <IconSearch size={16} color="#475569" />
              <input
                type="text"
                placeholder="企業リサーチ検索（例: Series B SaaS, ARR $100M+）"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1, background: "none", border: "none", outline: "none",
                  color: "#E2E8F0", fontSize: 13,
                  caretColor: "#60a5fa",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", fontSize: 18, lineHeight: 1, padding: "0 2px" }}
                >
                  ×
                </button>
              )}
              <div style={{
                padding: "5px 14px", borderRadius: 7,
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                color: "#fff", fontSize: 12, fontWeight: 600,
                cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap",
                border: "none",
              }}>
                検索
              </div>
              <div style={{
                padding: "5px 12px", borderRadius: 7,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#94A3B8", fontSize: 12, fontWeight: 500,
                cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap",
              }}>
                新規レポート
              </div>
            </div>

            {/* Report Viewer */}
            <div style={{ ...glassCard, flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              {/* Report Header */}
              <div style={{
                padding: "16px 20px 14px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                background: "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(124,58,237,0.06) 100%)",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: "#E2E8F0", letterSpacing: "-0.01em" }}>
                      {activeReport.company}
                    </div>
                    <div style={{ fontSize: 11, color: "#475569", marginTop: 3 }}>
                      企業リサーチレポート — {activeReport.createdAt} 作成
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                    <StatusBadge status={activeReport.status} />
                    <div style={{
                      padding: "4px 10px", borderRadius: 6,
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                      fontSize: 11, color: "#94A3B8", cursor: "pointer",
                    }}>
                      PDF出力
                    </div>
                  </div>
                </div>

                {/* Section Tabs */}
                <div style={{ display: "flex", gap: 4, marginTop: 14 }}>
                  {REPORT_SECTIONS.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveSection(s.id)}
                      style={{
                        padding: "5px 12px", borderRadius: 6,
                        border: activeSection === s.id ? "1px solid rgba(96,165,250,0.3)" : "1px solid transparent",
                        background: activeSection === s.id ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.03)",
                        color: activeSection === s.id ? "#60a5fa" : "#94A3B8",
                        fontSize: 11.5, fontWeight: activeSection === s.id ? 600 : 400,
                        cursor: "pointer", transition: "all 0.15s",
                        outline: "none",
                      }}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section Content */}
              <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
                {activeReport.status === "生成中" ? (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 20 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "50%",
                      border: "3px solid rgba(96,165,250,0.15)",
                      borderTop: "3px solid #60a5fa",
                      animation: "spin 0.9s linear infinite",
                    }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#E2E8F0", textAlign: "center" }}>AI生成中</div>
                      <div style={{ fontSize: 12, color: "#475569", textAlign: "center", marginTop: 4 }}>ソース31件を分析しています...</div>
                    </div>
                    <div style={{ width: 240 }}>
                      <ProgressBar value={62} color="#60a5fa" />
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 10.5, color: "#475569" }}>
                        <span>財務データ取得完了</span>
                        <span>62%</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div style={{ marginBottom: 16 }}>
                      <h2 style={{ fontSize: 14, fontWeight: 700, color: "#E2E8F0", margin: "0 0 10px" }}>
                        {activeSection_.title}
                      </h2>
                      <p style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.75, margin: 0 }}>
                        {activeSection_.content}
                      </p>
                    </div>

                    {/* Citations */}
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14 }}>
                      <div style={{ fontSize: 10.5, fontWeight: 600, color: "#475569", letterSpacing: "0.07em", marginBottom: 8, textTransform: "uppercase" }}>
                        参照ソース
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {activeSection_.citations.map((cid) => {
                          const src = SOURCES.find((s) => s.id === cid);
                          const key = `${activeSection_.id}-${cid}`;
                          const expanded = expandedCitations.has(key);
                          if (!src) return null;
                          return (
                            <div key={cid} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                              <button
                                onClick={() => toggleCitation(key)}
                                style={{
                                  display: "inline-flex", alignItems: "center", gap: 5,
                                  padding: "4px 10px 4px 8px", borderRadius: 6,
                                  background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.18)",
                                  color: "#60a5fa", fontSize: 11, fontWeight: 500, cursor: "pointer",
                                  outline: "none", transition: "all 0.15s",
                                }}
                              >
                                <span style={{
                                  width: 16, height: 16, borderRadius: 4,
                                  background: "rgba(59,130,246,0.25)",
                                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                                  fontSize: 9, fontWeight: 700, flexShrink: 0, color: "#93c5fd",
                                }}>
                                  {cid}
                                </span>
                                {src.type}
                                <span style={{ color: "#3B82F6", fontSize: 9.5, transform: expanded ? "rotate(90deg)" : "none", transition: "transform 0.15s" }}>
                                  <IconChevronRight size={9} />
                                </span>
                              </button>
                              {expanded && (
                                <div style={{
                                  marginTop: 6, padding: "10px 12px", borderRadius: 7,
                                  background: "rgba(15,23,42,0.7)", border: "1px solid rgba(59,130,246,0.12)",
                                  minWidth: 220,
                                }}>
                                  <div style={{ fontSize: 11.5, fontWeight: 600, color: "#E2E8F0", marginBottom: 3 }}>{src.title}</div>
                                  <div style={{ fontSize: 10, color: "#475569", display: "flex", gap: 8 }}>
                                    <span>{src.url}</span>
                                    <span>·</span>
                                    <span>{src.date}</span>
                                    <span>·</span>
                                    <span style={{ color: "#60a5fa" }}>関連度 {src.relevance}%</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* ── Right Panel (40%) ── */}
          <div style={rightPanelStyle}>
            {/* Sources List (top, accent-bordered) */}
            <div style={{ ...accentCard, flex: "0 0 auto", display: "flex", flexDirection: "column", maxHeight: "50%", overflow: "hidden" }}>
              <div style={{ padding: "14px 16px 10px", borderBottom: "1px solid rgba(59,130,246,0.12)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#E2E8F0" }}>取得ソース</div>
                  <div style={{ fontSize: 10, color: "#475569", marginTop: 2 }}>{SOURCES.length}件 — {activeReport.company}</div>
                </div>
                <div style={{
                  padding: "3px 8px", borderRadius: 5,
                  background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.2)",
                  fontSize: 10, color: "#60a5fa", fontWeight: 600, cursor: "pointer",
                }}>
                  ソース追加
                </div>
              </div>
              <div style={{ overflowY: "auto", flex: 1, padding: "8px" }}>
                {SOURCES.map((src) => (
                  <div key={src.id} style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    padding: "9px 8px", borderRadius: 7,
                    transition: "background 0.15s", cursor: "pointer",
                  }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
                  >
                    <SourceTypeIcon type={src.type} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 11.5, fontWeight: 500, color: "#E2E8F0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: 3 }}>
                        {src.title}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontSize: 10, color: "#475569" }}>{src.url}</span>
                        <span style={{ fontSize: 9.5, color: "#3B82F6", display: "inline-flex", alignItems: "center" }}>
                          <IconExternalLink size={9} />
                        </span>
                      </div>
                      <div style={{ marginTop: 5 }}>
                        <ProgressBar value={src.relevance} color={src.relevance > 90 ? "#60a5fa" : "#a78bfa"} />
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3, fontSize: 9.5, color: "#475569" }}>
                          <span>関連度</span>
                          <span style={{ color: src.relevance > 90 ? "#60a5fa" : "#94A3B8" }}>{src.relevance}%</span>
                        </div>
                      </div>
                    </div>
                    <StatusBadge status={src.status} />
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics (bottom, flat cards) */}
            <div style={{ ...cardBase, flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ padding: "14px 16px 10px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#E2E8F0" }}>統計 / メタデータ</div>
              </div>
              <div style={{ padding: "12px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, overflowY: "auto" }}>
                {STATS.map((stat) => (
                  <div key={stat.label} style={{
                    padding: "12px 14px", borderRadius: 9,
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    display: "flex", flexDirection: "column", gap: 4,
                  }}>
                    <div style={{ fontSize: 9.5, color: "#475569", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      {stat.label}
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                      <span style={{
                        fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em",
                        background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      }}>
                        {stat.value}
                      </span>
                      <span style={{ fontSize: 11, color: "#475569" }}>{stat.unit}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: "#4ade80" }}>
                      <IconTrendUp size={10} color="#4ade80" />
                      {stat.trend}
                    </div>
                  </div>
                ))}
              </div>

              {/* Report List mini */}
              <div style={{ padding: "0 12px 12px", flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: "#475569", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 8 }}>
                  全レポート一覧
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, overflowY: "auto" }}>
                  {RECENT_REPORTS.map((r) => (
                    <div key={r.id} style={{
                      display: "flex", alignItems: "center", gap: 8,
                      padding: "7px 10px", borderRadius: 7,
                      background: activeReport.id === r.id ? "rgba(59,130,246,0.06)" : "rgba(255,255,255,0.02)",
                      border: activeReport.id === r.id ? "1px solid rgba(59,130,246,0.12)" : "1px solid transparent",
                      cursor: "pointer", transition: "all 0.15s",
                    }}
                      onClick={() => setActiveReport(r)}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 11.5, fontWeight: 500, color: "#E2E8F0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {r.company}
                        </div>
                        <div style={{ fontSize: 10, color: "#475569", marginTop: 1 }}>
                          {r.sources}件ソース {r.pages > 0 ? `· ${r.pages}p` : ""}
                        </div>
                      </div>
                      <StatusBadge status={r.status} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
