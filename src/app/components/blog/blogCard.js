import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
export default function BlogCard({ post }) {
  return (
    <div className="w-full min-h-[600px] relative border border-[#f5f5f5] rounded-lg">
      <Image
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover "
      />
      <div className="w-full absolute bottom-0 px-7 py-4 flex flex-col justify-between bg-gradient-to-t from-[#000000] to-[rgba(0,0,0,0.5)] rounded-b-lg">
        <div className="flex flex-col gap-5">
          <h3 className="text-[21px] font-semibold text-[#fff8ea]">
            {post.title}
          </h3>
          <div className="w-full flex justify-between items-center">
            <span className="text-[#fff8ea] font-light text-base">
              {post.date}
            </span>
            <Link
              className="font-bold font-abel tracking-wider text-[#fff8ea] text-lg flex justify-center items-center gap-1"
              href={post.link}
            >
              Leer mas
              <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
