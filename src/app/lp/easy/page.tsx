"use client";

import { useEffect, useState, useCallback } from "react";

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    const elements = document.querySelectorAll(".fade-up, .fade-in, .scale-in");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8H13M9 4L13 8L9 12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 5.5L4 7.5L8 3" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 7.5L10 12.5L15 7.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export default function EasyLpPage() {
  useScrollAnimation();
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setHeaderScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = useCallback((i: number) => {
    setOpenFaq((prev) => (prev === i ? null : i));
  }, []);

  return (
    <>
      {/* ── HEADER ── */}
      <header className={`site-header ${headerScrolled ? "site-header--scrolled" : ""}`}>
        <div className="header-inner">
          <a href="../../" className="header-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 40" className="header-logo-svg" style={{ height: "20px", width: "auto" }}>
              <path d="M4,32 C4,32 12,6 24,6 C34,6 28,28 36,28 C44,28 38,4 48,4 C60,4 68,32 68,32" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
              <text x="80" y="28" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="22" fontWeight="300" fill="currentColor" letterSpacing="3">RAKUDAリサーチ</text>
            </svg>
          </a>
          <nav className="header-nav">
            <a href="#how" className="header-nav-link">使い方</a>
            <a href="#features" className="header-nav-link">できること</a>
            <a href="#pricing" className="header-nav-link">料金</a>
            <a href="#faq" className="header-nav-link">FAQ</a>
            <a href="../../signup" className="header-cta">無料で始める <ArrowRight size={14} /></a>
          </nav>
          <button className="mobile-menu-btn" aria-label="メニューを開く"><span /><span /><span /></button>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero" style={{ minHeight: "auto", padding: "140px 24px 80px" }}>
        <div className="hero-noise" />
        <div className="hero-grid-pattern" />
        <div className="hero-glow hero-glow--1" />
        <div className="hero-inner" style={{ gridTemplateColumns: "1fr", textAlign: "center", maxWidth: 720, gap: 0 }}>
          <div className="hero-text" style={{ maxWidth: "none" }}>
            <div className="hero-badge fade-up" style={{ margin: "0 auto 24px" }}>
              <span className="hero-badge-dot" />
              はじめての方へ
            </div>
            <h1 className="hero-title fade-up fade-up-delay-1" style={{ textAlign: "center" }}>
              検索するだけで、<br />
              <span className="hero-title-accent">レポートが完成。</span>
            </h1>
            <p className="hero-subtitle fade-up fade-up-delay-2" style={{ maxWidth: 500, margin: "0 auto 32px", textAlign: "center" }}>
              調べたいことを入力するだけ。
              むずかしい設定はいりません。
              AIが関連情報を集めて、出典つきのレポートにまとめます。
            </p>
            <div className="hero-actions fade-up fade-up-delay-3" style={{ justifyContent: "center" }}>
              <a href="../../signup" className="btn-primary-hero btn-primary-hero--large">
                無料で試してみる <ArrowRight />
              </a>
              <a href="../../book-call" className="btn-secondary-hero">
                相談してみる
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="section section--time-comparison">
        <div className="section-inner-wide">
          <div className="fade-up" style={{ textAlign: "center" }}>
            <p className="section-eyebrow">Before &amp; After</p>
            <h2 className="section-title section-title--large">
              いままでの調べ方と、これからの調べ方
            </h2>
          </div>

          <div className="time-comparison" style={{ marginTop: 48 }}>
            {/* Before */}
            <div className="time-card time-card--before fade-up fade-up-delay-1">
              <div className="time-card-header">
                <span className="time-card-label">いままで</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="time-step">
                  <div className="time-step-bar time-step-bar--long" />
                  <span>Googleで何十回も検索</span>
                </div>
                <div className="time-step">
                  <div className="time-step-bar time-step-bar--medium" />
                  <span>PDFを1つずつ開いて読む</span>
                </div>
                <div className="time-step">
                  <div className="time-step-bar time-step-bar--medium" />
                  <span>情報をコピペしてまとめる</span>
                </div>
                <div className="time-step">
                  <div className="time-step-bar time-step-bar--short" />
                  <span>出典をひとつずつ記録</span>
                </div>
              </div>
              <div className="time-card-pain" style={{ marginTop: 20 }}>
                タブが30個以上、どこに何があったか忘れる、<br />
                コピペミスが怖い、半日つぶれる...
              </div>
            </div>

            {/* Arrow */}
            <div className="time-arrow fade-up fade-up-delay-2">
              <div className="time-arrow-line" />
              <div className="time-arrow-icon">
                <ArrowRight size={20} />
              </div>
              <div className="time-arrow-text">かんたん</div>
            </div>

            {/* After */}
            <div className="time-card time-card--after fade-up fade-up-delay-3">
              <div className="time-card-header">
                <span className="time-card-label">RAKUDAリサーチ</span>
                <span className="time-card-badge">かんたん</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="time-step time-step--done">
                  <div className="time-step-bar time-step-bar--instant" />
                  <span>調べたいことを入力</span>
                  <span className="time-step-duration">10秒</span>
                </div>
                <div className="time-step time-step--done">
                  <div className="time-step-bar time-step-bar--instant" />
                  <span>AIが自動で情報収集</span>
                  <span className="time-step-duration">5分</span>
                </div>
                <div className="time-step time-step--done">
                  <div className="time-step-bar time-step-bar--instant" />
                  <span>レポートをダウンロード</span>
                  <span className="time-step-duration">すぐ</span>
                </div>
              </div>
              <div className="time-card-result" style={{ marginTop: 20 }}>
                出典のURLも自動でついてくる。<br />
                そのまま報告に使えます。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES (やさしく) ── */}
      <section id="features" className="section section--features">
        <div className="section-inner">
          <div className="fade-up" style={{ textAlign: "center" }}>
            <p className="section-eyebrow">Features</p>
            <h2 className="section-title">RAKUDAリサーチでできること</h2>
            <p className="section-subtitle section-subtitle--center">
              むずかしい操作はありません。3つのことが、とてもかんたんにできます。
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginTop: 48,
          }}>
            <div className="feature-card fade-up fade-up-delay-1" style={{ textAlign: "center" }}>
              <div className="feature-card-icon feature-card-icon--blue" style={{ margin: "0 auto 16px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              </div>
              <h3 className="feature-card-title">テーマを入れるだけ</h3>
              <p className="feature-card-desc">
                「国内のSaaS市場について知りたい」「A社の競合を調べたい」。
                ふだん使うことばで大丈夫です。キーワードに悩む必要はありません。
              </p>
            </div>

            <div className="feature-card fade-up fade-up-delay-2" style={{ textAlign: "center" }}>
              <div className="feature-card-icon feature-card-icon--purple" style={{ margin: "0 auto 16px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <h3 className="feature-card-title">PDFを放り込むだけ</h3>
              <p className="feature-card-desc">
                決算書や論文のPDFをアップロードするだけで、中身を読み取って要約。
                何十ページもある資料も、ポイントだけ教えてくれます。
              </p>
            </div>

            <div className="feature-card fade-up fade-up-delay-3" style={{ textAlign: "center" }}>
              <div className="feature-card-icon feature-card-icon--green" style={{ margin: "0 auto 16px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3 className="feature-card-title">出典URLが自動でつく</h3>
              <p className="feature-card-desc">
                「この情報のもとは？」と聞かれても安心。
                レポートの全ての数字やデータに、情報源のURLが自動でつきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="section section--how">
        <div className="section-inner">
          <div className="fade-up how-header">
            <p className="section-eyebrow">How It Works</p>
            <h2 className="section-title">
              3ステップで、レポート完成
            </h2>
          </div>

          <div className="steps-timeline">
            <div className="steps-line" />

            <div className="step-item fade-up fade-up-delay-1">
              <div className="step-number-wrap">
                <div className="step-number">1</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">調べたいテーマを入力する</h3>
                <p className="step-desc">
                  検索窓に、調べたいことをそのまま入力します。
                  「Uber Eats vs 出前館の比較」「AIチャットボットの市場動向」など、
                  普段のGoogle検索と同じ感覚でOKです。
                </p>
              </div>
            </div>

            <div className="step-item fade-up fade-up-delay-2">
              <div className="step-number-wrap">
                <div className="step-number">2</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">少し待つ（平均7分）</h3>
                <p className="step-desc">
                  AIがインターネット上の情報を自動で集めて、読んで、整理します。
                  その間はコーヒーを淹れたり、他の作業をしていて大丈夫です。
                </p>
              </div>
            </div>

            <div className="step-item fade-up fade-up-delay-3">
              <div className="step-number-wrap">
                <div className="step-number">3</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">レポートをダウンロードする</h3>
                <p className="step-desc">
                  情報がきれいにまとまったレポートが完成。
                  PDFやWordでダウンロードできるので、
                  そのまま上司やクライアントに送れます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="section section--pricing" style={{ background: "var(--color-bg-alt)" }}>
        <div className="section-inner">
          <div className="fade-up pricing-header">
            <p className="section-eyebrow">Pricing</p>
            <h2 className="section-title">ずっと無料で使えるプランがあります</h2>
            <p className="section-subtitle section-subtitle--center">
              クレジットカードは必要ありません。まず3回使ってみてください。
            </p>
          </div>

          <div className="pricing-grid" style={{ marginTop: 48 }}>
            <div className="pricing-card fade-up fade-up-delay-1">
              <div className="pricing-plan-name">Free</div>
              <div className="pricing-plan-desc">まずはお試し</div>
              <div className="pricing-price">
                <span className="pricing-amount">&yen;0</span>
              </div>
              <div className="pricing-billing-note">ずっと無料</div>
              <ul className="pricing-features">
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> 月に3回までレポート作成</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> ネットの情報を自動収集</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> PDFの要約（月5つまで）</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> 出典URLつきレポート</li>
              </ul>
              <a href="../../signup?plan=free" className="pricing-btn pricing-btn--outline">無料で始める</a>
            </div>

            <div className="pricing-card pricing-card--featured fade-up fade-up-delay-2">
              <div className="pricing-popular-badge">いちばん人気</div>
              <div className="pricing-plan-name">Pro</div>
              <div className="pricing-plan-desc">もっと使いたい方</div>
              <div className="pricing-price">
                <span className="pricing-amount">&yen;2,980</span>
                <span className="pricing-period">/月</span>
              </div>
              <div className="pricing-billing-note">年払いなら月2,480円</div>
              <ul className="pricing-features">
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> 月30回レポート作成</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> より正確なAIリサーチ</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> PDFの要約（使い放題）</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> 情報源の信頼度スコア表示</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> PDF・Word・Markdownで出力</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> レポートのテンプレート</li>
              </ul>
              <a href="../../signup?plan=pro" className="pricing-btn pricing-btn--primary">Proで始める</a>
            </div>

            <div className="pricing-card fade-up fade-up-delay-3">
              <div className="pricing-plan-name">Enterprise</div>
              <div className="pricing-plan-desc">チームで使いたい方</div>
              <div className="pricing-price">
                <span className="pricing-amount">&yen;9,800</span>
                <span className="pricing-period">/月</span>
              </div>
              <div className="pricing-billing-note">年払いなら月7,980円</div>
              <ul className="pricing-features">
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> レポート作成（使い放題）</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> 最も正確なAIリサーチ</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> Proの全ての機能</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> 5人まで使える</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> 専任サポートつき</li>
              </ul>
              <a href="../../book-call" className="pricing-btn pricing-btn--outline">相談する</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section section--faq">
        <div className="section-inner">
          <div className="faq-layout">
            <div className="faq-left fade-up">
              <p className="section-eyebrow">FAQ</p>
              <h2 className="section-title">よくある質問</h2>
              <p className="section-subtitle">
                はじめての方からよくいただく質問をまとめました。
              </p>
            </div>
            <div className="faq-list">
              {[
                {
                  q: "パソコンが苦手でも使えますか？",
                  a: "はい。検索窓に調べたいことを入力するだけなので、Googleで検索できる方なら問題なく使えます。特別なソフトをインストールする必要もありません。ブラウザ（Chrome、Safari等）からそのまま利用できます。",
                },
                {
                  q: "レポートの内容は正しいですか？",
                  a: "レポートに書かれている全ての情報には、もとになったWebページのURLがついています。気になった内容はそのURLをクリックすれば、もとの情報をすぐ確認できます。AIが嘘を書いていないか、自分の目でチェックできる仕組みです。",
                },
                {
                  q: "クレジットカードの登録は必要ですか？",
                  a: "無料プランではクレジットカードの登録は一切不要です。メールアドレスまたはGoogleアカウントだけで始められます。有料プランに変更するときだけカード情報をお願いしますが、無料プランのままならずっと無料です。",
                },
                {
                  q: "日本語で使えますか？",
                  a: "もちろんです。入力も出力も全て日本語に対応しています。日本語のWebサイトはもちろん、英語の情報源からも集めた情報を日本語でまとめてくれます。",
                },
                {
                  q: "途中でやめたくなったらどうすればいいですか？",
                  a: "いつでもやめられます。解約の手続きもボタン1つで完了します。しつこい引き止めや違約金はありません。無料プランならそもそも「解約」の手続きすら不要で、使わなくなったらそのまま放置してOKです。",
                },
              ].map((item, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? "faq-item--open" : ""}`}>
                  <button className="faq-question" onClick={() => toggleFaq(i)} aria-expanded={openFaq === i}>
                    <span>{item.q}</span>
                    <ChevronDown className="faq-chevron" />
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section">
        <div className="cta-bg-pattern" />
        <div className="section-inner fade-up cta-inner">
          <h2 className="cta-title">まずは1回、試してみてください。</h2>
          <p className="cta-subtitle">
            登録は30秒。カード不要。
            調べたいテーマを入れるだけで、レポートが届きます。
          </p>
          <div className="cta-actions">
            <a href="../../signup" className="btn-primary-hero btn-primary-hero--large">
              無料で始める <ArrowRight />
            </a>
            <a href="../../book-call" className="btn-secondary-hero">相談してみる</a>
          </div>
          <div className="cta-reassurance">
            <span><ClockIcon /> 30秒で登録完了</span>
            <span><ShieldIcon /> クレカ不要</span>
            <span><CheckIcon /> いつでもやめられる</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
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
                <li><a href="../../terms" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>利用規約</a></li>
                <li><a href="../../privacy" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>プライバシーポリシー</a></li>
                <li><a href="../../tokushoho" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>特定商取引法</a></li>
                <li><a href="../../security" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>セキュリティ</a></li>
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
