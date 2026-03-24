import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | ラクダResearch",
};

export default function Tokushoho() {
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
            <h1>特定商取引法に基づく表記</h1>
            <p className="legal-updated">最終更新日: 2026年3月24日</p>

            <table className="tokushoho-table">
              <tbody>
                <tr>
                  <th>販売業者</th>
                  <td>ラクダResearch運営事務局</td>
                </tr>
                <tr>
                  <th>運営統括責任者</th>
                  <td>代表者名（請求に応じて遅滞なく開示いたします）</td>
                </tr>
                <tr>
                  <th>所在地</th>
                  <td>東京都港区（請求に応じて遅滞なく開示いたします）</td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>請求に応じて遅滞なく開示いたします</td>
                </tr>
                <tr>
                  <th>メールアドレス</th>
                  <td>support@rakuda-ai.com</td>
                </tr>
                <tr>
                  <th>サービスの名称</th>
                  <td>ラクダResearch（AIリサーチツール）</td>
                </tr>
                <tr>
                  <th>販売価格</th>
                  <td>
                    Starterプラン: 無料<br />
                    Standardプラン: 月額3,980円（税抜）<br />
                    Enterpriseプラン: 月額9,800円（税抜）<br />
                    ※年額プランあり（2ヶ月分割引）
                  </td>
                </tr>
                <tr>
                  <th>販売価格以外の必要料金</th>
                  <td>インターネット接続料金、通信費等はお客様のご負担となります。</td>
                </tr>
                <tr>
                  <th>支払方法</th>
                  <td>クレジットカード（Visa, Mastercard, JCB, American Express）<br />請求書払い（Enterpriseプランのみ）</td>
                </tr>
                <tr>
                  <th>支払時期</th>
                  <td>月額プラン: 毎月初日に自動課金<br />年額プラン: 契約開始日に一括課金</td>
                </tr>
                <tr>
                  <th>サービス提供時期</th>
                  <td>アカウント登録後、即時ご利用いただけます。</td>
                </tr>
                <tr>
                  <th>返品・キャンセル</th>
                  <td>
                    全プラン: 14日間の返金保証付き。<br />
                    月額プラン: いつでも管理画面から解約可能（契約期間末日まで利用可）。<br />
                    年額プラン: 途中解約の場合、残存期間分の日割り返金に対応。
                  </td>
                </tr>
                <tr>
                  <th>動作環境</th>
                  <td>
                    Google Chrome, Safari, Microsoft Edge, Firefox の最新版。<br />
                    iOS 15以上 / Android 10以上のモバイルブラウザ。<br />
                    ※専用アプリのインストールは不要です。
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="legal-back">
              <a href="./" className="legal-back-btn">トップページに戻る</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
