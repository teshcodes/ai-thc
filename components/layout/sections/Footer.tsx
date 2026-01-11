import Link from "next/link";
import Image from "next/image";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-black text-gray-400">
            {/* Radial glow */}
            <div
                className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_left,rgba(168,85,247,0.18)_0%,transparent_60%)]
        "
            />

            <div className="relative mx-auto max-w-7xl px-8 py-20">
                <div className="flex flex-col gap-16 md:flex-row md:justify-between">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col justify-between">


                        <div className="flex items-center justify-between gap-4 md:justify-start">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={30}
                                    height={30}
                                    priority
                                />
                                <span className="text-sm text-gray-300">AI Startup Kit</span>
                            </div>

                            {/* Icons — inline on mobile */}
                            <div className="flex gap-4 md:hidden">
                                <FaXTwitter className="text-gray-500 hover:text-gray-200 transition" size={18} />
                                <FaInstagram className="text-gray-500 hover:text-gray-200 transition" size={18} />
                                <FaYoutube className="text-gray-500 hover:text-gray-200 transition" size={18} />
                            </div>
                        </div>

                        {/* Icons — bottom on desktop */}
                        <div className="mt-12 hidden gap-4 md:flex">
                            <FaXTwitter className="text-gray-500 hover:text-gray-200 transition" size={18} />
                            <FaInstagram className="text-gray-500 hover:text-gray-200 transition" size={18} />
                            <FaYoutube className="text-gray-500 hover:text-gray-200 transition" size={18} />
                        </div>

                    </div>


                    {/* RIGHT SIDE */}
                    <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
                        <FooterColumn
                            title="Product"
                            links={["Features", "Integration", "Updates", "FAQ", "Pricing"]}
                        />

                        <FooterColumn
                            title="Company"
                            links={["About", "Blog", "Careers", "Manifesto", "Press", "Contact"]}
                        />

                        <FooterColumn
                            title="Resources"
                            links={["Examples", "Community", "Guides", "Docs", "Press"]}
                        />

                        <FooterColumn
                            title="Legal"
                            links={["Privacy", "Terms", "Security"]}
                        />
                    </div>

                </div>
            </div>

        </footer>
    );
}

/* ---------- Column Component ---------- */

function FooterColumn({
    title,
    links,
}: {
    title: string;
    links: string[];
}) {
    return (
        <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-200">
                {title}
            </h3>

            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link}>
                        <Link
                            href="#"
                            className="
                text-sm text-gray-400 transition-colors
                hover:text-gray-200
              "
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
