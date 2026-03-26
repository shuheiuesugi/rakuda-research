"use client";

import { useState } from "react";

const S: Record<string, React.CSSProperties> = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    background: "linear-gradient(165deg, #0a0e17 0%, #0d1a2d 50%, #0f1729 100%)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', sans-serif",
    color: "#E2E8F0",
    overflow: "hidden",
  },

  // Top bar
  topbar: {
    display: "flex",
    alignItems: "center",
    gap: "0",
    padding: "0 24px",
    height: "52px",
    background: "rgba(255,255,255,0.02)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    backdropFilter: "blur(12px)",
    flexShrink: 0,
  },
  logoGroup: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginRight: "28px",
    flexShrink: 0,
  },
  brand: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    whiteSpace: "nowrap" as const,
  },
  tabs: {
    display: "flex",
    gap: "0",
    flex: 1,
  },
  tab: {
    padding: "0 18px",
    height: "52px",
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    color: "#475569",
    cursor: "pointer",
    borderBottom: "2px solid transparent",
    transition: "all 0.15s",
    gap: "7px",
    letterSpacing: "0.02em",
  },
  tabActive: {
    padding: "0 18px",
    height: "52px",
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    color: "#E2E8F0",
    cursor: "pointer",
    borderBottom: "2px solid #3B82F6",
    transition: "all 0.15s",
    gap: "7px",
    letterSpacing: "0.02em",
    fontWeight: 600,
  },
  topbarRight: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginLeft: "auto",
  },
  topbarBtn: {
    width: "28px",
    height: "28px",
    borderRadius: "6px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.07)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#94A3B8",
  },
  avatarSm: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    fontWeight: 700,
    color: "#fff",
    cursor: "pointer",
  },
  statusDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#4ade80",
  },

  // Layout
  body: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
    gap: "0",
  },

  // Left column
  leftCol: {
    flex: "0 0 60%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderRight: "1px solid rgba(255,255,255,0.05)",
  },

  // Right column
  rightCol: {
    flex: "0 0 40%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  colHeader: {
    padding: "14px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
  },
  colHeaderTitle: {
    fontSize: "11px",
    fontWeight: 600,
    color: "#94A3B8",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
  },
  colHeaderAction: {
    fontSize: "10px",
    color: "#3B82F6",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  colContent: {
    flex: 1,
    overflow: "auto",
    padding: "16px 20px",
  },

  // Search bar
  searchWrap: {
    marginBottom: "16px",
  },
  searchBox: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "8px",
    padding: "0 12px",
    marginBottom: "10px",
  },
  searchIcon: {
    color: "#475569",
    flexShrink: 0,
  },
  searchInputInline: {
    flex: 1,
    background: "transparent",
    border: "none",
    padding: "10px 4px",
    color: "#E2E8F0",
    fontSize: "13px",
    outline: "none",
  },
  searchMeta: {
    display: "flex",
    gap: "6px",
    flexWrap: "wrap" as const,
  },
  chip: {
    fontSize: "10px",
    padding: "3px 9px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.07)",
    color: "#94A3B8",
    cursor: "pointer",
  },
  chipActive: {
    fontSize: "10px",
    padding: "3px 9px",
    borderRadius: "20px",
    background: "rgba(59,130,246,0.12)",
    border: "1px solid rgba(59,130,246,0.25)",
    color: "#60a5fa",
    cursor: "pointer",
  },

  // Glass cards
  glassCard: {
    background: "rgba(255,255,255,0.025)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "10px",
    marginBottom: "10px",
    overflow: "hidden",
  },
  glassCardActive: {
    background: "rgba(59,130,246,0.06)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(59,130,246,0.2)",
    borderRadius: "10px",
    marginBottom: "10px",
    overflow: "hidden",
  },
  cardPad: {
    padding: "14px 16px",
  },

  // Report content
  reportTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#E2E8F0",
    marginBottom: "4px",
  },
  reportMeta: {
    fontSize: "11px",
    color: "#475569",
    display: "flex",
    gap: "10px",
    marginBottom: "14px",
  },
  sectionHead: {
    fontSize: "10px",
    fontWeight: 700,
    color: "#60a5fa",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "7px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  sectionBar: {
    width: "3px",
    height: "12px",
    borderRadius: "2px",
    background: "#3B82F6",
    display: "inline-block",
  },
  bodyText: {
    fontSize: "12px",
    color: "#94A3B8",
    lineHeight: 1.75,
    marginBottom: "14px",
  },
  citeBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "14px",
    height: "14px",
    borderRadius: "3px",
    background: "rgba(59,130,246,0.2)",
    border: "1px solid rgba(59,130,246,0.3)",
    fontSize: "8px",
    color: "#60a5fa",
    fontWeight: 700,
    verticalAlign: "super",
    marginLeft: "2px",
    cursor: "pointer",
  },

  // Metrics row
  metricsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "8px",
    marginBottom: "14px",
  },
  metricItem: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "7px",
    padding: "10px 12px",
  },
  metricL: {
    fontSize: "9px",
    color: "#475569",
    letterSpacing: "0.04em",
    marginBottom: "3px",
  },
  metricV: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#E2E8F0",
    lineHeight: 1.1,
  },
  metricC: {
    fontSize: "9px",
    color: "#4ade80",
    marginTop: "2px",
  },

  // Report list items
  listItem: {
    display: "flex",
    gap: "10px",
    padding: "10px 0",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
    cursor: "pointer",
    alignItems: "flex-start",
  },
  listItemIcon: {
    width: "28px",
    height: "28px",
    borderRadius: "6px",
    background: "rgba(59,130,246,0.12)",
    border: "1px solid rgba(59,130,246,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: "1px",
  },
  listItemName: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#E2E8F0",
    marginBottom: "2px",
  },
  listItemMeta: {
    fontSize: "10px",
    color: "#475569",
    display: "flex",
    gap: "6px",
  },
  listItemScore: {
    marginLeft: "auto",
    fontSize: "11px",
    color: "#60a5fa",
    fontWeight: 700,
    flexShrink: 0,
  },

  // Source cards (right col)
  sourceCard: {
    background: "rgba(255,255,255,0.025)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "9px",
    padding: "12px 14px",
    marginBottom: "8px",
  },
  sourceCardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "6px",
  },
  sourceIconBox: {
    width: "24px",
    height: "24px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontSize: "9px",
    fontWeight: 700,
    letterSpacing: "0.02em",
  },
  sourceTitle: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#E2E8F0",
    flex: 1,
    lineHeight: 1.3,
  },
  sourceNum: {
    width: "16px",
    height: "16px",
    borderRadius: "3px",
    background: "rgba(59,130,246,0.18)",
    border: "1px solid rgba(59,130,246,0.28)",
    fontSize: "8px",
    color: "#60a5fa",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  sourceBody: {
    fontSize: "11px",
    color: "#94A3B8",
    lineHeight: 1.55,
    marginBottom: "6px",
  },
  sourceFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sourceDomain: {
    fontSize: "10px",
    color: "#3B82F6",
  },
  sourceDate: {
    fontSize: "10px",
    color: "#475569",
  },
  sourceRelevance: {
    display: "flex",
    gap: "2px",
    alignItems: "center",
    marginTop: "6px",
  },
  relevanceBar: {
    height: "3px",
    borderRadius: "2px",
    background: "#3B82F6",
  },
  relevanceBarBg: {
    height: "3px",
    borderRadius: "2px",
    background: "rgba(255,255,255,0.06)",
    flex: 1,
  },
  relevanceLabel: {
    fontSize: "9px",
    color: "#475569",
    marginLeft: "6px",
  },

  // Status badges
  statusComplete: {
    fontSize: "9px",
    padding: "2px 6px",
    borderRadius: "4px",
    background: "rgba(34,197,94,0.1)",
    border: "1px solid rgba(34,197,94,0.2)",
    color: "#4ade80",
    fontWeight: 600,
    letterSpacing: "0.04em",
  },
  statusPending: {
    fontSize: "9px",
    padding: "2px 6px",
    borderRadius: "4px",
    background: "rgba(251,191,36,0.1)",
    border: "1px solid rgba(251,191,36,0.2)",
    color: "#fbbf24",
    fontWeight: 600,
    letterSpacing: "0.04em",
  },

  // Section divider
  divider: {
    height: "1px",
    background: "rgba(255,255,255,0.05)",
    margin: "14px 0",
  },
};

