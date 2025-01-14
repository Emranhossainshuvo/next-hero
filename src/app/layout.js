import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next hero dynamic app",
  description: "Developed and maintained by Shuvo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <h6>Logo</h6>
          <ul>
            <ul>Shop</ul>
            <ul>About</ul>
            <ul>Contact</ul>
            <ul>Earn</ul>
          </ul>
        </nav>
        {children}
      <footer>
        This is my footer
      </footer>
      </body>
    </html>
  );
}
