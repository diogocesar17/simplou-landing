import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Simplou — Controle seu lucro real pelo WhatsApp",
  description:
    "Você trabalha o dia inteiro mas sabe quanto lucrou de verdade? O Simplou registra seus ganhos e custos pelo WhatsApp e mostra seu lucro real. Gratuito para começar.",
  keywords: [
    "motorista app",
    "uber",
    "99",
    "ifood",
    "rappi",
    "loggi",
    "controle de ganhos",
    "lucro real",
    "whatsapp bot",
    "motorista de aplicativo",
    "entregador",
    "finanças motorista",
  ],
  openGraph: {
    title: "Simplou — Controle seu lucro real pelo WhatsApp",
    description:
      "Registre ganhos e custos direto no WhatsApp e descubra seu lucro real. Sem app para instalar.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simplou — Controle seu lucro real pelo WhatsApp",
    description:
      "Registre ganhos e custos direto no WhatsApp e descubra seu lucro real.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#22c55e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
