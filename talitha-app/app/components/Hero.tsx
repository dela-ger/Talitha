import Image from "next/image"
import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/images/hero_bg1.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            </div>

            {/* Hero Content */}
            <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                
                <div className="mb-8 max-w-xs mx-auto sm:max-w-sm md:max-w-md">
                    <Image 
                        src="/images/talitha_bg1.png"
                        width={400}
                        height={100}
                        alt="Talitha"
                        className="w-full h-auto"
                    />
                </div>

                {/* Text Content */}
                <h4 className="text-4xl font-bold text-white mb-4 sm:mb-6 
                             sm:text-5xl md:text-6xl lg:text-7xl 
                             leading-tight md:leading-snug">
                    Growing in Faith, Together in Christ
                </h4>
                
                <p className="text-lg text-gray-200 mb-8 sm:text-xl md:text-2xl 
                            md:mb-12 max-w-2xl mx-auto 
                            leading-relaxed md:leading-loose">
                    Your Journey of Prayer, Worship, and Community Starts Here
                </p>

                {/* Call-to-Action Button */}
                <Link
  href="/community"
  className="relative group inline-flex items-center gap-3 px-8 py-4 text-white font-semibold text-lg tracking-wide bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:bg-white/20 hover:border-white/30 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700"
>
  <span className="relative z-10">Visit Community</span>
  <svg 
    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</Link>
            </div>
        </div>
    )
}