import HeroComponent from "@/components/Hero";
import { Items } from "@/data/Data";
import DataGrid from "@/components/DataGrid";
import DeliveryOptions from "@/components/DeliveryOptions";
import Options from "@/components/Options";
import Contact from "@/components/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  
  return (
    <section >
      <HeroComponent />
      <DataGrid data = {Items}/>
      <DeliveryOptions/>
      <Options/>
      <Contact />
      <Footer />

    </section>
  );
}
