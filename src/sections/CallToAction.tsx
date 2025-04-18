"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    className="flex flex-none gap-16 text-7xl md:text-8xl font-medium"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {Array.from({ length: 2 }, (_, i) => (
                        <div className="flex gap-16" key={i}>
                            {Array.from({ length: 10 }, (_, index) => (
                                <div
                                    key={`${i}-${index}`}
                                    className="flex items-center gap-8"
                                >
                                    <span className="text-[#BA935E] text-7xl">
                                        &#10038;
                                    </span>
                                    <span>Try it for free</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
