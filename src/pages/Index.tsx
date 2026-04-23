import Navbar from "@/components/Navbar";
import HeroFleet from "@/components/HeroFleet";
import DriversServices from "@/components/DriversServices";
import FaqContacts from "@/components/FaqContacts";

const scrollTo = (href: string) => {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Index() {
  return (
    <div className="min-h-screen bg-taxi-dark font-golos">
      <Navbar scrollTo={scrollTo} />
      <HeroFleet scrollTo={scrollTo} />
      <DriversServices scrollTo={scrollTo} />
      <FaqContacts scrollTo={scrollTo} />
    </div>
  );
}
