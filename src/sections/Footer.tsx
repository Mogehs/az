import logo from "@/assets/images/logo.png";
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="">
            <div className="container bg-neutral-900 rounded-t-2xl border border-[#68543A]">
                <div className="flex flex-col md:flex-row md:justify-between items-center p-6">
                    <div>
                        <Image src={logo} alt="logo" className="w-24" />
                    </div>
                    <div>
                        <nav className="flex gap-4">
                            {footerLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="text-white/50 text-sm text-nowrap mt-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
