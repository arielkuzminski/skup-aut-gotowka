import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skup Aut Gdynia | Auto-Bart | Gotówka od Ręki",
  description:
    "Profesjonalny skup samochodów w Gdyni. Bezpieczne i szybkie transakcje, gotówka od ręki. Skupujemy auta w każdym stanie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