function WaveLogo({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.58} viewBox="0 10 110 70" fill="none">
      <path
        d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75"
        stroke="url(#wg2)"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      <defs>
        <linearGradient id="wg2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TabIcon({ type, active }: { type: string; active: boolean }) {
  const c = active ? "#E2E8F0" : "#475569";
  const size = 13;
  if (type === "search") return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <circle cx="5.5" cy="5.5" r="4" stroke={c} strokeWidth="1.4" />
      <path d="M8.5 8.5L12 12" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
  if (type === "reports") return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <rect x="1.5" y="1" width="11" height="12" rx="2" stroke={c} strokeWidth="1.4" />
      <path d="M4 4.5h6M4 7h6M4 9.5h3.5" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
  if (type === "template") return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <rect x="1" y="1" width="5" height="5" rx="1.2" stroke={c} strokeWidth="1.4" />
      <rect x="8" y="1" width="5" height="5" rx="1.2" stroke={c} strokeWidth="1.4" />
      <rect x="1" y="8" width="5" height="5" rx="1.2" stroke={c} strokeWidth="1.4" />
      <rect x="8" y="8" width="5" height="5" rx="1.2" stroke={c} strokeWidth="1.4" />
    </svg>
  );
  if (type === "settings") return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="2.2" stroke={c} strokeWidth="1.4" />
      <path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
  return null;
}

