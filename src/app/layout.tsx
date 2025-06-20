import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/global/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/global/Footer";
import { AnimatedGridPatternDemo } from "@/components/global/bg/AnimatedGridPatternDemo";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Vick portfolio",
  description: "vick portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="dark:bg-gray-950 bg-gray-50"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatedGridPatternDemo />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <div className="fixed top-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
          <Navbar />
          <div className="w-11/12 xl:w-10/12 2xl:w-8/12  mx-auto">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
