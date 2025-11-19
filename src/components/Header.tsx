import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { LogIn, Moon, Sun } from 'lucide-react'

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Ordini', href: '#orders' },
  { label: 'Login demo', href: '#login' },
]

const getInitialTheme = () => {
  if (typeof window === 'undefined') return true
  const stored = window.localStorage.getItem('dashly-theme')
  if (stored) {
    return stored === 'dark'
  }
  if (typeof window.matchMedia === 'function') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
}

export default function Header() {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme)

  useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('dashly-theme', isDark ? 'dark' : 'light')
    }
  }, [isDark])

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-xl"
      style={{
        background: 'var(--dash-header-bg)',
        borderColor: 'var(--dash-border)',
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <span className="dashly-logo-chip flex h-11 w-11 items-center justify-center text-lg font-semibold">
            D
          </span>
          <div className="leading-tight">
            <p className="text-base font-semibold tracking-tight">Dashly</p>
            <p className="dashly-muted text-xs">
              Insight hub per micro business
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="dashly-nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#login"
            className="dashly-primary-btn hidden items-center gap-2 px-4 py-2 text-sm font-semibold lg:flex"
          >
            <LogIn size={16} />
            Prova demo
          </a>

          <button
            type="button"
            className="dashly-icon-btn inline-flex h-10 w-10 items-center justify-center"
            aria-label="Toggle dark mode"
            aria-pressed={isDark}
            onClick={() => setIsDark((prev) => !prev)}
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
      <div className="dashly-info-bar px-6 py-2 text-xs md:hidden">
        Scorri per scoprire le funzioni: vendite, conversioni e login demo.
      </div>
    </header>
  )
}
