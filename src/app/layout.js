import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Vijay Rath",
  description: "Will be added",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
