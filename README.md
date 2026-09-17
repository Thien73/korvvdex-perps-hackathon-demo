# KorvvDex — Solana Perps Hackathon Demo

**Thin public demo** for the [Solana Perps & Prediction Markets](https://hackathons.solana.com/hackathons/perps-and-prediction-markets) hackathon.

Cash-settled **GPU compute futures** on Solana with **two separate contract series**:

| Series | Reference | Rule |
| --- | --- | --- |
| Ornn OCPI | Ornn compute price index | Standalone market |
| Silicon Data | Silicon Data GPU reference | Standalone market |

**Never averaged.** Each trade picks exactly one series.

## Honesty (read this)

- Public desk is **paper / test** — not live customer trading: https://korvvdex.com
- We **consume** external references; we do **not** claim Ornn or Silicon Data partnerships
- This repo is a **demo**, not the full production stack (keys, infra, and proprietary matching stay private)
- Soft / TBD seed · contact **ta@korvv.com**

## Why Solana

Settlement and stablecoin collateral need cheap, fast finality. A compute futures desk belongs where perps / prediction market structure already compounds — Solana.

## Live demo (primary)

**Judges: open the paper desk → [https://korvvdex.com](https://korvvdex.com)**

That site is the official hackathon demo. This repo is supporting code + honesty docs + an offline dual-series walkthrough (`npm run demo`). Do not treat this repo as a replacement for the desk.

## Quick start

```bash
npm run demo
```

No RPC keys required for the default offline walkthrough.

## Links

- Desk (paper): https://korvvdex.com
- Company: https://korvv.com
- Contact: ta@korvv.com

## Brand

**Korvv / KorvvDex only** — not Yamanaka, not an Ornn product, not NimbusIndex.

## License

MIT © 2026 Korvv / Thien Ta — see `LICENSE`.
