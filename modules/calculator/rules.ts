/* ---------- Calculator business rules (edit here) ---------- */
export const OPERATING_MONTHS = 10; // months per year the asset runs
export const DIESEL_CO2_PER_L = 2.68; // kg CO2 per litre of diesel
export const RETROFIT_COST_LAKH = { low: 7.14, high: 10 }; // per asset

export type FuelKey = "CNG" | "LNG" | "Dual-fuel";

export const FUELS: Record<FuelKey, { label: string; price: number; effMult: number; co2Cut: number; share: number }> = {
  CNG: { label: "CNG Price (₹/kg)", price: 75, effMult: 1.25, co2Cut: 0.35, share: 1 },
  LNG: { label: "LNG Price (₹/kg)", price: 68, effMult: 1.3, co2Cut: 0.3, share: 1 },
  "Dual-fuel": { label: "Gas Price (₹/kg)", price: 75, effMult: 1.25, co2Cut: 0.2, share: 0.6 }, // 60% diesel substitution
};
export const FUEL_KEYS = Object.keys(FUELS) as FuelKey[];

export const DEFAULTS = { fuel: "CNG" as FuelKey, dist: 10000, eff: 3.5, diesel: 90, gas: 75 };

export type CalcInput = { fuel: FuelKey; dist: number; eff: number; diesel: number; gas: number };
export type CalcResult = { diesel: number; gas: number; save: number; pct: number; co2: number; roi: [number, number] | null };

export function compute({ fuel, dist, eff, diesel: dp, gas: gp }: CalcInput): CalcResult | null {
  const fu = FUELS[fuel];
  if (eff <= 0) return null;
  const litres = (dist / eff) * OPERATING_MONTHS;
  const diesel = litres * dp;
  const gasKg = (dist / (eff * fu.effMult)) * OPERATING_MONTHS;
  const gas = diesel * (1 - fu.share) + gasKg * gp * fu.share;
  const save = diesel - gas;
  const pct = diesel > 0 ? (save / diesel) * 100 : 0;
  const co2 = (litres * DIESEL_CO2_PER_L * fu.co2Cut) / 1000;
  const monthly = save / 12 / 1e5;
  const roi: [number, number] | null = monthly > 0 ? [Math.round(RETROFIT_COST_LAKH.low / monthly), Math.round(RETROFIT_COST_LAKH.high / monthly)] : null;
  return { diesel, gas, save, pct, co2, roi };
}

export const fmtLakh = (v: number) => "₹ " + (v / 1e5).toFixed(2) + " Lakh";
export const fmtPct = (v: number) => v.toFixed(1) + "%";
export const fmtCo2 = (v: number) => "~ " + v.toFixed(1) + " Tonnes/Year";
