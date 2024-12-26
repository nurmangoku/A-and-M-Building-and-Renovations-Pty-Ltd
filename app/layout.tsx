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
    "New build, Extensions, Games rooms, Granny flats, Renovations, Excavations, Kitchen, Bathroom, Laundry, Saunas, Pool, Spas, Decks, Decking, Pergolas, Bbq decks, Balustrading, Concreting, Concrete driveway, Footings, Exterior painting, Interior painting, Fencing, Gates, Welding, Electric gates, Retainer walls, Roofing, Landscaping, Deck lighting, Bbq lighting, Driveway lighting, Fence lighting, Plastering, Alfresco, Pergola, Garages, Carports, Glasshouse, Entertainment areas, Tennis courts, Fish ponds, Water feature, Glazings, Kids play areas, Abbotsfield, Acton Park, Austins Ferry, Battery Point, Berriedale, Blackmans Bay, Bonnet Hill, Bridgewater, Cambridge, Cascades, Chigwell, Claremont, Clarendon Vale, Clifton Beach, Collinsvale, Cornelian Bay, Cremorne, Derwent Park, Dodges Ferry, Dowsing Point, Dynnyrne, Fern Tree, Firthside, Flagstaff Gully, Gagebrook, Geilston Bay, Glebe, Glenlusk, Glenorchy, Goodwood, Granton, Green Point, Herdsmans Cove, Hobart City Centre, Howrah, Huntingfield, Kingston, Kingston Beach, Lauderdale, Lenah Valley, Lindisfarne, Lower Longley, Lutana, Maranoa Heights, Marion Bay, Midway Point, Montagu Bay, Montrose, Moonah, Mornington, Mount Nelson, Mount Rumney, Mount Stuart, New Town, North Hobart, Oakdowns, Old Beach, Opossum Bay, Otago, Penna, Ridgeway, Risdon, Risdon Vale, Roches Beach, Rokeby, Rose Bay, Rosetta, Rosny, Rosny Park, Sandford, Sandy Bay, Snug, Sorell, South Arm, South Hobart, St Johns Park, Taroona, Tolmans Hill, Tranmere, Warrane, West Hobart, West Moonah.",
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
