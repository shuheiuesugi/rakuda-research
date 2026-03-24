# RAKUDAリサーチ LP — 引き継ぎドキュメント

最終更新: 2026-03-24

---

## 1. プロジェクト概要

| 項目 | 内容 |
|------|------|
| サービス名 | RAKUDAリサーチ（AIリサーチ代行） |
| 技術スタック | Next.js 15 + React 19 + TypeScript + Tailwind CSS 4 |
| ホスティング | GitHub Pages（静的エクスポート） |
| リポジトリ | https://github.com/shuheiuesugi/rakuda-research |
| 本番URL | https://shuheiuesugi.github.io/rakuda-research/ |
| basePath | `/rakuda-research` |

---

## 2. 公開URL一覧

### メインページ
| ページ | URL | ソースコード |
|--------|-----|-------------|
| メインLP | https://shuheiuesugi.github.io/rakuda-research/ | `src/app/page.tsx` |
| コストLP | https://shuheiuesugi.github.io/rakuda-research/lp/cost | `src/app/lp/cost/page.tsx` |
| Easy LP | https://shuheiuesugi.github.io/rakuda-research/lp/easy | `src/app/lp/easy/page.tsx` |
| サインアップ | https://shuheiuesugi.github.io/rakuda-research/signup | `src/app/signup/page.tsx` |
| 無料相談 | https://shuheiuesugi.github.io/rakuda-research/book-call | `src/app/book-call/page.tsx` |

### 法的ページ
| ページ | URL | ソースコード |
|--------|-----|-------------|
| 利用規約 | https://shuheiuesugi.github.io/rakuda-research/terms | `src/app/terms/page.tsx` |
| プライバシーポリシー | https://shuheiuesugi.github.io/rakuda-research/privacy | `src/app/privacy/page.tsx` |
| 特定商取引法 | https://shuheiuesugi.github.io/rakuda-research/tokushoho | `src/app/tokushoho/page.tsx` |
| セキュリティ | https://shuheiuesugi.github.io/rakuda-research/security | `src/app/security/page.tsx` |

### LP用途
- **メインLP**: SEOオーガニック流入用（robots: index）
- **コストLP** (`/lp/cost`): コスト削減訴求。管理職・経営層向け広告用（robots: noindex）
- **Easy LP** (`/lp/easy`): かんたん訴求。非技術者向け広告用（robots: noindex）

---

## 3. ディレクトリ構造

```
rakuda-research/
├── public/
│   └── favicon.svg          # RAKUDAロゴ（ラクダ波マーク）
├── src/app/
│   ├── layout.tsx           # 共通レイアウト（favicon設定）
│   ├── globals.css          # 全ページ共通CSS（2700行超）
│   ├── page.tsx             # メインLP（Hero, Before/After, Features, Showcase, How, UseCases, Pricing, FAQ, CTA）
│   ├── signup/page.tsx      # サインアップ（インラインCSS、自己完結）
│   ├── book-call/page.tsx   # 無料相談フォーム
│   ├── terms/page.tsx       # 利用規約
│   ├── privacy/page.tsx     # プライバシーポリシー
│   ├── tokushoho/page.tsx   # 特定商取引法
│   ├── security/page.tsx    # セキュリティ
│   └── lp/
│       ├── cost/
│       │   ├── layout.tsx   # meta設定（noindex）
│       │   └── page.tsx     # コスト訴求LP
│       └── easy/
│           ├── layout.tsx   # meta設定（noindex）
│           └── page.tsx     # かんたんLP
├── next.config.ts           # output: "export", basePath: "/rakuda-research"
├── package.json             # Next.js 15, React 19
└── out/                     # ビルド成果物（gh-pagesにデプロイ）
```

---

## 4. デザインシステム

