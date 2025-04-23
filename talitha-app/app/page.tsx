// import Link from "next/link";
import ArticleCard from "./components/ArticleCard";
import FaithTags from "./components/FaithTags";
import Hero from "./components/Hero";
import TicketEventCard from "./components/TicketEventCard";

export default function Home() {
  return (
    <>
      <div>
        <Hero />

          <FaithTags />
        <div className="mt-20 mr-40 ml-40">
          <ArticleCard />

        </div>
        
        <div className="">
          <TicketEventCard limit={3}/>

        </div>
        
      </div>
    </>
    
  );
}
