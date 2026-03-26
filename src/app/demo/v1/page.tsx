"use client";

import { useState } from "react";

const styles: Record<string, React.CSSProperties> = {
  root: {
    display: "flex",
    height: "100vh",
    background: "linear-gradient(165deg, #0a0e17 0%, #0d1a2d 50%, #0f1729 100%)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', sans-serif",
    color: "#E2E8F0",
    overflow: "hidden",
  },
  sidebar: {
    width: "200px",
    minWidth: "200px",
    background: "rgba(255,255,255,0.025)",
    borderRight: "1px solid rgba(255,255,255,0.05)",
    display: "flex",
    flexDirection: "column",
    padding: "0",
  },
  logoArea: {
    padding: "24px 20px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  brandName: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    lineHeight: 1.2,
  },
  brandSub: {
    fontSize: "9px",
    color: "#475569",
    letterSpacing: "0.08em",
    marginTop: "2px",
  },
  nav: {
    flex: 1,
    padding: "16px 12px",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  navLabel: {
    fontSize: "9px",
    color: "#475569",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    padding: "8px 8px 4px",
    fontWeight: 600,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "9px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    color: "#94A3B8",
    transition: "all 0.15s",
    border: "1px solid transparent",
  },
  navItemActive: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "9px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    color: "#E2E8F0",
    background: "rgba(59,130,246,0.12)",
    border: "1px solid rgba(59,130,246,0.2)",
    transition: "all 0.15s",
  },
  navDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#3B82F6",
    flexShrink: 0,
  },
  sidebarBottom: {
    padding: "16px",
    borderTop: "1px solid rgba(255,255,255,0.05)",
  },
  userCard: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.03)",
    cursor: "pointer",
  },
  avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: 700,
    color: "#fff",
    flexShrink: 0,
  },
  userInfo: {
    flex: 1,
    minWidth: 0,
  },
  userName: {
    fontSize: "12px",
    color: "#E2E8F0",
    fontWeight: 500,
    whiteSpace: "nowrap" as const,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  userRole: {
    fontSize: "10px",
    color: "#475569",
    marginTop: "1px",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  topBar: {
    padding: "20px 32px 16px",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  pageTitle: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#E2E8F0",
    flex: 1,
  },
  badge: {
    fontSize: "10px",
    padding: "3px 8px",
    borderRadius: "12px",
    background: "rgba(59,130,246,0.15)",
    border: "1px solid rgba(59,130,246,0.25)",
    color: "#60a5fa",
    fontWeight: 500,
  },
  content: {
    flex: 1,
    overflow: "auto",
    padding: "24px 32px",
  },
  searchCard: {
    background: "rgba(255,255,255,0.025)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "28px",
  },
  searchTitle: {
    fontSize: "12px",
    color: "#94A3B8",
    marginBottom: "12px",
    letterSpacing: "0.05em",
  },
  searchRow: {
    display: "flex",
    gap: "10px",
  },
  searchInput: {
    flex: 1,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "8px",
    padding: "10px 16px",
    color: "#E2E8F0",
    fontSize: "13px",
    outline: "none",
  },
  searchBtn: {
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    color: "#fff",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    letterSpacing: "0.03em",
    whiteSpace: "nowrap" as const,
  },
  searchFilters: {
    display: "flex",
    gap: "8px",
    marginTop: "12px",
    flexWrap: "wrap" as const,
  },
  filterChip: {
    fontSize: "11px",
    padding: "4px 10px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#94A3B8",
    cursor: "pointer",
  },
  filterChipActive: {
    fontSize: "11px",
    padding: "4px 10px",
    borderRadius: "20px",
    background: "rgba(59,130,246,0.12)",
    border: "1px solid rgba(59,130,246,0.25)",
    color: "#60a5fa",
    cursor: "pointer",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
  },
  sectionTitle: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#94A3B8",
    letterSpacing: "0.05em",
  },
  sectionAction: {
    fontSize: "11px",
    color: "#3B82F6",
    cursor: "pointer",
  },
  reportsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "16px",
    marginBottom: "32px",
  },
  reportCard: {
    background: "rgba(255,255,255,0.025)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "10px",
    padding: "18px",
    cursor: "pointer",
    transition: "all 0.15s",
  },
  reportCardActive: {
    background: "rgba(59,130,246,0.06)",
    border: "1px solid rgba(59,130,246,0.2)",
    borderRadius: "10px",
    padding: "18px",
    cursor: "pointer",
    transition: "all 0.15s",
  },
  reportCardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  reportCompany: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#E2E8F0",
  },
  reportStatusBadge: {
    fontSize: "9px",
    padding: "3px 7px",
    borderRadius: "4px",
    background: "rgba(34,197,94,0.12)",
    border: "1px solid rgba(34,197,94,0.2)",
    color: "#4ade80",
    fontWeight: 600,
    letterSpacing: "0.05em",
  },
  reportMeta: {
    fontSize: "11px",
    color: "#475569",
    marginBottom: "10px",
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },
  reportMetaDot: {
    width: "3px",
    height: "3px",
    borderRadius: "50%",
    background: "#475569",
  },
  reportSummary: {
    fontSize: "12px",
    color: "#94A3B8",
    lineHeight: 1.6,
    marginBottom: "12px",
  },
  reportFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reportSources: {
    fontSize: "10px",
    color: "#475569",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  reportScore: {
    fontSize: "11px",
    color: "#60a5fa",
    fontWeight: 600,
  },
  divider: {
    height: "1px",
    background: "rgba(255,255,255,0.05)",
    margin: "24px 0",
  },
  reportView: {
    background: "rgba(255,255,255,0.025)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "12px",
    padding: "24px",
    marginTop: "8px",
  },
  reportViewHeader: {
    marginBottom: "20px",
    paddingBottom: "16px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  reportViewTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#E2E8F0",
    marginBottom: "6px",
  },
  reportViewMeta: {
    fontSize: "12px",
    color: "#475569",
    display: "flex",
    gap: "12px",
  },
  sectionBlock: {
    marginBottom: "20px",
  },
  sectionBlockTitle: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#60a5fa",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  sectionBlockContent: {
    fontSize: "13px",
    color: "#94A3B8",
    lineHeight: 1.8,
  },
  citationInline: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "16px",
    height: "16px",
    borderRadius: "3px",
    background: "rgba(59,130,246,0.2)",
    border: "1px solid rgba(59,130,246,0.3)",
    fontSize: "9px",
    color: "#60a5fa",
    fontWeight: 700,
    verticalAlign: "super",
    marginLeft: "2px",
    cursor: "pointer",
  },
  citationList: {
    marginTop: "16px",
    paddingTop: "16px",
    borderTop: "1px solid rgba(255,255,255,0.05)",
  },
  citationListTitle: {
    fontSize: "11px",
    color: "#475569",
    letterSpacing: "0.08em",
    marginBottom: "10px",
    fontWeight: 600,
  },
  citationItem: {
    display: "flex",
    gap: "10px",
    padding: "8px 0",
    borderBottom: "1px solid rgba(255,255,255,0.03)",
    alignItems: "flex-start",
  },
  citationNum: {
    width: "18px",
    height: "18px",
    borderRadius: "3px",
    background: "rgba(59,130,246,0.15)",
    border: "1px solid rgba(59,130,246,0.25)",
    fontSize: "9px",
    color: "#60a5fa",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: "2px",
  },
  citationText: {
    fontSize: "11px",
    color: "#94A3B8",
    lineHeight: 1.5,
    flex: 1,
  },
  citationSource: {
    fontSize: "10px",
    color: "#3B82F6",
    marginTop: "2px",
  },
  metricRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
    margin: "12px 0",
  },
  metricCard: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "8px",
    padding: "12px",
  },
  metricLabel: {
    fontSize: "10px",
    color: "#475569",
    marginBottom: "4px",
    letterSpacing: "0.05em",
  },
  metricValue: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#E2E8F0",
  },
  metricChange: {
    fontSize: "10px",
    color: "#4ade80",
    marginTop: "2px",
  },
};

