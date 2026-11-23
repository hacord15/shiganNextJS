import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { getStats } from "./data";

const stat = "flex items-center gap-3.5 border-r border-line px-[22px] py-5 last:border-0 max-[900px]:border-b max-[900px]:[&:nth-child(2)]:border-r-0";

export default async function Stats() {
  const stats = await getStats();
  return (
    <Container className="py-3.5">
      <div className="grid grid-cols-4 rounded-card border border-line bg-white shadow-card max-[900px]:grid-cols-2">
        {stats.map((s) => (
          <div key={s.label} className={stat}>
            <Icon name={s.icon} className="text-[34px] text-brand" />
            <div>
              <b className="block text-[20px] leading-[1.1] text-navy">{s.value}</b>
              <span className="text-[12.5px] text-muted">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
