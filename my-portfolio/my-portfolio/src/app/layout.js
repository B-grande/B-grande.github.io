// src/app/layout.js
import "./globals.css";
import AppleHoverNav from "./AppleHoverNav";

export const metadata = {
  title: "My Website",
  description: "Apple-style nav with Next.js & Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppleHoverNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
