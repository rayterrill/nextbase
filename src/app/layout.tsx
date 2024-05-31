import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'
import { Header } from '@/app/components/Header'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="h-screen flex flex-col">
            <header className="flex items-center px-8">
              <Header />
            </header>
            <div className="flex-1 flex flex-col sm:flex-row">
              <aside className="bg-green-600 sm:w-32 px-8">Left Sidebar</aside>
              <main className="flex-1">
                {children}
              </main>
            </div>
            <footer className="bg-red-600 px-8 h-25">Footer</footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
