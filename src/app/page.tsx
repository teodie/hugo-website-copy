import Image from "next/image";
import Hero from '@/components/Hero'
import Service from "@/components/Service";

export default function Home() {
  return (
      <main>
        <Hero />
        <Service />
      </main>
  );
}
