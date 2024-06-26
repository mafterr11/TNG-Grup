import ContactMap from "@/components/pages/contact/ContactMap";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Contactați TNG GRUP - Partenerul Dumneavoastră în Construcții",
  description:
    "Luați legătura cu TNG GRUP pentru orice întrebări sau colaborări în domeniul construcțiilor.",
  keywords: "contact TNG GRUP, Bucuresti, construcții, România",
});

const Contact = () => {
  return <ContactMap />;
};

export default Contact;
