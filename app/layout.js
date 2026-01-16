import ErrorWrapper from "./error-wrapper";
import "./globals.css";

export const metadata = {
  title: {
    default: "Next.js 15 App",
    template: "%s | Next.js 15 App",
  },
};

export default function RootLayout({ children }) {
  // Uncomment the line below to test global-error.jsx
  //   throw new Error("Layout error - this will trigger global-error.jsx!");

  return (
    <html lang="en">
      <body>
        <ErrorWrapper>{children}</ErrorWrapper>
      </body>
    </html>
  );
}
