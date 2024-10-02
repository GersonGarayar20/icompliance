import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Overpass } from "next/font/google";

const overpass = Overpass({
  subsets: ["latin"],
});

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export const metadata: Metadata = {
  title: "Instituto Peruano de Compliance",
  description: "IPC Instituto Peruano de Compliance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${overpass.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
