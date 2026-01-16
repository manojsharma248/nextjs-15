import "./globals.css";

export const metadata = {
  title: {
    default: "Next.js 15 App",
    template: "%s | Next.js 15 App",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
