import { ArrowUpRight } from 'lucide-react'
import type { ConversionInsight } from '../types/dashboard'

type ConversionPanelProps = {
  conversionRate: number
  insights: Array<ConversionInsight>
}

export function ConversionPanel({ conversionRate, insights }: ConversionPanelProps) {
  const conversionAngle = (conversionRate / 100) * 360

  return (
    <article className="dashly-panel-contrast rounded-[32px] p-6 text-sm shadow-xl shadow-black/10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="dashly-muted text-sm">Conversion rate</p>
          <p className="text-4xl font-semibold">
            {conversionRate.toFixed(1)}%
          </p>
          <p
            className="flex items-center gap-1 text-xs"
            style={{ color: 'var(--dash-positive)' }}
          >
            <ArrowUpRight className="h-3 w-3" />
            +0,6% vs ieri
          </p>
        </div>
        <div
          className="relative h-28 w-28 rounded-full border-4 border-white/20"
          style={{
            background: `conic-gradient(var(--dash-conversion-fill) ${conversionAngle}deg, var(--dash-conversion-track) 0deg)`,
          }}
        >
          <div
            className="absolute inset-3 flex flex-col items-center justify-center rounded-full"
            style={{
              background:
                'color-mix(in srgb, var(--dash-panel) 70%, transparent)',
            }}
          >
            <span className="dashly-muted text-xs">Qualità</span>
            <span className="text-xl font-semibold">A+</span>
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        {insights.map((insight) => (
          <div key={insight.label}>
            <div className="flex items-center justify-between text-sm">
              <p className="font-medium">{insight.label}</p>
              <p className="dashly-muted">{insight.value}</p>
            </div>
            <p className="dashly-muted text-xs">{insight.helper}</p>
            <div
              className="mt-2 h-2 rounded-full"
              style={{ background: 'var(--dash-conversion-track)' }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${insight.progress}%`,
                  background: 'var(--dash-conversion-fill)',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

