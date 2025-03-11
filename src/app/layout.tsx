import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google";


const mainFontFamily = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"]
})

import {Header} from "../components/Header/"
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "JinStore",
  description: "Created by Caio Furtado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFontFamily.className}>
        <Header />
        <main className="pt-[124px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
