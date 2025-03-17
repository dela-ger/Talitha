import Link from "next/link";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Link href="./about">About Us</Link>
    </div>
  );
}
