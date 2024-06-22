import HeroSection from "@/components/layout/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-screen min-h-screen mx-auto max-w-screen-2xl flex-col items-center justify-between pt-20 bg-sky-100">
      <HeroSection></HeroSection>
    </div>
  );
}
