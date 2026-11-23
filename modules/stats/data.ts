import type { IconName } from "@/components/ui/Icon";

export type Stat = { icon: IconName; value: string; label: string };

export async function getStats(): Promise<Stat[]> {
  return [
    { icon: "truck", value: "1,000+", label: "Retrofits Completed" },
    { icon: "people", value: "100+", label: "Clients Served" },
    { icon: "shield", value: "ISO, PESO &", label: "Industry Compliant" },
    { icon: "cal", value: "10+ Years", label: "of Engineering Expertise" },
  ];
}
