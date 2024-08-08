import Image from "next/image";
import "@/styles/home.scss";
import HomeHero from "./_components/HomeHero";
import HomeSolutions from "./_components/HomeSolutions";
import HomeAssistance from "./_components/HomeAssistance";
import HomeRisks from "./_components/HomeRisks";
import HomeApproach from "./_components/HomeApproach";
import HomeBuzzwords from "./_components/HomeBuzzwords";
import HomeTools from "./_components/HomeTools";
import BookConsultation from "./_components/BookConsultation";
import HomeFAQ from "./_components/HomeFAQ";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSolutions />
      <HomeAssistance />
      <HomeRisks />
      <HomeApproach />
      <HomeBuzzwords />
      <HomeTools />
      <HomeFAQ />
      <BookConsultation />
    </>
  );
}
