import "@/styles/css/main.css";
import { Inter } from "next/font/google";
import BootstrapClient from "@/components/BootstrapClient.js";
import "@smastrom/react-rating/style.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { FooterUp, GlobalStyle } from "@/styles/GlobalStyled";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { locale }, }) {

  const messages = await getMessages(locale);
  return (
    <html lang={locale} data-bs-theme="light">
      <body className={inter.className}>
        <GlobalStyle />
        <NextIntlClientProvider messages={messages}>
          <Banner />
          <Navbar />
          <main>{children}</main>
          <FooterUp>
            <Footer />
          </FooterUp>
        </NextIntlClientProvider>
        <BootstrapClient />
        <link href="https://db.onlinewebfonts.com/c/b52804ac57ef6e90d2826a6b0f111133?family=Integral+CF+Bold" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </body>
    </html>
  );
}