### ブランド統一仕様（Reception/Hub/Mail/Research共通）
- **ヘッダー**: 透明背景 → スクロールで白半透明。ロゴSVG（RAKUDAリサーチ）白→ネイビー切替
- **CTA**: 2ボタン構成（`btn-primary-hero` 青 + `btn-secondary-hero` 半透明）
- **フッター**: RAKUDA AIロゴ + 2列グリッド（サポート / リンク）+ コピーライト
- **ファビコン**: ラクダ波マークSVG（`/public/favicon.svg`）

### カラーパレット
| 変数 | 値 | 用途 |
|------|----|------|
| --color-primary | #1A2B4A | テキスト・ロゴ（ネイビー） |
| --color-accent | #4F8FFF | メインアクセント（青） |
| --color-accent-soft | #8BB8FF | アクセント薄 |
| --color-success | #16A34A | ポジティブ数値 |
| --color-danger | #DC2626 | Before比較 |
| --color-dark-bg | #0C0E14 | ヒーロー背景 |

### ブランド名表記
- **正式**: `RAKUDAリサーチ`
- **旧表記（使用禁止）**: `ラクダResearch`
- **フッター・コピーライト**: `RAKUDA AI` / `Rakuda AI Inc.`

### 料金プラン（全ページ統一済み）
| プラン | 月額 | 年額 | 備考 |
|--------|------|------|------|
| Free | ¥0 | - | 月3レポート、クレカ不要 |
| Pro | ¥2,980 | ¥2,480/月 | 月30レポート、高精度AI |
| Enterprise | ¥9,800 | ¥7,980/月 | 無制限、5名含む、API連携 |

---

## 5. 広告運用対応状況

### 実装済み
| 項目 | 状態 | 備考 |
|------|------|------|
| GTM (Google Tag Manager) | ✅ プレースホルダー設置済み | `layout.tsx` — `GTM-XXXXXXX` を実IDに差替 |
| Microsoft Clarity | ✅ プレースホルダー設置済み | `layout.tsx` — `XXXXXXXXXX` を実IDに差替 |
| OGP / Twitter Card | ✅ 設定済み | `layout.tsx` の metadata |
| robots.txt | ✅ 設置済み | `public/robots.txt` |
| LP noindex | ✅ 設定済み | `/lp/cost`, `/lp/easy` は `robots: noindex` |
| LP URL分離 | ✅ 対応済み | 広告ごとに異なるURLでGA4レポート可能 |

### ローンチ前TODO
| 項目 | 優先度 | 詳細 |
|------|--------|------|
| GTM ID設定 | 🔴 必須 | `layout.tsx` の `GTM-XXXXXXX` を実際のContainer IDに差替 |
| Clarity ID設定 | 🔴 必須 | `layout.tsx` の `XXXXXXXXXX` を実際のProject IDに差替 |
| OGP画像作成 | 🟡 推奨 | `og:image` 用の1200x630画像を作成・設定 |
| Meta Pixel追加 | 🟢 改善 | Facebook/Instagram広告を使う場合はPixelコードを `layout.tsx` に追加 |
| Google Ads CV設定 | 🟢 改善 | Google広告用のコンバージョンタグを追加 |
| UTMパラメータ引継ぎ | 🟢 改善 | signupフォームにUTM引き継ぎJS実装 |

---

## 6. 既知の課題・制限

### 注意: CSSアニメーションとインタラクティブ要素の共存
- `fade-up` / `fade-in` 等の `opacity: 0` → `visible` で `opacity: 1` にするCSSクラスを、React stateで動的にclassNameが変わる要素（FAQ等）に付けると、状態更新時に `visible` が外れて要素が消えるバグが発生する
- **対策**: FAQ等のインタラクティブ要素には `fade-up` / `fade-in` を絶対に付けないこと（修正済み）

### フォームのバックエンド未接続
- `signup/page.tsx` と `book-call/page.tsx` のフォーム送信は現在**フロントエンドのみ**（`setSubmitted(true)` でUI切替するだけ）
- 実際のデータ送信には Formspree / Google Forms / Supabase 等のバックエンド統合が必要
- 本番サービス（`research.rakuda-ai.com`）への接続時に対応予定

