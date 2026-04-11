import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Resume from "../components/Resume/Resume";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Resume />
      {/*<Testimonials />*/}
      <CTA />
    </>
  );
}