const REPORTS = [
  {
    id: 1,
    company: "Sakana AI",
    category: "AI / LLM",
    date: "2026-03-25",
    status: "完了",
    summary: "東京拠点の基盤モデル開発スタートアップ。自然界の群知能をヒントにした分散型AI学習アーキテクチャを開発。シリーズBで$30M調達済み。",
    sources: 12,
    score: 82,
  },
  {
    id: 2,
    company: "Spiral.AI",
    category: "AI / SaaS",
    date: "2026-03-24",
    status: "完了",
    summary: "エンタープライズ向けAIエージェントプラットフォーム。主要顧客は製造業・金融業。ARR $4.2M、YoY +210%の高成長フェーズ。",
    sources: 9,
    score: 78,
  },
  {
    id: 3,
    company: "Flux Robotics",
    category: "Robotics",
    date: "2026-03-22",
    status: "完了",
    summary: "物流倉庫向け自律搬送ロボット。独自のSLAMアルゴリズムにより既存インフラへの導入コストを70%削減。国内5社との実証実験中。",
    sources: 7,
    score: 71,
  },
  {
    id: 4,
    company: "DataStream Labs",
    category: "Data Infra",
    date: "2026-03-20",
    status: "完了",
    summary: "リアルタイムデータパイプライン構築SaaS。エンジニアリング工数を従来比85%削減。Databricks・Snowflakeとのネイティブ統合を提供。",
    sources: 14,
    score: 88,
  },
];

