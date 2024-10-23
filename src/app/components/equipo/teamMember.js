import Image from "next/image";

export default function TeamMember({ img, name, profesion, className }) {
  return (
    <div className={`flex justify-center w-full lg:w-[31%] w-[87%] mx-auto `}>
      <div>
        <Image
          src={img}
          alt="miembro del equipo de la company creativa"
          className={`lg:h-[32.5vw] xl:h-[28vw] 2xl:max-h-[509px]  mt-10 object-cover  ${
            className ? className : ""
          }`}
        />
        <div
          className={`member relative mt-5 w-fit px-7 lg:px-7 2xl:px-8 py-1 text-[#11190c] ${
            name === "Alejandro ossa"  ? "relative lg:left-0 2xl:left-4" : ""
          }`}
        >
          <h3 className="text-xl lg:text-[17px] 2xl:text-[26px] uppercase font-bold">
            {name}
          </h3>
          <p className="font-montserrat text-sm lg:text-[15px] 2xl:text-xl font-light">
            {profesion}
          </p>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
