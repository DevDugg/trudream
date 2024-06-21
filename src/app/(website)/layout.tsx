import "./globals.css";

import Footer from "@/components/sections/footer/footer";
import Header from "@/components/sections/header/header";
import Loader from "@/components/sections/loader";
import Provider from "@/config/provider";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <Loader />
      <Header />
      {children}
      <Toaster />
      <Footer />
    </Provider>
  );
}
