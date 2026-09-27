import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Tanishq Nayak",
  description:
    "Final-year CS student building at the boundary of hardware and security. Post-quantum cryptography on FPGA, ML-based intrusion detection, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ paddingTop: "56px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
