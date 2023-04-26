import { getLinksLinks } from "csc-start/utils/data";
import Image from "next/image";
import Link1 from "../images/Link1.svg";

const NonSocialLinks = () => {
  const data = getLinksLinks();
  return (
    <div className=" flex flex-col items-center">
      <Image src={Link1} alt={"LinkBarge"} className="mt-5" />
      <Image src={Link1} alt={"LinkBarge"} className="mt-5" />
      <Image src={Link1} alt={"LinkBarge"} className="mt-5" />
      <Image src={Link1} alt={"LinkBarge"} className="mt-5" />
    </div>
  );
};

export default NonSocialLinks;
