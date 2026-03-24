import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ラクダResearch",
};

export default function Privacy() {
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
            <h1>プライバシーポリシー</h1>
            <p className="legal-updated">最終更新日: 2026年3月24日</p>

            <section>
              <h2>1. はじめに</h2>
              <p>ラクダResearch運営事務局（以下「当社」）は、本サービスをご利用いただくお客様の個人情報の保護に努めています。本プライバシーポリシーでは、当社が収集する情報の種類、利用目的、管理方法についてご説明します。</p>
            </section>

            <section>
              <h2>2. 収集する情報</h2>
              <h3>（1）ユーザー情報</h3>
              <p>アカウント登録時に、会社名、氏名、メールアドレス、電話番号、請求先情報を収集します。</p>
              <h3>（2）リサーチデータ</h3>
              <p>ユーザーが入力するリサーチテーマ、アップロードするPDFファイル、生成されたレポートの内容を取得します。</p>
              <h3>（3）利用ログ</h3>
              <p>本サービスの利用に伴い、IPアドレス、ブラウザ情報、アクセスログ等の技術的情報を自動的に収集します。</p>
            </section>

            <section>
              <h2>3. 情報の利用目的</h2>
              <ol>
                <li>本サービスの提供・運営・改善</li>
                <li>リサーチレポートの生成・品質向上</li>
                <li>お問い合わせへの対応</li>
                <li>料金の請求・決済処理</li>
                <li>セキュリティの確保・不正利用の防止</li>
                <li>サービスに関するお知らせの送付</li>
              </ol>
            </section>

            <section>
              <h2>4. 情報の第三者提供</h2>
              <p>当社は、以下の場合を除き、個人情報を第三者に提供しません。</p>
              <ol>
                <li>ユーザーの同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>サービス提供に必要な業務委託先への提供（適切な契約の下）</li>
              </ol>
            </section>

            <section>
              <h2>5. データの保存・保護</h2>
              <p>個人情報およびアップロードファイルは、通信時はTLS 1.3、保存時はAES-256により暗号化されます。データはアクセス制御されたクラウド環境（日本国内サーバー）に保存し、定期的なセキュリティ監査を実施しています。</p>
            </section>

            <section>
              <h2>6. Cookieの利用</h2>
              <p>本サービスでは、セッション管理およびサービス改善の目的でCookieを使用します。ブラウザの設定によりCookieを無効にすることが可能ですが、一部機能が制限される場合があります。</p>
            </section>

            <section>
              <h2>7. ユーザーの権利</h2>
              <p>ユーザーは、自身の個人情報について、開示、訂正、削除を請求する権利を有します。管理画面からの操作、またはお問い合わせフォームよりご連絡ください。アップロードデータおよび生成レポートは管理画面からいつでも削除可能です。</p>
            </section>

            <section>
              <h2>8. 本ポリシーの変更</h2>
              <p>当社は、必要に応じて本ポリシーを変更する場合があります。重要な変更を行う場合は、本サービスまたはメールにて通知します。</p>
            </section>

            <section>
              <h2>9. お問い合わせ</h2>
              <p>本ポリシーに関するお問い合わせは、以下までご連絡ください。</p>
              <p>ラクダResearch運営事務局<br />メール: privacy@rakuda-ai.com</p>
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
