import Image from "next/image";

export default function TeamMember({ img, name, profesion, className }) {
  return (
    <div className={`flex justify-between`}>
      <div className="">
        <Image
          src={img}
          alt="miembro del equipo de la company creativa"
          className={`w-[340px] xl:w-[400px] 2xl:w-[450px] mt-10   ${
            className ? className : ""
          }`}
        />
        <div className={`mt-2 w-full py-1 text-[#11190c]`}>
          <h3 className="text-xl lg:text-2xl 2xl:text-3xl text-center font-bold SpaceGrotesk mr-8 xl:mr-14 2xl:mr-16">
            {name}
          </h3>
          <p className="mt-1 text-center font-montserrat text-sm lg:text-base 2xl:text-lg font-light mr-8 xl:mr-14 2xl:mr-16">
            {profesion}
          </p>
        </div>
      </div>
    </div>
  );
}
