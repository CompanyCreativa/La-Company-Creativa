import Image from "next/image";
import brandingMainImage from "/public/branding/branding_main_image.png";

export default function MainSection() {
  return (
    <div className="flex justify-center ">
      <h1 className="text-[24px] md:text-[40px] 2xl:text-[125px] font-semibold w-full text-end mr-[-70px] z-10 leading-[120px] mt-14">
        AGENCIA DE <br />
        <span className="mr-[-70px]">BRANDING</span>
        <br />
        EN MEDELLÍN
      </h1>
      <Image
        src={brandingMainImage}
        alt="Agencia de branding"
        className="w-1/2"
      />
    </div>
  );
}
