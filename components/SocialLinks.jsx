import { getSocialLinks } from "csc-start/utils/data";
import Image from "next/image";
import facebook from "../images/facebook.svg";
import snapchat from "../images/snapchat.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";

const SocialLinks = () => {
  const data = getSocialLinks();
  return (
    <div className=" flex justify-center space-x-4">
      <Image src={snapchat} alt={"LinkBarge"} />
      <Image src={facebook} alt={"LinkBarge"} />
      <Image src={instagram} alt={"LinkBarge"} />
      <Image src={twitter} alt={"LinkBarge"} />
    </div>
  );
};

export default SocialLinks;
