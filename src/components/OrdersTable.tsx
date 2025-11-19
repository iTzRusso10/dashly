import { statusClasses } from '../data/dashboard.tsx'
import type { Order } from '../types/dashboard'

type OrdersTableProps = {
  orders: Array<Order>
}

const euroFormatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

export function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <article
      id="orders"
      className="dashly-panel rounded-[32px] shadow-xl shadow-black/10"
    >
      <header className="dashly-divider flex flex-wrap items-center justify-between gap-4 border-b px-6 py-5">
        <div>
          <p className="dashly-muted text-sm font-semibold">Ultimi ordini</p>
          <p className="text-2xl font-semibold">
            {orders.length} nuovi nelle ultime 2h
          </p>
        </div>
        <button
          type="button"
          className="dashly-secondary-btn px-4 py-2 text-sm font-semibold"
        >
          Esporta CSV
        </button>
      </header>
      <div className="divide-y divide-white/20 dark:divide-white/5">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex flex-wrap items-center gap-4 px-6 py-4 text-sm"
          >
            <div className="min-w-[180px] flex-1">
              <p className="text-base font-semibold">{order.customer}</p>
              <p className="dashly-muted text-xs">
                {order.id} • {order.channel}
              </p>
            </div>
            <span
              className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[order.status]}`}
            >
              {order.status}
            </span>
            <p className="text-base font-semibold">
              {euroFormatter.format(order.total)}
            </p>
            <p className="dashly-muted text-xs">{order.time}</p>
          </div>
        ))}
      </div>
    </article>
  )
}
