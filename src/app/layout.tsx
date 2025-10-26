import { ReactNode } from "react";

import { Providers } from "../components/providers";
import "../styles/globals.css";
import Header from "@/components/shared/header";
import TrackSection from "@/components/shared/tracksection";
import Footer from "@/components/shared/footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <div className="relative z-10 ">
            <TrackSection />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
