import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NoorShop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-teal-200 to-teal-300">
        <Layout>
          <Navbar />
          {children}
          <Toaster position="bottom-right" toastOptions={{duration : 3000, style : { background : "#000000", color : "#ffffff"  }}} />
          </Layout>
      </body>
    </html>
  );
}
