import React from "react";
import Container from "./Container";
import Options from "./Options";

const DeliveryOptions = () => {
  return (
    <div className=" flex items-center text-secondary-foreground mt-9 bg-primary-foreground">
      <Container>
        <div className="flex flex-col justify-center items-center w-full h-full gap-16 p-4">
          <h1 className="font-extrabold text-4xl sm:text-5xl px-0">Delivery Options</h1>
          <p className="max-w-3xl text-center">
            Dear customers, due to the current circumstances worldwide, we
            regret to inform you that we are temporarily unable to deliver goods
            to countries under a state of emergency. Additionally, please note
            that delivery times by Russian Post and CDEK may be extended for
            some shipments during this period (approximately up to 10 days). We
            would like to remind you that the option of self-pickup from our
            offline store is available to you. We look forward to seeing you at
            the ILONA BISULTANOVA boutique-atelier!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default DeliveryOptions;
