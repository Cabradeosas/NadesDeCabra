import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

export const metadata = {
  title: "Nades de Cabra - CS2 Tactical Library",
  description: "Biblioteca táctica de utilidades para Counter-Strike 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={rajdhani.className}>
        {children}
      </body>
    </html>
  );
}
