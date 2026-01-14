import "./globals.css";

export const metadata = {
  title: "multi-step-form",
  description: "Building a multi-step form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
