import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fashionstoredb.com"),
  title: {
    default: "Moda Versatil",
    template: "%s | Moda Versatil"
  },
  description:
    "Luxury female fashion e-commerce with editorial collections, refined essentials, and Brazilian checkout options.",
  openGraph: {
    title: "Moda Versatil",
    description:
      "Luxury female fashion e-commerce with editorial collections and refined essentials.",
    siteName: "Moda Versatil",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
