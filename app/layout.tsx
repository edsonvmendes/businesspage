import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edson Vinícius | Aulas de Excel e Power BI",
  description:
    "Aulas online de Excel e Power BI com foco em prática, método e resultado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-body text-white antialiased">{children}</body>
    </html>
  );
}
