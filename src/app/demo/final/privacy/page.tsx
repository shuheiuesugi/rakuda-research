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
                <linearGradient id="logoGradPrivacy" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
              <path
                d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75"
                fill="none"
                stroke="url(#logoGradPrivacy)"
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
  { id: "sec-1", label: "1. 個人情報の収集" },
  { id: "sec-2", label: "2. 利用目的" },
  { id: "sec-3", label: "3. 第三者提供" },
  { id: "sec-4", label: "4. データ保管" },
  { id: "sec-5", label: "5. セキュリティ" },
  { id: "sec-6", label: "6. Cookie" },
  { id: "sec-7", label: "7. ユーザーの権利" },
  { id: "sec-8", label: "8. お問い合わせ" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string>("sec-1");

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
              プライバシーポリシー
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
            Rakuda AI Inc.（以下「当社」といいます）は、AIリサーチサービス「RAKUDAリサーチ」（以下「本サービス」といいます）の提供にあたり、利用者の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定めます。本サービスをご利用いただく場合、本ポリシーに同意いただいたものとみなします。
          </p>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

            {/* 1. 個人情報の収集 */}
            <section id="sec-1">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                1. 個人情報の収集
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  当社は、本サービスの提供にあたり、以下の個人情報を収集することがあります。
                </p>
                <div style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 8,
                  padding: "16px 20px",
                  marginBottom: 12,
                }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        {["情報の種類", "取得方法", "具体例"].map((h) => (
                          <th key={h} style={{
                            padding: "8px 12px 10px", textAlign: "left",
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
                        { type: "識別情報", method: "登録時", example: "氏名、メールアドレス" },
                        { type: "アカウント情報", method: "登録・設定変更時", example: "パスワード（ハッシュ化済）、プロフィール" },
                        { type: "利用データ", method: "サービス利用中", example: "検索クエリ、レポート生成履歴、操作ログ" },
                        { type: "決済情報", method: "課金時", example: "カード番号下4桁（決済代行会社保管）" },
                        { type: "Cookie・端末情報", method: "アクセス時自動取得", example: "IPアドレス、ブラウザ種別、Cookie ID" },
                      ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                          <td style={{ padding: "10px 12px", fontSize: 13, color: "#E2E8F0", fontWeight: 500 }}>{row.type}</td>
                          <td style={{ padding: "10px 12px", fontSize: 13, color: "#94A3B8" }}>{row.method}</td>
                          <td style={{ padding: "10px 12px", fontSize: 13, color: "#94A3B8" }}>{row.example}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ margin: 0 }}>
                  カード番号のフルデジットは当社サーバーに保存されません。決済処理はPCI DSS準拠の決済代行会社に委託しています。
                </p>
              </div>
            </section>

            {/* 2. 利用目的 */}
            <section id="sec-2">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                2. 利用目的
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  当社は、収集した個人情報を以下の目的で利用します。
                </p>
                <ol style={{ margin: 0, padding: "0 0 0 20px" }}>
                  {[
                    "本サービスの提供、維持、保護および改善のため",
                    "利用者アカウントの管理・認証および本人確認のため",
                    "料金の請求および支払い処理のため",
                    "本サービスに関する重要なお知らせ（障害情報、規約改定等）の通知のため",
                    "マーケティング・プロモーション情報の提供のため（利用者が同意した場合に限る）",
                    "AIモデルの精度向上および研究開発のため（統計的・匿名化された形式で使用）",
                    "不正利用の防止およびセキュリティ確保のため",
                    "法令上の義務の履行のため",
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                  ))}
                </ol>
              </div>
            </section>

            {/* 3. 第三者提供 */}
            <section id="sec-3">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                3. 第三者提供
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  当社は、以下の場合を除き、利用者の個人情報を第三者に提供しません。
                </p>
                <ol style={{ margin: "0 0 12px 0", padding: "0 0 0 20px" }}>
                  <li style={{ marginBottom: 8 }}>利用者本人の同意がある場合</li>
                  <li style={{ marginBottom: 8 }}>法令に基づく場合（裁判所・捜査機関等からの法的要請を含む）</li>
                  <li style={{ marginBottom: 8 }}>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li style={{ marginBottom: 0 }}>本サービスの運営に必要な業務委託先（クラウドサービス提供者、決済代行会社等）に対して、必要最小限の情報を提供する場合</li>
                </ol>
                <p style={{ margin: 0 }}>
                  業務委託先には、当社と同等の個人情報保護水準を維持するよう契約上の義務を課しています。
                </p>
              </div>
            </section>

            {/* 4. データ保管 */}
            <section id="sec-4">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                4. データ保管
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  1. 収集した個人情報は、日本国内に所在するデータセンターのサーバーに保管します。データの国外移転は原則として行いません。ただし、当社が利用するクラウドサービスの性質上、一部のデータが処理目的で一時的に国外のサーバーを経由する場合があります。その際は、適切な保護措置（標準契約条項の締結等）を講じます。
                </p>
                <p style={{ margin: "0 0 12px 0" }}>
                  2. 個人情報の保管期間は以下のとおりです。
                </p>
                <div style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 8,
                  padding: "16px 20px",
                  marginBottom: 12,
                }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        {["データ種別", "保管期間"].map((h) => (
                          <th key={h} style={{
                            padding: "8px 12px 10px", textAlign: "left",
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
                        { type: "アカウント情報", period: "退会後1年間" },
                        { type: "利用ログ・操作履歴", period: "退会後180日間" },
                        { type: "決済・請求情報", period: "法令に基づき7年間" },
                        { type: "サポート対応記録", period: "対応終了後3年間" },
                      ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                          <td style={{ padding: "10px 12px", fontSize: 13, color: "#E2E8F0", fontWeight: 500 }}>{row.type}</td>
                          <td style={{ padding: "10px 12px", fontSize: 13, color: "#94A3B8" }}>{row.period}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ margin: 0 }}>
                  保管期間経過後は、安全な方法により速やかに削除または匿名化します。
                </p>
              </div>
            </section>

            {/* 5. セキュリティ */}
            <section id="sec-5">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                5. セキュリティ
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  当社は、個人情報の安全管理のために以下の技術的・組織的措置を講じています。
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { label: "通信の暗号化", detail: "全ての通信はTLS 1.3を使用して暗号化されます。HTTP接続は自動的にHTTPSにリダイレクトされます。" },
                    { label: "データの暗号化", detail: "データベースに保管されるセンシティブな個人情報はAES-256により暗号化されます。" },
                    { label: "アクセス制御", detail: "個人情報へのアクセスは業務上必要な担当者に限定し、最小権限の原則を適用します。アクセスログを記録・監視します。" },
                    { label: "脆弱性管理", detail: "定期的なセキュリティ監査および外部専門家によるペネトレーションテストを実施します。" },
                    { label: "インシデント対応", detail: "個人情報の漏えい等のインシデントが発生した場合、法令に従い速やかに利用者および監督官庁へ通知します。" },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: 8,
                      padding: "14px 16px",
                    }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#60a5fa" }}>{item.label}</span>
                      <span style={{ fontSize: 13, color: "#94A3B8" }}> — {item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. Cookie */}
            <section id="sec-6">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                6. Cookie
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  1. 当社は、本サービスの利便性向上および利用状況の分析を目的として、Cookieおよび類似技術を使用します。
                </p>
                <p style={{ margin: "0 0 12px 0" }}>
                  2. 当社が使用するCookieの種類は以下のとおりです。
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
                  {[
                    { type: "必須Cookie", purpose: "ログイン状態の維持、セキュリティ保護など、本サービスの基本的な機能に必要なCookie。無効化することはできません。" },
                    { type: "分析Cookie", purpose: "Google Analytics 4を利用したページビュー、セッション時間、利用機能の計測。取得データは匿名化されます。" },
                    { type: "機能Cookie", purpose: "言語設定、表示テーマなど利用者の設定情報を記憶するCookie。" },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: 8,
                      padding: "14px 16px",
                    }}>
                      <p style={{ margin: "0 0 4px 0", fontSize: 13, fontWeight: 600, color: "#E2E8F0" }}>{item.type}</p>
                      <p style={{ margin: 0, fontSize: 13, color: "#94A3B8" }}>{item.purpose}</p>
                    </div>
                  ))}
                </div>
                <p style={{ margin: 0 }}>
                  3. 分析Cookieおよび機能Cookieは、ブラウザの設定から無効化することができます。ただし、一部の機能が正常に動作しなくなる場合があります。Google Analyticsのオプトアウトには、<a href="https://tools.google.com/dlpage/gaoptout" style={{ color: "#60a5fa", textDecoration: "none" }}>Google Analytics オプトアウトアドオン</a>をご利用ください。
                </p>
              </div>
            </section>

            {/* 7. ユーザーの権利 */}
            <section id="sec-7">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                7. ユーザーの権利
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 12px 0" }}>
                  利用者は、当社が保有する自己の個人情報について、以下の権利を有します。これらの権利を行使する場合は、本ポリシー末尾の連絡先までご請求ください。
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
                  {[
                    { right: "閲覧請求権", detail: "当社が保有するご自身の個人情報の開示を請求することができます。" },
                    { right: "訂正請求権", detail: "保有する個人情報の内容が事実と異なる場合、訂正・追加・削除を請求することができます。" },
                    { right: "削除請求権（忘れられる権利）", detail: "一定の条件を満たす場合、ご自身の個人情報の削除を請求することができます。" },
                    { right: "利用停止・消去請求権", detail: "個人情報が目的外利用されている場合、その利用停止または消去を請求することができます。" },
                    { right: "同意の撤回", detail: "マーケティング目的のメール送信等、同意に基づく個人情報の利用について、いつでも同意を撤回することができます。" },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: 8,
                      padding: "14px 16px",
                    }}>
                      <p style={{ margin: "0 0 4px 0", fontSize: 13, fontWeight: 600, color: "#E2E8F0" }}>{item.right}</p>
                      <p style={{ margin: 0, fontSize: 13, color: "#94A3B8" }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
                <p style={{ margin: 0 }}>
                  ご請求への対応は、原則として受付から30日以内に行います。本人確認のため、登録メールアドレスからのご連絡をお願いする場合があります。
                </p>
              </div>
            </section>

            {/* 8. お問い合わせ */}
            <section id="sec-8">
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0", margin: "0 0 16px 0", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                8. お問い合わせ
              </h2>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.85 }}>
                <p style={{ margin: "0 0 16px 0" }}>
                  本ポリシーに関するご質問・個人情報の取り扱いに関するご請求・ご相談は、以下の窓口までご連絡ください。
                </p>
                <div style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10,
                  padding: "20px 24px",
                }}>
                  <p style={{ margin: "0 0 6px 0", fontSize: 14, fontWeight: 600, color: "#E2E8F0" }}>Rakuda AI Inc. 個人情報保護担当</p>
                  <p style={{ margin: "0 0 4px 0", fontSize: 13, color: "#94A3B8" }}>
                    メールアドレス: <a href="mailto:info@rakuda-ai.com" style={{ color: "#60a5fa", textDecoration: "none" }}>info@rakuda-ai.com</a>
                  </p>
                  <p style={{ margin: "0 0 4px 0", fontSize: 13, color: "#94A3B8" }}>
                    受付時間: 平日 10:00〜18:00（土日祝日・年末年始を除く）
                  </p>
                  <p style={{ margin: 0, fontSize: 13, color: "#94A3B8" }}>
                    回答期限: 受付から30日以内
                  </p>
                </div>
                <p style={{ margin: "16px 0 0 0" }}>
                  当社は、個人情報保護法その他関連法令を遵守し、本ポリシーの内容を適宜見直し、継続的に改善に努めます。ポリシーを改定した場合は、本ページ上部の「最終更新日」を更新し、重要な変更については利用者へ通知します。
                </p>
              </div>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
