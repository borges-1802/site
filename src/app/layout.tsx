import type { Metadata } from "next";
import { Instrument_Sans, Montserrat } from "next/font/google";
import { Providers, themeScript } from "@/components/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({ variable: "--font-heading", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const instrument = Instrument_Sans({ variable: "--font-instrument", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "João Victor Borges - Full Stack & UX/UI Designer",
    template: "%s · João Victor Borges",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-theme="light"
      suppressHydrationWarning
      className={`${montserrat.variable} ${instrument.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