const CITATIONS = [
  { num: 1, text: "Sakana AI公式プレスリリース「シリーズB資金調達完了のお知らせ」", source: "sakana.ai / 2026-02-14" },
  { num: 2, text: "TechCrunch Japan「Sakana AIが30億円を調達、大規模言語モデルの分散学習に注力」", source: "techcrunch.com/jp / 2026-02-15" },
  { num: 3, text: "特許情報プラットフォーム J-PlatPat 出願番号 2025-XXXXXX", source: "j-platpat.inpit.go.jp" },
  { num: 4, text: "国立研究開発法人産業技術総合研究所 研究報告書 Vol.48", source: "aist.go.jp / 2025-11" },
  { num: 5, text: "Crunchbase「Sakana AI Funding Rounds」", source: "crunchbase.com" },
];

function WaveLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 10 110 70" fill="none">
      <path
        d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75"
        stroke="url(#waveGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <defs>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function NavIcon({ type }: { type: string }) {
  const base = { width: 14, height: 14, flexShrink: 0 } as const;
  if (type === "search") return (
    <svg {...base} viewBox="0 0 16 16" fill="none">
      <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
  if (type === "report") return (
    <svg {...base} viewBox="0 0 16 16" fill="none">
      <rect x="2" y="1" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 5h6M5 8h6M5 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
  if (type === "template") return (
    <svg {...base} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
  if (type === "settings") return (
    <svg {...base} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.93 2.93l1.41 1.41M11.66 11.66l1.41 1.41M2.93 13.07l1.41-1.41M11.66 4.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
  return null;
}

export default function DemoV1() {
  const [activeNav, setActiveNav] = useState("report");
  const [selectedReport, setSelectedReport] = useState<number | null>(1);
  const [searchValue, setSearchValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("全て");

  const navItems = [
    { key: "search", label: "検索" },
    { key: "report", label: "レポート" },
    { key: "template", label: "テンプレート" },
    { key: "settings", label: "設定" },
  ];

  const filters = ["全て", "AI / LLM", "SaaS", "Robotics", "Data Infra"];
  const selected = REPORTS.find((r) => r.id === selectedReport);

  return (
    <div style={styles.root}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.logoArea}>
          <div style={styles.logoRow}>
            <WaveLogo size={28} />
            <div>
              <div style={styles.brandName}>RAKUDA RESEARCH</div>
              <div style={styles.brandSub}>Enterprise Edition</div>
            </div>
          </div>
        </div>
        <nav style={styles.nav}>
          <div style={styles.navLabel}>メニュー</div>
          {navItems.map((item) => (
            <div
              key={item.key}
              style={activeNav === item.key ? styles.navItemActive : styles.navItem}
              onClick={() => setActiveNav(item.key)}
            >
              <NavIcon type={item.key} />
              <span>{item.label}</span>
              {item.key === "report" && (
                <span style={{ marginLeft: "auto", fontSize: "10px", background: "rgba(59,130,246,0.2)", color: "#60a5fa", borderRadius: "10px", padding: "1px 6px", fontWeight: 600 }}>4</span>
              )}
            </div>
          ))}
        </nav>
        <div style={styles.sidebarBottom}>
          <div style={styles.userCard}>
            <div style={styles.avatar}>SH</div>
            <div style={styles.userInfo}>
              <div style={styles.userName}>Shuhei H.</div>
              <div style={styles.userRole}>アナリスト</div>
            </div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.5 3l3 3-3 3" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={styles.main}>
        <div style={styles.topBar}>
          <span style={styles.pageTitle}>
            {activeNav === "search" ? "企業リサーチ検索" :
              activeNav === "report" ? "レポート一覧" :
              activeNav === "template" ? "テンプレート" : "設定"}
          </span>
          <span style={styles.badge}>Beta v2.4</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "#475569", cursor: "pointer" }}>
            <path d="M2 4h12M2 8h12M2 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div style={styles.content}>
          {/* Search Card */}
          <div style={styles.searchCard}>
            <div style={styles.searchTitle}>企業リサーチ検索</div>
            <div style={styles.searchRow}>
              <input
                style={styles.searchInput}
                placeholder="企業名・業種・キーワードで検索..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button style={styles.searchBtn}>リサーチ開始</button>
            </div>
            <div style={styles.searchFilters}>
              {filters.map((f) => (
                <span
                  key={f}
                  style={activeFilter === f ? styles.filterChipActive : styles.filterChip}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Reports Section */}
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTitle}>過去のレポート一覧</span>
            <span style={styles.sectionAction}>すべて表示</span>
          </div>
          <div style={styles.reportsGrid}>
            {REPORTS.map((r) => (
              <div
                key={r.id}
                style={selectedReport === r.id ? styles.reportCardActive : styles.reportCard}
                onClick={() => setSelectedReport(r.id)}
              >
                <div style={styles.reportCardHeader}>
                  <span style={styles.reportCompany}>{r.company}</span>
                  <span style={styles.reportStatusBadge}>{r.status}</span>
                </div>
                <div style={styles.reportMeta}>
                  <span>{r.category}</span>
                  <div style={styles.reportMetaDot} />
                  <span>{r.date}</span>
                </div>
                <div style={styles.reportSummary}>{r.summary}</div>
                <div style={styles.reportFooter}>
                  <span style={styles.reportSources}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <rect x="1" y="1" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
                      <path d="M3 4h4M3 6h2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                    {r.sources} ソース
                  </span>
                  <span style={styles.reportScore}>スコア {r.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Report Detail */}
          {selected && (
            <>
              <div style={styles.sectionHeader}>
                <span style={styles.sectionTitle}>レポート詳細</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <span style={{ ...styles.filterChip, fontSize: "10px", padding: "3px 8px" }}>PDF出力</span>
                  <span style={{ ...styles.filterChipActive, fontSize: "10px", padding: "3px 8px" }}>共有</span>
                </div>
              </div>
              <div style={styles.reportView}>
                <div style={styles.reportViewHeader}>
                  <div style={styles.reportViewTitle}>{selected.company} — 企業調査レポート</div>
                  <div style={styles.reportViewMeta}>
                    <span>生成日: {selected.date}</span>
                    <span>カテゴリ: {selected.category}</span>
                    <span>参照ソース数: {selected.sources}</span>
                  </div>
                </div>

                <div style={styles.sectionBlock}>
                  <div style={styles.sectionBlockTitle}>
                    <span style={{ width: "3px", height: "14px", background: "#3B82F6", borderRadius: "2px", display: "inline-block" }} />
                    事業概要
                  </div>
                  <div style={styles.sectionBlockContent}>
                    {selected.company}は、{selected.category}領域において革新的なプロダクトを展開するスタートアップ企業です
                    <span style={styles.citationInline}>1</span>。
                    同社は2022年に創業され、現在は東京都港区に本社を置く。主力プロダクトは企業の業務効率化を支援するAIソリューションであり
                    <span style={styles.citationInline}>2</span>、
                    国内外の大手企業への導入実績を持つ。プロダクトの中核となる技術は独自特許を取得済みであり
                    <span style={styles.citationInline}>3</span>、
                    競合他社との差別化要素となっている。
                  </div>
                </div>

                <div style={styles.sectionBlock}>
                  <div style={styles.sectionBlockTitle}>
                    <span style={{ width: "3px", height: "14px", background: "#8B5CF6", borderRadius: "2px", display: "inline-block" }} />
                    財務分析
                  </div>
                  <div style={styles.metricRow}>
                    <div style={styles.metricCard}>
                      <div style={styles.metricLabel}>ARR</div>
                      <div style={styles.metricValue}>$4.2M</div>
                      <div style={styles.metricChange}>+210% YoY</div>
                    </div>
                    <div style={styles.metricCard}>
                      <div style={styles.metricLabel}>調達総額</div>
                      <div style={styles.metricValue}>$42M</div>
                      <div style={styles.metricChange}>Series B完了</div>
                    </div>
                    <div style={styles.metricCard}>
                      <div style={styles.metricLabel}>従業員数</div>
                      <div style={styles.metricValue}>87名</div>
                      <div style={styles.metricChange}>+34 (12ヶ月)</div>
                    </div>
                  </div>
                  <div style={styles.sectionBlockContent}>
                    直近12ヶ月の収益成長率はYoY +210%と業界平均を大きく上回る水準を維持している
                    <span style={styles.citationInline}>4</span>。
                    グロスマージンは78%と高水準であり、SaaSビジネスとしての収益構造は健全と評価できる。
                    バーンレートは月次$800K程度であり、現行の資金残高でRunwayは約18ヶ月と推定される（推定）。
                  </div>
                </div>

                <div style={styles.sectionBlock}>
                  <div style={styles.sectionBlockTitle}>
                    <span style={{ width: "3px", height: "14px", background: "#10b981", borderRadius: "2px", display: "inline-block" }} />
                    競合比較
                  </div>
                  <div style={styles.sectionBlockContent}>
                    主要競合として国内3社・海外2社が存在する。製品の機能面では先行優位性を持つものの、グローバル展開においては資金力・ブランド力で劣位に立つ
                    <span style={styles.citationInline}>5</span>。
                    国内市場においてはトップシェアを獲得しており、スイッチングコストの高さからリテンション率は96%と極めて高い水準を維持している。
                  </div>
                </div>

                <div style={styles.sectionBlock}>
                  <div style={styles.sectionBlockTitle}>
                    <span style={{ width: "3px", height: "14px", background: "#f59e0b", borderRadius: "2px", display: "inline-block" }} />
                    リスク要因
                  </div>
                  <div style={styles.sectionBlockContent}>
                    1. 大手テック企業の類似サービス参入リスク（中程度）。2. 規制環境の変化によるコンプライアンスコスト増大（低〜中）。
                    3. 主要エンジニア人材の流出リスク（中程度）。4. 米国市場展開における競合激化（高）。
                    以上のリスクは経営陣も認識しており、リスクヘッジとしてのパートナーシップ戦略が進行中である。
                  </div>
                </div>

                <div style={styles.citationList}>
                  <div style={styles.citationListTitle}>参照ソース</div>
                  {CITATIONS.map((c) => (
                    <div key={c.num} style={styles.citationItem}>
                      <div style={styles.citationNum}>{c.num}</div>
                      <div style={{ flex: 1 }}>
                        <div style={styles.citationText}>{c.text}</div>
                        <div style={styles.citationSource}>{c.source}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
