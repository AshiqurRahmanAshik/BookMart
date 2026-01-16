import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Book Mart | Quality Books Online",
    template: "%s | Book Mart",
  },

  description:
    "Book Mart is a modern e-commerce platform offering high-quality products with fast delivery and secure checkout.",

  applicationName: "Book Mart",

  keywords: ["ecommerce", "online shop", "quality books", "educational books"],

  authors: [{ name: "Book Mart Team" }],
  creator: "Book Mart",

  openGraph: {
    type: "website",
    siteName: "Book Mart",
    title: "Book Mart | Quality Products Online",
    description:
      "Discover high-quality products at Book Mart. Shop smart, shop safe.",
    url: "https://yourdomain.com",
    images: [
      {
        url: "https://i.ibb.co.com/1Y43JM5Q/image.png", // LOGO
        width: 1200,
        height: 630,
        alt: "Book Mart Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Book Mart | Quality Products Online",
    description:
      "Discover high-quality products at Book Mart. Shop smart, shop safe.",
    images: ["https://i.ibb.co.com/1Y43JM5Q/image.png"],
    creator: "@yourtwitterhandle",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-310px)]">
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
