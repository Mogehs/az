"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logo.png";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="py-4 fixed w-full top-0 z-[50]">
                <div className="container max-w-5xl">
                    <div className="border bg-white/70 border-black/15 rounded-[27px] md:rounded-full backdrop-blur-sm">
                        <div className="flex justify-between items-center  p-1 px-4 text-black ">
                            <div className="flex justify-center items-center mr-20">
                                <Image
                                    src={logoImage}
                                    alt="logoImage"
                                    className="w-auto h-8 lg:mr-10"
                                />
                            </div>
                            <div className="hidden md:flex">
                                <nav className="flex gap-4 items-center">
                                    {navLinks.map((link) => (
                                        <a key={link.label} href={link.href}>
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu sm:w-7 md:hidden"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "opacity-0"
                                        )}
                                    />
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    />
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    />
                                </svg>

                                <Button
                                    variant="secondary"
                                    className="mr-1 hidden md:inline"
                                >
                                    Log In
                                </Button>
                                <Button
                                    variant="primary"
                                    className="hidden md:inline"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4 ">
                                        {navLinks.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                                className=" text-[#062538]"
                                            >
                                                {link.label}
                                            </a>
                                        ))}

                                        <Button
                                            variant="secondary"
                                            className="inline md:hidden"
                                        >
                                            Log In
                                        </Button>
                                        <Button
                                            variant="primary"
                                            className="inline md:hidden"
                                        >
                                            Sign Up
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
}
