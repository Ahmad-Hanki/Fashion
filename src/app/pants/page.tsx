import { Items } from "@/data/Data";
import { ItemType } from "@/data/Data";
import DataGrid from "@/components/DataGrid";
const PantsPage = () => {
    const data: ItemType[] = Items.filter(item => item.category === 'pant');
  return (
    <div className="p-6">
        <DataGrid data={data}/>
    </div>
  );
};

export default PantsPage;
