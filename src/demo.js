#!/usr/bin/env node
/**
 * KorvvDex — offline dual-series paper demo (hackathon-safe).
 * No RPC / no keys required.
 */

const SERIES = {
  ORNN_OCPI: {
    id: 'ORNN_OCPI',
    label: 'Ornn OCPI',
    unit: 'USD / GPU-hr',
    fixing: 2.40,
  },
  SILICON_DATA: {
    id: 'SILICON_DATA',
    label: 'Silicon Data',
    unit: 'USD / GPU-hr',
    fixing: 2.55,
  },
};

function assertNeverAveraged(seriesId) {
  if (!SERIES[seriesId]) throw new Error('Unknown series');
  // Explicit: we never invent a blended index.
  return SERIES[seriesId];
}

function paperTrade({ seriesId, side, sizeGpuHr, entry }) {
  const series = assertNeverAveraged(seriesId);
  const fixing = series.fixing;
  const dir = side === 'long' ? 1 : -1;
  const pnlUsdc = dir * (fixing - entry) * sizeGpuHr;
  return { series, side, sizeGpuHr, entry, fixing, pnlUsdc };
}

function main() {
  console.log('=== KorvvDex dual-series paper demo ===');
  console.log('Honesty: paper/test · series never averaged · no live customer trading\n');

  console.log('Listed markets:');
  for (const s of Object.values(SERIES)) {
    console.log(`  • ${s.label} (${s.id}) — ${s.unit}`);
  }
  console.log('  ✗ No blended “GPU Index” market (forbidden)\n');

  const hedge = paperTrade({
    seriesId: 'ORNN_OCPI',
    side: 'short',
    sizeGpuHr: 10_000,
    entry: 2.5,
  });

  console.log('Provider hedge (short rental risk) on Ornn OCPI only:');
  console.log(`  size=${hedge.sizeGpuHr} GPU-hr · entry=${hedge.entry} · fixing=${hedge.fixing}`);
  console.log(`  cash PnL (USDC terms)= ${hedge.pnlUsdc.toFixed(2)}`);
  console.log('\nSettlement story: trade print → series-specific fixing → USDC cash PnL on Solana.');
  console.log('Desk: https://korvvdex.com · Company: https://korvv.com · ta@korvv.com');
}

main();
