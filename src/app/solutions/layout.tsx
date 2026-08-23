import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Ayan AI Studio",
  description: "Four service lines — Websites, Automation & AI Agents, Custom Applications, and Integrated Systems — engineered standalone or combined into one Operational Core.",
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
