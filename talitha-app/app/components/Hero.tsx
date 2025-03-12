import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="flex justify-center items-center flex-col h-screen 
                 bg-[url('/images/hero_bg1.jpg')] bg-cover bg-center ">
            <div className="absolute inset-0 bg-white/5"></div>

        {/* text for hero section */}
            <div className="relative z-10 text-white text-center ">
                <Image 
                    src="/images/talitha_bg1.png"
                    width={400}
                    height={300}
                    alt="Talitha"
        />
            </div>
         </div>
        </>
    )
}