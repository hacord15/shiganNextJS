export type CalculatorContent = { eyebrow: string; titleLead: string; titleAccent: string; text: string };

export async function getCalculatorContent(): Promise<CalculatorContent> {
  return {
    eyebrow: "Savings Calculator",
    titleLead: "Efficiency & Savings",
    titleAccent: "Calculator",
    text: "Estimate your fuel savings, emission reduction and ROI with CNG / LNG / Dual-fuel retrofitting.",
  };
}
