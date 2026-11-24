/**
 * Single icon registry (lucide-react, open source). Content/config files refer to
 * icons by *name* (a string), which keeps them serialisable from Server → Client
 * components. To add an icon: import it here and add one line to `icons`.
 */
import {
  ArrowRight, Bell, Check, CircleCheck, ChevronRight, ClipboardCheck, ClipboardList, Headset, Minus, Plus,
  Bus, Calculator, CalendarDays, ChartColumn, ChevronDown, Clock, Cloud,
  Coins, Eye, FileText, Flame, Fuel, Gauge, Leaf, Mail, MapPin, Menu, Monitor, Phone,
  PiggyBank, RotateCcw, Route, Search, ShieldCheck, Ship, Target, Truck, Users, Wrench, X, Zap,
} from "lucide-react";

export const icons = {
  arrow: ArrowRight,
  bell: Bell,
  bolt: Zap,
  check: Check,
  checkCircle: CircleCheck,
  chevR: ChevronRight,
  clipboardCheck: ClipboardCheck,
  clipboardList: ClipboardList,
  headset: Headset,
  minus: Minus,
  plus: Plus,
  bus: Bus,
  cal: CalendarDays,
  calc: Calculator,
  chart: ChartColumn,
  chev: ChevronDown,
  clock: Clock,
  cloud: Cloud,
  coins: Coins,
  doc: FileText,
  eye: Eye,
  flame: Flame,
  fuel: Fuel,
  gauge: Gauge,
  leaf: Leaf,
  mail: Mail,
  menu: Menu,
  monitor: Monitor,
  people: Users,
  phone: Phone,
  piggy: PiggyBank,
  pin: MapPin,
  reset: RotateCcw,
  road: Route,
  search: Search,
  shield: ShieldCheck,
  ship: Ship,
  target: Target,
  truck: Truck,
  wrench: Wrench,
  x: X,
} as const;

export type IconName = keyof typeof icons;