import Image from "next/image";

export default function DigitalServices({
  city,
  stepsServices,
  platformsServices,
  title,
  especialists,
}) {
  return (
    <>
      <h2 className="mt-14 xl:mt-40 text-[24px] 2xl:text-[52px] leading-[30px] text-white font-semibold mb-20">
        {title} {city ? "en " + city : ""}
      </h2>
      <div className="flex flex-col lg:flex-row gap-5  w-full md:pr-10 xl:pr-20 2xl:pr-44 mx-[-10] lg:mx-[-20] w-screen lg:justify-between">
        <div className="lg:w-[50%]">
          {stepsServices.map((service, index) => (
            <div
              key={index}
              className={`${
                index === 1
                  ? "bg-gradient-to-r from-[rgba(43,255,195,0.2)] to-[rgba(43,255,195,0.0)]"
                  : ""
              } py-3 px-6 md:pl-10 xl:pl-20 2xl:pl-44 xl:py-5`}
            >
              <p
                className={`${
                  index === 1 ? "text-[#FFF8EA]" : "text-[#5d5d5e]"
                } font-thin font-montserrat text-[17px] xl:text-[24px] leading-[30px]`}
              >
                {service.step}
              </p>
              <h4 className="font-regular text-[20px] xl:text-[32px] mb-2">
                {service.title}
              </h4>
              <p className="font-light font-montserrat text-[14px] text-[16px] text-[#FFF8EA] leading-[20px] tracking-large">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="p-4 xl:p-6 2xl:p-8 lg:w-[40%] rounded-[11px] bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)]  flex flex-col gap-4 shadow-black/30">
          {platformsServices.map((service, index) => (
            <div
              className="xl:py-5 bg-[#2BFFC3]/[0.02] hover:bg-[#2BFFC3]/[0.05] transition-colors duration-300 rounded-[7px] p-4 flex flex-col gap-2 border border-[#2BFFC3] border-opacity-[0.1]"
              key={index}
            >
              <h3 className="font-montserrat flex items-center gap-1 text-[18px] xl:text-[24px] font-semibold text-[#FFF8EA] leading-[30px]">
                <Image
                  src={service.logo}
                  alt="iconDigital1"
                  className="w-[24px] xl:w-[38px]"
                />
                {service.title}
              </h3>
              <p className="font-light font-montserrat text-[14px] text-[#FFF8EA] opacity-80 leading-[20px] tracking-large">
                {service.description}
              </p>
            </div>
          ))}
          {especialists}
          <a
            className="inline-flex max-w-max items-center mt-2 gap-2 text-[12px] uppercase tracking-[3px] bg-companySalmon py-4 px-7 font-thin hover:bg-[#B92A1D] transition-all duration-300"
            href="#contact"
          >
            Explora nuestros servicios{" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.75 1C11.75 0.585787 11.4142 0.250001 11 0.250001L4.25 0.250001C3.83579 0.250001 3.5 0.585787 3.5 1C3.5 1.41421 3.83579 1.75 4.25 1.75H10.25V7.75C10.25 8.16421 10.5858 8.5 11 8.5C11.4142 8.5 11.75 8.16421 11.75 7.75L11.75 1ZM2.03033 11.0303L11.5303 1.53033L10.4697 0.469671L0.96967 9.96967L2.03033 11.0303Z"
                fill="#FFF8EA"
              />
              <path d="M1 1L11 1L11 11" stroke="#FFF8EA" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
