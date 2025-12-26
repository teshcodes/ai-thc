"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mt-4 flex h-14 items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            priority
                        />
                    </div>


                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-6 text-sm text-white/80 rounded-full border border-white/10 bg-black/40 backdrop-blur-md py-4 px-10">
                        <NavItem label="Features" hasDropdown />
                        <NavItem label="Developers" />
                        <NavItem label="Company" hasDropdown />
                        <NavItem label="Blog" />
                        <NavItem label="Changelog" />
                    </nav>

                    {/* CTA */}
                    <Link
                        href="#"
                        className="relative inline-flex items-center justify-center rounded-full p-1px bg-linear-to-r from-[#8C45FF] to-[#7e45da66]
                                   shadow-[0_0_25px_rgba(140,69,255,0.5)] transition hover:shadow-[0_0_40px_rgba(140,69,255,0.75)] hover:scale-[1.03]"
                    >
                        <span className="rounded-full bg-black/60 backdrop-blur-md px-4 py-2 text-sm font-medium text-white">
                            Join waitlist
                        </span>
                    </Link>
                </div>
                <div className="mx-4 mt-3 h-px bg-white/10" />
            </div>
        </header>
    );
}

function NavItem({
    label,
    hasDropdown = false,
}: {
    label: string;
    hasDropdown?: boolean;
}) {
    return (
        <button className="flex items-center gap-1 hover:text-white transition">
            {label}
            {hasDropdown && <ChevronDown size={14} />}
        </button>
    );
}
