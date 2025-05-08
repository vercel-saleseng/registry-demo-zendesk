"use client";

import type React from "react";
import "@/app/globals.css";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <main className="flex justify-center w-full">
          <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
        </main>
      </body>
    </html>
  );
}
