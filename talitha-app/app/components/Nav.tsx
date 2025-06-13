"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: "/market", label: "Marketplace" },
    { href: "/article", label: "Articles" },
    { href: "/prayer-room", label: "Prayer Room" },
    { href: "/about", label: "About" },
    { href: "/ticket", label: "Events" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4">
          {/* Desktop Navigation - Centered with dividers */}
          <div className="hidden sm:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="flex items-center">
                <NavLink href={link.href}>{link.label}</NavLink>
                {index < navLinks.length - 1 && (
                  <div className="ml-8 h-4 w-px bg-lime-200"></div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="sm:hidden absolute right-4">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-lime-700 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-lime-700" />
              ) : (
                <Menu className="w-6 h-6 text-lime-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="sm:hidden bg-lime-50 rounded-lg py-4 px-4 border border-lime-100 mt-2">
            <div className="flex flex-col space-y-3 text-center">
              {navLinks.map((link, index) => (
                <MobileNavLink 
                  key={index} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </MobileNavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Reusable NavLink component for desktop
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href}>
    <span className="text-lime-800 hover:text-lime-600 transition-colors cursor-pointer text-sm font-medium px-2">
      {children}
    </span>
  </Link>
);

// Reusable MobileNavLink component
const MobileNavLink = ({ 
  href, 
  children,
  onClick
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link href={href} onClick={onClick}>
    <span className="block py-2 text-lime-800 font-medium hover:text-lime-600 transition-colors">
      {children}
    </span>
  </Link>
);