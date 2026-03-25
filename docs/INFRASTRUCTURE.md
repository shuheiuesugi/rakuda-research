# RAKUDAリサーチ — インフラストラクチャ

## サービス概要
| 項目 | 値 |
|------|-----|
| サービス名 | RAKUDAリサーチ |
| 本番URL | https://research.rakuda-ai.com |
| LP URL | https://shuheiuesugi.github.io/rakuda-research/ |
| ドメイン | rakuda-ai.com（Cloudflare DNS管理） |

## ホスティング
| 環境 | プラットフォーム | 詳細 |
|------|-----------------|------|
| 本番 | Vercel | Team: collectors-republic |
| LP | GitHub Pages | shuheiuesugi/rakuda-research gh-pages branch |

## データベース
| サービス | 詳細 |
|---------|------|
| Supabase | Project: rakuda-ai |
| DB Host | db.egywrshetfpteackgswk.supabase.co |
| ORM | Prisma（DB user: prisma_user） |

## 認証
| 方式 | 詳細 |
|------|------|
| OAuth | Google OAuth via Supabase Auth |
| Client ID | 316583935995-mkcjrp6g9f8q6ogodqn443r07mgl447u.apps.googleusercontent.com |

## AI API
| サービス | 環境変数名 |
|---------|-----------|
| Anthropic (Claude) | ANTHROPIC_API_KEY |
| OpenAI | OPENAI_API_KEY |
| Gemini | GEMINI_API_KEY |

## メール送信
| サービス | ドメイン | 制限 |
|---------|---------|------|
| Resend | rakuda-ai.com (verified) | 100通/日、3,000通/月（無料枠） |

## 決済
| サービス | モード |
|---------|--------|
| Stripe | テストモード |

## DNS / CDN
| サービス | Zone |
|---------|------|
| Cloudflare | rakuda-ai.com |
| Email Routing | info@rakuda-ai.com → takahiro.honda@aviondor.com |

## 全サービスURL一覧
| サービス | URL |
|---------|-----|
| ポータル | rakuda-ai.com |
| Research | research.rakuda-ai.com |
| Speak | speak.rakuda-ai.com |
| Post | post.rakuda-ai.com |
| Invoice | invoice.rakuda-ai.com |
| Hub | hub.rakuda-ai.com |
| Mail | mail.rakuda-ai.com |
| Reception | reception.rakuda-ai.com |
