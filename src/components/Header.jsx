import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const nav = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-gray-900">Mediabay</a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map(n => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">{n.label}</a>
          ))}
          <a href="#contact" className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-gray-800">Get in touch</a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white p-4 md:hidden">
          <div className="flex flex-col space-y-3">
            {nav.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700">{n.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white">Get in touch</a>
          </div>
        </div>
      )}
    </header>
  )
}
