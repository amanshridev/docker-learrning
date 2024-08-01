import "./globals.css";

export const metadata = {
  title: "Vijay Rath",
  description: "Will be added",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
