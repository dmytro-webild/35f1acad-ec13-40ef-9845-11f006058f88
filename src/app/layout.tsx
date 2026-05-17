import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'Dr Chaudhari Herbals | Natural Ayurvedic Skin & Hair Care',
  description: 'Experience Dr Chaudhari Herbals - premium Ayurvedic hair oils and skin creams. Natural, botanical solutions for radiant beauty and hair health. Shop now.',
  openGraph: {
    "title": "Dr Chaudhari Herbals | Natural Beauty",
    "description": "Ayurvedic skin creams and hair oils for radiant health.",
    "type": "website"
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
