"use client";

import { useState } from "react";

const REPORTS = [
  {
    id: 1,
    title: "Stripe, Inc. 企業調査レポート",
    company: "Stripe, Inc.",
    date: "2026-03-25",
    status: "完了",
    category: "Fintech",
    pages: 24,
    sources: 18,
  },
  {
    id: 2,
    title: "Notion Labs 競合分析",
    company: "Notion Labs",
    date: "2026-03-24",
    status: "完了",
    category: "SaaS",
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
    pages: 19,
    sources: 14,
  },
  {
    id: 5,
    title: "Linear アーリーステージ調査",
    company: "Linear",
    date: "2026-03-21",
    status: "下書き",
    category: "Dev Tools",
    pages: 8,
    sources: 6,
  },
  {
    id: 6,
    title: "Vercel インフラ事業分析",
    company: "Vercel",
    date: "2026-03-20",
    status: "完了",
    category: "Infrastructure",
    pages: 27,
    sources: 20,
  },
];

const SECTIONS = [
  { id: "overview", label: "事業概要" },
  { id: "financials", label: "財務分析" },
  { id: "competitors", label: "競合比較" },
  { id: "risks", label: "リスク要因" },
];

const SOURCES = [
  { id: 1, type: "Web", title: "Stripe 公式プレスリリース 2025Q4", url: "stripe.com/newsroom", date: "2025-11-12" },
  { id: 2, type: "PDF", title: "Stripe Annual Report 2024", url: "stripe.com/annual-2024.pdf", date: "2025-03-01" },
  { id: 3, type: "DB", title: "Crunchbase - Stripe Funding History", url: "crunchbase.com/stripe", date: "2026-03-20" },
  { id: 4, type: "Web", title: "Bloomberg: Stripe Valuation Analysis", url: "bloomberg.com/stripe-2025", date: "2025-09-08" },
  { id: 5, type: "PDF", title: "McKinsey Digital Payments Report 2025", url: "mckinsey.com/payments-2025", date: "2025-06-15" },
  { id: 6, type: "DB", title: "PitchBook - Fintech Comparables", url: "pitchbook.com/fintech", date: "2026-01-10" },
];

