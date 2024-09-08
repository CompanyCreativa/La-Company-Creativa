"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "/public/logoCompany.svg";
import HamburgerIcon from "./SVGicons/hamburgerIcon";
import HeaderItem from "./headerItem";
import Modal from "./modal";

export default function Header({ page }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header
        className={`bg-background min-h-[100px] px-4 lg:px-0 fixed top-0 z-30 w-full flex items-center shadow-md`}
      >
        <div className="max-w-[1760px] w-full lg:w-[91.5%] mx-auto flex justify-between items-center ">
          <Link href="/" className="cursor-pointer">
            <Image
              src={logo}
              className="max-w-[122px] lg:max-w-[153px] cursor-pointer"
              alt="Logo"
            />
          </Link>
          <div>
            <div className="gap-10 hidden lg:flex">
              <HeaderItem selected={page === "home"} link="/">
                Inicio
              </HeaderItem>
              <HeaderItem selected={page === "portfolio"} link="/portafolio">
                Portafolio
              </HeaderItem>
              <HeaderItem selected={page === "equipo"} link="/equipo">
                Equipo
              </HeaderItem>
              {/* <HeaderItem selected={page === "blog"} link="/blog">
                Blog
              </HeaderItem> */}
              <HeaderItem selected={page === "contacto"} link="/contacto">
                Contacto
              </HeaderItem>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <HamburgerIcon />
              </button>
            </div>
          </div>
        </div>
      </header>
      {isModalOpen && <Modal page={page} onClose={handleCloseModal} />}
    </>
  );
}
