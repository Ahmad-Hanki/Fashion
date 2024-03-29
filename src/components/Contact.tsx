import Image from "next/image";
import { Card, CardTitle } from "./ui/card";
import phone from '@/assets/phone.svg'
import Container from "./Container";
import location from '@/assets/location.png'
import { Separator } from "./ui/separator";
const contact = [
  {
    title: "Contacts",
    phone: '+7 925 850 39 38',
    email:"bisultanova.i@bk.ru",
    image:phone
  },
  {
    title: "Moscow",
    place:"Kutuzovsky Ave, 43",
    time:"EVERY DAY",
    image:location,
  },
  {
    title: "Grozny",
    place:"Bulvar M. Esambayeva, 11",
    time:"EVERY DAY",
    image:location,
  },

];

const Contact = () => {
  return (
    <div className="p-7 pt-28 bg-primary-foreground ">
      <Container>
        <h1 className="text-5xl font-extrabold text-center mb-9">Contact</h1>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] text-center gap-9">
          {contact.map((item) => (
            <Card key={item.title} className="flex flex-col items-center gap-4 p-8">
              <div className="relative h-32 aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  fill
                  className="object-cover object-center"
                  alt="logo"
                />
              </div>
              <CardTitle className="font-bold">{item.title}</CardTitle>
              <p>{item?.phone}</p>
              <p>{item?.place}</p>
              <p>{item?.time}</p>
            </Card>
          ))}
        </div>
        <Separator />
      </Container>
    </div>
  );
};

export default Contact;
