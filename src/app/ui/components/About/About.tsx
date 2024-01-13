import Image, { StaticImageData } from "next/image";

interface AboutProps {
  name: string;
  birthDate: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  description: string;
  photo: StaticImageData;
}

export const About = ({ photo }: Partial<AboutProps>): React.ReactElement => {
  return <Image width={240} src={photo as StaticImageData} alt="photo" />;
};
