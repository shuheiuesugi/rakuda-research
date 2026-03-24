"use client";

import { useEffect, useState, useRef, useCallback } from "react";

/* ============================================================
   Rakuda Research Landing Page — Redesigned
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
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    const elements = document.querySelectorAll(
      ".fade-up, .fade-in, .slide-left, .slide-right, .scale-in, .stagger-item"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

// ─── Scroll progress hook ───────────────────────────────────
function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

// ─── Counter animation hook ─────────────────────────────────
function useCountUp(
  target: number,
  duration: number = 2000,
  startOnView: boolean = true
) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, startOnView]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { count, ref };
}

// ─── SVG Icons ──────────────────────────────────────────────
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

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
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

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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

  // Counter animations for hero stats
  const stat1 = useCountUp(87, 2200);
  const stat2 = useCountUp(1240, 2600);
  const stat3 = useCountUp(48, 1800);

  // Timer animation for Before/After
  const [timerBefore, setTimerBefore] = useState(0);
  const [timerAfter, setTimerAfter] = useState(0);
  const timerRef = useRef<HTMLDivElement>(null);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Timer animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !timerStarted) {
          setTimerStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (timerRef.current) observer.observe(timerRef.current);
    return () => observer.disconnect();
  }, [timerStarted]);

  useEffect(() => {
    if (!timerStarted) return;
    const duration = 3000;
    const beforeTarget = 276; // 4:36 in minutes (276 min)
    const afterTarget = 7; // 7 min
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setTimerBefore(Math.round(eased * beforeTarget));
      setTimerAfter(Math.round(eased * afterTarget));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [timerStarted]);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  }, []);

  const formatTime = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    if (h > 0) return `${h}時間${m > 0 ? `${m}分` : ""}`;
    return `${m}分`;
  };

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
          <a href="./" className="header-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 40" className="header-logo-svg" style={{ height: "20px", width: "auto" }}>
              <path d="M4,32 C4,32 12,6 24,6 C34,6 28,28 36,28 C44,28 38,4 48,4 C60,4 68,32 68,32" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
              <text x="80" y="28" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="22" fontWeight="300" fill="currentColor" letterSpacing="3">RAKUDAリサーチ</text>
            </svg>
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
            <a href="./signup" className="header-cta">
              無料で始める
              <ArrowRight size={14} />
            </a>
          </nav>

          <button className="mobile-menu-btn" aria-label="メニューを開く">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════
          2. HERO
          ══════════════════════════════════════════════════════ */}
      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-grid-pattern" />
        <div className="hero-glow hero-glow--1" />
        <div className="hero-glow hero-glow--2" />

        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-badge fade-up">
              <span className="hero-badge-dot" />
              AIリサーチプラットフォーム
            </div>

            <h1 className="hero-title fade-up fade-up-delay-1">
              調査に費やす
              <span className="hero-title-hours">4時間</span>を、
              <br />
              <span className="hero-title-accent">7分に圧縮する。</span>
            </h1>

            <p className="hero-subtitle fade-up fade-up-delay-2">
              テーマを入力するだけ。Web上の関連情報を自動収集し、
              出典URL付きのレポートを生成。
              コンサル・投資・法務のプロが日常的に使うリサーチツール。
            </p>

            <div className="hero-actions fade-up fade-up-delay-3">
              <a href="./signup" className="btn-primary-hero">
                無料で試してみる
                <ArrowRight />
              </a>
              <a href="#how-it-works" className="btn-secondary-hero">
                <span className="btn-play-icon">&#9654;</span>
                2分でわかるデモ
              </a>
            </div>

            <div className="hero-trust fade-up fade-up-delay-4">
              <span className="hero-trust-label">導入企業</span>
              <div className="hero-trust-logos">
                <span className="hero-trust-logo">McKinsey</span>
                <span className="hero-trust-logo">Deloitte</span>
                <span className="hero-trust-logo">Goldman Sachs</span>
                <span className="hero-trust-logo">NRI</span>
              </div>
            </div>
          </div>

          {/* Right: report mockup */}
          <div className="hero-visual fade-in">
            <div className="hero-mockup">
              {/* Floating cards */}
              <div className="mockup-floating-card mockup-floating-card--top-right">
                <div className="floating-card-row">
                  <SearchIcon />
                  <div>
                    <div className="floating-card-text">ソース検出</div>
                    <div className="floating-card-value">23件を横断分析</div>
                  </div>
                </div>
              </div>
              <div className="mockup-floating-card mockup-floating-card--bottom-left">
                <div className="floating-card-row">
                  <ZapIcon />
                  <div>
                    <div className="floating-card-text">生成完了</div>
                    <div className="floating-card-value">2分38秒</div>
                  </div>
                </div>
                <div className="floating-card-progress">
                  <div className="floating-card-progress-bar" />
                </div>
              </div>

              {/* Window chrome */}
              <div className="mockup-header">
                <div className="mockup-dots">
                  <div className="mockup-dot mockup-dot--red" />
                  <div className="mockup-dot mockup-dot--yellow" />
                  <div className="mockup-dot mockup-dot--green" />
                </div>
                <span className="mockup-url">
                  research.rakuda-ai.com/report/saas-market-2026
                </span>
              </div>

              {/* Report content - more realistic */}
              <div className="mockup-body">
                <div className="mockup-report-title">
                  国内SaaS市場動向レポート 2026
                </div>

                <div className="mockup-report-meta">
                  <span className="mockup-tag mockup-tag--primary">市場分析</span>
                  <span className="mockup-tag">SaaS</span>
                  <span className="mockup-tag">23ソース</span>
                  <span className="mockup-tag mockup-tag--trust">
                    <ShieldIcon /> 信頼度 92%
                  </span>
                </div>

                <div className="mockup-section">
                  <div className="mockup-section-label">Executive Summary</div>
                  <div className="mockup-text-block">
                    <div className="mockup-real-text">国内SaaS市場規模は2025年に約1.8兆円に到達し...</div>
                    <div className="mockup-real-text mockup-real-text--faded">前年比23.4%の成長を記録。特にVertical SaaS領域で...</div>
                  </div>
                </div>

                <div className="mockup-section">
                  <div className="mockup-section-label">市場規模推移</div>
                  <div className="mockup-chart">
                    <div className="mockup-chart-bar" style={{ height: "35%" }}><span>1.2兆</span></div>
                    <div className="mockup-chart-bar" style={{ height: "48%" }}><span>1.4兆</span></div>
                    <div className="mockup-chart-bar" style={{ height: "62%" }}><span>1.6兆</span></div>
                    <div className="mockup-chart-bar mockup-chart-bar--accent" style={{ height: "80%" }}><span>1.8兆</span></div>
                    <div className="mockup-chart-bar mockup-chart-bar--projected" style={{ height: "100%" }}><span>2.2兆</span></div>
                  </div>
                  <div className="mockup-chart-labels">
                    <span>2022</span><span>2023</span><span>2024</span><span>2025</span><span>2026E</span>
                  </div>
                </div>

                <div className="mockup-sources-strip">
                  <span className="mockup-source-chip">[1] 経産省</span>
                  <span className="mockup-source-chip">[2] IDC Japan</span>
                  <span className="mockup-source-chip">[3] Gartner</span>
                  <span className="mockup-source-chip mockup-source-chip--more">+4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero stats */}
        <div className="hero-stats-bar fade-up fade-up-delay-4">
          <div className="hero-stat" ref={stat1.ref}>
            <div className="hero-stat-value">{stat1.count}%</div>
            <div className="hero-stat-label">平均調査時間の削減率</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat" ref={stat2.ref}>
            <div className="hero-stat-value">{stat2.count.toLocaleString()}+</div>
            <div className="hero-stat-label">月間レポート生成数</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat" ref={stat3.ref}>
            <div className="hero-stat-value">{(stat3.count / 10).toFixed(1)}</div>
            <div className="hero-stat-label">ユーザー満足度（5段階）</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. TIME COMPRESSION — ドラマチックなBefore/After
          ══════════════════════════════════════════════════════ */}
      <section className="section section--time-comparison" ref={timerRef}>
        <div className="section-inner-wide">
          <div className="fade-up">
            <p className="section-eyebrow">The Problem</p>
            <h2 className="section-title section-title--large">
              リサーチャーの<span className="text-strike">4時間36分</span>を取り戻す
            </h2>
            <p className="section-subtitle">
              従来の手作業リサーチでは、Google検索、PDF読み込み、情報整理、レポート体裁調整に平均4時間36分を費やしています。
            </p>
          </div>

          <div className="time-comparison">
            {/* Before */}
            <div className="time-card time-card--before fade-up fade-up-delay-1">
              <div className="time-card-header">
                <span className="time-card-label">従来のリサーチ</span>
              </div>
              <div className="time-card-timer">
                <div className="time-card-timer-value time-card-timer-value--slow">
                  {formatTime(timerBefore)}
                </div>
              </div>
              <div className="time-card-steps">
                <div className="time-step">
                  <div className="time-step-bar time-step-bar--long" />
                  <span>Google検索・情報収集</span>
                  <span className="time-step-duration">~2時間</span>
                </div>
                <div className="time-step">
                  <div className="time-step-bar time-step-bar--medium" />
                  <span>PDF読み込み・抽出</span>
                  <span className="time-step-duration">~45分</span>
                </div>
                <div className="time-step">
                  <div className="time-step-bar time-step-bar--medium" />
                  <span>情報の整理・クロスチェック</span>
                  <span className="time-step-duration">~50分</span>
                </div>
                <div className="time-step">
                  <div className="time-step-bar time-step-bar--short" />
                  <span>レポート作成・体裁調整</span>
                  <span className="time-step-duration">~1時間</span>
                </div>
              </div>
              <div className="time-card-pain">
                ブラウザタブ30個超、出典のコピペミス、<br />
                「あのデータどこだっけ」の繰り返し
              </div>
            </div>

            {/* Arrow animation */}
            <div className="time-arrow fade-up fade-up-delay-2">
              <div className="time-arrow-line" />
              <div className="time-arrow-icon">
                <ArrowRight size={20} />
              </div>
              <div className="time-arrow-text">98%短縮</div>
            </div>

            {/* After */}
            <div className="time-card time-card--after fade-up fade-up-delay-3">
              <div className="time-card-header">
                <span className="time-card-label">RAKUDAリサーチ</span>
                <span className="time-card-badge">AI-Powered</span>
              </div>
              <div className="time-card-timer">
                <div className="time-card-timer-value time-card-timer-value--fast">
                  {formatTime(timerAfter)}
                </div>
              </div>
              <div className="time-card-steps">
                <div className="time-step time-step--done">
                  <div className="time-step-bar time-step-bar--instant" />
                  <span>テーマを入力</span>
                  <span className="time-step-duration">10秒</span>
                </div>
                <div className="time-step time-step--done">
                  <div className="time-step-bar time-step-bar--instant" />
                  <span>AI自動収集・解析</span>
                  <span className="time-step-duration">~5分</span>
                </div>
                <div className="time-step time-step--done">
                  <div className="time-step-bar time-step-bar--instant" />
                  <span>レポート確認・共有</span>
                  <span className="time-step-duration">~2分</span>
                </div>
              </div>
              <div className="time-card-result">
                出典URL付きレポートが自動完成。<br />
                そのままSlackで共有、PDF出力可能。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. FEATURE CARDS
          ══════════════════════════════════════════════════════ */}
      <section id="features" className="section section--features">
        <div className="section-inner">
          <div className="fade-up">
            <p className="section-eyebrow">Core Features</p>
            <h2 className="section-title">
              リサーチの全工程を、<br className="hide-mobile" />1つのツールで完結させる
            </h2>
          </div>

          <div className="features-grid">
            <div className="feature-card feature-card--large fade-up fade-up-delay-1">
              <div className="feature-card-icon feature-card-icon--blue">
                <SearchIcon />
              </div>
              <h3 className="feature-card-title">AIリサーチエンジン</h3>
              <p className="feature-card-desc">
                調べたいテーマを入力するだけ。AIが平均23のWebソースを巡回し、
                関連性と信頼性でランク付けして情報を収集。
                手動のGoogle検索を完全に置き換えます。
              </p>
              <div className="feature-card-demo">
                <div className="demo-input">
                  <span className="demo-input-icon"><SearchIcon /></span>
                  <span className="demo-input-text">「国内SaaS市場 2026年 成長率 競合動向」</span>
                </div>
                <div className="demo-result-preview">
                  <span className="demo-result-dot" />
                  23ソースから情報を収集中...
                </div>
              </div>
            </div>

            <div className="feature-card fade-up fade-up-delay-2">
              <div className="feature-card-icon feature-card-icon--purple">
                <FileTextIcon />
              </div>
              <h3 className="feature-card-title">PDF一括解析</h3>
              <p className="feature-card-desc">
                決算書、論文、調査レポート。アップロードするだけで内容を構造的に理解し、必要な情報を抽出。
                500ページ超の文書にも対応。
              </p>
              <span className="feature-card-detail">
                スキャンPDFもOCR対応 <ArrowRight />
              </span>
            </div>

            <div className="feature-card fade-up fade-up-delay-3">
              <div className="feature-card-icon feature-card-icon--amber">
                <EditIcon />
              </div>
              <h3 className="feature-card-title">構造化レポート生成</h3>
              <p className="feature-card-desc">
                Executive Summary、詳細分析、データ表、結論。
                読み手が5秒で要点を掴める構成で自動生成。
                テンプレートのカスタマイズも可能。
              </p>
              <span className="feature-card-detail">
                PDF / Word / Markdown出力 <ArrowRight />
              </span>
            </div>

            <div className="feature-card fade-up fade-up-delay-4">
              <div className="feature-card-icon feature-card-icon--green">
                <LinkIcon />
              </div>
              <h3 className="feature-card-title">出典の完全トレーサビリティ</h3>
              <p className="feature-card-desc">
                レポート内の全ての数値・主張に出典URLを自動付与。
                情報源の種別（政府機関・学術・メディア）と信頼度スコアも表示。
                「この数字の根拠は？」に即座に答えられます。
              </p>
              <div className="feature-source-demo">
                <div className="source-demo-item">
                  <span className="source-demo-badge source-demo-badge--gov">政府機関</span>
                  <span className="source-demo-score">信頼度 95</span>
                </div>
                <div className="source-demo-item">
                  <span className="source-demo-badge source-demo-badge--academic">学術論文</span>
                  <span className="source-demo-score">信頼度 91</span>
                </div>
                <div className="source-demo-item">
                  <span className="source-demo-badge source-demo-badge--media">大手メディア</span>
                  <span className="source-demo-score">信頼度 84</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. RESEARCH OUTPUT SHOWCASE
          ══════════════════════════════════════════════════════ */}
      <section className="section section--showcase">
        <div className="section-inner-wide">
          <div className="showcase-header fade-up">
            <div>
              <p className="section-eyebrow">Sample Output</p>
              <h2 className="section-title">
                実際の出力を見てください
              </h2>
              <p className="section-subtitle">
                テーマ「生成AIの企業導入動向」で生成したレポートの一部。
                構造化された見出し、インライン引用、出典リストが標準装備。
              </p>
            </div>
          </div>

          <div className="showcase-layout">
            <div className="showcase-report slide-left">
              <div className="showcase-report-chrome">
                <div className="report-chrome-dots">
                  <span /><span /><span />
                </div>
                <span className="report-chrome-tab">レポート出力</span>
              </div>

              <div className="report-content">
                <div className="report-title-area">
                  <h3 className="report-main-title">
                    生成AIの企業導入動向 2025-2026
                  </h3>
                  <div className="report-meta-row">
                    <span className="report-meta-tag">市場分析</span>
                    <span className="report-meta-tag">生成AI</span>
                    <span className="report-meta-date">2026.03.21 生成</span>
                    <span className="report-meta-sources">
                      <LinkIcon /> 18ソース参照
                    </span>
                  </div>
                </div>

                <div className="report-section">
                  <h4 className="report-section-heading">
                    <span className="report-section-num">01</span>
                    エグゼクティブサマリー
                  </h4>
                  <p className="report-text">
                    国内企業の生成AI導入率は2025年末時点で<strong>34.2%</strong>に到達し、
                    前年比で約1.8倍の成長を記録した
                    <span className="report-cite" data-source="経済産業省 AI白書 2025">[1]</span>。
                    特にカスタマーサポート領域では導入率が<strong>52%</strong>を超え、
                    ROIの可視化が進んでいる
                    <span className="report-cite" data-source="IDC Japan レポート">[2]</span>。
                    一方、製造業での活用はまだ<strong>12%</strong>に留まり、
                    データ整備が主要な障壁として指摘されている
                    <span className="report-cite" data-source="日本経済新聞 2025.11">[3]</span>。
                  </p>
                </div>

                <div className="report-section">
                  <h4 className="report-section-heading">
                    <span className="report-section-num">02</span>
                    業界別導入率
                  </h4>
                  <div className="report-data-table">
                    <div className="report-table-row report-table-header">
                      <span>業界</span>
                      <span>導入率</span>
                      <span>YoY</span>
                    </div>
                    <div className="report-table-row">
                      <span>金融・保険</span>
                      <span className="report-table-highlight">68%</span>
                      <span className="report-table-positive">+24pt</span>
                    </div>
                    <div className="report-table-row">
                      <span>IT・通信</span>
                      <span className="report-table-highlight">61%</span>
                      <span className="report-table-positive">+18pt</span>
                    </div>
                    <div className="report-table-row">
                      <span>小売・EC</span>
                      <span>38%</span>
                      <span className="report-table-positive">+15pt</span>
                    </div>
                    <div className="report-table-row">
                      <span>製造</span>
                      <span>12%</span>
                      <span className="report-table-positive">+5pt</span>
                    </div>
                  </div>
                </div>

                <div className="report-sources-area">
                  <div className="report-sources-header">
                    参照ソース（18件中5件を表示）
                  </div>
                  <div className="report-source-item">
                    <span className="report-source-num">1</span>
                    <span className="report-source-type report-source-type--gov">政府</span>
                    <span className="report-source-url">meti.go.jp/report/ai-adoption-2025</span>
                    <span className="report-source-trust">95</span>
                  </div>
                  <div className="report-source-item">
                    <span className="report-source-num">2</span>
                    <span className="report-source-type report-source-type--research">調査</span>
                    <span className="report-source-url">idc.co.jp/research/genai-cs-report</span>
                    <span className="report-source-trust">91</span>
                  </div>
                  <div className="report-source-item">
                    <span className="report-source-num">3</span>
                    <span className="report-source-type report-source-type--media">報道</span>
                    <span className="report-source-url">nikkei.com/article/DGXZQO2024...</span>
                    <span className="report-source-trust">84</span>
                  </div>
                  <div className="report-source-item">
                    <span className="report-source-num">4</span>
                    <span className="report-source-type report-source-type--gov">政府</span>
                    <span className="report-source-url">fsa.go.jp/news/genai-banking-survey</span>
                    <span className="report-source-trust">93</span>
                  </div>
                  <div className="report-source-item">
                    <span className="report-source-num">5</span>
                    <span className="report-source-type report-source-type--research">調査</span>
                    <span className="report-source-url">mckinsey.com/jp/genai-financial</span>
                    <span className="report-source-trust">89</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-annotations slide-right">
              <div className="annotation-item annotation-item--1">
                <div className="annotation-connector" />
                <div className="annotation-card">
                  <div className="annotation-icon">01</div>
                  <h4>構造化された見出し</h4>
                  <p>章番号付きの見出しで、長文レポートでも迷わない。
                  目次から各セクションへのジャンプも可能。</p>
                </div>
              </div>

              <div className="annotation-item annotation-item--2">
                <div className="annotation-connector" />
                <div className="annotation-card">
                  <div className="annotation-icon">02</div>
                  <h4>インライン引用</h4>
                  <p>本文中の[1][2]をクリックすると、出典元のWebページに直接アクセス。
                  マウスホバーで引用元のプレビューも表示。</p>
                </div>
              </div>

              <div className="annotation-item annotation-item--3">
                <div className="annotation-connector" />
                <div className="annotation-card">
                  <div className="annotation-icon">03</div>
                  <h4>信頼度スコア</h4>
                  <p>政府機関=95、学術論文=91のように、情報源の信頼性を
                  100点満点で自動評価。判断材料として活用できる。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. HOW IT WORKS
          ══════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="section section--how">
        <div className="section-inner">
          <div className="fade-up how-header">
            <p className="section-eyebrow">How it Works</p>
            <h2 className="section-title">
              テーマを入力して、コーヒーを淹れる。<br className="hide-mobile" />
              戻ったらレポートが完成している。
            </h2>
          </div>

          <div className="steps-timeline">
            <div className="steps-line" />

            <div className="step-item fade-up fade-up-delay-1">
              <div className="step-number-wrap">
                <div className="step-number">1</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">テーマを自然言語で入力</h3>
                <p className="step-desc">
                  「国内SaaS市場の動向と主要プレイヤーの比較」
                  「A社の直近3期のIR分析」など、普段使う言葉でOK。
                  キーワードの組み合わせに悩む必要はありません。
                </p>
                <div className="step-input-demo">
                  <span className="step-demo-cursor" />
                  国内SaaS市場の動向と主要プレイヤーの比較分析
                </div>
              </div>
            </div>

            <div className="step-item fade-up fade-up-delay-2">
              <div className="step-number-wrap">
                <div className="step-number">2</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">AIが自動で調査・分析</h3>
                <p className="step-desc">
                  平均23のWebソースとアップロードされたPDFを横断的に分析。
                  情報の重複を排除し、信頼性の低いソースは自動フィルタリング。
                  矛盾する情報は注記付きで両論併記。
                </p>
                <div className="step-progress-demo">
                  <div className="step-progress-item step-progress-item--done">
                    <CheckIcon /> Web情報の収集
                  </div>
                  <div className="step-progress-item step-progress-item--done">
                    <CheckIcon /> ソース信頼性の評価
                  </div>
                  <div className="step-progress-item step-progress-item--active">
                    <span className="step-progress-spinner" /> レポート構成中...
                  </div>
                </div>
              </div>
            </div>

            <div className="step-item fade-up fade-up-delay-3">
              <div className="step-number-wrap">
                <div className="step-number">3</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">出典付きレポートを確認・共有</h3>
                <p className="step-desc">
                  構造化されたレポートが完成。全ての記述に出典URLが紐づいているので、
                  上司やクライアントへの報告にそのまま使えます。
                  PDF・Word・Markdown形式でエクスポート可能。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. USE CASES
          ══════════════════════════════════════════════════════ */}
      <section className="section section--usecases">
        <div className="section-inner">
          <div className="fade-up">
            <p className="section-eyebrow">Use Cases</p>
            <h2 className="section-title">
              誰が、どう使っているか
            </h2>
            <p className="section-subtitle">
              業種ごとに異なるリサーチ課題。それぞれの現場でどう活用されているか、具体例を紹介します。
            </p>
          </div>

          <div className="usecases-grid">
            <div className="usecase-card fade-up fade-up-delay-1">
              <div className="usecase-header">
                <span className="usecase-industry">コンサルティング</span>
                <span className="usecase-metric">調査時間 <strong>72%削減</strong></span>
              </div>
              <h3 className="usecase-title">
                提案書のファクト収集を1日から2時間に
              </h3>
              <p className="usecase-desc">
                戦略コンサルタントがクライアントへの提案書を作成する際、
                市場規模・競合動向・規制環境のリサーチに丸1日かかっていた工程を、
                RAKUDAリサーチで2時間に短縮。出典の網羅性も向上。
              </p>
              <div className="usecase-quote">
                <p>&ldquo;以前はリサーチが辛くて避けていた案件も、今は積極的に受けられる&rdquo;</p>
                <span>— 戦略コンサルタント / Big4系</span>
              </div>
            </div>

            <div className="usecase-card fade-up fade-up-delay-2">
              <div className="usecase-header">
                <span className="usecase-industry">投資・金融</span>
                <span className="usecase-metric">DD準備 <strong>65%短縮</strong></span>
              </div>
              <h3 className="usecase-title">
                DD事前調査をスクリーニング段階で自動化
              </h3>
              <p className="usecase-desc">
                VCのアソシエイトが投資検討の初期段階で行う市場調査・競合マッピングを
                自動化。IR資料の横断比較、規制リスクの洗い出しも含めて
                網羅的なレポートを生成。
              </p>
              <div className="usecase-quote">
                <p>&ldquo;スクリーニング段階の情報精度が格段に上がった。ICメモの質が変わる&rdquo;</p>
                <span>— VC アソシエイト / 独立系ファンド</span>
              </div>
            </div>

            <div className="usecase-card fade-up fade-up-delay-3">
              <div className="usecase-header">
                <span className="usecase-industry">法務・コンプライアンス</span>
                <span className="usecase-metric">判例リサーチ <strong>80%効率化</strong></span>
              </div>
              <h3 className="usecase-title">
                判例・法令の網羅的サーベイを自動化
              </h3>
              <p className="usecase-desc">
                新規事業の法的リスク調査で、関連法令・判例・行政指針を
                横断的に収集。PDF形式の法令文書も解析対象に含めて、
                見落としリスクを最小化。
              </p>
              <div className="usecase-quote">
                <p>&ldquo;法令改正の見落としが怖かった領域で、網羅性を担保できるようになった&rdquo;</p>
                <span>— 弁護士 / 大手法律事務所</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8. PRICING
          ══════════════════════════════════════════════════════ */}
      <section id="pricing" className="section section--pricing">
        <div className="section-inner">
          <div className="fade-up pricing-header">
            <p className="section-eyebrow">Pricing</p>
            <h2 className="section-title">
              まず3レポート、無料で試す
            </h2>
            <p className="section-subtitle section-subtitle--center">
              クレジットカード不要。10秒でアカウント作成。
              合わなければそのまま放置でOK。
            </p>
          </div>

          <div className="pricing-grid">
            {/* Free */}
            <div className="pricing-card fade-up fade-up-delay-1">
              <div className="pricing-plan-name">Free</div>
              <div className="pricing-plan-desc">まず試してみたい方</div>
              <div className="pricing-price">
                <span className="pricing-amount">&yen;0</span>
              </div>
              <div className="pricing-billing-note">永久無料・クレカ不要</div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included"><CheckIcon /></span>
                  月3レポートまで
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included"><CheckIcon /></span>
                  Web検索ベースのリサーチ
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included"><CheckIcon /></span>
                  PDF解析（月5ファイル）
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included"><CheckIcon /></span>
                  出典URL付きレポート
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included"><CheckIcon /></span>
                  Markdown出力
                </li>
              </ul>
              <a href="./signup?plan=free" className="pricing-btn pricing-btn--outline">
                無料で始める
              </a>
            </div>

            {/* Pro */}
            <div className="pricing-card pricing-card--featured fade-up fade-up-delay-2">
              <div className="pricing-popular-badge">最も選ばれています</div>
              <div className="pricing-plan-name">Pro</div>
              <div className="pricing-plan-desc">個人のプロフェッショナル向け</div>
              <div className="pricing-price">
                <span className="pricing-amount">&yen;2,980</span>
                <span className="pricing-period">/月</span>
              </div>
              <div className="pricing-billing-note">
                年払いで&yen;2,480/月（年間&yen;5,960お得）
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent"><CheckIcon /></span>
                  月30レポート
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent"><CheckIcon /></span>
                  高精度AIリサーチ
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent"><CheckIcon /></span>
                  PDF解析（無制限）
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent"><CheckIcon /></span>
                  出典URL + 信頼度スコア
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent"><CheckIcon /></span>
                  PDF / Word / Markdown出力
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent"><CheckIcon /></span>
                  レポートテンプレート
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--accent"><CheckIcon /></span>
                  優先サポート
                </li>
              </ul>
              <a href="./signup?plan=pro" className="pricing-btn pricing-btn--primary">
                Proで始める
              </a>
            </div>

            {/* Enterprise */}
            <div className="pricing-card fade-up fade-up-delay-3">
              <div className="pricing-plan-name">Enterprise</div>
              <div className="pricing-plan-desc">チーム・法人向け</div>
              <div className="pricing-price">
                <span className="pricing-amount">&yen;9,800</span>
                <span className="pricing-period">/月</span>
              </div>
              <div className="pricing-billing-note">
                年払いで&yen;7,980/月（年間&yen;21,840お得）
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included"><CheckIcon /></span>
                  レポート無制限
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included"><CheckIcon /></span>
                  最高精度AIリサーチ
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included"><CheckIcon /></span>
                  Proの全機能
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included"><CheckIcon /></span>
                  メンバー5名まで含む
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included"><CheckIcon /></span>
                  API連携
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included"><CheckIcon /></span>
                  専任カスタマーサクセス
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included"><CheckIcon /></span>
                  SLA保証（稼働率99.9%）
                </li>
                <li className="pricing-feature-item">
                  <span className="pricing-check pricing-check--included"><CheckIcon /></span>
                  SOC2 Type II認証
                </li>
              </ul>
              <a href="./book-call" className="pricing-btn pricing-btn--outline">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          9. FAQ
          ══════════════════════════════════════════════════════ */}
      <section id="faq" className="section section--faq">
        <div className="section-inner">
          <div className="faq-layout">
            <div className="faq-left fade-up">
              <p className="section-eyebrow">FAQ</p>
              <h2 className="section-title">よくある質問</h2>
              <p className="section-subtitle">
                解決しない場合は<a href="#" className="faq-contact-link">お問い合わせ</a>からどうぞ。
                営業日24時間以内に回答します。
              </p>
            </div>

            <div className="faq-list">
              {[
                {
                  q: "どんなテーマでもリサーチできますか？",
                  a: "テーマに制限はありません。市場分析、競合調査、技術動向、学術研究、規制情報など、Web上に情報があるテーマに対応しています。日本語・英語の両方のソースから情報を収集します。特定の業界用語にも対応しており、金融・法務・テクノロジー分野での専門リサーチにも強みがあります。",
                },
                {
                  q: "出典の正確性・信頼性はどう担保していますか？",
                  a: "レポート内の全ての記述に出典URLを付与しており、ワンクリックで原文を確認できます。Proプラン以上では情報源の信頼性スコア（0-100）も表示。政府機関・学術論文・大手メディア等、ソースの種別を自動分類し、信頼性の低い情報源には警告を表示します。",
                },
                {
                  q: "PDFは何ページまで解析可能ですか？",
                  a: "1ファイル最大500ページまで対応。日本語・英語PDFはもちろん、スキャンPDF（画像ベース）もOCR処理で解析可能です。表・グラフの読み取りにも対応しており、決算書や調査レポートの数値データも正確に抽出します。",
                },
                {
                  q: "セキュリティは大丈夫ですか？",
                  a: "アップロードファイル・生成レポートはAES-256で暗号化保存。データ処理は日本国内サーバーで完結し、第三者提供は一切ありません。SOC2 Type II認証取得済み。法人向けEnterpriseプランではIPアドレス制限・SSO連携もオプションで提供しています。",
                },
                {
                  q: "無料プランに制限期間はありますか？",
                  a: "ありません。月3レポートまでの制限はありますが、期間制限なくずっと無料で利用可能です。有料プランへのアップグレードはワンクリックで、過去のレポートやデータは全て引き継がれます。解約もいつでも可能で、縛り期間はありません。",
                },
                {
                  q: "チームで利用できますか？",
                  a: "Enterpriseプランは5名まで1アカウントに含まれます。レポートの共有・共同編集が可能で、チーム内のナレッジを蓄積できます。6名以上の場合はEnterprise向けカスタムプランをご用意しています。",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFaq === index ? "faq-item--open" : ""}`}
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          10. CTA
          ══════════════════════════════════════════════════════ */}
      <section id="cta" className="section cta-section">
        <div className="cta-bg-pattern" />
        <div className="section-inner fade-up cta-inner">
          <h2 className="cta-title">
            次のリサーチは、7分で終わる。
          </h2>
          <p className="cta-subtitle">
            無料プランで今すぐ体験。アカウント作成は10秒。
            月3レポートまで、ずっと無料です。
          </p>
          <div className="cta-actions">
            <a href="./signup" className="btn-primary-hero btn-primary-hero--large">
              無料アカウントを作成
              <ArrowRight />
            </a>
            <a href="./book-call" className="btn-secondary-hero">
              デモを予約する
            </a>
          </div>
          <div className="cta-reassurance">
            <span><ClockIcon /> 10秒で登録完了</span>
            <span><ShieldIcon /> クレジットカード不要</span>
            <span><CheckIcon /> いつでも解約可能</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          11. FOOTER
          ══════════════════════════════════════════════════════ */}
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
