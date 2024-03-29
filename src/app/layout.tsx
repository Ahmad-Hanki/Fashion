import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/providers/theme-provider"; 
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fashion World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="sticky top-0 left-0 z-30">
               <Navbar/>
            </div>
       
        <main className="bg-secondary">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
