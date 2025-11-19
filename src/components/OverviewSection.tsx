import {
  Activity,
  ArrowUpRight,
  LogIn,
  ShieldCheck,
} from 'lucide-react'
import { conversionRate } from '../data/dashboard.tsx'

export function OverviewSection() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="flex-1 space-y-6">
        <span className="dashly-chip inline-flex w-fit items-center gap-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em]">
          <Activity className="h-4 w-4" />
          KPI live
        </span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Mini dashboard analytics per piccoli business
        </h1>
        <p className="dashly-muted text-lg leading-relaxed">
          Dashly ti mostra vendite giornaliere, conversion rate e ordini
          senza complesse integrazioni. Ideale per e-commerce locali e
          freelancer che vogliono crescere con dati chiari.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#analytics"
            className="dashly-primary-btn inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold"
          >
            Esplora dati
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#login"
            className="dashly-secondary-btn inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold"
          >
            Login demo
            <LogIn className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:max-w-xl">
          <div className="dashly-panel rounded-2xl p-4 shadow-sm">
            <p className="dashly-muted text-xs font-semibold uppercase tracking-wider">
              Visitatori oggi
            </p>
            <p className="mt-2 text-3xl font-semibold">5.8K</p>
            <p
              className="text-xs font-medium"
              style={{ color: 'var(--dash-positive)' }}
            >
              +8% vs ieri
            </p>
          </div>
          <div className="dashly-panel rounded-2xl p-4 shadow-sm">
            <p className="dashly-muted text-xs font-semibold uppercase tracking-wider">
              Conversion rate
            </p>
            <p className="mt-2 text-3xl font-semibold">
              {conversionRate.toFixed(1)}%
            </p>
            <p
              className="text-xs font-medium"
              style={{ color: 'var(--dash-info)' }}
            >
              +0,6% questa settimana
            </p>
          </div>
        </div>
      </div>
      <div className="dashly-panel rounded-3xl p-6 text-sm shadow-xl">
        <div className="flex items-center gap-3">
          <ShieldCheck
            className="h-10 w-10 rounded-2xl bg-white/10 p-2"
            style={{ color: 'var(--dash-positive)' }}
          />
          <div>
            <p className="text-sm font-semibold">
              Pensata per team micro
            </p>
            <p className="dashly-muted text-xs">
              Aggiornamenti automatici ogni 5 minuti
            </p>
          </div>
        </div>
        <ul className="mt-6 space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-semibold">
              1
            </span>
            KPI cards animate per seguire la crescita.
          </li>
          <li className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-semibold">
              2
            </span>
            Dark mode automatico per turni serali.
          </li>
          <li className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-semibold">
              3
            </span>
            Login demo senza toccare i dati reali.
          </li>
        </ul>
        <div
          className="dashly-divider mt-6 rounded-2xl border border-dashed p-4 text-xs"
          style={{
            background:
              'color-mix(in srgb, var(--dash-panel) 65%, transparent)',
          }}
        >
          Ultimo aggiornamento: <strong>6 minuti fa</strong>
        </div>
      </div>
    </div>
  )
}

