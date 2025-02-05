import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navigation/Navbar";
import { CartProvider } from "@/components/providers/CartProvider";
import SideCart from "@/components/cart/SideCart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Burger Smoke",
  description: "Burger Smoke Maracaibo",
};

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Menu", href: "/menu" },
  { label: "Checkout", href: "/checkout" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar
          items={navItems}
          logo="/Horizontal_logo_2.jpg" // You can use a different logo for admin
        />
        <main>
          <CartProvider>
            {children}
            <SideCart />
          </CartProvider>
        </main>
      </body>
    </html>
  );
}
