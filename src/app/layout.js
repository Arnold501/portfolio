import "./globals.css";
export const metadata = {
  title: "Arnold NIYIGENA - Web developer",
  description: "Designed and Coded by NIYIGENA Arnold",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
