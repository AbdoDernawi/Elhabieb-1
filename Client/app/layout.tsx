"use client";

import { Cairo } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "@/src/store";
import "../app/globals.css";

const cairo = Cairo({ subsets: ["arabic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className={cairo.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        />
      </head>
      <body className="scrollDashbordSideBar ">
        <Provider store={store}>
          <NextUIProvider>
            <NextThemesProvider attribute="class">
              {children}
            </NextThemesProvider>
          </NextUIProvider>
        </Provider>
      </body>
    </html>
  );
}
