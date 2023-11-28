import "./globals.css";

export const metadata = {
  title: "Safaris Travellers",
  description: "Safaris Travellers ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="top">{children}</body>
    </html>
  );
}
