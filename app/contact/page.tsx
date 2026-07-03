import Image from 'next/image'
import { MessageCircle, Phone, Mail, MapPin, Clock, Camera, Zap, Shield } from 'lucide-react'
import { business } from '@/content/business'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact · vrijblijvende offerte via WhatsApp',
  description: 'Stuur Jaap van Van Wonderen Tegelwerken een WhatsApp met je vraag of foto’s van je ruimte. Binnen 1 werkdag een eerste prijsindicatie. Of bel direct 06-18249249.',
}

const waNumber = business.whatsapp.replace('+', '')
const waText = encodeURIComponent(business.whatsappPrefills.offerte)

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-paper pt-16 pb-12 lg:pt-24">
        <div aria-hidden className="absolute inset-0 -z-10 tile-pattern opacity-30" />
        <div aria-hidden className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-accent-100 to-transparent blur-3xl opacity-60" />

        <div className="container-x">
          <div className="max-w-3xl reveal">
            <div className="eyebrow">Contact</div>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-primary-900 sm:text-6xl lg:text-7xl leading-[1.02]">
              Stuur me een<br/>
              <span className="italic font-light text-primary-600">WhatsAppje.</span>
            </h1>
            <p className="mt-8 text-lg text-primary-600 max-w-xl leading-relaxed">
              Snelste route: foto’s van je ruimte sturen via WhatsApp. Binnen 1 werkdag krijg je een eerste prijsindicatie of plannen we een vrijblijvende afspraak.
            </p>
          </div>
        </div>
      </section>

      {/* PRIMARY CTA - WHATSAPP */}
      <section className="bg-paper py-12 lg:pb-24">
        <div className="container-x">
          <a
            href={`https://wa.me/${waNumber}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-[2.5rem] bg-[#25D366] p-10 lg:p-16 transition-all hover:shadow-2xl reveal"
          >
            <div aria-hidden className="absolute top-0 right-0 grid grid-cols-5 gap-2 opacity-10 p-12">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="h-12 w-12 rounded bg-white" />
              ))}
            </div>
            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 text-white">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/90">
                  <span className="inline-flex h-2 w-2 rounded-full bg-white animate-pulse" />
                  Voorkeurskanaal · snelste reactie
                </div>
                <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
                  WhatsApp Jaap
                </h2>
                <p className="mt-5 text-xl text-white/90 font-medium">
                  {business.phone}
                </p>
                <ul className="mt-8 grid gap-3 text-base text-white/95 sm:grid-cols-2">
                  <li className="flex items-start gap-2"><Camera className="h-5 w-5 mt-0.5 shrink-0" /> Stuur direct foto’s</li>
                  <li className="flex items-start gap-2"><Zap className="h-5 w-5 mt-0.5 shrink-0" /> Reactie binnen 1 werkdag</li>
                  <li className="flex items-start gap-2"><Shield className="h-5 w-5 mt-0.5 shrink-0" /> Vrijblijvend en gratis</li>
                  <li className="flex items-start gap-2"><Clock className="h-5 w-5 mt-0.5 shrink-0" /> Geen verplichtingen</li>
                </ul>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <div className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-bold text-[#25D366] shadow-2xl transition-transform group-hover:scale-105">
                  <MessageCircle className="h-7 w-7" />
                  Start chat
                </div>
              </div>
            </div>
          </a>

          {/* Secondaire kanalen */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a
              href={`tel:${business.phoneE164}`}
              className="group flex items-center gap-4 rounded-3xl border border-mist bg-paper p-6 transition-all hover:border-accent-300 hover:bg-white hover:shadow-md"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-900 text-paper transition-all group-hover:bg-accent-500">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary-500">Bel direct</div>
                <div className="font-display text-lg font-semibold">{business.phone}</div>
              </div>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="group flex items-center gap-4 rounded-3xl border border-mist bg-paper p-6 transition-all hover:border-accent-300 hover:bg-white hover:shadow-md"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-900 text-paper transition-all group-hover:bg-accent-500">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary-500">E-mail</div>
                <div className="font-display text-base font-semibold truncate">{business.email}</div>
              </div>
            </a>

            <div className="group flex items-start gap-4 rounded-3xl border border-mist bg-paper p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-900 text-paper">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary-500">Bereikbaar</div>
                <div className="text-sm text-primary-700 leading-relaxed">
                  Ma–vr 07:00 – 19:00<br/>
                  Za op afspraak
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAAROM WHATSAPP */}
      <section className="bg-clay py-20">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">Waarom WhatsApp</div>
            <h2 className="mt-4 font-display text-4xl font-bold text-primary-900 sm:text-5xl">
              Geen formulieren,<br/>
              <span className="italic font-light text-primary-600">geen telefooncircus.</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                num: '01',
                title: 'Stuur foto’s + maten',
                body: 'Een paar telefoonfoto’s van de ruimte en de globale maten zijn vaak al genoeg voor een eerste indicatie.',
              },
              {
                num: '02',
                title: 'Ik reageer dezelfde dag',
                body: 'Geen wachten. Doordeweeks meestal binnen een paar uur, anders uiterlijk de volgende werkdag.',
              },
              {
                num: '03',
                title: 'Vrijblijvend langskomen',
                body: 'Bij interesse plan ik een afspraak om de ruimte op te meten en de offerte uit te werken. Geen verplichtingen.',
              },
            ].map((s) => (
              <div key={s.num} className="reveal">
                <div className="font-display text-7xl font-bold text-accent-500/30 leading-none">{s.num}</div>
                <h3 className="mt-4 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-primary-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEDRIJFSGEGEVENS */}
      <section className="bg-paper py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="eyebrow">Bedrijfsgegevens</div>
              <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                Wie ben ik?
              </h2>
              <p className="mt-6 text-primary-600 leading-relaxed">
                Ik ben Jaap van Wonderen, tegelzetter uit Breda sinds 2022. Geen onderaannemers, geen tussenpersonen. Vanaf het eerste WhatsAppje tot de oplevering krijg je dezelfde vakman op de klus.
              </p>
            </div>

            <div className="lg:col-span-7">
              <dl className="grid gap-x-12 gap-y-6 sm:grid-cols-2 rounded-3xl border border-mist bg-clay p-8">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-primary-500">Adres</dt>
                  <dd className="mt-2 flex items-start gap-2 text-primary-900">
                    <MapPin className="h-4 w-4 mt-1 text-accent-500" />
                    <span>{business.address.street}<br/>{business.address.postalCode} {business.address.city}</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-primary-500">KvK</dt>
                  <dd className="mt-2 font-display text-lg font-semibold text-primary-900">{business.kvk}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-primary-500">Telefoon / WhatsApp</dt>
                  <dd className="mt-2 font-display text-lg font-semibold text-primary-900">{business.phone}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-primary-500">E-mail</dt>
                  <dd className="mt-2 break-words text-primary-900">{business.email}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
