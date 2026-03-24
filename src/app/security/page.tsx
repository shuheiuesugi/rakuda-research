import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "セキュリティ | ラクダResearch",
};

export default function Security() {
  return (
    <>
      <header className="sub-header">
        <div className="sub-header-inner">
          <a href="./" className="header-logo">
            <div className="header-logo-icon">R</div>
            <div>
              <span className="header-logo-text" style={{ color: "var(--color-text)" }}>ラクダResearch</span>
              <span className="header-logo-sub">AIリサーチツール</span>
            </div>
          </a>
        </div>
      </header>

      <main className="legal-page">
        <div className="container">
          <div className="legal-content">
            <h1>セキュリティ</h1>
            <p className="legal-updated">最終更新日: 2026年3月24日</p>

            <p className="security-lead">
              ラクダResearchは、お客様のリサーチデータとアップロードファイルを守ることを最優先に設計されています。
              以下に当社のセキュリティ対策の概要をご説明します。
            </p>

            <div className="security-grid">
              <div className="security-card">
                <div className="security-card-icon">&#x1F512;</div>
                <h3>通信の暗号化</h3>
                <p>すべての通信はTLS 1.3で暗号化。中間者攻撃やデータ傍受を防止します。HSTS（HTTP Strict Transport Security）も有効化済みです。</p>
              </div>

              <div className="security-card">
                <div className="security-card-icon">&#x1F5C4;&#xFE0F;</div>
                <h3>保存時の暗号化</h3>
                <p>アップロードファイル・生成レポートを含むすべてのデータは、AES-256で暗号化して保存。暗号鍵は定期的にローテーションされます。</p>
              </div>

              <div className="security-card">
                <div className="security-card-icon">&#x1F6E1;&#xFE0F;</div>
                <h3>SOC 2 Type II</h3>
                <p>SOC 2 Type II認証を取得済み。セキュリティ、可用性、機密保持の統制が第三者機関により監査されています。</p>
              </div>

              <div className="security-card">
                <div className="security-card-icon">&#x1F510;</div>
                <h3>SSO / SAML 2.0</h3>
                <p>EnterpriseプランではSAML 2.0によるシングルサインオンに対応。既存のID管理基盤と統合できます。</p>
              </div>

              <div className="security-card">
                <div className="security-card-icon">&#x1F50D;</div>
                <h3>定期セキュリティ監査</h3>
                <p>年2回の第三者ペネトレーションテストと、継続的な脆弱性スキャンを実施。発見された問題は即座に対処します。</p>
              </div>

              <div className="security-card">
                <div className="security-card-icon">&#x1F1EF;&#x1F1F5;</div>
                <h3>国内データ処理</h3>
                <p>データ処理は日本国内サーバーで完結。第三者提供は一切ありません。GDPR・個人情報保護法に準拠した運用をサポートします。</p>
              </div>
            </div>

            <section>
              <h2>インフラストラクチャ</h2>
              <ul className="security-infra-list">
                <li>データセンター: AWS東京リージョン（ap-northeast-1）</li>
                <li>稼働率保証: SLA 99.9%（Enterpriseプラン）</li>
                <li>バックアップ: 日次自動バックアップ + 地理的冗長化</li>
                <li>監視: 24/7のインフラ監視とアラート体制</li>
              </ul>
            </section>

            <section>
              <h2>脆弱性報告</h2>
              <p>セキュリティに関する脆弱性を発見された場合は、以下までご報告ください。責任ある開示に基づき対応いたします。</p>
              <p>メール: security@rakuda-ai.com</p>
            </section>

            <div className="legal-back">
              <a href="./" className="legal-back-btn">トップページに戻る</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
