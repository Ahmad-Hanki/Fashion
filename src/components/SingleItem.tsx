import { ItemType } from "@/data/Data";
import Container from "./Container";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import Image from "next/image";
import { formatPrice } from "@/lib/formatter";
interface SingleItemProps {
  item: ItemType;
}
const SingleItem = ({ item }: SingleItemProps) => {
  return (
    <div className="p-7">
      <Container>
        <Card className="rounded-lg w-full justify-center flex flex-col mx-auto md:flex-row items-center p-7">
          <CardContent>
            <div className="w-[400px] overflow-hidden relative aspect-square">
              <Image
                alt="photo"
                fill
                className="object-cover object-center"
                src={item.image}
              />
            </div>
          </CardContent>
          <div className="flex flex-col items-center gap-7">
            <CardHeader className="flex flex-col items-center gap-4">
              <CardTitle className="bold text-3xl">
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardDescription>{item.description}</CardDescription>
            <CardFooter className="font-extrabold text-yellow-500 ">
              {formatPrice(item.price)}
            </CardFooter>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default SingleItem;
