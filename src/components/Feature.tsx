"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Shield, Globe, Layers } from "lucide-react";

const features = [
  {
    title: "User-friendly",
    description: "Designed to enable a frictionless end user experience",
    icon: Users,
    gradient: "from-web3-cyan to-web3-primary",
    href: "/Wallets",
  },
  {
    title: "Secure",
    description: "End-to-end encryption, private keys are never shared",
    icon: Shield,
    gradient: "from-web3-primary to-web3-accent",
    href: "/Wallets",
  },
  {
    title: "Interoperable",
    description: "Easily integrated into all apps.",
    icon: Globe,
    gradient: "from-web3-accent to-web3-pink",
    href: "//Wallets",
  },
  {
    title: "Multi-chain",
    description: "Support for all chains and rollups out-of-the-box",
    icon: Layers,
    gradient: "from-web3-pink to-web3-cyan",
    href: "//Wallets",
  },
];

const Feature = () => {
  return (
    <section className="py-20 bg-gray-500 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Built to realize the{" "}
            <span className="bg-gradient-to-r from-web3-primary to-web3-accent bg-clip-text text-blue-900">
              promises of web3.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ title, description, icon: Icon, gradient, href }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                href={href}
                className="block p-8 rounded-2xl border border-gray-700 bg-gray-900 hover:border-web3-primary/50 transition-smooth shadow-lg group text-center hover:scale-105 transform"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-bounce`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-web3-cyan">
                  {title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;