### モバイルメニュー
- メインLPのハンバーガーボタンは表示されるが、タップしてもナビゲーションは開かない（onClickハンドラ未実装の箇所あり）
- LP variants ではonClick未接続の箇所あり

### ソーシャルプルーフ（削除済み）
- ヒーローセクションの「導入企業」ロゴ（McKinsey, Deloitte, Goldman Sachs, NRI）は架空のため削除済み
- 実際の導入企業が確保でき次第、復活可能

### コンポーネント重複
- Header / Footer / FAQ / Pricing 等のコンポーネントが3ファイル（page.tsx, cost, easy）で重複
- 今後の改修効率のため `src/components/` への切り出しを推奨

---

## 7. 開発・デプロイ手順

### ローカル開発
```bash
cd ${OUTPUT_BASE}/rakuda-redesign/rakuda-research
npm install
npm run dev        # http://localhost:3000/rakuda-research/
```

### ビルド
```bash
npm run build      # → out/ に静的ファイル生成
```

### デプロイ（GitHub Pages）
```bash
# 1. ソースコードをpush
git add -A && git commit -m "変更内容" && git push origin master

# 2. gh-pagesブランチにデプロイ
TMPDIR=$(mktemp -d) && cp -r out/* "$TMPDIR/" && touch "$TMPDIR/.nojekyll" && \
cd "$TMPDIR" && git init && git checkout -b gh-pages && git add -A && \
git commit -m "deploy" && git remote add origin https://github.com/shuheiuesugi/rakuda-research.git && \
git push -f origin gh-pages
```

### リンクパスのルール
| ページ階層 | 兄弟ページへのリンク | 例 |
|-----------|-------------------|-----|
| ルート直下（/signup, /terms等） | `./` | `href="./signup"` |
| LP配下（/lp/cost, /lp/easy） | `../../` | `href="../../signup"` |
| 外部URL | 絶対パス | `href="https://..."` |

---

## 8. 関連リソース

| リソース | URL |
|---------|-----|
| 引き継ぎマニュアル（全体） | https://drive.google.com/file/d/1R1g2NLrXQgp0sOsZf2q2Zxdf68hAeWGk/view |
| 本番サービス（参考） | https://research.rakuda-ai.com/ |
| 本番リポジトリ（参考） | https://github.com/takahirohonda-ag/rakuda-research |
| RAKUDA Reception LP | https://shuheiuesugi.github.io/rakuda-reception/ |
| RAKUDA Hub LP | https://shuheiuesugi.github.io/rakuda-hub/ |
| RAKUDA Mail LP | https://shuheiuesugi.github.io/rakuda-mail/ |
| RAKUDA Invoice LP | https://shuheiuesugi.github.io/rakuda-invoice/ |

---

## 9. 広告運用クイックスタート

### Step 1: トラッキング設定（所要: 15分）
1. [Google Analytics](https://analytics.google.com/) でプロパティ作成 → Measurement ID取得
2. [Microsoft Clarity](https://clarity.microsoft.com/) でプロジェクト作成 → Project ID取得
3. `src/app/layout.tsx` にGA4・Clarityタグを追加
4. ビルド → デプロイ

### Step 2: 広告出稿
- **Google広告**: メインLP（`/rakuda-research/`）またはコストLP（`/rakuda-research/lp/cost`）に誘導
- **Facebook/Instagram**: Easy LP（`/rakuda-research/lp/easy`）に誘導（非技術者向け）
- **UTM例**: `?utm_source=google&utm_medium=cpc&utm_campaign=research_launch`

### Step 3: 効果測定
- GA4: ページビュー、コンバージョン（sign_up / generate_lead）
- Clarity: ヒートマップ、セッション録画、スクロール深度
