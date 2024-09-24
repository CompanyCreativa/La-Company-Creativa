import Image from "next/image";

export default function SwiperImageContainer({
  img,
  imgMobile,
  alt,
  textBold,
  textNormal,
  animation,
}) {
  return (
    <div className="w-full lg:h-full max-h-screen flex flex-col items-center relative ">
      <Image src={img} alt={alt} className="h-full w-full hidden lg:block" />
      <Image src={imgMobile} alt={alt} className="h-full w-full lg:hidden" />
      {textBold && (
        <span
          className={`text-white text-[12px] lg:text-[22px] uppercase mosk font-light absolute bottom-8 left-5 lg:left-16 tracking-[5px] lg:tracking-[9px] transition-all opacity-0 ${
            animation ? animation : ""
          }`}
        >
          <span className="font-medium text-[11px] lg:text-[19px] ">
            {textBold}
          </span>{" "}
          - {textNormal}
        </span>
      )}
    </div>
  );
}
