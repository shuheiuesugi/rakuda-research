import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "検索するだけでレポート完成 | RAKUDAリサーチ",
  description: "テーマを入力するだけ。初めてでもかんたんに使えるAIリサーチツール。",
  robots: "noindex",
};

export default function EasyLpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
