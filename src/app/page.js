import FaqSection from "@/components/FAQSection/FaqSection";
import IDOEventSection from "@/components/IDOEventSection/IDOEventSection";
import IntroSection from "@/components/IntroductionSection/IntroSection";
import RoadMapSection from "@/components/RoadMapSection/RoadMapSection";
import TokenomicsSections from "@/components/TokenomicsSection/TokenomicsSection";
import TopSection from "@/components/Top_Section/TopSection";

export default function Home() {
  return (
    <main className="">
      <TopSection />
      <IntroSection />
      <IDOEventSection />
      <TokenomicsSections />
      <RoadMapSection />
      <FaqSection />
    </main>
  );
}
