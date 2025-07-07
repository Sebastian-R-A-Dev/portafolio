import Image from "next/image";
import book from "../public/images/book.png";
export const About = () => {
    return (
        <div className="max-w-[1200px] mx-auto" id="about">

            <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
                About <span className="text-orange-400">Me</span>
            </h1>

            <div className="px-6 md:px-0 grid md:grid-cols-8 gap-6 place-content-center">

                <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-1g border border-white/20 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800
                                    opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={book} alt="" className="w-auto h-[130px] " />
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-white/80">xxxxx</h2>
                            <p className="text-lg text-white/70 mt-2">xxxxx</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-1g border border-white/20 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800
                                    opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={book} alt="" className="w-auto h-[130px] " />
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-white/80">xxxxx</h2>
                            <p className="text-lg text-white/70 mt-2">xxxxx</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-1g border border-white/20 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800
                                    opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={book} alt="" className="w-auto h-[130px] " />
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-white/80">xxxxx</h2>
                            <p className="text-lg text-white/70 mt-2">xxxxx</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-1g border border-white/20 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800
                                    opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={book} alt="" className="w-auto h-[130px] " />
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-white/80">xxxxx</h2>
                            <p className="text-lg text-white/70 mt-2">xxxxx</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}