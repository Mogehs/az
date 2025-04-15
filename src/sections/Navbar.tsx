import Image from "next/image";
import logoImage from "@/assets/images/logo.png";
import menueSvg from "@/assets/images/menu.svg";
import Button from "@/components/Button";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <section className="py-4">
            <div className="container">
                <div className="flex justify-between items-center border bg-white/80 border-black/15 rounded-full p-1 px-4 text-black">
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
                    <div className="">
                        <Image
                            src={menueSvg}
                            alt="logoImage"
                            className="h-10 w-5 sm:w-7 md:hidden"
                        />
                        <Button
                            variant="secondary"
                            className="mr-1 hidden md:inline"
                        >
                            Log In
                        </Button>
                        <Button variant="primary" className="hidden md:inline">
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
