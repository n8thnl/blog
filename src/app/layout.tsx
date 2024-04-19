import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "'s Code & Thoughts",
  description: "A blog hosting cool tech projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Workbench:BLED@40&display=swap" rel="stylesheet"></link>
        <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js" async></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}