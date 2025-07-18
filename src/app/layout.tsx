import type { Metadata } from "next";

import "./globals.scss";




export const metadata: Metadata = {
  title: "احراز هویت",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
