"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex h-14 items-center justify-between rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <NavItem label="Features" hasDropdown />
            <NavItem label="Developers" />
            <NavItem label="Company" hasDropdown />
            <NavItem label="Blog" />
            <NavItem label="Changelog" />
          </nav>

          {/* CTA */}
          <Link
            href="#"
            className="rounded-full bg-gradient-to-r from-purple-500 to-purple-700 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:opacity-90"
          >
            Join waitlist
          </Link>
        </div>
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
