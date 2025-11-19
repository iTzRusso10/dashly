import { CreditCard, ShoppingBag, Users } from 'lucide-react'
import type {
  ConversionInsight,
  KPICard,
  Order,
  OrderStatus,
  SalesPoint,
} from '../types/dashboard'

export const salesData: Array<SalesPoint> = [
  { day: 'Lun', label: 'Lunedì', revenue: 1240, orders: 32, visitors: 820 },
  { day: 'Mar', label: 'Martedì', revenue: 1480, orders: 36, visitors: 910 },
  { day: 'Mer', label: 'Mercoledì', revenue: 1320, orders: 34, visitors: 880 },
  { day: 'Gio', label: 'Giovedì', revenue: 1690, orders: 40, visitors: 960 },
  { day: 'Ven', label: 'Venerdì', revenue: 1825, orders: 44, visitors: 1010 },
  { day: 'Sab', label: 'Sabato', revenue: 1550, orders: 39, visitors: 950 },
  { day: 'Dom', label: 'Domenica', revenue: 1975, orders: 52, visitors: 990 },
]

export const kpiCards: Array<KPICard> = [
  {
    label: 'Entrate mese',
    value: '€28.4K',
    delta: '+12,4%',
    description: 'vs ottobre',
    cardClass: 'kpi-card-1',
    deltaColor: 'text-[#d44f2f]',
    icon: <ShoppingBag className="h-4 w-4 text-[#c54930]" />,
  },
  {
    label: 'Nuovi clienti',
    value: '184',
    delta: '+6,1%',
    description: 'traffico social',
    cardClass: 'kpi-card-2',
    deltaColor: 'text-[#c44578]',
    icon: <Users className="h-4 w-4 text-[#c44578]" />,
  },
  {
    label: 'Ticket medio',
    value: '€71',
    delta: '+3,2%',
    description: 'carrello online',
    cardClass: 'kpi-card-3',
    deltaColor: 'text-[#c1701e]',
    icon: <CreditCard className="h-4 w-4 text-[#c1701e]" />,
  },
]

export const orders: Array<Order> = [
  {
    id: '#D-1098',
    customer: 'Martina Valli',
    total: 210.9,
    status: 'Spedito',
    time: '3 minuti fa',
    channel: 'Shop online',
  },
  {
    id: '#D-1097',
    customer: 'Studio Alpaca',
    total: 980,
    status: 'Pagato',
    time: '12 minuti fa',
    channel: 'B2B Link',
  },
  {
    id: '#D-1096',
    customer: 'Luca Fermi',
    total: 120.5,
    status: 'In lavorazione',
    time: '25 minuti fa',
    channel: 'Instagram Shop',
  },
  {
    id: '#D-1095',
    customer: 'Chiara Neri',
    total: 84.2,
    status: 'Spedito',
    time: '39 minuti fa',
    channel: 'Shop online',
  },
  {
    id: '#D-1094',
    customer: 'Atelier Lume',
    total: 640,
    status: 'Pagato',
    time: '1 ora fa',
    channel: 'WhatsApp Pay',
  },
]

export const conversionInsights: Array<ConversionInsight> = [
  {
    label: 'Visitatori unici',
    value: '5.8K',
    helper: '+8% vs ieri',
    progress: 78,
  },
  {
    label: 'Inizi check-out',
    value: '472',
    helper: '+4% funnel',
    progress: 63,
  },
  {
    label: 'Ordini completati',
    value: '289',
    helper: 'ticket medio €71',
    progress: 54,
  },
]

export const conversionRate = 3.8

export const statusClasses: Record<OrderStatus, string> = {
  Spedito: 'border-[#6ed7b4]/40 bg-[#6ed7b4]/15 status-spedito-text',
  'In lavorazione':
    'border-[#f6c768]/40 bg-[#f6c768]/15 status-lavorazione-text',
  Pagato: 'border-[#f68ec2]/40 bg-[#f68ec2]/15 status-pagato-text',
}
