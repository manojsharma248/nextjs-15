import "./globals.css";

export const metadata = {
  title: "Next.js 15 Demo",
  description: "Next.js 15 application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
