import { Items } from "@/data/Data";
import { ItemType } from "@/data/Data";
import DataGrid from "@/components/DataGrid";
const CoatPage = () => {
    const data: ItemType[] = Items.filter(item => item.category === 'coat');
  return (
    <div className="p-6">
        <DataGrid data={data}/>
    </div>
  );
};

export default CoatPage;
