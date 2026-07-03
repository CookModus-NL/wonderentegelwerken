# Deploy-handleiding — wonderentegelwerken.nl naar Vercel + TransIP

Van scaffold naar live website in ongeveer 30 minuten. Domein staat al in TransIP — alleen de DNS-koppeling met Vercel hoeft nog gemaakt.

---

## TL;DR — als je weet wat je doet

```bash
cd scaffold
./scripts/setup.sh     # dependencies + foto's + build test
./scripts/deploy.sh    # git init + push + Vercel deploy
```

Daarna in Vercel: domain toevoegen, in TransIP de twee DNS-records zetten (zie hieronder).

---

## Stap 1 — Lokale setup

### 1.1 Foto's en dependencies

```bash
cd scaffold
./scripts/setup.sh
```

Dit script doet:
- `npm install`
- Foto's plaatsen — eerst zoekt het naar `~/Downloads/wonderentegelwerken-photos.zip`, anders downloadt het de 46 foto's direct van de huidige site
- `.env.local` aanmaken
- Test build draaien

### 1.2 Lokaal previewen

```bash
npm run dev
# Open http://localhost:3000
```

Check alle pagina's:
- `/` — homepage
- `/diensten` + `/diensten/badkamer-renovatie` (en 5 andere)
- `/projecten` + `/projecten/badkamer-juli-2025` (en 2 andere)
- `/over-ons`, `/werkgebied`, `/contact`, `/privacy`, `/algemene-voorwaarden`

### 1.3 Resend API key (voor contactformulier)

