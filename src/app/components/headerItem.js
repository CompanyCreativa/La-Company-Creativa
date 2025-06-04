import Link from "next/link";

export default function HeaderItem({ children, link = "", selected, onClose }) {
  return (
    <Link
      href={link}
      onClick={onClose}
      className={`${
        selected ? "active text-white" : "header-item text-[#7C7C7C]"
      } lg:text-black text-lg lg:text-sm uppercase font-bold lg:font-medium tracking-[7px] lg:tracking-[4px] cursor-pointer`}
    >
      {children}
    </Link>
  );
}
