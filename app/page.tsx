
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Preloader from "@/components/Preloader";

export default function Page() {

  
  return (
     <Preloader>
      <Header />

      <main>
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </Preloader>
  );
}
