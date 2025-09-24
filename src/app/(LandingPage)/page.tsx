"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const page = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800" />
      <Image
        src={"/Images/web3.jpg"}
        alt="web3 image"
        fill
        className="absolute inset-0 object-cover opacity-30"
        priority
      />

      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-violet-400/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-white">Connecting</span>
          <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Web3
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed">
          The communications protocol for web3, Web3Connect brings the ecosystem together by enabling wallets and apps to securely connect and interact.
        </p>

        <div className="flex flex-col md:flex-row gap-20 justify-center mb-10">
          <div>
            <p className="text-gray-400">Total Websockets</p>
            <p className="text-2xl font-bold text-white">1,107,304,399</p>
            <p className="text-gray-400 text-sm">per day</p>
          </div>
          <div>
            <p className="text-gray-400">Wallets</p>
            <p className="text-2xl font-bold text-white">170+</p>
            <p className="text-gray-400 text-sm">integrated</p>
          </div>
        </div>

        <Link
          href="/Wallets"
          className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-lg font-semibold transition-all"
        >
          CONNECT NOW
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default page;