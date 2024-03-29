import Image from "next/image";
import { Card, CardTitle } from "./ui/card";
import logo from "@/assets/logo.png";
import Container from "./Container";
import { Separator } from "./ui/separator";
const options = [
  {
    title: "Pickup",
    description:
      "Pickup is available from the ILONA BISULTANOVA boutique-atelier at the following address:Moscow, Kutuzovsky Avenue, 43",
  },
  {
    title: "Courier Delivery",
    description:
      "Delivery is carried out within 1-3 working days from the moment of order placement, on any convenient day for you from 10:00 to 21:00. The delivery cost is calculated individually. If you refuse to receive the order, the delivery cost is not refunded.",
  },
  {
    title: "Worldwide Delivery",
    description:
      "By Russian Post from 2 days.By CDEK from 2 days.The exact terms and cost depend on the delivery region.",
  },
];

const Options = () => {
  return (
    <div className="p-7 pt-28 bg-primary-foreground">
      <Container>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] text-center gap-9">
          {options.map((item) => (
            <Card key={item.description} className="flex flex-col items-center gap-12 p-8">
              <div className="relative h-32 aspect-square overflow-hidden">
                <Image
                  src={logo}
                  fill
                  className="object-cover object-center"
                  alt="logo"
                />
              </div>
              <CardTitle className="font-bold">{item.title}</CardTitle>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
        <Separator />
      </Container>
    </div>
  );
};

export default Options;
