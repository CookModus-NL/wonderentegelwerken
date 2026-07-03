#!/usr/bin/env bash
# Plaatst alle 46 foto's van wonderentegelwerken.nl in scaffold/public/images/projects/
# Bestandsnamen matchen wat content/projects.ts en content/services.ts verwachten.
#
# Gebruik: vanuit scaffold/ → ./scripts/setup-photos.sh
# Werkt zelfs als je het ZIP-bestand al hebt uitgepakt of als je opnieuw wilt downloaden.

set -euo pipefail

cd "$(dirname "$0")/.."
SCAFFOLD_DIR="$(pwd)"
TARGET="$SCAFFOLD_DIR/public/images/projects"
mkdir -p "$TARGET"

# 1) Probeer eerst de ZIP uit ~/Downloads
ZIP="$HOME/Downloads/wonderentegelwerken-photos.zip"
if [ -f "$ZIP" ]; then
  echo "→ ZIP gevonden in Downloads, uitpakken naar $TARGET"
  TMPDIR=$(mktemp -d)
  unzip -q "$ZIP" -d "$TMPDIR"
  # de ZIP bevat een 'wonderentegelwerken-photos/' map
  if [ -d "$TMPDIR/wonderentegelwerken-photos" ]; then
    cp -f "$TMPDIR/wonderentegelwerken-photos"/* "$TARGET/"
  else
    cp -f "$TMPDIR"/* "$TARGET/"
  fi
  rm -rf "$TMPDIR"
  echo "✓ ZIP geplaatst — $(ls "$TARGET" | wc -l | xargs) foto's"
  exit 0
fi

# 2) Geen ZIP gevonden → download direct van wonderentegelwerken.nl
echo "→ Geen ZIP gevonden, foto's worden direct gedownload van wonderentegelwerken.nl"
echo ""

declare -a URLS=(
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/449286589_449135681309256_7669321983061249563_n.jpg|hero-449286589.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/03/Van-Wonderen-Tegelwerken_0007_Laag-1.jpg|portfolio-2025-03-laag-1a.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/03/Wonderen-Tegelwerken_0000_Laag-2.png|portfolio-2025-03-laag-2.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/03/Wonderen-Tegelwerken_0001_Laag-1.png|portfolio-2025-03-laag-1b.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/03/Van-Wonderen-Tegelwerken_0006_IMG-20250303-WA0006.jpg|portfolio-2025-03-wa0006.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/03/Van-Wonderen-Tegelwerken_0005_IMG-20250303-WA0007.jpg|portfolio-2025-03-wa0007.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/03/Van-Wonderen-Tegelwerken_0004_IMG-20250303-WA0008.jpg|portfolio-2025-03-wa0008.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/03/Van-Wonderen-Tegelwerken_0003_IMG-20250303-WA0009.jpg|portfolio-2025-03-wa0009.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/03/Van-Wonderen-Tegelwerken_0002_IMG-20250303-WA0010.jpg|portfolio-2025-03-wa0010.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/03/Van-Wonderen-Tegelwerken_0001_IMG-20250303-WA0011.jpg|portfolio-2025-03-wa0011.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/03/Van-Wonderen-Tegelwerken_0000_IMG-20250303-WA0012.jpg|portfolio-2025-03-wa0012.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0010_IMG-20250114-WA0076.jpg|portfolio-2025-01-wa0076.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0009_IMG-20250114-WA0077.jpg|portfolio-2025-01-wa0077.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0008_IMG-20250114-WA0078.jpg|portfolio-2025-01-wa0078.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0007_IMG-20250114-WA0059.jpg|portfolio-2025-01-wa0059.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0006_IMG-20250114-WA0060.jpg|portfolio-2025-01-wa0060.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0005_IMG-20250114-WA0061.jpg|portfolio-2025-01-wa0061.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0004_IMG-20250114-WA0062.jpg|portfolio-2025-01-wa0062.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0003_IMG-20250114-WA0063.jpg|portfolio-2025-01-wa0063.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0002_IMG-20250114-WA0064.jpg|portfolio-2025-01-wa0064.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0001_IMG-20250114-WA0065.jpg|portfolio-2025-01-wa0065.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0000_IMG-20250114-WA0066.jpg|portfolio-2025-01-wa0066.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0019_IMG-20250114-WA0067.jpg|portfolio-2025-01-wa0067.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0018_IMG-20250114-WA0068.jpg|portfolio-2025-01-wa0068.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0017_IMG-20250114-WA0069.jpg|portfolio-2025-01-wa0069.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0016_IMG-20250114-WA0070.jpg|portfolio-2025-01-wa0070.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0015_IMG-20250114-WA0071.jpg|portfolio-2025-01-wa0071.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0014_IMG-20250114-WA0072.jpg|portfolio-2025-01-wa0072.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0013_IMG-20250114-WA0073.jpg|portfolio-2025-01-wa0073.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0012_IMG-20250114-WA0074.jpg|portfolio-2025-01-wa0074.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/01/Van-Wonderen-Tegelwerken_0011_IMG-20250114-WA0075.jpg|portfolio-2025-01-wa0075.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0013_Laag-2.jpg|portfolio-2025-07-laag-2.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0014_Laag-1.jpg|portfolio-2025-07-laag-1.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0000_Laag-15.jpg|portfolio-2025-07-laag-15.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0001_Laag-14.jpg|portfolio-2025-07-laag-14.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0002_Laag-13.jpg|portfolio-2025-07-laag-13.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0003_Laag-12.jpg|portfolio-2025-07-laag-12.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0012_Laag-3-1.jpg|portfolio-2025-07-laag-3.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0004_Laag-11-1.jpg|portfolio-2025-07-laag-11.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0005_Laag-10-1.jpg|portfolio-2025-07-laag-10.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0006_Laag-9-1.jpg|portfolio-2025-07-laag-9.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0007_Laag-8-1.jpg|portfolio-2025-07-laag-8.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0008_Laag-7-1.jpg|portfolio-2025-07-laag-7.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0009_Laag-6-1.jpg|portfolio-2025-07-laag-6.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0010_Laag-5-1.jpg|portfolio-2025-07-laag-5.webp"
  "https://wonderentegelwerken.nl/wp-content/uploads/2025/07/Van-wonderen-Tegelwerken_0011_Laag-4-1.jpg|portfolio-2025-07-laag-4.webp"
)

ok=0; fail=0
for entry in "${URLS[@]}"; do
  url="${entry%%|*}"
  name="${entry##*|}"
  if curl -fsSL -H "Accept: image/webp,image/jpeg" -o "$TARGET/$name" "$url"; then
    ok=$((ok+1))
    printf "."
  else
    echo ""
    echo "✗ $name"
    fail=$((fail+1))
  fi
done
echo ""
echo ""
echo "✓ $ok foto's geplaatst in $TARGET"
[ $fail -gt 0 ] && echo "⚠ $fail mislukt"
