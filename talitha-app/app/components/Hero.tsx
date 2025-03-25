import Image from "next/image"

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
                <button className="bg-white/10 text-white px-8 py-3 rounded-lg
                                 hover:bg-white/20 transition-all duration-300
                                 text-sm sm:text-base
                                 backdrop-blur-sm border border-white/20">
                    Join Our Community
                </button>
            </div>
        </div>
    )
}