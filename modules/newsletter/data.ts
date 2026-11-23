import type { IconName } from "@/components/ui/Icon";

export type NewsletterContent = { kicker: string; title: string; text: string; perks: { icon: IconName; label: string }[]; placeholder: string };

export async function getNewsletterContent(): Promise<NewsletterContent> {
  return {
    kicker: "✦ STAY UPDATED",
    title: "Stay Ahead in Safety & Sustainability",
    text: "Get industry insights, regulatory updates and the latest innovations from Shigan TechSolutions.",
    perks: [
      { icon: "bell", label: "Industry Updates" },
      { icon: "bolt", label: "New Solutions" },
      { icon: "doc", label: "Case Studies" },
    ],
    placeholder: "Enter your business email",
  };
}
