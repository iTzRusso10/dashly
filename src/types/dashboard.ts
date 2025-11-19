import type { ReactNode } from 'react'

export type SalesPoint = {
  day: string
  label: string
  revenue: number
  orders: number
  visitors: number
}

export type KPICard = {
  label: string
  value: string
  delta: string
  description: string
  cardClass: string
  deltaColor: string
  icon: ReactNode
}

export type OrderStatus = 'Spedito' | 'In lavorazione' | 'Pagato'

export type Order = {
  id: string
  customer: string
  total: number
  status: OrderStatus
  time: string
  channel: string
}

export type ConversionInsight = {
  label: string
  value: string
  helper: string
  progress: number
}