1. Maak gratis account op [resend.com](https://resend.com) (gratis tot 3.000 mails/maand)
2. Kopieer de API-key uit dashboard → API Keys
3. Plak in `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxx
   ```
4. **Voordat je domein geverifieerd is in Resend**, mailt het systeem vanaf `onboarding@resend.dev`. Verifieer in Resend → Domains → Add Domain (`wonderentegelwerken.nl`), zet de 3 verificatie-records in TransIP-DNS, en wijzig in `lib/email.ts` de `from: 'Website <noreply@${domain}>'` regel naar je echte domein.

---

## Stap 2 — Push naar GitHub

### 2.1 Maak een GitHub repo aan

Ga naar [github.com/new](https://github.com/new):
- Repository name: `wonderentegelwerken`
- Owner: jouw GitHub account
- Visibility: **Private** (er staat geen geheime data in, maar het is geen open source project)
- LEEG laten (geen README, gitignore of license — die maken we lokaal)

### 2.2 Push de code

```bash
cd scaffold
./scripts/deploy.sh init
# Plak je github URL als gevraagd
```

Of handmatig:
```bash
cd scaffold
git init -b main
git add .
git commit -m "feat: initial commit"
git remote add origin https://github.com/JOUW_GH_USER/wonderentegelwerken.git
git push -u origin main
```

---

## Stap 3 — Deploy naar Vercel

### 3.1 Vercel-account

Als je nog geen Vercel-account hebt: maak er één aan op [vercel.com/signup](https://vercel.com/signup) — gebruik dezelfde GitHub-account waar je de repo op hebt staan.

### 3.2 Project importeren

1. Ga naar [vercel.com/new](https://vercel.com/new)
2. Kies "Import Git Repository" → selecteer `wonderentegelwerken`
3. Framework Preset: **Next.js** (auto-detect)
4. Root Directory: laat leeg
5. Environment Variables: voeg toe:
   - `RESEND_API_KEY` → jouw key
6. Klik **Deploy**

Na ~2 minuten staat de site live op een `*.vercel.app` URL. Test of alles werkt.

### 3.3 Custom domein koppelen

In Vercel: `Project Settings → Domains → Add Domain`.

Voeg twee domains toe:
- `wonderentegelwerken.nl`
- `www.wonderentegelwerken.nl`

Vercel toont nu welke DNS records je moet zetten. Het zijn deze twee:

| Type | Naam | Waarde |
|---|---|---|
| **A** | `@` (of leeg) | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

---

## Stap 4 — DNS records in TransIP

### 4.1 Naar het DNS-paneel

Log in op TransIP → ga naar je domein `wonderentegelwerken.nl` (URL ziet eruit als `transip.nl/cp/domein-hosting/domeinnaam/prm/203992899/wonderentegelwerken.nl/`) → tabblad **DNS**.

### 4.2 Bestaande records verwijderen

Verwijder alle bestaande A-records voor `@` en `www` die wijzen naar de oude WordPress hosting. Behoud MX-records als hij e-mail via een andere provider heeft.

### 4.3 Nieuwe records toevoegen

**A-record voor apex (`@`)**

| Veld | Waarde |
|---|---|
| Type | A |
| Naam | `@` |
| TTL | 86400 (of standaard) |
| Waarde | `76.76.21.21` |

**CNAME voor www**

| Veld | Waarde |
|---|---|
| Type | CNAME |
| Naam | `www` |
| TTL | 86400 |
| Waarde | `cname.vercel-dns.com.` |

### 4.4 Wachten

DNS-propagatie duurt 5 minuten tot 48 uur (meestal binnen het uur). Check met:

```bash
dig wonderentegelwerken.nl +short
# Verwacht: 76.76.21.21

dig www.wonderentegelwerken.nl +short
# Verwacht: cname.vercel-dns.com → een IP
```

Of online: [dnschecker.org](https://dnschecker.org).

### 4.5 SSL

Zodra DNS klopt, regelt Vercel automatisch een SSL-certificaat via Let's Encrypt. Geen actie nodig.

---

## Stap 5 — Na go-live

### 5.1 Google Search Console

1. Ga naar [search.google.com/search-console](https://search.google.com/search-console)
2. Voeg property toe: `https://wonderentegelwerken.nl`
3. Verifieer via DNS-record (TransIP) of door HTML-bestand (Vercel)
4. Submit de sitemap: `https://wonderentegelwerken.nl/sitemap.xml`

### 5.2 Google Business Profile

Zie `../content/05-google-business-profile.md` voor de complete setupgids.

### 5.3 Bing Webmaster Tools

[bing.com/webmasters](https://bing.com/webmasters) — importeer rechtstreeks vanuit Google Search Console.

### 5.4 Vercel Analytics

In Vercel dashboard: `Analytics` tab — staat al klaar. Geen extra config nodig.

---

## Troubleshooting

**"Build failed: Resend API key missing"**
→ Je hebt nog geen `RESEND_API_KEY` in Vercel gezet. Project Settings → Environment Variables → Add → re-deploy.

**"Domain not pointing to Vercel"**
→ Wacht 30 minuten voor DNS-propagatie. Check `dig @1.1.1.1 wonderentegelwerken.nl`.

**"Images not loading"**
→ Foto's zitten niet in `public/images/projects/`. Run `./scripts/setup-photos.sh` opnieuw.

**Contactformulier komt niet aan**
→ Check Vercel Logs (Project → Functions → /api/contact). Verifieer dat Resend API-key correct is. Check Resend-dashboard voor delivery status.

---

## Updates publiceren

Na de eerste deploy is elke `git push` naar `main` automatisch een nieuwe Vercel deploy. Lokaal:

```bash
# Wijziging maken in code
git add .
git commit -m "docs: update telefoonnummer"
git push
# → Vercel deployed automatisch binnen 2 min
```

Voor inhoud (nieuw project toevoegen, prijs aanpassen): bewerk `content/business.ts`, `content/services.ts` of `content/projects.ts` en push.

---

## Bedrijfsgegevens om dubbel te checken vóór live

- [ ] KvK 86555499 ✓ (geverifieerd)
- [ ] BTW-nummer: `NL[invullen]B01` ← **VRAAG AAN EIGENAAR**
- [ ] Adres: Bollaard 39, 4847AX Teteringen (KvK-register)
- [ ] Telefoon: 06-18249249 ✓
- [ ] E-mail: info@wonderentegelwerken.nl ✓
- [ ] Naam van eigenaar in privacyverklaring en AV ← **VRAAG AAN EIGENAAR**
- [ ] Werkgebied — 16 plaatsen klopt? ← **CHECK MET EIGENAAR**
- [ ] Prijsindicaties in services.ts ← **CHECK MET EIGENAAR**
