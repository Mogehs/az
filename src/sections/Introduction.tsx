"use client";
import Tags from "@/components/Tags";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You aim to excel in content creation, design, development, and e-commerce but switching between complex tools slows you down.`;

const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        const unsubscribe = wordIndex.on("change", (latest) => {
            const index = Math.round(latest);
            if (index !== currentWordIndex) {
                setCurrentWordIndex(index);
            }
        });
        return () => {
            unsubscribe();
        };
    }, [wordIndex, currentWordIndex]);

    return (
        <section className="py-24">
            <div className="container">
                <div className="sticky top-20 md:top-24">
                    <div className="flex justify-center">
                        <Tags>Introducing the layers</Tags>
                    </div>

                    <div className="text-3xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span className=" text-white/15">
                            {words.map((word, index) => {
                                return (
                                    <span
                                        key={index}
                                        className={twMerge(
                                            "transition-colors duration-300",
                                            index < currentWordIndex
                                                ? "text-white"
                                                : "text-white/15"
                                        )}
                                    >
                                        {word}
                                        {index !== words.length - 1 && " "}
                                    </span>
                                );
                            })}
                        </span>
                        <span className="text-[#BA935E]">
                            That&apos;s why we built AZ
                        </span>
                    </div>
                </div>
                <div
                    className="h-[200vh] lg:h-[300vh]"
                    ref={scrollTarget}
                ></div>
            </div>
        </section>
    );
}
