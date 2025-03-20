import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./../globals.css";

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
