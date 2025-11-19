import { createFileRoute } from '@tanstack/react-router'
import { KPICards } from '../components/KPICards'
import { OverviewSection } from '../components/OverviewSection'
import { SalesChart } from '../components/SalesChart'
import { ConversionPanel } from '../components/ConversionPanel'
import { OrdersTable } from '../components/OrdersTable'
import { DemoLoginForm } from '../components/DemoLoginForm'
import {
  conversionInsights,
  conversionRate,
  kpiCards,
  orders,
  salesData,
} from '../data/dashboard.tsx'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="dashly-shell min-h-screen transition-colors duration-500">
      <main className="mx-auto max-w-6xl space-y-10 px-6 py-10 lg:py-14">
        <section
          id="overview"
          className="dashly-panel-contrast rounded-[32px] p-8 shadow-2xl shadow-black/10 backdrop-blur-xl"
        >
          <OverviewSection />
          <KPICards cards={kpiCards} />
        </section>

        <section id="analytics" className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <SalesChart data={salesData} />
          <ConversionPanel
            conversionRate={conversionRate}
            insights={conversionInsights}
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <OrdersTable orders={orders} />
          <DemoLoginForm />
        </section>
      </main>
    </div>
  )
}
