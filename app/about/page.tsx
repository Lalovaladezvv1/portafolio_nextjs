
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <AchievementsSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
