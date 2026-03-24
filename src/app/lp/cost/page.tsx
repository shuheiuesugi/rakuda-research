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

export default function CostLpPage() {
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
            <a href="#roi" className="header-nav-link">ROI</a>
            <a href="#features" className="header-nav-link">機能</a>
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
              コスト削減特集
            </div>
            <h1 className="hero-title fade-up fade-up-delay-1" style={{ textAlign: "center" }}>
              外注リサーチ費を<br />
              <span className="hero-title-accent">90%削減する。</span>
            </h1>
            <p className="hero-subtitle fade-up fade-up-delay-2" style={{ maxWidth: 520, margin: "0 auto 32px", textAlign: "center" }}>
              1案件30万円の外注リサーチ、月4本で120万円。
              RAKUDAリサーチなら月額2,980円で30レポート。
              1レポートあたり約100円で完結します。
            </p>
            <div className="hero-actions fade-up fade-up-delay-3" style={{ justifyContent: "center" }}>
              <a href="../../signup" className="btn-primary-hero btn-primary-hero--large">
                無料で試してみる <ArrowRight />
              </a>
              <a href="../../book-call" className="btn-secondary-hero">
                ROIシミュレーション相談
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats-bar fade-up fade-up-delay-4">
          <div className="hero-stat">
            <div className="hero-stat-value">90%</div>
            <div className="hero-stat-label">外注費の削減率</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <div className="hero-stat-value">&lt;100円</div>
            <div className="hero-stat-label">1レポートあたりの単価</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <div className="hero-stat-value">7分</div>
            <div className="hero-stat-label">平均レポート生成時間</div>
          </div>
        </div>
      </section>

      {/* ── ROI CALCULATOR ── */}
      <section id="roi" className="section section--time-comparison">
        <div className="section-inner-wide">
          <div className="fade-up" style={{ textAlign: "center" }}>
            <p className="section-eyebrow">ROI Comparison</p>
            <h2 className="section-title section-title--large">
              リサーチにいくら払っていますか？
            </h2>
            <p className="section-subtitle section-subtitle--center">
              外注・人件費・ツール費。トータルコストで比較すると、差は歴然です。
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginTop: 48,
          }} className="fade-up fade-up-delay-1">
            {/* 外注 */}
            <div className="pricing-card">
              <div className="pricing-plan-name" style={{ color: "#DC2626" }}>外注リサーチ</div>
              <div className="pricing-plan-desc">コンサル・リサーチ会社</div>
              <div className="pricing-price">
                <span className="pricing-amount" style={{ color: "#DC2626" }}>&yen;300,000</span>
                <span className="pricing-period">/件</span>
              </div>
              <div className="pricing-billing-note">月4件で120万円/月</div>
              <ul className="pricing-features">
                <li className="pricing-feature-item"><span style={{ color: "#DC2626", fontSize: "0.8rem", marginTop: 2 }}>&#x2717;</span> 納期2〜4週間</li>
                <li className="pricing-feature-item"><span style={{ color: "#DC2626", fontSize: "0.8rem", marginTop: 2 }}>&#x2717;</span> 追加リサーチは別見積り</li>
                <li className="pricing-feature-item"><span style={{ color: "#DC2626", fontSize: "0.8rem", marginTop: 2 }}>&#x2717;</span> コミュニケーションコスト大</li>
                <li className="pricing-feature-item"><span style={{ color: "#DC2626", fontSize: "0.8rem", marginTop: 2 }}>&#x2717;</span> フォーマット統一が困難</li>
              </ul>
            </div>

            {/* 人件費 */}
            <div className="pricing-card">
              <div className="pricing-plan-name" style={{ color: "#F59E0B" }}>社内リサーチャー</div>
              <div className="pricing-plan-desc">人件費換算</div>
              <div className="pricing-price">
                <span className="pricing-amount" style={{ color: "#F59E0B" }}>&yen;25,000</span>
                <span className="pricing-period">/件</span>
              </div>
              <div className="pricing-billing-note">時給5,000円 x 5時間 = 25,000円</div>
              <ul className="pricing-features">
                <li className="pricing-feature-item"><span style={{ color: "#F59E0B", fontSize: "0.8rem", marginTop: 2 }}>&#x25CB;</span> 納期半日〜1日</li>
                <li className="pricing-feature-item"><span style={{ color: "#F59E0B", fontSize: "0.8rem", marginTop: 2 }}>&#x25CB;</span> 品質が担当者依存</li>
                <li className="pricing-feature-item"><span style={{ color: "#F59E0B", fontSize: "0.8rem", marginTop: 2 }}>&#x25CB;</span> 出典の網羅性にばらつき</li>
                <li className="pricing-feature-item"><span style={{ color: "#F59E0B", fontSize: "0.8rem", marginTop: 2 }}>&#x25CB;</span> スケールしない</li>
              </ul>
            </div>

            {/* ラクダ */}
            <div className="pricing-card pricing-card--featured">
              <div className="pricing-popular-badge">コスト最適</div>
              <div className="pricing-plan-name">RAKUDAリサーチ</div>
              <div className="pricing-plan-desc">AIリサーチツール</div>
              <div className="pricing-price">
                <span className="pricing-amount">&sim;100円</span>
                <span className="pricing-period">/件</span>
              </div>
              <div className="pricing-billing-note">Pro月額2,980円 &divide; 30レポート</div>
              <ul className="pricing-features">
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> 7分で完成</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> 24時間365日稼働</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> 出典URL完全自動付与</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> フォーマット統一</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> スケール自由</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="section section--features">
        <div className="section-inner">
          <div className="fade-up" style={{ textAlign: "center" }}>
            <p className="section-eyebrow">Why Cost-Effective</p>
            <h2 className="section-title">
              コストが下がって、品質は上がる理由
            </h2>
          </div>

          <div className="features-grid" style={{ marginTop: 48 }}>
            <div className="feature-card fade-up fade-up-delay-1">
              <div className="feature-card-icon feature-card-icon--blue">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <h3 className="feature-card-title">人件費4時間 → 7分に圧縮</h3>
              <p className="feature-card-desc">
                Google検索・PDF読み込み・情報整理・レポート作成。
                全工程をAIが自動化。人件費を98%削減します。
              </p>
            </div>
            <div className="feature-card fade-up fade-up-delay-2">
              <div className="feature-card-icon feature-card-icon--green">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3 className="feature-card-title">出典付きで社内レビュー不要</h3>
              <p className="feature-card-desc">
                全ての数値・主張に出典URLが自動付与。
                上司の「この数字のソースは？」に即答。
                レビュー工数もゼロに近づきます。
              </p>
            </div>
            <div className="feature-card fade-up fade-up-delay-3">
              <div className="feature-card-icon feature-card-icon--purple">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
              </div>
              <h3 className="feature-card-title">固定費モデルで予算管理が楽</h3>
              <p className="feature-card-desc">
                外注は案件ごとに見積り・発注・検収。
                RAKUDAリサーチは月額定額制。何件リサーチしても追加費用なし。
                経理処理もシンプル。
              </p>
            </div>
            <div className="feature-card fade-up fade-up-delay-4">
              <div className="feature-card-icon feature-card-icon--amber">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
              </div>
              <h3 className="feature-card-title">スケール時の限界費用ゼロ</h3>
              <p className="feature-card-desc">
                リサーチ需要が2倍になっても、人を雇う必要なし。
                Business プランなら無制限レポート。
                組織拡大フェーズに最適です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="section section--pricing" style={{ background: "var(--color-bg-alt)" }}>
        <div className="section-inner">
          <div className="fade-up pricing-header">
            <p className="section-eyebrow">Pricing</p>
            <h2 className="section-title">Proでも月2,980円</h2>
            <p className="section-subtitle section-subtitle--center">
              外注1件分の予算で、10ヶ月使えます。
            </p>
          </div>

          <div className="pricing-grid" style={{ marginTop: 48 }}>
            <div className="pricing-card fade-up fade-up-delay-1">
              <div className="pricing-plan-name">Free</div>
              <div className="pricing-plan-desc">まず試してみたい方</div>
              <div className="pricing-price">
                <span className="pricing-amount">&yen;0</span>
              </div>
              <div className="pricing-billing-note">永久無料・クレカ不要</div>
              <ul className="pricing-features">
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> 月3レポート</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> Web検索リサーチ</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> PDF解析（月5ファイル）</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> 出典URL付きレポート</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> Markdown出力</li>
              </ul>
              <a href="../../signup" className="pricing-btn pricing-btn--outline">無料で始める</a>
            </div>

            <div className="pricing-card pricing-card--featured fade-up fade-up-delay-2">
              <div className="pricing-popular-badge">最も選ばれています</div>
              <div className="pricing-plan-name">Pro</div>
              <div className="pricing-plan-desc">個人プロフェッショナル向け</div>
              <div className="pricing-price">
                <span className="pricing-amount">&yen;2,980</span>
                <span className="pricing-period">/月</span>
              </div>
              <div className="pricing-billing-note">年払いで&yen;2,480/月</div>
              <ul className="pricing-features">
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> 月30レポート</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> 高精度AIリサーチ</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> PDF解析（無制限）</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> 出典URL + 信頼度スコア</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> PDF / Word / Markdown出力</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> レポートテンプレート</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--accent"><CheckIcon /></span> 優先サポート</li>
              </ul>
              <a href="../../signup" className="pricing-btn pricing-btn--primary">Proで始める</a>
            </div>

            <div className="pricing-card fade-up fade-up-delay-3">
              <div className="pricing-plan-name">Business</div>
              <div className="pricing-plan-desc">チーム・法人向け</div>
              <div className="pricing-price">
                <span className="pricing-amount">&yen;9,800</span>
                <span className="pricing-period">/月</span>
              </div>
              <div className="pricing-billing-note">年払いで&yen;7,980/月</div>
              <ul className="pricing-features">
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> レポート無制限</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> 最高精度AIリサーチ</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> Proの全機能</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> メンバー5名まで含む</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> API連携</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> 専任カスタマーサクセス</li>
                <li className="pricing-feature-item"><span className="pricing-check pricing-check--included"><CheckIcon /></span> SLA保証（99.9%）</li>
              </ul>
              <a href="../../book-call" className="pricing-btn pricing-btn--outline">お問い合わせ</a>
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
              <h2 className="section-title">コストに関するよくある質問</h2>
            </div>
            <div className="faq-list">
              {[
                {
                  q: "外注リサーチと品質は比べられますか？",
                  a: "用途によります。市場概観・競合マッピング・定量データ収集では、RAKUDAリサーチの方が網羅性・速度・コストの全てで優位です。一方、業界インサイダーへのヒアリングや、非公開情報へのアクセスが必要なリサーチは外注が適しています。まずラクダで土台を作り、足りない部分だけ外注する「ハイブリッド方式」が最もコスト効率が高いです。",
                },
                {
                  q: "追加費用は発生しますか？",
                  a: "プラン内のレポート数・機能は定額に含まれます。超過レポートの自動課金はありません。上限に達した場合はプランアップグレードをご案内しますが、強制的な課金は一切ありません。",
                },
                {
                  q: "ROIの計算方法を教えてください",
                  a: "典型的な計算: 外注リサーチ月4件×30万円 = 120万円/月。RAKUDA Pro = 2,980円/月。差額117万円/月、年間1,404万円の削減。社内リサーチャーの人件費換算でも、月4件×25,000円=10万円 → 2,980円で97%削減。無料相談でお客様の実データに基づいたROI試算も可能です。",
                },
                {
                  q: "無料プランだけで十分ですか？",
                  a: "月3レポートまでなら永久無料です。スポット利用には十分ですが、週1本以上のペースならProプラン（月30レポート）の方がコスパが高くなります。まず無料プランで品質を確認し、頻度が増えたらアップグレードする流れがおすすめです。",
                },
                {
                  q: "チームで使う場合のコストメリットは？",
                  a: "Businessプラン（月9,800円）は5名まで含み、レポート無制限。5人チームなら1人あたり月1,960円。外注リサーチを5人分削減すると、年間で数千万円規模のコスト削減になるケースが多いです。",
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
          <h2 className="cta-title">外注リサーチ費、年間1,400万円削減。</h2>
          <p className="cta-subtitle">
            まずは無料プランで品質を確認。
            合わなければそのまま放置でOK。
          </p>
          <div className="cta-actions">
            <a href="../../signup" className="btn-primary-hero btn-primary-hero--large">
              無料アカウントを作成 <ArrowRight />
            </a>
            <a href="../../book-call" className="btn-secondary-hero">ROIシミュレーション相談</a>
          </div>
          <div className="cta-reassurance">
            <span><ClockIcon /> 10秒で登録完了</span>
            <span><ShieldIcon /> クレジットカード不要</span>
            <span><CheckIcon /> いつでも解約可能</span>
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