const SOURCES = [
  {
    num: 1,
    type: "Web",
    color: "#2563eb",
    bg: "rgba(37,99,235,0.15)",
    title: "Sakana AI公式プレスリリース — シリーズB 3,000万ドル調達完了",
    body: "Sakana AIは本日、シリーズB資金調達ラウンドにおいて3,000万ドルの調達を完了したことを発表しました。今回の調達により累計調達額は4,200万ドルとなります。",
    domain: "sakana.ai",
    date: "2026-02-14",
    relevance: 98,
  },
  {
    num: 2,
    type: "Web",
    color: "#059669",
    bg: "rgba(5,150,105,0.15)",
    title: "TechCrunch Japan — Sakana AIが30億円調達、分散AI学習を深化",
    body: "東京を拠点とするAIスタートアップSakana AIが、独自の分散型学習アーキテクチャの研究開発加速のため大型資金調達を実施。",
    domain: "techcrunch.com/jp",
    date: "2026-02-15",
    relevance: 94,
  },
  {
    num: 3,
    type: "PDF",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.15)",
    title: "J-PlatPat 特許情報 — 分散型機械学習システム及び方法",
    body: "出願番号 2025-XXXXXX。自然界の群知能に基づく分散型機械学習システムに関する特許。複数エージェントの協調学習による精度向上を実現。",
    domain: "j-platpat.inpit.go.jp",
    date: "2025-08-22",
    relevance: 87,
  },
  {
    num: 4,
    type: "DB",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.15)",
    title: "Crunchbase — Sakana AI Funding Rounds & Investors",
    body: "Funding history: Seed $2M (2022-09), Series A $10M (2023-11), Series B $30M (2026-02). Lead investors: SoftBank Ventures, Global Brain, DNX Ventures.",
    domain: "crunchbase.com",
    date: "2026-03-01",
    relevance: 92,
  },
  {
    num: 5,
    type: "Web",
    color: "#d97706",
    bg: "rgba(217,119,6,0.15)",
    title: "日経新聞 — AI新興企業の資金調達動向 2026年第1四半期",
    body: "2026年Q1のAIスタートアップ資金調達は前年同期比+45%と高水準を維持。Sakana AIを含む国産AIスタートアップへの注目が集まっている。",
    domain: "nikkei.com",
    date: "2026-03-15",
    relevance: 72,
  },
  {
    num: 6,
    type: "PDF",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.15)",
    title: "産業技術総合研究所 研究報告書 Vol.48 — 自律分散AI動向",
    body: "国内における自律分散型AIシステムの研究開発動向をまとめた年次報告。Sakana AIの研究成果についても言及あり。",
    domain: "aist.go.jp",
    date: "2025-11-30",
    relevance: 68,
  },
];

const REPORT_LIST = [
  { company: "Sakana AI", cat: "AI / LLM", date: "2026-03-25", score: 82, status: "完了" },
  { company: "Spiral.AI", cat: "AI / SaaS", date: "2026-03-24", score: 78, status: "完了" },
  { company: "Flux Robotics", cat: "Robotics", date: "2026-03-22", score: 71, status: "完了" },
  { company: "DataStream Labs", cat: "Data Infra", date: "2026-03-20", score: 88, status: "完了" },
  { company: "NeuralEdge", cat: "AI / Hardware", date: "2026-03-18", score: 65, status: "完了" },
  { company: "Qubit Finance", cat: "FinTech", date: "2026-03-17", score: 59, status: "完了" },
];

