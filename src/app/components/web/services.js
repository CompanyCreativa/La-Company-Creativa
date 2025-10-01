import Image from "next/image";
import ButtonWeb from "./buttonWeb";
import decorationTwo from "/public/web/decorationtwo.webp";

export default function Services({ children }) {
  return (
    <div className="w-full flex flex-col max-w-[1500px] mx-auto py-20 ">
      <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[#E5E7EB] font-bold font-poppins">
        Servicios de diseño web a tu medida
      </h2>
      <div className="border border-[#343232] rounded-xl p-10 max-w-[475px] group/card hover:border-[#F7F7F7] transition-colors duration-300 ease-in-out">
        <div className="flex items-start mb-5 w-full justify-between">
          <Image src={decorationTwo} alt="decoration" />
          <h3 className="text-3xl text-[#393737] font-poppins font-bold group-hover/card:text-[#E5E7EB] transition-colors duration-300 ease-in-out">
            Ecommerce
          </h3>
        </div>
        <div>
          <h4 className="text-2xl text-[#E5E7EB] font-poppins mb-5">
            Comercio <span className="font-semibold font-poppins">digital</span>
          </h4>
          <div className="flex gap-3 text-sm text-[#9CA3AF]  ">
            <span className="border border-[#9CA3AF] border-[1px] py-1 px-2 rounded-md SpaceGrotesk">
              Wordpress
            </span>
            <span className="border border-[#9CA3AF] border-[1px] py-1 px-2 rounded-md SpaceGrotesk">
              Shopify
            </span>
            <span className="border border-[#9CA3AF] border-[1px] py-1 px-2 rounded-md SpaceGrotesk">
              Figma
            </span>
          </div>
          <p className="text-[#E5E7EB] mt-5 mb-10 leading-6 SpaceGrotesk">
            Tiendas en línea hechas para vender: intuitivas, seguras y
            optimizadas para que tus productos lleguen más lejos y a más
            personas.
          </p>
          <div className="w-full flex justify-center mt-20">
            <ButtonWeb
              text="Mas información"
              className="group-hover/card:bg-[#E5E7EB] opacity-0 group-hover/card:opacity-100 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
