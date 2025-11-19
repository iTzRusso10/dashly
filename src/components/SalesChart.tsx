import { LineChart, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import type { SalesPoint } from '../types/dashboard'

type SalesChartProps = {
  data: Array<SalesPoint>
}

const euroFormatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

const formatCompactEuro = (value: number) => {
  if (value >= 1000) {
    return `€${(value / 1000).toFixed(1)}K`
  }
  return `€${value.toFixed(0)}`
}

const buildChartGeometry = (data: Array<SalesPoint>) => {
  const maxRevenue = Math.max(...data.map((point) => point.revenue), 1)
  const denominator = Math.max(data.length - 1, 1)

  const coordinates = data.map((point, index) => {
    const x = Number(((index / denominator) * 100).toFixed(2))
    const y = Number((100 - (point.revenue / maxRevenue) * 100).toFixed(2))
    return { x, y }
  })

  const polylinePoints = coordinates
    .map((coord) => `${coord.x},${coord.y}`)
    .join(' ')

  const areaPath = [
    'M0,100',
    ...coordinates.map((coord) => `L${coord.x},${coord.y}`),
    'L100,100',
    'Z',
  ].join(' ')

  return {
    maxRevenue,
    polylinePoints,
    areaPath,
  }
}

export function SalesChart({ data }: SalesChartProps) {
  const [activeDay, setActiveDay] = useState<SalesPoint>(data[data.length - 1])

  const chartGeometry = buildChartGeometry(data)
  const conversionForDay = activeDay.visitors
    ? (activeDay.orders / activeDay.visitors) * 100
    : 0

  return (
    <article className="dashly-panel rounded-[32px] p-6 shadow-xl shadow-black/10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="dashly-muted flex items-center gap-2 text-sm font-semibold">
            <LineChart
              className="h-4 w-4"
              style={{ color: 'var(--dash-accent)' }}
            />
            Grafico vendite giornaliere
          </p>
          <p className="text-3xl font-semibold">
            {euroFormatter.format(activeDay.revenue)}
          </p>
          <p className="dashly-muted text-xs">
            {activeDay.label} • {activeDay.orders} ordini •{' '}
            {activeDay.visitors.toLocaleString('it-IT')} visitatori
          </p>
        </div>
        <span className="dashly-positive-chip inline-flex items-center gap-2 px-4 py-1 text-sm font-medium">
          <TrendingUp className="h-4 w-4" />
          +18% sett.
        </span>
      </div>
      <div className="mt-6 h-64 w-full rounded-3xl border border-transparent bg-white/10 p-2 dark:bg-white/5">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="salesLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                stopColor="var(--dash-chart-line-start)"
                stopOpacity="0.95"
              />
              <stop
                offset="100%"
                stopColor="var(--dash-chart-line-end)"
                stopOpacity="1"
              />
            </linearGradient>
            <linearGradient id="salesArea" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                stopColor="var(--dash-chart-fill)"
                stopOpacity="1"
              />
              <stop
                offset="100%"
                stopColor="var(--dash-chart-fill)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          <path
            d={chartGeometry.areaPath}
            fill="url(#salesArea)"
            stroke="none"
          />
          <polyline
            points={chartGeometry.polylinePoints}
            fill="none"
            stroke="url(#salesLine)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="dashly-muted mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
        <div>
          <p className="text-xs uppercase tracking-widest">Giorno</p>
          <p className="text-base font-semibold">{activeDay.label}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest">Ordini</p>
          <p className="text-base font-semibold">{activeDay.orders}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest">Visitatori</p>
          <p className="text-base font-semibold">
            {activeDay.visitors.toLocaleString('it-IT')}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest">Conversione</p>
          <p
            className="text-base font-semibold"
            style={{ color: 'var(--dash-info)' }}
          >
            {conversionForDay.toFixed(1)}%
          </p>
        </div>
      </div>
      <div className="mt-6 flex items-end gap-3">
        {data.map((point) => {
          const isActive = activeDay.day === point.day
          const height = Math.max(
            10,
            (point.revenue / chartGeometry.maxRevenue) * 100,
          )
          return (
            <button
              key={point.day}
              type="button"
              onMouseEnter={() => setActiveDay(point)}
              onFocus={() => setActiveDay(point)}
              onClick={() => setActiveDay(point)}
              aria-pressed={isActive}
              aria-label={`Mostra dati di ${point.label}`}
              className="flex flex-1 cursor-pointer flex-col items-center gap-2 rounded-xl border border-transparent p-1 focus-visible:border-(--dash-accent) focus-visible:outline-none"
            >
              <div className="relative flex h-24 w-full items-end justify-center rounded-2xl border chart-bar-border bg-white/40 p-1 dark:bg-white/5">
                <span
                  className={`w-full rounded-xl transition-all duration-500 ${
                    isActive ? 'chart-bar-active' : 'chart-bar-inactive'
                  }`}
                  style={{ height: `${height}%` }}
                />
              </div>
              <p
                className="text-xs font-semibold"
                style={{
                  color: isActive ? 'var(--dash-accent)' : 'var(--dash-muted)',
                }}
              >
                {point.day}
              </p>
              <p className="dashly-muted text-[11px]">
                {formatCompactEuro(point.revenue)}
              </p>
            </button>
          )
        })}
      </div>
    </article>
  )
}
