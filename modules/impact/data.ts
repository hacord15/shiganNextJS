export type ImpactContent = { titleTop: string; titleAccent: string; items: { value: string; label: string }[] };

export async function getImpactContent(): Promise<ImpactContent> {
  return {
    titleTop: "Real impact.",
    titleAccent: "Cleaner operations.",
    items: [
      { value: "Up to 50%", label: "fuel cost savings" },
      { value: "30–40%", label: "lower emissions" },
      { value: "Higher", label: "uptime & reliability" },
      { value: "Greater", label: "safety" },
    ],
  };
}
