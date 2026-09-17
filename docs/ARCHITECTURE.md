# Architecture (demo scope)

```
Trader → pick SERIES (Ornn OCPI | Silicon Data)
      → paper order (size, side, collateral USDC)
      → reference fixing for THAT series only
      → cash PnL in USDC terms
      → Solana settlement path (demo: simulated print)
```

Out of scope for this repo: production CLOB, custody, oracle vendor contracts, mainnet keys.
