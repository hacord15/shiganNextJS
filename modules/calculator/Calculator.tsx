"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { ASSET_KEYS, type AssetKey } from "@/lib/assets";
import { DEFAULTS, FUELS, FUEL_KEYS, compute, fmtCo2, fmtLakh, fmtPct, type FuelKey } from "./rules";

type Form = { asset: AssetKey; fuel: FuelKey; dist: string; eff: string; diesel: string; gas: string };

const initialForm = (asset: AssetKey = "Trucks"): Form => ({
  asset,
  fuel: DEFAULTS.fuel,
  dist: String(DEFAULTS.dist),
  eff: String(DEFAULTS.eff),
  diesel: String(DEFAULTS.diesel),
  gas: String(DEFAULTS.gas),
});

/** Counts to `value` over 500ms (ease-out cubic); "–" when there is no result. */
function AnimatedValue({ value, format }: { value: number | null; format: (v: number) => string }) {
  const [shown, setShown] = useState<number | null>(null);
  const last = useRef(0);
  const fmt = useRef(format);
  useEffect(() => {
    if (value === null) {
      setShown(null);
      return;
    }
    const from = last.current;
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / 500);
      const v = from + (value - from) * (1 - Math.pow(1 - p, 3));
      last.current = v;
      setShown(v);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <>{shown === null ? "–" : fmt.current(shown)}</>;
}

const lbl = "mb-[7px] block text-[13px] font-bold text-navy";
const inp = "transition-quick flex h-[50px] items-center gap-2.5 rounded-[10px] border-[1.5px] border-[#dde1ea] bg-white px-3.5 text-brand focus-within:border-brand focus-within:shadow-[0_0_0_3px_rgba(225,6,28,.12)]";
const ctl = "h-full min-w-0 flex-1 appearance-none border-0 bg-transparent text-[15px] font-medium text-ink outline-none";
const row = "mb-3 flex items-center gap-4 rounded-xl px-[18px] py-3.5 shadow-[0_2px_8px_rgba(15,23,42,.04)]";
const rowSmall = "block text-[12.5px] font-medium text-navy";
const rowBig = "text-[26px] leading-[1.2] font-extrabold";

/**
 * Savings calculator (client island; initial asset comes from the page via ?asset=). Results update on select change,
 * field blur / Enter, and the Calculate button — like the original `change` events.
 */
export default function Calculator({ initialAsset = "Trucks" }: { initialAsset?: AssetKey }) {
  const [form, setForm] = useState<Form>(() => initialForm(initialAsset));
  const [snap, setSnap] = useState<Form>(() => initialForm(initialAsset));

  const result = useMemo(
    () => compute({ fuel: snap.fuel, dist: +snap.dist || 0, eff: +snap.eff || 0, diesel: +snap.diesel || 0, gas: +snap.gas || 0 }),
    [snap],
  );

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const commit = () => setSnap(form);
  const onEnter = (e: React.KeyboardEvent) => e.key === "Enter" && commit();
  const apply = (next: Form) => {
    setForm(next);
    setSnap(next);
  };

  const numberField = (k: "dist" | "eff" | "diesel" | "gas", min: string, step: string) => (
    <input className={ctl} type="number" min={min} step={step} value={form[k]} onChange={set(k)} onBlur={commit} onKeyDown={onEnter} />
  );
  const caret = <Icon name="chev" className="pointer-events-none text-[16px] text-navy" />;

  return (
    <div className="grid grid-cols-[1.15fr_1fr] items-stretch gap-6 max-[860px]:grid-cols-1">
      <div className="px-1 py-1.5">
        <h4 className="relative mb-[18px] pb-3 text-[20px] font-extrabold after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-9 after:rounded-[3px] after:bg-brand after:content-['']">
          Your Asset &amp; Usage Details
        </h4>
        <div className="grid grid-cols-2 gap-x-[18px] gap-y-4 max-[520px]:grid-cols-1">
          <div>
            <label className={lbl}>Asset Type</label>
            <div className={inp}>
              <Icon name="truck" className="text-[22px]" />
              <select className={`${ctl} cursor-pointer`} value={form.asset} onChange={(e) => apply({ ...form, asset: e.target.value as AssetKey })}>
                {ASSET_KEYS.map((a) => <option key={a}>{a}</option>)}
              </select>
              {caret}
            </div>
          </div>
          <div>
            <label className={lbl}>Fuel Solution</label>
            <div className={inp}>
              <Icon name="flame" className="text-[22px]" />
              <select
                className={`${ctl} cursor-pointer`}
                value={form.fuel}
                onChange={(e) => {
                  const fuel = e.target.value as FuelKey;
                  apply({ ...form, fuel, gas: String(FUELS[fuel].price) });
                }}
              >
                {FUEL_KEYS.map((f) => <option key={f}>{f}</option>)}
              </select>
              {caret}
            </div>
          </div>
          <div>
            <label className={lbl}>Average Distance per Month</label>
            <div className={inp}>
              <Icon name="road" className="text-[22px]" />
              {numberField("dist", "0", "100")}
              <span className="text-[13px] text-muted">km</span>
            </div>
          </div>
          <div>
            <label className={lbl}>Average Fuel Efficiency (Diesel)</label>
            <div className={inp}>
              <Icon name="gauge" className="text-[22px]" />
              {numberField("eff", "0.1", "0.1")}
              <span className="text-[13px] text-muted">km/l</span>
            </div>
          </div>
          <div>
            <label className={lbl}>Diesel Price (₹/liter)</label>
            <div className={inp}>
              <Icon name="fuel" className="text-[22px]" />
              <span className="font-semibold text-navy">₹</span>
              {numberField("diesel", "0", "0.5")}
            </div>
          </div>
          <div>
            <label className={lbl}>{FUELS[form.fuel].label}</label>
            <div className={inp}>
              <Icon name="leaf" className="text-[22px]" />
              <span className="font-semibold text-navy">₹</span>
              {numberField("gas", "0", "0.5")}
            </div>
          </div>
        </div>
        <div className="mt-[26px] flex gap-3.5 max-[520px]:flex-col">
          <Button size="xl" className="flex-[1.7]" onClick={commit}>
            <Icon name="calc" /> Calculate Benefits <Icon name="arrow" />
          </Button>
          <Button variant="line" size="xl" className="flex-1" onClick={() => apply(initialForm(form.asset))}>
            <Icon name="reset" /> Reset
          </Button>
        </div>
      </div>

      <div className="rounded-[18px] border border-[#f9dcdc] bg-[linear-gradient(#fdeeee,#fdf3f3)] p-[22px]">
        <h4 className="mb-4 flex items-center gap-2.5 text-[19px] font-extrabold">
          <Icon name="chart" className="text-[30px] text-brand" /> Estimated Annual Benefits
        </h4>
        <div className={`${row} bg-white`}>
          <Icon name="coins" className="text-[40px] text-brand" />
          <div>
            <small className={rowSmall}>Annual Fuel Cost (Current – Diesel)</small>
            <b className={`${rowBig} text-navy`}><AnimatedValue value={result?.diesel ?? null} format={fmtLakh} /></b>
          </div>
        </div>
        <div className={`${row} bg-leaf-soft`}>
          <Icon name="leaf" className="text-[40px] text-leaf" />
          <div>
            <small className={rowSmall}>Annual Fuel Cost (After Retrofitting)</small>
            <b className={`${rowBig} text-navy`}><AnimatedValue value={result?.gas ?? null} format={fmtLakh} /></b>
          </div>
        </div>
        <div className={`${row} bg-white`}>
          <Icon name="piggy" className="text-[40px] text-brand" />
          <div className="flex-1">
            <small className={rowSmall}>Annual Savings</small>
            <b className={`${rowBig} text-leaf`}><AnimatedValue value={result?.save ?? null} format={fmtLakh} /></b>
          </div>
          <div className="rounded-[10px] bg-leaf-soft px-3.5 py-2 text-center text-[19px] leading-[1.1] font-extrabold text-leaf">
            <span>↓ <AnimatedValue value={result?.pct ?? null} format={fmtPct} /></span>
            <br />
            <small className="block text-[11.5px] font-semibold text-leaf">Cost Reduction</small>
          </div>
        </div>
        <div className="mt-1.5 grid grid-cols-2 gap-3 border-t border-[#f0d7d7] pt-3.5 max-[520px]:grid-cols-1">
          <div className="rounded-xl bg-white px-2 py-3.5 text-center">
            <Icon name="cloud" className="mx-auto mb-1 text-[34px] text-brand" />
            <small className="block text-[13px] font-bold text-navy">Emission Reduction</small>
            <b className="mt-1 block text-[17px] font-extrabold text-leaf"><AnimatedValue value={result?.co2 ?? null} format={fmtCo2} /></b>
          </div>
          <div className="rounded-xl bg-white px-2 py-3.5 text-center">
            <Icon name="clock" className="mx-auto mb-1 text-[34px] text-brand" />
            <small className="block text-[13px] font-bold text-navy">Estimated ROI</small>
            <b className="mt-1 block text-[17px] font-extrabold text-leaf">
              {!result ? "–" : result.roi ? `~ ${result.roi[0]} – ${result.roi[1]} Months` : "N/A"}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
