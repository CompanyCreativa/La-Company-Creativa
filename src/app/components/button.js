import Link from "next/link";

export default function Button({ children, color, type = "button", link }) {
  let classes;
  let element;

  if (color === "black") {
    classes =
      "text-base font-normal bg-[#11190C] text-background px-7 py-2 tracking-widest self-start";
  } else if (color === "cream") {
    classes =
      "text-base font-normal bg-background text-[#11190C] px-7 py-2 tracking-widest self-start";
  } else if (color === "border") {
    classes =
      "text-base font-normal bg-transparent text-[#11190C] border border-[#11190C] px-7 py-2 tracking-widest self-start";
  } else if (color === "disabled") {
    classes =
      "text-base font-normal bg-[#808080] text-[#11190C] border border-[#11190C] px-7 py-2 tracking-widest self-start cursor-not-allowed";
  }

  if (type === "link") {
    element = (
      <Link href={link} className={classes}>
        {children}
      </Link>
    );
  } else {
    element = <button className={classes}>{children}</button>;
  }

  return element;
}
