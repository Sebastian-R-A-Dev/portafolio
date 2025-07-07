"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import cursor from "../public/images/icon1.png";
import lightning from "../public/images/icon2.png";
import profilepic from "../public/images/profile.png";


export const Hero = () => {

    const linear_gradient = 'bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)] ';

    return (
        <div className={linear_gradient + " py-24 relative overflow-clip"}>
            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[800px] left-[50%] -translate-x-1/2
                            bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

            <div className="relative ">
                <div className="text-8xl font-bold text-center">
                    <h1 className="text-[#98B4CE]">Hi, I am</h1>
                    <h1 className="text-[#E48A57]">Sebastian Ruiz Avila</h1>
                </div>

                <motion.div
                    className="hidden md:block absolute left-[170px] top-[260px]"
                    drag
                >
                    <Image
                        src={cursor}
                        height={170}
                        width={170}
                        alt="Cursor"
                        draggable={false}
                        className=""
                    />
                </motion.div>

                <motion.div
                    className="hidden md:block absolute right-[220px] top-[20px]"
                    drag
                >
                    <Image
                        src={lightning}
                        height={120}
                        width={120}
                        alt="Lightning"
                        draggable={false}
                        className=""
                    />
                </motion.div>

                <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
                    I am a full-stack developer and add more description about u 
                </p>

                <Image
                    src={profilepic}
                    alt="Profile Pircture"
                    className="h-1/2 w-1/2 mx-auto"
                />
            </div>
        </div>
    )
}