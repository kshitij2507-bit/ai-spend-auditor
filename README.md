# AI Spend Auditor

A free web app that helps startups instantly audit their monthly AI tool expenses, identify overspending, and discover cheaper alternatives — while generating qualified leads for Credex.

##  Features
- Input form for AI tools (ChatGPT, Claude, Copilot, Gemini, etc.)
- Audit engine with verified pricing data
- Results page with savings breakdown
- AI‑generated personalized summary (Claude API)
- Lead capture (email + company info)
- Shareable public result URL with Open Graph tags

##  Tech Stack
- Frontend: Next.js + TypeScript + TailwindCSS
- Backend: Supabase (Postgres + Auth + Storage)
- AI Integration: Anthropic Claude API
- Deployment: Vercel
- CI/CD: GitHub Actions

##  Repo Files
- `ARCHITECTURE.md` — system diagram + data flow
- `DEVLOG.md` — 7 daily entries
- `REFLECTION.md` — debugging, decisions, AI usage
- `PRICING_DATA.md` — verified pricing URLs
- `PROMPTS.md` — Claude prompt + fallback logic
- `TESTS.md` — unit tests for audit engine
- `.github/workflows/ci.yml` — lint + test workflow

## 🌐 Deployment
Deployed at: https://ai-spend-auditor.vercel.app
