import type { Metadata } from "next";
import { inter, lusitana } from "../utils/fonts";
import "../utils/styles/globals.css";


export const metadata: Metadata = {
  title: "NextJS APP | Vikas Parmar",
  description: "Made by Vikas Parmar. Generated with next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lusitana.variable}`} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
