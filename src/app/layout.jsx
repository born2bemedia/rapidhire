import { Urbanist } from "next/font/google";
import "@/styles/base.scss";
import Footer from "@/global_components/Footer";
import Header from "@/global_components/Header";
import Preloader from "@/global_components/Preloader";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Rapid HR Connect",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
