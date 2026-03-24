import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "外注リサーチ費を90%削減 | RAKUDAリサーチ",
  description: "1レポートあたり100円未満。外注リサーチ費を90%削減するAIリサーチツール。",
  robots: "noindex",
};

export default function CostLpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
