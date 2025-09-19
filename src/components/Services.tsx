"use client";

import Link from "next/link";
import { color, motion } from "framer-motion";
import { Shield, ArrowRightLeft, Rocket } from "lucide-react";

const services = [
  {
    name: "Rectify",
    icon: Shield,
    color: "bg-pink-500",
    description: "Claim reflection",
    href: "/",
  },
  {
    name: "Migrate",
    icon: ArrowRightLeft,
    color: "bg-cyan-500",
    description: "Maintenance",
    href: "/",
  },
  {
    name: "Presale",
    icon: Rocket,
    color: "bg-yellow-500",
    description: "Buy/Sell",
    href: "/",
  },
];

const ServiceCard = ({ name, icon: Icon, color, description, href }: any) => (
  <Link href={href} passHref>
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="p-8 rounded-2xl border border-gray-700 bg-gray-900 hover:border-cyan-400 transition cursor-pointer"
    >
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{name}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  </Link>
);

const Services = () => {
  return (
    <section className="py-20 bg-gray-500 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-12 leading-tight">
          We work in dedicated project teams,{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            making it easy to plug into web3.
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>

        <Link
          href="/Wallets"
          className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition"
        >
          Connect
        </Link>
      </div>
    </section>
  );
};

export default Services;