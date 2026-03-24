import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ラクダResearch — AIリサーチ",
  description: "Web検索・PDF解析・要約を自動化。",
  icons: {
    icon: { url: "/rakuda-research/favicon.svg", type: "image/svg+xml" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
