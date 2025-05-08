import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Nothern Taxiz Club - Your taxi and rideshare protection partner",
  description: "At Northern Taxiz Club, we provide all types of covers for specified loss of or damage to your taxi and rideshare Melbourne vehicle. ",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
