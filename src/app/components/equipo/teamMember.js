import Image from "next/image";

export default function TeamMember({ img, name, profesion, className }) {
  return (
    <div className={`flex justify-center w-full lg:w-[31%] w-[87%] mx-auto `}>
      <div>
        <Image
          src={img}
          alt="miembro del equipo de la company creativa"
          className={`lg:h-[32.5vw] xl:h-[28vw] 2xl:max-h-[509px] mt-10 object-cover  ${
            className ? className : ""
          }`}
        />
        <div className={`relative mt-5 ml-14 w-fit  py-1 text-[#11190c]`}>
          <h3 className="text-xl lg:text-[17px] 2xl:text-[30px] font-bold SpaceGrotesk">
            {name}
          </h3>
          <p className="border-t border-[#11190c] border-b mt-2 w-fit font-montserrat text-sm lg:text-[15px] 2xl:text-lg font-light">
            {profesion}
          </p>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
