"use client";

import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <ThemeProvider>
          <main className="flex justify-center w-full">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
