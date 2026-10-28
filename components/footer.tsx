import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { business } from '@/content/business'
import { services } from '@/content/services'

export function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-300 mt-0 relative overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent" />

      <div className="container-x pt-20 pb-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <Link href="/" className="raaklink gap-3">
              <div className="grid grid-cols-2 gap-[3px]">
                <span className="block h-3 w-3 rounded-[2px] bg-paper" />
                <span className="block h-3 w-3 rounded-[2px] bg-accent-500" />
                <span className="block h-3 w-3 rounded-[2px] bg-accent-500" />
                <span className="block h-3 w-3 rounded-[2px] bg-paper" />
              </div>
              <span className="font-display text-xl font-bold text-paper">
                Van Wonderen <span className="font-normal text-primary-300">Tegelwerken</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-base leading-relaxed text-primary-300">
              Jaap van Wonderen. Jouw vaste tegelzetter in Breda en West-Brabant. Persoonlijk vakwerk voor badkamer, vloer, wand, terras en kitwerk. Sinds 2022.
            </p>
            {/* Het nummer en het mailadres zijn de twee directe kanalen van deze
                klant; ze dragen daarom .raaklink en niet de regelhoogte van de
                tekst eromheen (DESIGN.md > contract.raakvlak_hard). */}
            <div className="mt-8 flex flex-col gap-1 text-sm">
              <a href={`tel:${business.phoneE164}`} className="raaklink group gap-2 text-paper hover:text-accent-300 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="tabular-nums font-semibold">{business.phone}</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
              </a>
              <a href={`mailto:${business.email}`} className="raaklink group gap-2 hover:text-accent-300 transition-colors">
                <Mail className="h-4 w-4" />
                {business.email}
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
              </a>
              <div className="mt-2 inline-flex items-start gap-2 text-primary-300">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{business.address.street}<br/>{business.address.postalCode} {business.address.city}</span>
              </div>
            </div>
          </div>

          {/* Diensten */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-paper">Diensten</h3>
            {/* Geen space-y: de raakhoogte IS de regelafstand. Met 12px
                tussenruimte en 44px hitvlakken zouden twee dienstlinks elkaar
                15px overlappen, en dan opent de bezoeker juist vaker de
                verkeerde dienst. Zie DESIGN.md > contract.raakvlak_hard. */}
            <ul className="mt-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/diensten/${s.slug}`} className="raaklink text-primary-300 hover:text-paper transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informatie */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-paper">Site</h3>
            <ul className="mt-3 text-sm">
              {[
                ['/projecten', 'Projecten'],
                ['/tegelzetter', 'Werkgebied'],
                ['/over-ons', 'Over mij'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className="raaklink text-primary-300 hover:text-paper transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Juridisch */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-paper">Juridisch</h3>
            <ul className="mt-3 text-sm">
              <li><Link href="/privacy" className="raaklink text-primary-300 hover:text-paper transition-colors">Privacy</Link></li>
              <li><Link href="/algemene-voorwaarden" className="raaklink text-primary-300 hover:text-paper transition-colors">Algemene voorwaarden</Link></li>
            </ul>
            <div className="mt-4 space-y-1 text-xs text-primary-300">
              <div>KvK {business.kvk}</div>
              <div>SBI 4333</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-primary-800">
        <div className="container-x py-6 flex flex-col gap-3 text-xs text-primary-300 md:flex-row md:justify-between md:items-center">
          <div>© {new Date().getFullYear()} {business.legalName} · alle rechten voorbehouden</div>
          <div className="flex items-center gap-2">
            <span>Vakwerk uit Breda</span>
            <span className="h-1 w-1 rounded-full bg-accent-500" />
            {/* Bouwerscredit. Merknaam als ankertekst, niet een zoekterm — een
                credit hoort te zeggen wie het bouwde, niet waar l3art op wil ranken. */}
            <a
              href="https://l3art.nl"
              target="_blank"
              rel="noopener"
              className="raaklink normal-case transition-colors hover:text-accent-300"
            >
              Powered by l3art.nl
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
