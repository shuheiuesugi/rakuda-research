"use client";

import { useState } from "react";

export default function BookCall() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <header className="sub-header">
        <div className="sub-header-inner">
          <a href="./" className="header-logo" style={{ display: "flex", alignItems: "center", gap: "0" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 40" style={{ height: "20px", width: "auto" }}>
              <path d="M4,32 C4,32 12,6 24,6 C34,6 28,28 36,28 C44,28 38,4 48,4 C60,4 68,32 68,32" stroke="#1a1a2e" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
              <text x="80" y="28" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="22" fontWeight="300" fill="#1a1a2e" letterSpacing="3">RAKUDAリサーチ</text>
            </svg>
          </a>
        </div>
      </header>

      <main className="book-call-page">
        <div className="container">
          {!submitted ? (
            <div className="book-call-layout">
              <div className="book-call-info">
                <span className="section-eyebrow">無料相談</span>
                <h1>まずは15分、お話しませんか?</h1>
                <p className="book-call-lead">
                  リサーチ業務の課題やお悩みをお聞かせください。
                  最適な導入プランを無料でご提案します。
                </p>

                <ul className="book-call-points">
                  <li>
                    <span className="bc-check">&#x2714;</span>
                    <div>
                      <strong>営業なし</strong>
                      <span>課題ヒアリングだけ。無理な勧誘は一切しません。</span>
                    </div>
                  </li>
                  <li>
                    <span className="bc-check">&#x2714;</span>
                    <div>
                      <strong>Zoom / Google Meet / 電話 OK</strong>
                      <span>お好みの方法でお話しできます。</span>
                    </div>
                  </li>
                  <li>
                    <span className="bc-check">&#x2714;</span>
                    <div>
                      <strong>最短翌営業日に対応</strong>
                      <span>お急ぎの場合もご相談ください。</span>
                    </div>
                  </li>
                  <li>
                    <span className="bc-check">&#x2714;</span>
                    <div>
                      <strong>月額2,980円〜で導入可能</strong>
                      <span>Freeプランは永年無料。まず3レポートお試し。</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="book-call-form-wrap">
                <form
                  className="book-call-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <h2>無料相談を予約する</h2>
                  <p className="form-sub">以下をご記入ください。担当者よりご連絡いたします。</p>

                  <div className="form-group">
                    <label htmlFor="company">会社名 <span className="req">*</span></label>
                    <input type="text" id="company" name="company" required placeholder="例: ラクダ株式会社" />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">お名前 <span className="req">*</span></label>
                      <input type="text" id="name" name="name" required placeholder="例: 田中 太郎" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">役職</label>
                      <input type="text" id="title" name="title" placeholder="例: リサーチ部門長" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">メールアドレス <span className="req">*</span></label>
                      <input type="email" id="email" name="email" required placeholder="例: tanaka@example.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">電話番号</label>
                      <input type="tel" id="phone" name="phone" placeholder="例: 03-1234-5678" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="format">ご希望の相談方法 <span className="req">*</span></label>
                    <select id="format" name="format" required defaultValue="">
                      <option value="" disabled>選択してください</option>
                      <option value="zoom">Zoom</option>
                      <option value="meet">Google Meet</option>
                      <option value="phone">電話</option>
                      <option value="any">どれでもOK</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="employees">従業員数</label>
                    <select id="employees" name="employees" defaultValue="">
                      <option value="" disabled>選択してください</option>
                      <option value="1-30">1〜30名</option>
                      <option value="31-100">31〜100名</option>
                      <option value="101-300">101〜300名</option>
                      <option value="301+">301名以上</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">ご相談内容・気になっていること</label>
                    <textarea id="message" name="message" rows={3} placeholder="例: 市場調査に毎回4時間以上かかっており、レポートの品質にもばらつきがある…"></textarea>
                  </div>

                  <button type="submit" className="book-call-submit">
                    無料相談を予約する
                  </button>

                  <p className="form-note">
                    送信後、1営業日以内に担当者よりご連絡いたします。
                  </p>
                </form>
              </div>
            </div>
          ) : (
            <div className="book-call-thanks">
              <div className="thanks-icon">&#x2705;</div>
              <h1>ありがとうございます!</h1>
              <p>
                無料相談のご予約を受け付けました。<br />
                1営業日以内に担当者よりご連絡いたします。
              </p>
              <a href="./" className="book-call-back-btn">
                トップページに戻る
              </a>
            </div>
          )}
        </div>
      </main>

      <footer style={{ borderTop: "1px solid #E5E5E5", background: "#fff", padding: "40px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20">
              <path d="M10,75 C10,75 22,25 38,25 C52,25 44,65 56,65 C68,65 60,20 74,20 C90,20 100,75 100,75" stroke="#1A1A2E" strokeWidth="7" fill="none" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.15em", color: "#111" }}>RAKUDA AI</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "32px" }}>
            <div>
              <h3 style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: "12px" }}>サポート</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                <li><a href="mailto:info@rakuda-ai.com" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>info@rakuda-ai.com</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: "12px" }}>リンク</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                <li><a href="./terms" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>利用規約</a></li>
                <li><a href="./privacy" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>プライバシーポリシー</a></li>
                <li><a href="./tokushoho" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>特定商取引法</a></li>
                <li><a href="./security" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>セキュリティ</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #E5E5E5", paddingTop: "24px", textAlign: "center" as const, fontSize: "12px", color: "#9CA3AF" }}>
            &copy; 2026 Rakuda AI Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
