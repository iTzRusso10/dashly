import type { KPICard } from '../types/dashboard'

type KPICardsProps = {
  cards: Array<KPICard>
}

export function KPICards({ cards }: KPICardsProps) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {cards.map((card, index) => (
        <div
          key={card.label}
          className={`animate-kpi-float ${card.cardClass} rounded-3xl p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1`}
          style={{ animationDelay: `${index * 0.4}s` }}
        >
          <div className="flex items-center justify-between">
            <span className="rounded-2xl border border-white/30 bg-white/20 p-2 text-sm">
              {card.icon}
            </span>
            <span className={`text-xs font-semibold ${card.deltaColor}`}>
              {card.delta}
            </span>
          </div>
          <p className="dashly-muted mt-6 text-sm uppercase tracking-widest">
            {card.label}
          </p>
          <p className="mt-2 text-3xl font-semibold">{card.value}</p>
          <p className="dashly-muted text-sm">{card.description}</p>
        </div>
      ))}
    </div>
  )
}

