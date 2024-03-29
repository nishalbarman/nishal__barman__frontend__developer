import FaqSection from "@/components/FAQSection/FaqSection";
import FooterSection from "@/components/FooterSection/FooterSection";
import IDOEventSection from "@/components/IDOEventSection/IDOEventSection";
import IntroSection from "@/components/IntroductionSection/IntroSection";
import NavbarDeskop from "@/components/Navbar/NavbarDeskop";
import RoadMapSection from "@/components/RoadMapSection/RoadMapSection";
import TokenomicsSections from "@/components/TokenomicsSection/TokenomicsSection";
import TopSection from "@/components/Top_Section/TopSection";

export default function Home() {
  return (
    <main className="relative">
      <NavbarDeskop />
      <TopSection />
      <IntroSection />
      <IDOEventSection />
      <TokenomicsSections />
      <RoadMapSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