const NAV_ITEMS = [
  {
    id: "search",
    label: "検索",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: "reports",
    label: "レポート",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: "templates",
    label: "テンプレート",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: "settings",
    label: "設定",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
  },
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

export default function V3Page() {
  const [activeNav, setActiveNav] = useState("reports");
  const [selectedReport, setSelectedReport] = useState(REPORTS[0]);
  const [activeSection, setActiveSection] = useState("overview");
  const [hoveredReport, setHoveredReport] = useState<number | null>(null);

  const styles = {
    root: {
      display: "flex",
      height: "100vh",
      background: "linear-gradient(165deg, #0a0e17 0%, #0d1a2d 50%, #0f1729 100%)",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
      color: "#E2E8F0",
      overflow: "hidden",
    } as React.CSSProperties,

    sidebar: {
      width: "60px",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      padding: "16px 0",
      gap: "8px",
      borderRight: "1px solid rgba(255,255,255,0.05)",
      background: "rgba(0,0,0,0.2)",
    },

    logoWrap: {
      width: "36px",
      height: "36px",
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    navBtn: (isActive: boolean) => ({
      width: "40px",
      height: "40px",
      borderRadius: "10px",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      background: isActive ? "rgba(59,130,246,0.15)" : "transparent",
      color: isActive ? "#60a5fa" : "#475569",
      transition: "all 0.15s ease",
    }),

    leftCol: {
      width: "280px",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column" as const,
      borderRight: "1px solid rgba(255,255,255,0.05)",
      overflow: "hidden",
    },

    leftHeader: {
      padding: "20px 16px 12px",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    },

    searchBar: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 12px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "8px",
      marginTop: "12px",
    },

    searchInput: {
      background: "transparent",
      border: "none",
      outline: "none",
      color: "#E2E8F0",
      fontSize: "13px",
      width: "100%",
      fontFamily: "inherit",
    },

    reportList: {
      flex: 1,
      overflowY: "auto" as const,
      padding: "8px",
    },

    reportCard: (isSelected: boolean, isHovered: boolean, status: string) => ({
      padding: "12px 14px",
      borderRadius: "8px",
      marginBottom: "4px",
      cursor: "pointer",
      background: isSelected
        ? "rgba(59,130,246,0.1)"
        : isHovered
        ? "rgba(255,255,255,0.04)"
        : "rgba(255,255,255,0.025)",
      borderTop: isSelected
        ? `1px solid rgba(59,130,246,0.3)`
        : "1px solid rgba(255,255,255,0.05)",
      borderRight: isSelected
        ? `1px solid rgba(59,130,246,0.3)`
        : "1px solid rgba(255,255,255,0.05)",
      borderBottom: isSelected
        ? `1px solid rgba(59,130,246,0.3)`
        : "1px solid rgba(255,255,255,0.05)",
      borderLeft: `3px solid ${STATUS_COLORS[status] || "#475569"}`,
      transition: "all 0.15s ease",
    }),

    centerCol: {
      flex: 1,
      display: "flex",
      flexDirection: "column" as const,
      overflow: "hidden",
    },

    centerHeader: {
      padding: "20px 24px 0",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    },

    tabRow: {
      display: "flex",
      gap: "0",
      marginTop: "16px",
    },

    tab: (isActive: boolean) => ({
      padding: "8px 16px",
      fontSize: "13px",
      cursor: "pointer",
      color: isActive ? "#60a5fa" : "#475569",
      borderBottom: isActive ? "2px solid #3b82f6" : "2px solid transparent",
      background: "transparent",
      border: "none",
      fontFamily: "inherit",
      transition: "all 0.15s ease",
      whiteSpace: "nowrap" as const,
    }),

    centerContent: {
      flex: 1,
      overflowY: "auto" as const,
      padding: "24px",
    },

    rightCol: {
      width: "260px",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column" as const,
      borderLeft: "1px solid rgba(255,255,255,0.05)",
      overflow: "hidden",
    },

    rightHeader: {
      padding: "20px 16px 12px",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    },

    sourceList: {
      flex: 1,
      overflowY: "auto" as const,
      padding: "8px",
    },

    sourceCard: {
      padding: "10px 12px",
      borderRadius: "8px",
      marginBottom: "6px",
      background: "rgba(255,255,255,0.025)",
      border: "1px solid rgba(255,255,255,0.05)",
    },
  };

  return (
    <div style={styles.root}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.logoWrap}>
          <svg width="32" height="32" viewBox="0 0 110 100" fill="none">
            <path
              d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75"
              stroke="url(#sidebarGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <defs>
              <linearGradient id="sidebarGrad" x1="10" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60a5fa" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            style={styles.navBtn(activeNav === item.id)}
            onClick={() => setActiveNav(item.id)}
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Left Column: Report List */}
      <div style={styles.leftCol}>
        <div style={styles.leftHeader}>
          <div style={{ fontSize: "11px", fontWeight: 600, color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
            過去のレポート
          </div>
          <div style={styles.searchBar}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input style={styles.searchInput} placeholder="レポートを検索..." />
          </div>
        </div>
        <div style={styles.reportList}>
          {REPORTS.map((report) => (
            <div
              key={report.id}
              style={styles.reportCard(
                selectedReport.id === report.id,
                hoveredReport === report.id,
                report.status
              )}
              onClick={() => setSelectedReport(report)}
              onMouseEnter={() => setHoveredReport(report.id)}
              onMouseLeave={() => setHoveredReport(null)}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "#E2E8F0", lineHeight: 1.4, marginBottom: "4px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>
                    {report.title}
                  </div>
                  <div style={{ fontSize: "11px", color: "#475569" }}>{report.date}</div>
                </div>
                <span style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  padding: "2px 6px",
                  borderRadius: "4px",
                  color: STATUS_COLORS[report.status],
                  background: STATUS_BG[report.status],
                  flexShrink: 0,
                }}>
                  {report.status}
                </span>
              </div>
              <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                <span style={{ fontSize: "10px", color: "#475569", background: "rgba(255,255,255,0.04)", padding: "2px 6px", borderRadius: "4px" }}>
                  {report.category}
                </span>
                {report.pages > 0 && (
                  <span style={{ fontSize: "10px", color: "#475569" }}>{report.pages}p · {report.sources}ソース</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Column: Report Content */}
      <div style={styles.centerCol}>
        <div style={styles.centerHeader}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
            <div style={{ fontSize: "18px", fontWeight: 600, color: "#E2E8F0" }}>{selectedReport.title}</div>
            <span style={{
              fontSize: "11px",
              fontWeight: 600,
              padding: "3px 8px",
              borderRadius: "5px",
              color: STATUS_COLORS[selectedReport.status],
              background: STATUS_BG[selectedReport.status],
            }}>
              {selectedReport.status}
            </span>
          </div>
          <div style={{ fontSize: "12px", color: "#475569" }}>
            {selectedReport.date} · {selectedReport.sources}ソース参照 · {selectedReport.pages}ページ
          </div>
          <div style={styles.tabRow}>
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                style={styles.tab(activeSection === s.id)}
                onClick={() => setActiveSection(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.centerContent}>
          {activeSection === "overview" && (
            <div>
              <SectionBlock title="企業概要">
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#94A3B8", margin: 0 }}>
                  {selectedReport.company}は、グローバルでオンライン決済インフラを提供するフィンテック企業。
                  2010年創業。API経由で決済処理・不正検知・サブスクリプション管理・請求書発行等を提供する。
                  企業向けのStripe Atlasや法人カードStripe Issuing等も展開し、SMBから大企業まで幅広い顧客基盤を持つ。
                  <sup style={{ color: "#60a5fa", fontSize: "10px" }}>[1]</sup>
                </p>
              </SectionBlock>
              <SectionBlock title="主要KPI">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                  {[
                    { label: "決済処理額 (TPV)", value: "$1.4T", sub: "2024年度推定" },
                    { label: "年間収益", value: "$15.4B", sub: "2024年 推定" },
                    { label: "企業評価額", value: "$70B", sub: "2023年 最終ラウンド" },
                  ].map((kpi) => (
                    <KpiCard key={kpi.label} {...kpi} />
                  ))}
                </div>
              </SectionBlock>
              <SectionBlock title="事業ハイライト">
                <ul style={{ margin: 0, padding: "0 0 0 16px", color: "#94A3B8", fontSize: "14px", lineHeight: 2 }}>
                  <li>決済インフラとしてAmazon, Shopify, Salesforceなど大手パートナーシップ多数<sup style={{ color: "#60a5fa", fontSize: "10px" }}>[2]</sup></li>
                  <li>100カ国以上でサービス展開、135以上の通貨をサポート<sup style={{ color: "#60a5fa", fontSize: "10px" }}>[1]</sup></li>
                  <li>開発者中心のアプローチでエコシステムを形成</li>
                  <li>B2B決済・組み込み金融領域への拡大戦略を推進中<sup style={{ color: "#60a5fa", fontSize: "10px" }}>[4]</sup></li>
                </ul>
              </SectionBlock>
            </div>
          )}

          {activeSection === "financials" && (
            <div>
              <SectionBlock title="収益推移 (推定)">
                <div style={{ overflowX: "auto" as const }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: "13px" }}>
                    <thead>
                      <tr>
                        {["指標", "2021", "2022", "2023", "2024E"].map((h) => (
                          <th key={h} style={{ padding: "8px 12px", textAlign: h === "指標" ? "left" as const : "right" as const, color: "#475569", fontWeight: 600, fontSize: "11px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: "収益 (USD)", vals: ["$7.4B", "$10.0B", "$13.0B", "$15.4B"] },
                        { label: "TPV (USD)", vals: ["$640B", "$817B", "$1.0T", "$1.4T"] },
                        { label: "YoY成長率", vals: ["-", "+35%", "+30%", "+18%"] },
                      ].map((row) => (
                        <tr key={row.label}>
                          <td style={{ padding: "10px 12px", color: "#94A3B8", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>{row.label}</td>
                          {row.vals.map((v, i) => (
                            <td key={i} style={{ padding: "10px 12px", textAlign: "right" as const, color: "#E2E8F0", borderBottom: "1px solid rgba(255,255,255,0.03)", fontVariantNumeric: "tabular-nums" }}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{ fontSize: "11px", color: "#475569", marginTop: "8px" }}>※ 推定値。非公開企業のため公式財務データは非開示。出典: [2][5]</div>
              </SectionBlock>
            </div>
          )}

          {activeSection === "competitors" && (
            <div>
              <SectionBlock title="競合比較マトリクス">
                <div style={{ overflowX: "auto" as const }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: "13px" }}>
                    <thead>
                      <tr>
                        {["企業", "評価額", "主要市場", "強み", "弱み"].map((h) => (
                          <th key={h} style={{ padding: "8px 12px", textAlign: "left" as const, color: "#475569", fontWeight: 600, fontSize: "11px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Stripe", val: "$70B", market: "グローバル", strong: "開発者体験・API", weak: "コスト高" },
                        { name: "Adyen", val: "$35B", market: "欧州・大企業", strong: "エンタープライズ", weak: "SMB弱い" },
                        { name: "Square (Block)", val: "$40B", market: "北米SMB", strong: "POS統合", weak: "グローバル展開" },
                        { name: "Braintree", val: "非公開", market: "北米", strong: "PayPal連携", weak: "独自性低い" },
                      ].map((row) => (
                        <tr key={row.name}>
                          <td style={{ padding: "10px 12px", color: "#60a5fa", fontWeight: 500, borderBottom: "1px solid rgba(255,255,255,0.03)" }}>{row.name}</td>
                          <td style={{ padding: "10px 12px", color: "#E2E8F0", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>{row.val}</td>
                          <td style={{ padding: "10px 12px", color: "#94A3B8", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>{row.market}</td>
                          <td style={{ padding: "10px 12px", color: "#22c55e", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>{row.strong}</td>
                          <td style={{ padding: "10px 12px", color: "#f87171", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>{row.weak}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SectionBlock>
            </div>
          )}

          {activeSection === "risks" && (
            <div>
              <SectionBlock title="主要リスク要因">
                {[
                  { level: "高", color: "#f87171", bg: "rgba(248,113,113,0.08)", title: "規制リスク", desc: "EU PSD2・米国州別規制の強化により、コンプライアンスコストが上昇。PCI DSS対応の継続的更新が必要。" },
                  { level: "高", color: "#f59e0b", bg: "rgba(245,158,11,0.08)", title: "競合激化", desc: "Apple Pay/Google Pay等BigTechの決済参入、および新興フィンテックによる価格競争が激化。" },
                  { level: "中", color: "#60a5fa", bg: "rgba(96,165,250,0.08)", title: "経済サイクル依存", desc: "TPVはEC取引量に連動するため、景気後退局面での収益減少リスクあり。" },
                  { level: "低", color: "#22c55e", bg: "rgba(34,197,94,0.08)", title: "技術的障害", desc: "99.99%のSLAを掲げるが、大規模インシデント時の顧客離反リスクは限定的。" },
                ].map((risk) => (
                  <div key={risk.title} style={{ padding: "14px 16px", borderRadius: "8px", background: risk.bg, border: `1px solid ${risk.color}22`, marginBottom: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <span style={{ fontSize: "10px", fontWeight: 700, color: risk.color, background: `${risk.color}20`, padding: "2px 6px", borderRadius: "4px" }}>リスク: {risk.level}</span>
                      <span style={{ fontSize: "14px", fontWeight: 600, color: "#E2E8F0" }}>{risk.title}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: "13px", color: "#94A3B8", lineHeight: 1.7 }}>{risk.desc}</p>
                  </div>
                ))}
              </SectionBlock>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Sources & Citations */}
      <div style={styles.rightCol}>
        <div style={styles.rightHeader}>
          <div style={{ fontSize: "11px", fontWeight: 600, color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "4px" }}>
            参照ソース
          </div>
          <div style={{ fontSize: "11px", color: "#475569" }}>{SOURCES.length}件</div>
        </div>
        <div style={styles.sourceList}>
          {SOURCES.map((src) => (
            <div key={src.id} style={styles.sourceCard}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <span style={{ fontSize: "10px", fontWeight: 700, color: SOURCE_TYPE_COLORS[src.type], background: `${SOURCE_TYPE_COLORS[src.type]}20`, padding: "1px 5px", borderRadius: "3px" }}>
                  {src.type}
                </span>
                <span style={{ fontSize: "10px", color: "#475569", marginLeft: "auto" }}>
                  [{src.id}]
                </span>
              </div>
              <div style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.5, marginBottom: "4px" }}>{src.title}</div>
              <div style={{ fontSize: "11px", color: "#3b82f6", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{src.url}</div>
              <div style={{ fontSize: "10px", color: "#475569", marginTop: "3px" }}>{src.date}</div>
            </div>
          ))}
        </div>

        {/* Citation summary */}
        <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, color: "#475569", marginBottom: "8px" }}>引用タイプ分布</div>
          {["Web", "PDF", "DB"].map((type) => {
            const count = SOURCES.filter((s) => s.type === type).length;
            const pct = Math.round((count / SOURCES.length) * 100);
            return (
              <div key={type} style={{ marginBottom: "6px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#475569", marginBottom: "3px" }}>
                  <span style={{ color: SOURCE_TYPE_COLORS[type] }}>{type}</span>
                  <span>{count}件</span>
                </div>
                <div style={{ height: "3px", background: "rgba(255,255,255,0.05)", borderRadius: "2px" }}>
                  <div style={{ height: "100%", width: `${pct}%`, background: SOURCE_TYPE_COLORS[type], borderRadius: "2px" }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ fontSize: "13px", fontWeight: 600, color: "#60a5fa", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "3px", height: "14px", background: "linear-gradient(180deg, #60a5fa, #a78bfa)", borderRadius: "2px" }} />
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
}

function KpiCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div style={{
      padding: "16px",
      background: "rgba(255,255,255,0.025)",
      border: "1px solid rgba(255,255,255,0.05)",
      borderRadius: "10px",
    }}>
      <div style={{ fontSize: "11px", color: "#475569", marginBottom: "6px" }}>{label}</div>
      <div style={{ fontSize: "22px", fontWeight: 700, color: "#E2E8F0", letterSpacing: "-0.02em", marginBottom: "3px" }}>{value}</div>
      <div style={{ fontSize: "10px", color: "#475569" }}>{sub}</div>
    </div>
  );
}
