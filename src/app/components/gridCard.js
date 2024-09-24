import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function GridCard({ image, alt = "", title, link = "" }) {
  return (
    <Link href={link} className="flex justify-center relative group">
      <Image src={image} className="w-full" alt={alt} />
      <div className="w-full h-full bg-[#393939]/85 absolute top-0 left-0 flex justify-center items-center opacity-0 transition-all duration-300 group-hover:opacity-100 px-5">
        <h1 className="text-white lg:text-lg xl:text-xl 2xl:text-2xl font-abel text-center">
          {title}
        </h1>
        <div className="absolute bottom-5 right-7 flex justify-center items-center gap-2">
          <h1 className="text-white font-normal">Ver proyecto</h1>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-white text-2xl"
          />
        </div>
      </div>
    </Link>
  );
}
