import React from "react";
import { Items } from "@/data/Data";
import { ItemType } from "@/data/Data";
import DataGrid from "@/components/DataGrid";
const DressPage = () => {
  const data: ItemType[] = Items.filter((item) => item.category === "shirt");
  return (
    <div className="p-6">
      <DataGrid data={data} />
    </div>
  );
};

export default DressPage;
