#!/usr/bin/env bash
# Deploy-helper voor wonderentegelwerken.nl
# Gebruik:
#   ./scripts/deploy.sh init      — git init + eerste push naar GitHub
#   ./scripts/deploy.sh vercel    — koppelen aan Vercel + production deploy
#   ./scripts/deploy.sh           — alles in één keer

set -euo pipefail
cd "$(dirname "$0")/.."

CMD="${1:-all}"

cmd_init() {
  if [ -d .git ]; then
    echo "→ git repo bestaat al"
  else
    echo "→ git init"
    git init -b main
    git add .
    git -c user.email="info@wonderentegelwerken.nl" -c user.name="Van Wonderen" commit -m "feat: initial commit van de nieuwe wonderentegelwerken.nl"
  fi

  echo ""
  echo "Maak een lege repo aan op https://github.com/new (naam: 'wonderentegelwerken')"
  echo "en plak de remote-URL hieronder (bijv. https://github.com/bart/wonderentegelwerken.git)"
  read -p "GitHub remote URL: " REMOTE
  git remote add origin "$REMOTE" 2>/dev/null || git remote set-url origin "$REMOTE"
  git push -u origin main
  echo "✓ Code op GitHub"
}

cmd_vercel() {
  if ! command -v vercel &>/dev/null; then
    echo "→ Vercel CLI installeren"
    npm i -g vercel
  fi
  echo "→ Inloggen + project linken"
  vercel link --yes 2>/dev/null || vercel
  echo ""
  echo "→ Environment variables zetten"
  vercel env add RESEND_API_KEY production || true
  echo ""
  echo "→ Production deploy"
  vercel --prod
  echo ""
  echo "✓ Live op Vercel. Zie 'vercel ls' voor de URL."
  echo ""
  echo "Volgende: koppel je TransIP-domein in Vercel:"
  echo "  vercel domains add wonderentegelwerken.nl"
  echo "  vercel domains add www.wonderentegelwerken.nl"
  echo ""
  echo "En zet de DNS records in TransIP (zie DEPLOY.md voor details)."
}

case "$CMD" in
  init)   cmd_init   ;;
  vercel) cmd_vercel ;;
  all)    cmd_init && cmd_vercel ;;
  *)      echo "Onbekend commando: $CMD"; echo "Gebruik: init | vercel | all"; exit 1 ;;
esac
