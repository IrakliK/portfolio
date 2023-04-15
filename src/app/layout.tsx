import "./globals.css";

export const metadata = {
  title: "Irakli Khizanishvili",
  description:
    "Explore Irakli Khizanishvili's impressive portfolio experience as a software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
