"use client";

import { useState } from "react";

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      height: 64,
      background: "rgba(10,14,23,0.85)",
      backdropFilter: "blur(20px) saturate(180%)",
      WebkitBackdropFilter: "blur(20px) saturate(180%)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="/demo/final" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 32, height: 32, flexShrink: 0,
            background: "linear-gradient(135deg, #1e3a5f 0%, #1e2d5f 100%)",
            borderRadius: 8,
            border: "1px solid rgba(96,165,250,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="22" height="18" viewBox="0 0 110 90">
              <defs>
                <linearGradient id="logoGradTerms" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
              <path
                d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75"
                fill="none"
                stroke="url(#logoGradTerms)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
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
        </a>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a href="/demo/final/pricing" style={{
            fontSize: 13, fontWeight: 500, color: "#94A3B8",
            textDecoration: "none", padding: "6px 12px", borderRadius: 6,
            transition: "color 0.15s",
          }}>
            料金
          </a>
          <a href="/demo/final/contact" style={{
            fontSize: 13, fontWeight: 500, color: "#94A3B8",
            textDecoration: "none", padding: "6px 12px", borderRadius: 6,
          }}>
            お問い合わせ
          </a>
          <a href="/demo/final/login" style={{
            fontSize: 13, fontWeight: 500, color: "#94A3B8",
            textDecoration: "none", padding: "6px 12px", borderRadius: 6,
          }}>
            ログイン
          </a>
          <a href="/demo/final/signup" style={{
            fontSize: 13, fontWeight: 600, color: "#0a0e17",
            textDecoration: "none", padding: "7px 16px", borderRadius: 8,
            background: "linear-gradient(135deg, #f59e0b, #d97706)",
            boxShadow: "0 2px 8px rgba(245,158,11,0.35)",
          }}>
            無料で始める
          </a>
        </nav>
      </div>
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "32px 24px",
      marginTop: 80,
    }}>
      <div style={{
        maxWidth: 720,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}>
        <span style={{ fontSize: 13, color: "#475569" }}>
          © 2026 Rakuda AI Inc.
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          {[
            { label: "利用規約", href: "/demo/final/terms" },
            { label: "プライバシーポリシー", href: "/demo/final/privacy" },
            { label: "お問い合わせ", href: "/demo/final/contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{ fontSize: 13, color: "#475569", textDecoration: "none" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── TOC Items ────────────────────────────────────────────────────────────────

const TOC_ITEMS = [
  { id: "article-1", label: "第1条 適用" },
  { id: "article-2", label: "第2条 定義" },
  { id: "article-3", label: "第3条 利用登録" },
  { id: "article-4", label: "第4条 料金および支払い" },
  { id: "article-5", label: "第5条 禁止事項" },
  { id: "article-6", label: "第6条 サービスの停止" },
  { id: "article-7", label: "第7条 退会" },
  { id: "article-8", label: "第8条 免責事項" },
  { id: "article-9", label: "第9条 準拠法" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string>("article-1");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 96 + 24;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(165deg, #0a0e17 0%, #0d1a2d 50%, #0f1729 100%)",
      color: "#E2E8F0",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', sans-serif",
    }}>
      <Header />

      <main style={{ paddingTop: "96px", paddingBottom: 0 }}>
        <div style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px",
        }}>
          {/* Page Title */}
          <div style={{ marginBottom: 40 }}>
            <h1 style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#E2E8F0",
              margin: "0 0 8px 0",
              letterSpacing: "-0.02em",
            }}>
              利用規約
            </h1>
            <p style={{ fontSize: 14, color: "#475569", margin: 0 }}>
              最終更新日: 2026年3月26日
            </p>
          </div>

          {/* TOC */}
          <nav style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 12,
            padding: "20px 24px",
            marginBottom: 48,
          }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#475569", margin: "0 0 12px 0", textTransform: "uppercase" }}>
              目次
            </p>
            <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
              {TOC_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      fontSize: 13, color: activeSection === item.id ? "#60a5fa" : "#94A3B8",
                      padding: "3px 0", textAlign: "left", width: "100%",
                      fontFamily: "inherit",
                      transition: "color 0.15s",
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ol>
          </nav>

          {/* Introduction */}
          <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.8, marginBottom: 48 }}>
            本利用規約（以下「本規約」といいます）は、Rakuda AI Inc.（以下「当社」といいます）が提供するAIリサーチサービス「RAKUDAリサーチ」（以下「本サービス」といいます）の利用に関する条件を定めるものです。利用者の方は、本規約に同意の上、本サービスをご利用ください。
          </p>

          {/* Articles */}
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

            {/* 第1条 */}
            <section id="article-1">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                第1条　適用
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  1. 本規約は、利用者と当社との間の本サービスの利用に関わる一切の関係に適用されます。
                </p>
                <p style={{ margin: "0 0 12px 0" }}>
                  2. 当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下「個別規定」といいます）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
                </p>
                <p style={{ margin: 0 }}>
                  3. 本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。
                </p>
              </div>
            </section>

            {/* 第2条 */}
            <section id="article-2">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                第2条　定義
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。
                </p>
                <ol style={{ margin: 0, padding: "0 0 0 20px" }}>
                  <li style={{ marginBottom: 8 }}>「本サービス」とは、当社が提供するAIによる企業・市場リサーチ自動化サービス「RAKUDAリサーチ」を指します。</li>
                  <li style={{ marginBottom: 8 }}>「利用者」とは、本規約に同意の上、本サービスを利用する個人または法人を指します。</li>
                  <li style={{ marginBottom: 8 }}>「登録情報」とは、利用者が本サービスの利用登録に際して当社に提供した情報を指します。</li>
                  <li style={{ marginBottom: 8 }}>「生成コンテンツ」とは、本サービスを通じてAIが生成したレポート、分析結果、その他の成果物を指します。</li>
                  <li style={{ marginBottom: 0 }}>「知的財産権」とは、著作権、特許権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、またはそれらの権利につき登録等を出願する権利を含みます）を意味します。</li>
                </ol>
              </div>
            </section>

            {/* 第3条 */}
            <section id="article-3">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                第3条　利用登録
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  1. 本サービスの利用を希望する方は、本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
                </p>
                <p style={{ margin: "0 0 12px 0" }}>
                  2. 当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあります。
                </p>
                <ol style={{ margin: "0 0 12px 0", padding: "0 0 0 20px" }}>
                  <li style={{ marginBottom: 8 }}>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                  <li style={{ marginBottom: 8 }}>本規約に違反したことがある者からの申請である場合</li>
                  <li style={{ marginBottom: 0 }}>その他、当社が利用登録を相当でないと判断した場合</li>
                </ol>
                <p style={{ margin: 0 }}>
                  3. 利用者は、登録情報に変更が生じた場合、当社が定める方法により速やかに登録情報を変更するものとします。
                </p>
              </div>
            </section>

            {/* 第4条 */}
            <section id="article-4">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                第4条　料金および支払い
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 20px 0" }}>
                  1. 本サービスの料金プランは以下のとおりです。年額プランは月額換算の料金を前払いで一括請求します。
                </p>

                {/* Pricing Table */}
                <div style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10,
                  overflow: "hidden",
                  marginBottom: 20,
                }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        {["プラン", "月額（税抜）", "年額換算（税抜）", "主な制限"].map((h) => (
                          <th key={h} style={{
                            padding: "12px 16px", textAlign: "left",
                            fontSize: 11, fontWeight: 700, letterSpacing: "0.06em",
                            color: "#475569", textTransform: "uppercase",
                          }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { plan: "Free", monthly: "¥0", annual: "¥0", limit: "月3レポート" },
                        { plan: "Pro", monthly: "¥2,980", annual: "¥2,480 / 月", limit: "月30レポート" },
                        { plan: "Enterprise", monthly: "¥9,800", annual: "¥7,980 / 月", limit: "無制限" },
                      ].map((row, i) => (
                        <tr key={row.plan} style={{
                          borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none",
                        }}>
                          <td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 600, color: "#E2E8F0" }}>{row.plan}</td>
                          <td style={{ padding: "12px 16px", fontSize: 13, color: "#94A3B8" }}>{row.monthly}</td>
                          <td style={{ padding: "12px 16px", fontSize: 13, color: "#94A3B8" }}>{row.annual}</td>
                          <td style={{ padding: "12px 16px", fontSize: 13, color: "#94A3B8" }}>{row.limit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p style={{ margin: "0 0 12px 0" }}>
                  2. 有料プランの料金は、利用者が選択した支払い方法（クレジットカード等）により、各請求期間の開始日に前払いで請求されます。
                </p>
                <p style={{ margin: "0 0 12px 0" }}>
                  3. 当社は、当社の裁量により料金を変更することができます。料金変更は、変更日の30日前までに利用者へ通知します。
                </p>
                <p style={{ margin: 0 }}>
                  4. 支払い済みの料金は、法令に別段の定めがある場合を除き、返金されないものとします。
                </p>
              </div>
            </section>

            {/* 第5条 */}
            <section id="article-5">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                第5条　禁止事項
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。
                </p>
                <ol style={{ margin: 0, padding: "0 0 0 20px" }}>
                  {[
                    "法令または公序良俗に違反する行為",
                    "犯罪行為に関連する行為",
                    "当社、本サービスの他の利用者、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為",
                    "当社のサービスの運営を妨害するおそれのある行為",
                    "他の利用者に関する個人情報等を収集または蓄積する行為",
                    "不正アクセスをし、またはこれを試みる行為",
                    "他の利用者に成りすます行為",
                    "当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為",
                    "当社、本サービスの他の利用者または第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為",
                    "本サービスを通じて生成されたコンテンツを無断で第三者へ再配布・販売する行為",
                    "その他、当社が不適切と判断する行為",
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                  ))}
                </ol>
              </div>
            </section>

            {/* 第6条 */}
            <section id="article-6">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                第6条　サービスの停止
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  1. 当社は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                </p>
                <ol style={{ margin: "0 0 12px 0", padding: "0 0 0 20px" }}>
                  <li style={{ marginBottom: 8 }}>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li style={{ marginBottom: 8 }}>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li style={{ marginBottom: 8 }}>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li style={{ marginBottom: 0 }}>その他、当社が本サービスの提供が困難と判断した場合</li>
                </ol>
                <p style={{ margin: 0 }}>
                  2. 当社は、本サービスの提供の停止または中断により、利用者または第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
                </p>
              </div>
            </section>

            {/* 第7条 */}
            <section id="article-7">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                第7条　退会
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  1. 利用者は、当社の定める退会手続により、いつでも本サービスから退会することができます。退会手続は、設定画面またはinfo@rakuda-ai.comへの書面による申請で行えます。
                </p>
                <p style={{ margin: "0 0 12px 0" }}>
                  2. 有料プランの利用者が退会した場合、退会時点の請求期間の残余期間に対する料金の返金は行いません。ただし、当社の責に帰すべき事由による場合はこの限りではありません。
                </p>
                <p style={{ margin: 0 }}>
                  3. 退会後、利用者の登録情報および生成コンテンツは、法令で定める保存義務期間を除き、当社の定める期間経過後に削除されます。
                </p>
              </div>
            </section>

            {/* 第8条 */}
            <section id="article-8">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                第8条　免責事項
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  1. 当社の債務不履行責任は、当社の故意または重過失によらない場合には免責されるものとします。
                </p>
                <p style={{ margin: "0 0 12px 0" }}>
                  2. 当社は、本サービスによって生成されたコンテンツの正確性、完全性、最新性について保証しません。AIが生成した情報は参考情報であり、投資判断・経営判断等の最終的な意思決定は利用者自身の責任において行ってください。
                </p>
                <p style={{ margin: "0 0 12px 0" }}>
                  3. 当社は、本サービスに関して利用者と他の利用者または第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
                </p>
                <p style={{ margin: 0 }}>
                  4. 当社が損害賠償責任を負う場合においても、その責任の範囲は、利用者が当社に支払った直近3ヶ月分の利用料金を上限とします。
                </p>
              </div>
            </section>

            {/* 第9条 */}
            <section id="article-9">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                第9条　準拠法
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  1. 本規約の解釈にあたっては、日本法を準拠法とします。
                </p>
                <p style={{ margin: 0 }}>
                  2. 本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </div>
            </section>

          </div>

          {/* Contact info */}
          <div style={{
            marginTop: 64,
            padding: "24px",
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 12,
          }}>
            <p style={{ fontSize: 13, color: "#94A3B8", margin: "0 0 4px 0", fontWeight: 600 }}>お問い合わせ先</p>
            <p style={{ fontSize: 13, color: "#475569", margin: 0 }}>
              Rakuda AI Inc. &nbsp;|&nbsp; info@rakuda-ai.com
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
