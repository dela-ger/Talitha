// import Link from "next/link";
import ArticleCard from "./components/ArticleCard";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <div className="mr-40 ml-40">
          <ArticleCard />
        </div>
        
      </div>
    </>
    
  );
}
