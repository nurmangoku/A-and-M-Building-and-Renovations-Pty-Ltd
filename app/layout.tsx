import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A and M Building and Renovations Pty Ltd",
  description:
    "Trusted partner for building and renovation projects. We create durable, stylish, and functional spaces tailored to your vision. Get a free consultation now!",
  keywords:
    "New build, Extensions, Games rooms, Granny flats, Renovations, Excavations, Kitchen, Bathroom, Laundry, Saunas, Pool, Spas, Decks, Decking, Pergolas, Bbq decks, Balustrading, Concreting, Concrete driveway, Footings, Exterior painting, Interior painting, Fencing, Gates, Welding, Electric gates, Retainer walls, Roofing, Landscaping, Deck lighting, Bbq lighting, Driveway lighting, Fence lighting, Plastering, Alfresco, Pergola, Garages, Carports, Glasshouse, Entertainment areas, Tennis courts, Fish ponds, Water feature, Glazings, Kids play areas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/aam-logo.jpg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
