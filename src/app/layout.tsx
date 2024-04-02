import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header/header";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ABISChain",
  description: "ABISChain platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider
          appearance={{
            variables: {
              colorPrimary: "#bdbfbf",
              colorText: "black",
            },
          }}
        >
          <Header />
          <Providers>{children}</Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
