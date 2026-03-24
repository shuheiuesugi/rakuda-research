import type { Metadata } from "next";
import "./globals.css";

const GTM_ID = "GTM-XXXXXXX";        // ← 要置換
const CLARITY_ID = "XXXXXXXXXX";      // ← 要置換

export const metadata: Metadata = {
  title: "RAKUDAリサーチ — AIリサーチ代行ツール | テーマを入力するだけで出典付きレポートを自動生成",
  description:
    "テーマを入力するだけ。AIがWeb上の関連情報を自動収集し、出典URL付きのレポートを生成。調査時間を4時間から7分に圧縮。コンサル・VC・法務のプロが使うAIリサーチツール。月額0円から。",
  icons: [{ rel: "icon", type: "image/svg+xml", url: "/rakuda-research/favicon.svg" }],
  openGraph: {
    title: "RAKUDAリサーチ — AIリサーチ代行ツール",
    description:
      "テーマを入力するだけで出典URL付きレポートを自動生成。調査時間を4時間→7分に圧縮。無料で始められる。",
    type: "website",
    locale: "ja_JP",
    siteName: "RAKUDAリサーチ",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAKUDAリサーチ — AIリサーチ代行ツール",
    description: "テーマを入力するだけで出典URL付きレポートを自動生成。無料で始められる。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","${CLARITY_ID}");`,
          }}
        />
      </head>
      <body className="antialiased">
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
