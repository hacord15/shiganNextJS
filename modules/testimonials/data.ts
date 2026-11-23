export type Testimonial = { quote: string; initials: string; name: string; role: string; company: string; companyColor?: string };
export type TestimonialsContent = { title: string; sub: string; items: Testimonial[]; trustedLabel: string; logos: { name: string; className: string }[] };

export async function getTestimonialsContent(): Promise<TestimonialsContent> {
  return {
    title: "What Our Clients Say",
    sub: "Trusted by fleet operators and facility leaders across industries.",
    items: [
      { quote: "Shigan's CNG retrofitting helped us cut fuel costs by ~30% and significantly reduce emissions across our truck fleet. The team is professional and ensured a smooth, compliant deployment.", initials: "RM", name: "Rahul Mehta", role: "Fleet Head", company: "TCI" },
      { quote: "The fire protection system for our BESS facility was delivered on time and meets all regulatory norms. Their engineering depth and attention to safety give us real confidence in our operations.", initials: "PS", name: "Priya Sharma", role: "Operations Manager", company: "ReNew", companyColor: "#2c9b49" },
      { quote: "Reliable, compliant and effective — Shigan implemented a clean-agent suppression system for our data centre with minimal downtime. A highly capable and responsive team.", initials: "AV", name: "Amit Verma", role: "IT Infrastructure Head", company: "HCLTech" },
    ],
    trustedLabel: "Trusted by leading organizations",
    logos: [
      { name: "TCI", className: "text-[#1b4aa6] italic" },
      { name: "ReNew", className: "text-[#2c9b49]" },
      { name: "HCLTech", className: "text-[#2b3c6e]" },
      { name: "TATA MOTORS", className: "text-[17px] text-[#1a2a5e]" },
      { name: "IndianOil", className: "text-[#f08a00]" },
      { name: "NTPC", className: "text-[#1b57a8]" },
    ],
  };
}
