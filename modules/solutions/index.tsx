import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Photo from "@/components/ui/Photo";
import { getSolutionCards } from "./data";

const card = "relative flex items-center justify-between gap-[18px] overflow-hidden rounded-card border border-line px-[22px] py-[18px] shadow-card";

/** Two cards that overlap the bottom of the home hero. */
export default async function Solutions() {
  const cards = await getSolutionCards();
  return (
    <Container>
      <div className="relative z-[5] -mt-[84px] grid grid-cols-2 gap-[22px] pb-5 max-[900px]:-mt-16 max-[800px]:grid-cols-1">
        {cards.map((c) => (
          <div key={c.title} className={`${card} ${c.tone === "b" ? "bg-[linear-gradient(120deg,#fff_55%,#fdeceb)]" : "bg-white"}`}>
            <div>
              <h3 className="mb-2 flex items-center gap-2.5 text-[19px]">
                <Icon name={c.icon} className="text-[30px] text-brand" />
                {c.title}
              </h3>
              <p className="mb-3.5 max-w-[320px] text-[13.5px] text-muted">{c.text}</p>
              <Button href={c.href} size="sm">
                Learn More <Icon name="arrow" />
              </Button>
            </div>
            <div className={`img h-[112px] w-[150px] flex-none rounded-xl max-[800px]:hidden ${c.tone === "b" ? "mini-b" : "mini-a"}`}>
              <Photo id={c.image} sizes="150px" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
