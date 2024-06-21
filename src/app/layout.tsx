import "./globals.css";

import { Viewport } from "next";
import { colors } from "@/config/colors";
import { getSEOTags } from "@/lib/seo";
import localFont from "next/font/local";

const font = localFont({
  src: [
    { path: "../../public/fonts/OverusedGrotesk-Bold.otf", weight: "700" },
    { path: "../../public/fonts/OverusedGrotesk-SemiBold.otf", weight: "600" },
    { path: "../../public/fonts/OverusedGrotesk-Medium.otf", weight: "500" },
    { path: "../../public/fonts/OverusedGrotesk-VF.ttf", weight: "400" },
  ],
  display: "block",
});

export const viewport: Viewport = {
  // Will use the ACCENT color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-BACKGROUND text-ACCENT`}>{children}</body>
    </html>
  );
}
