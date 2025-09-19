import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/walletApp");

// Wallet schema
const walletSchema = new mongoose.Schema({
  email: String,
  encryptedWallet: String,
  createdAt: { type: Date, default: Date.now },
});

const Wallet = mongoose.model("Wallet", walletSchema);

// AES-256-CBC encryption
const encrypt = (text: string, key: string) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key, "hex"), iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + ":" + encrypted;
};

// API endpoint to save wallet
app.post("/api/wallets", async (req, res) => {
  const { email, walletData } = req.body;
  if (!email || !walletData) return res.status(400).send("Email and wallet data required");

  try {
    const key = process.env.ENCRYPTION_KEY!;
    if (!key) return res.status(500).send("Encryption key not set");

    const encryptedWallet = encrypt(JSON.stringify(walletData), key);

    const wallet = new Wallet({ email, encryptedWallet });
    await wallet.save();

    res.send({ message: "Wallet saved securely!" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving wallet");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));