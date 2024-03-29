import HeroComponent from "@/components/Hero";
import { Items } from "@/data/Data";
import DataGrid from "@/components/DataGrid";
import DeliveryOptions from "@/components/DeliveryOptions";
import Options from "@/components/Options";

export default function Home() {
  
  return (
    <section >
      <HeroComponent />
      <DataGrid data = {Items}/>
      <DeliveryOptions/>
      <Options/>
    </section>
  );
}
