import logo from "@/assets/images/logo.svg";
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center p-6">
                    <div>
                        <Image src={logo} alt="logo" />
                    </div>
                    <div>
                        <nav>
                            {footerLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="text-white/50 text-sm"
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
