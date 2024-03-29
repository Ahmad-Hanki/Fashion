import HeroComponent from "@/components/Hero";
import { Items } from "@/data/Data";
import DataGrid from "@/components/DataGrid";

export default function Home() {
  
  return (
    <section >
      <HeroComponent />
      <DataGrid data = {Items}/>
    </section>
  );
}
