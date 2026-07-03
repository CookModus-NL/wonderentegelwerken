#!/usr/bin/env bash
# One-shot setup van de scaffold:
#   1. Dependencies installeren
#   2. Foto's plaatsen (uit ~/Downloads ZIP of via live download)
#   3. .env.local-sjabloon klaarzetten
#   4. Build test
#
# Gebruik vanuit scaffold/: ./scripts/setup.sh

set -euo pipefail
cd "$(dirname "$0")/.."

echo "════════════════════════════════════════════"
echo " Van Wonderen Tegelwerken — scaffold setup"
echo "════════════════════════════════════════════"
echo ""

# ─── 1. Dependencies ─────────────────────────────
if [ ! -d node_modules ] || [ ! -f node_modules/next/package.json ]; then
  echo "→ npm install"
  npm install --no-audit --no-fund --loglevel=error
else
  echo "→ node_modules al aanwezig"
fi
echo ""

# ─── 2. Foto's ──────────────────────────────────
echo "→ Foto's plaatsen"
./scripts/setup-photos.sh
echo ""

# ─── 3. Environment ─────────────────────────────
if [ ! -f .env.local ]; then
  echo "→ .env.local aanmaken vanuit .env.example"
  cp .env.example .env.local
  echo "  ⚠ Vergeet niet RESEND_API_KEY in te vullen (gratis op resend.com)"
else
  echo "→ .env.local bestaat al"
fi
echo ""

# ─── 4. Build test ──────────────────────────────
echo "→ Test build (~30s)"
RESEND_API_KEY="${RESEND_API_KEY:-re_dummy_for_build}" NEXT_TELEMETRY_DISABLED=1 npm run build > /tmp/scaffold-build.log 2>&1 || {
  echo "✗ Build mislukt — zie /tmp/scaffold-build.log"
  tail -30 /tmp/scaffold-build.log
  exit 1
}
echo "✓ Build succesvol"
echo ""

echo "════════════════════════════════════════════"
echo " Klaar. Volgende stappen:"
echo "════════════════════════════════════════════"
echo ""
echo "  Lokaal draaien:        npm run dev    →  http://localhost:3000"
echo "  Naar GitHub pushen:    ./scripts/deploy.sh init"
echo "  Naar Vercel deployen:  vercel --prod"
echo ""
