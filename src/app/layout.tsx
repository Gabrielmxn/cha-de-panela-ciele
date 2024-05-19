import type { Metadata } from "next";
import { Inter, Holtwood_One_SC } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charraiá",
  description: "Charraiá da Graciele e Daniel",
  icons: {
    icon: '/chapeu.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <QueryClientProvider client={queryClient}>
        <body className={`${inter.className}`}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
