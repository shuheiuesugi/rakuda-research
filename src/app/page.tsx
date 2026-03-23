"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import "./globals.css";

/* ============================================================
   ラクダResearch Landing Page
   research.rakuda-ai.com
   ============================================================ */

// ─── Scroll animation hook ─────────────────────────────────
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(
      ".fade-up, .fade-in, .slide-left, .slide-right, .scale-in"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

// ─── Scroll progress hook ───────────────────────────────────
function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

// ─── Chevron SVG ────────────────────────────────────────────
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7.5L10 12.5L15 7.5" />
    </svg>
  );
}

// ─── Arrow Right SVG ────────────────────────────────────────
function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8H13M9 4L13 8L9 12" />
    </svg>
  );
}

// ─── Check SVG ──────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 5.5L4 7.5L8 3" />
    </svg>
  );
}

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================

export default function RakudaResearchPage() {
  useScrollAnimation();
  const scrollProgress = useScrollProgress();
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  }, []);

  return (
    <>
      {/* ── Scroll Progress ── */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ══════════════════════════════════════════════════════
          1. STICKY HEADER
          ══════════════════════════════════════════════════════ */}
      <header
        className={`site-header ${headerScrolled ? "site-header--scrolled" : ""}`}
      >
        <div className="header-inner">
          <a href="#" className="header-logo">
            <div className="header-logo-icon">R</div>
            <span>ラクダResearch</span>
          </a>

          <nav className="header-nav">
            <a href="#features" className="header-nav-link">
              機能
            </a>
            <a href="#how-it-works" className="header-nav-link">
              使い方
            </a>
            <a href="#pricing" className="header-nav-link">
              料金
            </a>
            <a href="#faq" className="header-nav-link">
              FAQ
            </a>
            <a href="#cta" className="header-cta">
              無料で始める
            </a>
          </nav>

          <button className="mobile-menu-btn" aria-label="メニュー">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════
          2. HERO (DARK GRADIENT + REPORT MOCKUP)
          ══════════════════════════════════════════════════════ */}
      <section className="hero">
        <div className="hero-grid-pattern" />
        <div className="hero-inner">
          {/* Left: text */}
          <div className="hero-text">
            <div className="hero-badge fade-up">
              <span className="hero-badge-dot" />
              AIリサーチプラットフォーム
            </div>

            <h1 className="hero-title fade-up fade-up-delay-1">
              数時間の調査を、
              <br />
              <span className="hero-title-accent">数分で。</span>
            </h1>

            <p className="hero-subtitle fade-up fade-up-delay-2">
              Web情報の自動収集からPDF解析、要約レポート生成まで。
              AIがあなたのリサーチ業務を根本から変えます。
              出典URL付きで、信頼性も担保。
            </p>

            <div className="hero-actions fade-up fade-up-delay-3">
              <a href="#cta" className="btn-primary-hero">
                無料で試す
                <ArrowRight />
              </a>
              <a href="#how-it-works" className="btn-secondary-hero">
                仕組みを見る
              </a>
            </div>

            <div className="hero-stats fade-up fade-up-delay-4">
              <div>
                <div className="hero-stat-value">87%</div>
                <div className="hero-stat-label">調査時間の削減率</div>
              </div>
              <div>
                <div className="hero-stat-value">1,240+</div>
                <div className="hero-stat-label">生成レポート数/月</div>
              </div>
              <div>
                <div className="hero-stat-value">4.8</div>
                <div className="hero-stat-label">ユーザー満足度</div>
              </div>
            </div>
          </div>

          {/* Right: report mockup */}
          <div className="hero-visual fade-in">
            <div className="hero-mockup">
              {/* Floating cards */}
              <div className="mockup-floating-card mockup-floating-card--top-right">
                <div className="floating-card-icon">&#128269;</div>
                <div className="floating-card-text">ソース検出</div>
                <div className="floating-card-value">23件</div>
              </div>
              <div className="mockup-floating-card mockup-floating-card--bottom-left">
                <div className="floating-card-icon">&#9889;</div>
                <div className="floating-card-text">生成時間</div>
                <div className="floating-card-value">2分38秒</div>
              </div>

              {/* Window chrome */}
              <div className="mockup-header">
                <div className="mockup-dot mockup-dot--red" />
                <div className="mockup-dot mockup-dot--yellow" />
                <div className="mockup-dot mockup-dot--green" />
                <span className="mockup-title">
                  research.rakuda-ai.com
                </span>
              </div>

              {/* Report content */}
              <div className="mockup-report-title">
                国内SaaS市場動向レポート 2026
              </div>

              <div className="mockup-report-meta">
                <span className="mockup-tag">市場分析</span>
                <span className="mockup-tag">SaaS</span>
                <span className="mockup-tag">23ソース</span>
              </div>

              <div className="mockup-section">
                <div className="mockup-section-label">Executive Summary</div>
                <div className="mockup-line mockup-line--long" />
                <div className="mockup-line mockup-line--medium" />
                <div className="mockup-line mockup-line--short" />
              </div>

              <div className="mockup-section">
                <div className="mockup-section-label">市場規模</div>
                <div className="mockup-line mockup-line--long mockup-line--accent" />
                <div className="mockup-line mockup-line--medium" />
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  <span className="mockup-citation">[1] 経産省</span>
                  <span className="mockup-citation">[2] IDC Japan</span>
                  <span className="mockup-citation">[3] Gartner</span>
                </div>
              </div>

              <div className="mockup-section">
                <div className="mockup-section-label">競合分析</div>
                <div className="mockup-line mockup-line--medium mockup-line--accent" />
                <div className="mockup-line mockup-line--long" />
                <div className="mockup-line mockup-line--short" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. BEFORE / AFTER COMPARISON
          ══════════════════════════════════════════════════════ */}
      <section className="section section--alt before-after">
        <div className="section-inner">
          <div className="fade-up">
            <div className="section-label">
              <span className="section-label-line" />
              Before &amp; After
            </div>
            <h2 className="section-title">
              リサーチの「当たり前」が変わる
            </h2>
            <p className="section-subtitle">
              従来の手作業リサーチと、ラクダResearchを使ったリサーチの違いを比較。
            </p>
          </div>

          <div className="ba-grid">
            {/* Before card */}
            <div className="ba-card ba-card--before fade-up fade-up-delay-1">
              <div className="ba-label ba-label--before">Before</div>
              <div className="ba-title">手動リサーチの現実</div>
              <ul className="ba-list">
                <li className="ba-list-item">
                  <span className="ba-list-icon ba-list-icon--negative">
                    &#10005;
                  </span>
                  <span>
                    Google検索を繰り返し、タブが30個以上に膨れ上がる
                  </span>
                </li>
                <li className="ba-list-item">
                  <span className="ba-list-icon ba-list-icon--negative">
                    &#10005;
                  </span>
                  <span>
                    PDFを1つずつ開いて該当箇所をCtrl+Fで探す
                  </span>
                </li>
                <li className="ba-list-item">
                  <span className="ba-list-icon ba-list-icon--negative">
                    &#10005;
                  </span>
                  <span>
                    情報のコピー&ペーストで出典がどこか分からなくなる
                  </span>
                </li>
                <li className="ba-list-item">
                  <span className="ba-list-icon ba-list-icon--negative">
                    &#10005;
                  </span>
                  <span>
                    レポートの体裁を整えるだけで更に1時間
                  </span>
                </li>
              </ul>
              <div className="ba-time ba-time--before">
                <span className="ba-time-value" style={{ color: "#EF4444" }}>
                  4~6時間
                </span>
                <span className="ba-time-unit">/ 1レポート</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="ba-arrow fade-up fade-up-delay-2">
              <div className="ba-arrow-icon">&#8594;</div>
            </div>

            {/* After card */}
            <div className="ba-card ba-card--after fade-up fade-up-delay-3">
              <div className="ba-label ba-label--after">After</div>
              <div className="ba-title">ラクダResearchの世界</div>
              <ul className="ba-list">
                <li className="ba-list-item">
                  <span className="ba-list-icon ba-list-icon--positive">
                    &#10003;
                  </span>
                  <span>
                    テーマを入力するだけでWeb上の情報を自動収集
                  </span>
                </li>
                <li className="ba-list-item">
                  <span className="ba-list-icon ba-list-icon--positive">
                    &#10003;
                  </span>
                  <span>
                    PDFをアップロードすれば内容を即座に解析・要約
                  </span>
                </li>
                <li className="ba-list-item">
                  <span className="ba-list-icon ba-list-icon--positive">
                    &#10003;
                  </span>
                  <span>
                    全ての記述に出典URLが紐づき、ワンクリックで確認可能
                  </span>
                </li>
                <li className="ba-list-item">
                  <span className="ba-list-icon ba-list-icon--positive">
                    &#10003;
                  </span>
                  <span>
                    構造化されたレポートが自動生成。そのまま共有できる品質
                  </span>
                </li>
              </ul>
              <div className="ba-time">
                <span className="ba-time-value" style={{ color: "#22C55E" }}>
                  5~10分
                </span>
                <span className="ba-time-unit">/ 1レポート</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. FEATURE CARDS (4 features)
          ══════════════════════════════════════════════════════ */}
      <section id="features" className="section">
        <div className="section-inner">
          <div className="fade-up">
            <div className="section-label">
              <span className="section-label-line" />
              Features
            </div>
            <h2 className="section-title">
              リサーチに必要な機能を、すべて
            </h2>
            <p className="section-subtitle">
              情報収集から分析、レポート作成まで。一気通貫でカバーします。
            </p>
          </div>

          <div className="features-grid">
            {/* Card 1: AI Research */}
            <div className="feature-card fade-up fade-up-delay-1">
              <div className="feature-card-icon">&#128270;</div>
              <h3 className="feature-card-title">AIリサーチ</h3>
              <p className="feature-card-desc">
                調べたいテーマを自然言語で入力するだけ。AIがWeb上の関連情報を自動で巡回・収集し、
                重要度に応じて整理します。手動で検索する必要はもうありません。
              </p>
              <span className="feature-card-detail">
                Web情報の自動収集 <ArrowRight />
              </span>
            </div>

            {/* Card 2: PDF Analysis */}
            <div className="feature-card fade-up fade-up-delay-2">
              <div className="feature-card-icon feature-card-icon--alt">
                &#128196;
              </div>
              <h3 className="feature-card-title">PDF解析</h3>
              <p className="feature-card-desc">
                決算書、論文、契約書、調査レポート。どんなPDFでもアップロードするだけで
                内容を構造的に理解し、必要な情報を抽出します。100ページ超のドキュメントもOK。
              </p>
              <span className="feature-card-detail">
                あらゆる文書を瞬時に理解 <ArrowRight />
              </span>
            </div>

            {/* Card 3: Auto-summarization */}
            <div className="feature-card fade-up fade-up-delay-3">
              <div className="feature-card-icon feature-card-icon--warm">
                &#9997;
              </div>
              <h3 className="feature-card-title">自動要約レポート</h3>
              <p className="feature-card-desc">
                収集した情報を、構造化されたレポートとして自動生成。
                Executive Summary、詳細分析、競合比較など、用途に合わせたフォーマットを選択可能。
              </p>
              <span className="feature-card-detail">
                そのまま使える品質で出力 <ArrowRight />
              </span>
            </div>

            {/* Card 4: Source management */}
            <div className="feature-card fade-up fade-up-delay-4">
              <div className="feature-card-icon feature-card-icon--green">
                &#128279;
              </div>
              <h3 className="feature-card-title">出典管理</h3>
              <p className="feature-card-desc">
                レポート内の全ての記述に出典URLを自動付与。
                「この数字の根拠は?」にワンクリックで答えられます。
                引用元の信頼性スコアも表示。
              </p>
              <span className="feature-card-detail">
                全記述にURLを紐付け <ArrowRight />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. RESEARCH OUTPUT SHOWCASE
          ══════════════════════════════════════════════════════ */}
      <section className="section showcase">
        <div className="section-inner">
          <div className="fade-up">
            <div className="section-label">
              <span className="section-label-line" />
              Output
            </div>
            <h2 className="section-title">
              AIが生成するレポートの実力
            </h2>
            <p className="section-subtitle">
              実際の出力イメージ。構造化された見出し、引用注釈付きの本文、
              出典リスト。そのまま社内共有できるクオリティ。
            </p>
          </div>

          <div className="showcase-layout">
            {/* Left: report mockup */}
            <div className="showcase-report slide-left">
              <div className="showcase-report-badge">Sample Output</div>

              <div className="report-title-bar">
                <div className="report-main-title">
                  生成AIの企業導入動向
                </div>
                <div className="report-date">2026.03.21</div>
              </div>

              <div className="report-section">
                <div className="report-section-heading">
                  <span className="report-section-icon">&#9670;</span>
                  エグゼクティブサマリー
                </div>
                <p className="report-text">
                  国内企業の生成AI導入率は2025年末時点で34.2%に到達し、
                  前年比で約1.8倍の成長を記録した
                  <span className="report-citation-inline">[1]</span>。
                  特にカスタマーサポート領域では導入率が52%を超え、
                  ROIの可視化が進んでいる
                  <span className="report-citation-inline">[2]</span>。
                  一方、製造業での活用はまだ12%に留まり、
                  データ整備が課題として指摘されている
                  <span className="report-citation-inline">[3]</span>。
                </p>
              </div>

              <div className="report-section">
                <div className="report-section-heading">
                  <span className="report-section-icon">&#9670;</span>
                  業界別導入状況
                </div>
                <p className="report-text">
                  金融・保険業界がもっとも積極的で、
                  上位20行のうち17行が何らかの生成AIを本番環境に投入
                  <span className="report-citation-inline">[4]</span>。
                  審査業務の自動化により平均処理時間を43%短縮した事例も報告されている
                  <span className="report-citation-inline">[5]</span>。
                </p>
              </div>

              <div className="report-sources">
                <div className="report-sources-title">参照ソース</div>
                <div className="report-source-item">
                  <span className="report-source-num">1</span>
                  <span className="report-source-url">
                    meti.go.jp/report/ai-adoption-2025
                  </span>
                </div>
                <div className="report-source-item">
                  <span className="report-source-num">2</span>
                  <span className="report-source-url">
                    idc.co.jp/research/genai-cs-report
                  </span>
                </div>
                <div className="report-source-item">
                  <span className="report-source-num">3</span>
                  <span className="report-source-url">
                    nikkei.com/article/DGXZQO2024...
                  </span>
                </div>
                <div className="report-source-item">
                  <span className="report-source-num">4</span>
                  <span className="report-source-url">
                    fsa.go.jp/news/genai-banking-survey
                  </span>
                </div>
                <div className="report-source-item">
                  <span className="report-source-num">5</span>
                  <span className="report-source-url">
                    mckinsey.com/jp/genai-financial
                  </span>
                </div>
              </div>
            </div>

            {/* Right: feature highlights */}
            <div className="showcase-features slide-right">
              <div className="showcase-feature-item">
                <div className="showcase-feature-icon">&#128203;</div>
                <div>
                  <div className="showcase-feature-title">
                    構造化されたセクション
                  </div>
                  <p className="showcase-feature-desc">
                    エグゼクティブサマリー、詳細分析、データテーブル、
                    結論と提言。読み手が理解しやすい構成で自動生成。
                  </p>
                </div>
              </div>

              <div className="showcase-feature-item">
                <div className="showcase-feature-icon">&#128278;</div>
                <div>
                  <div className="showcase-feature-title">
                    インライン引用注釈
                  </div>
                  <p className="showcase-feature-desc">
                    本文中の数値や主張に[1][2]のような注釈を自動付与。
                    クリックすると元ソースに直接アクセス。
                  </p>
                </div>
              </div>

              <div className="showcase-feature-item">
                <div className="showcase-feature-icon">&#128202;</div>
                <div>
                  <div className="showcase-feature-title">
                    データの可視化
                  </div>
                  <p className="showcase-feature-desc">
                    数値データは表やチャートで自動可視化。
                    前年比・CAGR・市場シェアなどの算出も自動で実施。
                  </p>
                </div>
              </div>

              <div className="showcase-feature-item">
                <div className="showcase-feature-icon">&#128230;</div>
                <div>
                  <div className="showcase-feature-title">
                    多様な出力形式
                  </div>
                  <p className="showcase-feature-desc">
                    Markdown、PDF、Word形式でエクスポート可能。
                    社内のSlackやNotionにもワンクリックで共有。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. HOW IT WORKS (3 steps)
          ══════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="section">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div className="fade-up">
            <div
              className="section-label"
              style={{ justifyContent: "center" }}
            >
              <span className="section-label-line" />
              How it Works
            </div>
            <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
              3ステップで完了
            </h2>
            <p
              className="section-subtitle"
              style={{ margin: "0 auto" }}
            >
              複雑な設定は不要。テーマを入力して、待つだけ。
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card fade-up fade-up-delay-1">
              <div className="step-number">1</div>
              <div className="step-icon">&#128221;</div>
              <h3 className="step-title">テーマを入力</h3>
              <p className="step-desc">
                調べたいテーマを自然言語で入力。
                「国内SaaS市場の動向」「競合A社の最新IR分析」など、
                日本語でそのまま。
              </p>
            </div>

            <div className="step-card fade-up fade-up-delay-2">
              <div className="step-number">2</div>
              <div className="step-icon">&#9881;</div>
              <h3 className="step-title">AIが調査・分析</h3>
              <p className="step-desc">
                AIが平均23のソースを巡回し、情報を収集・クロスチェック。
                信頼性の低い情報は自動的にフィルタリング。
              </p>
            </div>

            <div className="step-card fade-up fade-up-delay-3">
              <div className="step-number">3</div>
              <div className="step-icon">&#128200;</div>
              <h3 className="step-title">レポートを受け取る</h3>
              <p className="step-desc">
                構造化されたレポートが完成。出典付きで、
                そのまま上司への報告やクライアントへの共有に使える品質。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. USE CASES
          ══════════════════════════════════════════════════════ */}
      <section className="section usecases">
        <div className="section-inner">
          <div className="fade-up">
            <div className="section-label">
              <span className="section-label-line" />
              Use Cases
            </div>
            <h2 className="section-title">こんな場面で使われています</h2>
            <p className="section-subtitle">
              業種・職種を問わず、情報収集が発生するあらゆる業務で活用されています。
            </p>
          </div>

          <div className="usecases-grid">
            <div className="usecase-card fade-up fade-up-delay-1">
              <div className="usecase-icon">&#128188;</div>
              <h3 className="usecase-title">コンサルティング</h3>
              <p className="usecase-desc">
                市場調査・競合分析・業界動向レポートの作成。
                クライアントへの提案書のファクト収集を大幅に効率化。
              </p>
              <span className="usecase-tag">調査時間を平均72%削減</span>
            </div>

            <div className="usecase-card fade-up fade-up-delay-2">
              <div className="usecase-icon">&#9878;</div>
              <h3 className="usecase-title">法務・リーガル</h3>
              <p className="usecase-desc">
                判例リサーチ、規制動向の把握、契約書レビューの下調べ。
                膨大な法令文書から必要な情報を瞬時にピックアップ。
              </p>
              <span className="usecase-tag">法令PDF解析に対応</span>
            </div>

            <div className="usecase-card fade-up fade-up-delay-3">
              <div className="usecase-icon">&#128176;</div>
              <h3 className="usecase-title">投資・金融</h3>
              <p className="usecase-desc">
                企業分析、DD(デューデリジェンス)資料の事前調査、
                IR資料の横断比較。投資判断に必要な情報を網羅的に収集。
              </p>
              <span className="usecase-tag">IR資料の横断分析</span>
            </div>

            <div className="usecase-card fade-up fade-up-delay-4">
              <div className="usecase-icon">&#127891;</div>
              <h3 className="usecase-title">アカデミック</h3>
              <p className="usecase-desc">
                先行研究のサーベイ、文献レビュー、研究動向の把握。
                論文PDFをアップロードして要旨抽出・関連研究の自動検索。
              </p>
              <span className="usecase-tag">論文サーベイを自動化</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8. PRICING TABLE
          ══════════════════════════════════════════════════════ */}
      <section id="pricing" className="section">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div className="fade-up">
            <div
              className="section-label"
              style={{ justifyContent: "center" }}
            >
              <span className="section-label-line" />
              Pricing
            </div>
            <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
              シンプルな料金体系
            </h2>
            <p
              className="section-subtitle"
              style={{ margin: "0 auto" }}
            >
              まずは無料プランで試してみてください。
              クレジットカード登録不要で即日利用開始。
            </p>
          </div>

          <div className="pricing-grid">
            {/* Free plan */}
            <div className="pricing-card fade-up fade-up-delay-1">
              <div className="pricing-plan-name">Free</div>
              <div className="pricing-plan-desc">
                個人利用や試用に最適
              </div>
              <div className="pricing-price">
                <span className="pricing-currency">&yen;</span>
                <span className="pricing-amount">0</span>
              </div>
              <div className="pricing-billing-note">ずっと無料</div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included">
                    <CheckIcon />
                  </span>
                  月3レポートまで
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included">
                    <CheckIcon />
                  </span>
                  基本的なWeb検索
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included">
                    <CheckIcon />
                  </span>
                  PDF解析(月5ファイル)
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included">
                    <CheckIcon />
                  </span>
                  出典URL付きレポート
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included">
                    <CheckIcon />
                  </span>
                  Markdown出力
                </li>
              </ul>
              <a href="#" className="pricing-btn pricing-btn--outline">
                無料で始める
              </a>
            </div>

            {/* Pro plan - featured */}
            <div className="pricing-card pricing-card--featured fade-up fade-up-delay-2">
              <div className="pricing-popular-badge">人気No.1</div>
              <div className="pricing-plan-name">Pro</div>
              <div className="pricing-plan-desc">
                プロフェッショナル向け
              </div>
              <div className="pricing-price">
                <span className="pricing-currency">&yen;</span>
                <span className="pricing-amount">2,980</span>
                <span className="pricing-period">/月</span>
              </div>
              <div className="pricing-billing-note">
                年払いなら&yen;2,480/月(年間&yen;5,960お得)
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent">
                    <CheckIcon />
                  </span>
                  月30レポートまで
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent">
                    <CheckIcon />
                  </span>
                  高精度AIリサーチ
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent">
                    <CheckIcon />
                  </span>
                  PDF解析(無制限)
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent">
                    <CheckIcon />
                  </span>
                  出典URL + 信頼性スコア
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent">
                    <CheckIcon />
                  </span>
                  PDF / Word / Markdown出力
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent">
                    <CheckIcon />
                  </span>
                  レポートのカスタムテンプレート
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent">
                    <CheckIcon />
                  </span>
                  優先サポート
                </li>
              </ul>
              <a href="#" className="pricing-btn pricing-btn--primary">
                Proプランで始める
              </a>
            </div>

            {/* Business plan */}
            <div className="pricing-card fade-up fade-up-delay-3">
              <div className="pricing-plan-name">Business</div>
              <div className="pricing-plan-desc">
                チーム・法人利用に
              </div>
              <div className="pricing-price">
                <span className="pricing-currency">&yen;</span>
                <span className="pricing-amount">9,800</span>
                <span className="pricing-period">/月</span>
              </div>
              <div className="pricing-billing-note">
                年払いなら&yen;7,980/月(年間&yen;21,840お得)
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included">
                    <CheckIcon />
                  </span>
                  レポート生成無制限
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included">
                    <CheckIcon />
                  </span>
                  最高精度AIリサーチ
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included">
                    <CheckIcon />
                  </span>
                  PDF解析(無制限)
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included">
                    <CheckIcon />
                  </span>
                  Proの全機能
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included">
                    <CheckIcon />
                  </span>
                  チームメンバー5名まで
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included">
                    <CheckIcon />
                  </span>
                  API連携
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included">
                    <CheckIcon />
                  </span>
                  専任カスタマーサクセス
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included">
                    <CheckIcon />
                  </span>
                  SLA保証(稼働率99.9%)
                </li>
              </ul>
              <a href="#" className="pricing-btn pricing-btn--outline">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          9. FAQ ACCORDION
          ══════════════════════════════════════════════════════ */}
      <section id="faq" className="section section--alt">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div className="fade-up">
            <div
              className="section-label"
              style={{ justifyContent: "center" }}
            >
              <span className="section-label-line" />
              FAQ
            </div>
            <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
              よくある質問
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              ご不明な点があればお気軽にお問い合わせください。
            </p>
          </div>

          <div className="faq-list">
            {[
              {
                q: "どんなテーマでもリサーチできますか？",
                a: "はい、テーマに制限はありません。市場分析、競合調査、技術動向、学術研究、規制情報など、Web上に情報が存在するあらゆるテーマに対応しています。日本語・英語の両方のソースから情報を収集します。",
              },
              {
                q: "出典の正確性はどの程度ですか？",
                a: "レポート内の全ての記述に出典URLを付与しており、ワンクリックで原文を確認できます。また、Proプラン以上では情報源の信頼性スコアも表示され、政府機関・学術論文・大手メディアなど、ソースの種別も明示されます。",
              },
              {
                q: "PDFは何ページまで解析できますか？",
                a: "1ファイルあたり最大500ページまで対応しています。日本語・英語のPDFに対応しており、スキャンPDF（画像ベース）もOCR処理により解析可能です。表やグラフの読み取りにも対応しています。",
              },
              {
                q: "セキュリティ対策はどうなっていますか？",
                a: "アップロードされたファイルおよび生成されたレポートは、AES-256で暗号化して保存されます。データは日本国内のサーバーで処理され、第三者への提供は一切行いません。SOC2 Type II認証を取得済みです。",
              },
              {
                q: "無料プランから有料プランへの移行はスムーズですか？",
                a: "はい、ワンクリックでアップグレード可能です。無料プランで作成したレポートやデータはすべて引き継がれます。有料プランも、いつでもダウングレード・解約が可能です。縛り期間はありません。",
              },
              {
                q: "チームでの利用は可能ですか？",
                a: "Businessプランでは最大5名まで1アカウントに含まれます。6名以上の場合はEnterprise向けのカスタムプランをご用意していますので、お問い合わせください。チーム内でのレポート共有・共同編集機能も利用可能です。",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? "faq-item--open" : ""} fade-up`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
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
      </section>

      {/* ══════════════════════════════════════════════════════
          10. DARK CTA
          ══════════════════════════════════════════════════════ */}
      <section id="cta" className="section cta-dark">
        <div className="section-inner fade-up">
          <h2 className="cta-title">
            リサーチの時間を、意思決定の時間に。
          </h2>
          <p className="cta-subtitle">
            無料プランで今すぐ体験。クレジットカードの登録は不要です。
            月3レポートまで、ずっと無料でご利用いただけます。
          </p>
          <div className="cta-actions">
            <a href="#" className="btn-primary-hero">
              無料アカウントを作成
              <ArrowRight />
            </a>
            <a href="#" className="btn-secondary-hero">
              デモを予約する
            </a>
          </div>
          <p className="cta-note">
            登録は30秒で完了 &middot; クレジットカード不要 &middot;
            いつでも解約可能
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          11. FOOTER
          ══════════════════════════════════════════════════════ */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">R</div>
                <span>ラクダResearch</span>
              </div>
              <p className="footer-desc">
                AIの力で、リサーチ業務を根本から変える。
                数時間の調査を、数分で。
              </p>
            </div>

            <div>
              <div className="footer-column-title">プロダクト</div>
              <ul className="footer-links">
                <li>
                  <a href="#features" className="footer-link">
                    機能一覧
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="footer-link">
                    料金プラン
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    アップデート
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="footer-column-title">サポート</div>
              <ul className="footer-links">
                <li>
                  <a href="#faq" className="footer-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    ドキュメント
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    お問い合わせ
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    ステータス
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="footer-column-title">会社情報</div>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    運営会社
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    採用情報
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    ブログ
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    お知らせ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>&copy; 2026 ラクダResearch. All rights reserved.</span>
            <div className="footer-legal-links">
              <a href="#" className="footer-legal-link">
                利用規約
              </a>
              <a href="#" className="footer-legal-link">
                プライバシーポリシー
              </a>
              <a href="#" className="footer-legal-link">
                特定商取引法
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
