"use client";

import { useState } from "react";

export default function BookCall() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <header className="sub-header">
        <div className="sub-header-inner">
          <a href="./" className="header-logo">
            <div className="header-logo-icon">R</div>
            <div>
              <span className="header-logo-text" style={{ color: "var(--color-text)" }}>
                ラクダResearch
              </span>
              <span className="header-logo-sub">AIリサーチツール</span>
            </div>
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
                      <strong>月額3,980円〜で導入可能</strong>
                      <span>Starterプランは永年無料。まず3レポートお試し。</span>
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
    </>
  );
}
