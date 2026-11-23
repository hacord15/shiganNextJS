import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import Photo from "@/components/ui/Photo";
import { getStoryContent } from "./data";

export default async function Story() {
  const c = await getStoryContent();
  return (
    <Container>
      <div id="story" className="grid grid-cols-[1fr_1.15fr] items-center gap-[34px] py-[26px] max-[850px]:grid-cols-1">
        <div className="img img-bldg">
          <Photo id={c.image} sizes="(max-width: 850px) 100vw, 560px" />
          <div className="b" />
        </div>
        <div>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="mt-2.5 mb-2 text-[30px] font-extrabold">{c.title}</h2>
          <p className="mb-[18px] text-[14px] text-muted">{c.text}</p>
          <div className="grid grid-cols-2 gap-5">
            {c.points.map((p) => (
              <div key={p.title} className="flex gap-3 text-[12.5px] text-muted">
                <Icon name={p.icon} className="mt-0.5 text-[30px] text-brand" />
                <span>
                  <b className="mb-0.5 block text-[14px] text-navy">{p.title}</b>
                  {p.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
