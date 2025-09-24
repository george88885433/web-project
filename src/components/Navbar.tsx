"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-blue-500 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-white">
          Web3<span className="text-web3-cyan">Connect</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link
            href="/Wallets"
            className="bg-web3-primary hover:bg-web3-secondary text-white px-5 py-2 rounded-full font-semibold transition duration-300"
          >
            Connect Now
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col items-center gap-6 py-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            
            <Link
              href="/Wallets"
              className="bg-web3-primary hover:bg-web3-secondary text-white px-5 py-2 rounded-full font-semibold transition duration-300"
              onClick={() => setOpen(false)}
            >
              Connect Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;