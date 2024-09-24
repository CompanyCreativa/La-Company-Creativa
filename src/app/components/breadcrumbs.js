import Link from "next/link";
import BreadcrumbsArrowIcon from "./SVGicons/breadcrumbsArrowIcon";

export default function Breadcrumbs({ lastPage = "", currentPage }) {
  let lastPageLink;

  if (lastPage === "Inicio") {
    lastPageLink = "";
  } else {
    lastPageLink = lastPage;
  }

  return (
    <div className="flex items-center gap-2 mt-5">
      <Link
        href={`/${lastPageLink.toLowerCase()}`}
        className="font-montserrat font-light text-base"
      >
        {lastPage}
      </Link>
      <BreadcrumbsArrowIcon />
      <span className="font-montserrat font-bold text-base">{currentPage}</span>
    </div>
  );
}
