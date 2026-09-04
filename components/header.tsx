'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { business } from '@/content/business'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/projecten', label: 'Projecten' },
  { href: '/tegelzetter', label: 'Werkgebied' },
  { href: '/over-ons', label: 'Over mij' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-paper/90 backdrop-blur-xl border-b border-mist shadow-sm'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="container-x flex h-20 flex-nowrap items-center justify-between">
        <Link href="/" className="group flex shrink-0 items-center gap-2 xl:gap-3" aria-label={business.name}>
          {/* Tegel-mark */}
          <div className="grid grid-cols-2 gap-[3px] transition-transform duration-500 group-hover:rotate-90">
            <span className="block h-3 w-3 rounded-[2px] bg-primary-900" />
            <span className="block h-3 w-3 rounded-[2px] bg-accent-500" />
            <span className="block h-3 w-3 rounded-[2px] bg-accent-500" />
            <span className="block h-3 w-3 rounded-[2px] bg-primary-900" />
          </div>
          <span className="whitespace-nowrap font-display text-xl font-bold tracking-tight text-primary-900">
            Van Wonderen
            <span className="ml-2 font-normal text-primary-500">Tegelwerken</span>
          </span>
        </Link>

        <nav className="hidden shrink-0 lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap px-2.5 py-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-900 xl:px-4"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-accent-500 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:flex items-center gap-2">
          <a
            href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(business.whatsappPrefills.general)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-primary-900 shadow-sm transition-all hover:bg-[#1ebe57] hover:shadow-lg xl:px-5"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="tabular-nums">{business.phone}</span>
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden -mr-2 grid h-10 w-10 place-items-center rounded-full text-primary-900 hover:bg-primary-100"
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden border-t border-mist bg-paper transition-all duration-300 overflow-hidden',
          open ? 'max-h-[480px]' : 'max-h-0'
        )}
      >
        <nav className="container-x py-4 flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3.5 rounded-xl hover:bg-primary-100 font-medium text-base"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-2 mt-3 mb-2">
            <a href={`tel:${business.phoneE164}`} className="btn-primary text-sm" onClick={() => setOpen(false)}>
              <Phone className="h-4 w-4" /> Bellen
            </a>
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-sm"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
