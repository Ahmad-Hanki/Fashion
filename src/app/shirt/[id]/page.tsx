interface SingleCoatPageProps {
    params: {
        id: string
    }
}
import SingleItem from "@/components/SingleItem";
import { Items } from "@/data/Data"
import { notFound } from "next/navigation";

const SingleShirtPage = ({params:{id}}:SingleCoatPageProps) => {
    const data = Items.find(item => id === item.id);
    if (!data) notFound();
  return (
    <div>
        <SingleItem item={data}/>
    </div>
  )
}

export default SingleShirtPage