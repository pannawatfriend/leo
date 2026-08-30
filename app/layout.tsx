import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "คอร์ส Roblox ป.6 — จากศูนย์สู่การเผยแพร่",
    template: "%s · คอร์ส Roblox ป.6",
  },
  description:
    "คอร์ส 8 คาบ สอนนักเรียนชั้นประถมศึกษาปีที่ 6 สร้างและเผยแพร่เกม Roblox — คู่มือครูและคู่มือนักเรียน",
};

const FONTS =
  "https://fonts.googleapis.com/css2?family=Baloo+Thai+2:wght@400;500;600;700;800&family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>{children}</body>
    </html>
  );
}
