import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Md. Fahim Muntasir | Biotechnologist & Full-Stack Developer",
  description:
    "Portfolio of Md. Fahim Muntasir, a Biotechnology & Genetic Engineering researcher and full-stack developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
