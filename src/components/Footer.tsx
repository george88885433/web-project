"use client";

import { Instagram, Twitter, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Send, href: "#", label: "Telegram" },
  ];

  return (
    <footer className="py-12 px-6 bg-gray-500 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <nav className="flex gap-6 text-white text-sm">
            <a href="/Wallets" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <span>|</span>
            <a href="/Wallets" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
          </nav>

          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-cyan-400 transition-colors group"
              >
                <Icon className="h-5 w-5 text-white group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-white text-xs">
            © {new Date().getFullYear()} WalletConnect. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;