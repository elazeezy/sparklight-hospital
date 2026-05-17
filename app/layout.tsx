import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Sparklight Specialist Hospital | Mushin, Lagos",
  description:
    "Sparklight Specialist Hospital — Comprehensive private healthcare in the heart of Mushin, Lagos. Trusted by thousands of families since 2012. 24/7 emergency care, specialist doctors, modern diagnostics.",
  keywords:
    "hospital mushin lagos, private hospital lagos, sparklight hospital, specialist hospital mushin, healthcare lagos mainland",
  openGraph: {
    title: "Sparklight Specialist Hospital",
    description:
      "Comprehensive private healthcare in the heart of Mushin, Lagos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-[100dvh] flex flex-col antialiased">
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
      </body>
    </html>
  );
}