export default function DemoV2() {
  const [activeTab, setActiveTab] = useState("search");
  const [activeFilter, setActiveFilter] = useState("全て");
  const [selectedSource, setSelectedSource] = useState<number | null>(null);
  const [searchValue, setSearchValue] = useState("");

  const tabs = [
    { key: "search", label: "検索" },
    { key: "reports", label: "レポート" },
    { key: "template", label: "テンプレート" },
    { key: "settings", label: "設定" },
  ];

  const filters = ["全て", "AI", "SaaS", "Robotics", "FinTech"];

  return (
    <div style={S.root}>
      {/* Top bar */}
      <header style={S.topbar}>
        <div style={S.logoGroup}>
          <WaveLogo size={24} />
          <span style={S.brand}>RAKUDA RESEARCH</span>
        </div>
        <div style={S.tabs}>
          {tabs.map((t) => (
            <div
              key={t.key}
              style={activeTab === t.key ? S.tabActive : S.tab}
              onClick={() => setActiveTab(t.key)}
            >
              <TabIcon type={t.key} active={activeTab === t.key} />
              {t.label}
              {t.key === "reports" && (
                <span style={{ fontSize: "9px", background: "rgba(59,130,246,0.2)", color: "#60a5fa", borderRadius: "8px", padding: "1px 5px", fontWeight: 700 }}>6</span>
              )}
            </div>
          ))}
        </div>
        <div style={S.topbarRight}>
          <div style={S.statusDot} />
          <span style={{ fontSize: "10px", color: "#4ade80" }}>リサーチ中</span>
          <div style={S.topbarBtn}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v5M6 8.5V10M2 6H1M11 6h-1M3.22 3.22L2.5 2.5M9.5 9.5l-.72-.72M3.22 8.78L2.5 9.5M9.5 2.5l-.72.72" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={S.topbarBtn}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1a4 4 0 014 4c0 2.5-4 7-4 7S2 7.5 2 5a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="6" cy="5" r="1.2" fill="currentColor" />
            </svg>
          </div>
          <div style={S.avatarSm}>SH</div>
        </div>
      </header>

      {/* Body */}
      <div style={S.body}>
        {/* Left column */}
        <div style={S.leftCol}>
          <div style={S.colHeader}>
            <span style={S.colHeaderTitle}>
              {activeTab === "search" ? "リサーチ結果" : activeTab === "reports" ? "レポート一覧" : activeTab === "template" ? "テンプレート" : "設定"}
            </span>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              {activeTab === "search" && (
                <>
                  <span style={{ fontSize: "10px", color: "#475569" }}>12件</span>
                  <span style={S.colHeaderAction}>
                    フィルタ
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 3h7M3 5.5h4M4.5 8h1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                </>
              )}
              {activeTab === "reports" && (
                <span style={S.colHeaderAction}>新規作成 +</span>
              )}
            </div>
          </div>

          <div style={S.colContent}>
            {/* Search UI */}
            {activeTab === "search" && (
              <>
                <div style={S.searchWrap}>
                  <div style={S.searchBox}>
                    <svg style={S.searchIcon} width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M8.5 8.5L12 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    <input
                      style={S.searchInputInline}
                      placeholder="企業名・業種・キーワードで検索..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", border: "none", borderRadius: "5px", padding: "5px 14px", color: "#fff", fontSize: "11px", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" as const }}>
                      検索
                    </button>
                  </div>
                  <div style={S.searchMeta}>
                    {filters.map((f) => (
                      <span
                        key={f}
                        style={activeFilter === f ? S.chipActive : S.chip}
                        onClick={() => setActiveFilter(f)}
                      >
                        {f}
                      </span>
                    ))}
                    <span style={{ ...S.chip, marginLeft: "auto" }}>並び替え: 関連度</span>
                  </div>
                </div>

                {/* Report Content */}
                <div style={S.glassCard}>
                  <div style={S.cardPad}>
                    <div style={S.reportTitle}>Sakana AI — 企業調査レポート</div>
                    <div style={S.reportMeta}>
                      <span>AI / LLM</span>
                      <span>·</span>
                      <span>生成: 2026-03-25</span>
                      <span>·</span>
                      <span>ソース 6件参照</span>
                    </div>

                    <div style={S.sectionHead}>
                      <span style={S.sectionBar} />
                      事業概要
                    </div>
                    <div style={S.bodyText}>
                      Sakana AIは、東京を拠点とする大規模言語モデル開発スタートアップです
                      <span style={S.citeBadge}>1</span>。
                      自然界の群知能にインスパイアされた分散型AI学習アーキテクチャを独自開発し、既存の中央集権型LLMに比べ推論コストを大幅に削減することに成功しています
                      <span style={S.citeBadge}>3</span>。
                      2026年2月にシリーズBで$30M（累計$42M）を調達
                      <span style={S.citeBadge}>4</span>。
                    </div>

                    <div style={S.sectionHead}>
                      <span style={{ ...S.sectionBar, background: "#8B5CF6" }} />
                      財務分析
                    </div>
                    <div style={S.metricsRow}>
                      <div style={S.metricItem}>
                        <div style={S.metricL}>ARR</div>
                        <div style={S.metricV}>$4.2M</div>
                        <div style={S.metricC}>+210% YoY</div>
                      </div>
                      <div style={S.metricItem}>
                        <div style={S.metricL}>累計調達</div>
                        <div style={S.metricV}>$42M</div>
                        <div style={S.metricC}>Series B</div>
                      </div>
                      <div style={S.metricItem}>
                        <div style={S.metricL}>従業員</div>
                        <div style={S.metricV}>87名</div>
                        <div style={S.metricC}>+34 (12M)</div>
                      </div>
                      <div style={S.metricItem}>
                        <div style={S.metricL}>Runway</div>
                        <div style={S.metricV}>18M</div>
                        <div style={S.metricC}>推定</div>
                      </div>
                    </div>
                    <div style={S.bodyText}>
                      直近12ヶ月のARR成長率YoY +210%は業界平均（+85%）を大幅に上回る
                      <span style={S.citeBadge}>2</span>。
                      グロスマージン78%、月次バーンレート$800K（推定）。NRRは112%と拡張収益の傾向も見られる。
                    </div>

                    <div style={S.divider} />

                    <div style={S.sectionHead}>
                      <span style={{ ...S.sectionBar, background: "#10b981" }} />
                      競合比較
                    </div>
                    <div style={S.bodyText}>
                      主要競合として国内3社・海外2社が存在するものの、国内市場においては機能面・価格面での優位性を確立している
                      <span style={S.citeBadge}>5</span>。
                      スイッチングコストの高さからリテンション率は96%。グローバル展開においては大手LLMプロバイダとの差別化戦略が課題となっている。
                    </div>

                    <div style={S.sectionHead}>
                      <span style={{ ...S.sectionBar, background: "#f59e0b" }} />
                      リスク要因
                    </div>
                    <div style={S.bodyText}>
                      1. 大手テック企業の参入（中）
                      2. 規制コスト増大（低〜中）
                      3. 人材流出（中）
                      4. 米国市場競合激化（高）
                      <span style={S.citeBadge}>6</span>。
                      経営陣はパートナーシップ戦略でリスクヘッジを進行中。
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Reports Tab */}
            {activeTab === "reports" && (
              <>
                <div style={{ display: "flex", gap: "8px", marginBottom: "14px", flexWrap: "wrap" as const }}>
                  {filters.map((f) => (
                    <span key={f} style={activeFilter === f ? S.chipActive : S.chip} onClick={() => setActiveFilter(f)}>{f}</span>
                  ))}
                </div>
                {REPORT_LIST.map((r, i) => (
                  <div key={i} style={S.listItem}>
                    <div style={S.listItemIcon}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <rect x="1" y="0.5" width="10" height="11" rx="1.5" stroke="#60a5fa" strokeWidth="1.2" />
                        <path d="M3 4h6M3 6h6M3 8h4" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={S.listItemName}>{r.company}</div>
                      <div style={S.listItemMeta}>
                        <span>{r.cat}</span>
                        <span>·</span>
                        <span>{r.date}</span>
                        <span style={r.status === "完了" ? S.statusComplete : S.statusPending}>{r.status}</span>
                      </div>
                    </div>
                    <div style={S.listItemScore}>{r.score}</div>
                  </div>
                ))}
              </>
            )}

            {activeTab === "template" && (
              <div style={{ color: "#475569", fontSize: "13px", paddingTop: "20px", textAlign: "center" as const }}>
                テンプレートは準備中です
              </div>
            )}

            {activeTab === "settings" && (
              <div style={{ color: "#475569", fontSize: "13px", paddingTop: "20px", textAlign: "center" as const }}>
                設定画面は準備中です
              </div>
            )}
          </div>
        </div>

        {/* Right column */}
        <div style={S.rightCol}>
          <div style={S.colHeader}>
            <span style={S.colHeaderTitle}>
              {activeTab === "search" ? "参照ソース" : "レポート情報"}
            </span>
            <span style={S.colHeaderAction}>
              {activeTab === "search" ? `${SOURCES.length}件` : "エクスポート"}
            </span>
          </div>
          <div style={S.colContent}>
            {activeTab === "search" && SOURCES.map((src) => (
              <div
                key={src.num}
                style={{
                  ...S.sourceCard,
                  ...(selectedSource === src.num ? {
                    border: "1px solid rgba(59,130,246,0.25)",
                    background: "rgba(59,130,246,0.05)",
                  } : {}),
                  cursor: "pointer",
                }}
                onClick={() => setSelectedSource(selectedSource === src.num ? null : src.num)}
              >
                <div style={S.sourceCardHeader}>
                  <div style={{ ...S.sourceIconBox, background: src.bg, color: src.color }}>
                    {src.type}
                  </div>
                  <div style={S.sourceTitle}>{src.title}</div>
                  <div style={S.sourceNum}>{src.num}</div>
                </div>
                {(selectedSource === src.num) && (
                  <div style={S.sourceBody}>{src.body}</div>
                )}
                <div style={S.sourceFooter}>
                  <span style={S.sourceDomain}>{src.domain}</span>
                  <span style={S.sourceDate}>{src.date}</span>
                </div>
                <div style={{ ...S.sourceRelevance, marginTop: "8px" }}>
                  <div style={{ ...S.relevanceBar, width: `${src.relevance}%`, maxWidth: "calc(100% - 40px)" }} />
                  <div style={S.relevanceBarBg} />
                  <span style={S.relevanceLabel}>{src.relevance}%</span>
                </div>
              </div>
            ))}

            {activeTab === "reports" && (
              <div style={S.glassCard}>
                <div style={S.cardPad}>
                  <div style={{ fontSize: "11px", color: "#94A3B8", lineHeight: 1.7 }}>
                    <div style={{ fontWeight: 600, color: "#E2E8F0", marginBottom: "8px", fontSize: "12px" }}>レポート統計</div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <span style={{ color: "#475569" }}>総レポート数</span>
                      <span style={{ color: "#E2E8F0", fontWeight: 600 }}>24件</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <span style={{ color: "#475569" }}>今月作成</span>
                      <span style={{ color: "#E2E8F0", fontWeight: 600 }}>6件</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <span style={{ color: "#475569" }}>平均スコア</span>
                      <span style={{ color: "#60a5fa", fontWeight: 700 }}>74.0</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}>
                      <span style={{ color: "#475569" }}>参照ソース合計</span>
                      <span style={{ color: "#E2E8F0", fontWeight: 600 }}>187件</span>
                    </div>
                  </div>

                  <div style={{ ...S.divider, margin: "12px 0" }} />

                  <div style={{ fontSize: "11px", color: "#475569", marginBottom: "8px", fontWeight: 600, letterSpacing: "0.06em" }}>カテゴリ分布</div>
                  {[
                    { label: "AI / LLM", pct: 42, color: "#3B82F6" },
                    { label: "SaaS", pct: 25, color: "#8B5CF6" },
                    { label: "Robotics", pct: 17, color: "#10b981" },
                    { label: "FinTech", pct: 16, color: "#f59e0b" },
                  ].map((c) => (
                    <div key={c.label} style={{ marginBottom: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                        <span style={{ fontSize: "10px", color: "#94A3B8" }}>{c.label}</span>
                        <span style={{ fontSize: "10px", color: "#475569" }}>{c.pct}%</span>
                      </div>
                      <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${c.pct}%`, background: c.color, borderRadius: "2px" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
