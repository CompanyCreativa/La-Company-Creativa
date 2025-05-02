"use client";

import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
  faBehance,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import decorationMobileFormContact from "/public/decorationMobileFormContact.png";

import IconContainer from "./iconContainer";
import Input from "./input";
import Button from "./button";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import ArrowTitle from "./SVGicons/arrowTitle";
import decorationthree from "/public/decorationthree.png";
import Image from "next/image";
import brandOne from "/public/brandOne.png";
import brandTwo from "/public/brandTwo.png";
import brandThree from "/public/brandThree.png";
import brandFour from "/public/brandFour.png";
import brandFive from "/public/brandFive.png";
import brandSix from "/public/brandSix.png";
import Link from "next/link";

function FormContactComponent() {
  const { executeRecaptcha } = useGoogleReCaptcha(); // Hook para obtener el token
  const [formData, setFormData] = useState({
    from_name: "",
    from_correo: "",
    from_message: "",
    check: false,
    from_phone: "",
    from_company: "",
  });
  const [checkForm, setCheckForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false); // Estado para controlar si el formulario es válido

  // Actualiza la validez del formulario
  useEffect(() => {
    const isValid =
      formData.from_name !== "" &&
      formData.from_correo !== "" &&
      formData.from_phone !== "" &&
      formData.from_message !== "" &&
      formData.from_company !== "" &&
      formData.check;
    setIsFormValid(isValid);
  }, [formData]);

  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      check: !prevData.check,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      setCheckForm(true);

      const token = await executeRecaptcha("submit_form");
      const fullFormData = {
        ...formData,
        "g-recaptcha-response": token,
      };

      // Enviar datos al webhook de Make
      fetch("https://hook.us1.make.com/ry6vrnkpnue5zaon13l8ozrp89akijkn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullFormData),
      }).catch((error) => {
        console.error("Error al enviar al webhook de Make:", error);
      });

      // Enviar email con EmailJS
      emailjs
        .send(
          "service_r145bos",
          "template_p5p51zs",
          fullFormData,
          "FWjbrvz8yv7lrOYwV"
        )
        .then(
          () => {
            setFormData({
              from_name: "",
              from_correo: "",
              from_message: "",
              from_company: "",
              check: false,
              from_phone: "",
            });
            window.location.href = "/gracias";
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="mt-12 mx-auto p-4 lg:p-0">
      <div
        className="max-w-[1250px]
       mx-auto border bg-background flex flex-col-reverse lg:flex-row lg:justify-between lg:p-10 gap-14 items-stretch	"
      >
        <div className="relative flex-1 w-[100%] lg:w-[50%] flex flex-col gap-7 lg:border lg:p-10  overflow-hidden">
          <div className="flex gap-2 w-full justify-center items-center p-5">
            <ArrowTitle className="rotate-180 hidden lg:block" />
            <h2 className="text-xl font-semibold">CONFÍAN EN NOSOTROS</h2>
            <ArrowTitle className="hidden lg:block" />
          </div>
          <div className="z-20 w-full justify-between flex flex-wrap wrap-3 gap-7 px-5 lg:px-0">
            <div className="w-1/4 flex justify-center items-center">
              <Image src={brandOne} alt="" />
            </div>
            <div className="w-1/4 flex justify-center items-center">
              <Image src={brandTwo} alt="" />
            </div>
            <div className="w-1/4 flex justify-center items-center">
              <Image src={brandThree} alt="" />
            </div>
            <div className="w-1/4 flex justify-center items-center ">
              <Image src={brandFour} alt="" />
            </div>
            <div className="w-1/4 flex justify-center items-center">
              <Image src={brandFive} alt="" />
            </div>
            <div className="w-1/4 flex justify-center items-center">
              <Image src={brandSix} alt="" />
            </div>
          </div>
          <div className=" hidden lg:block lg:absolute w-[200%] bottom-[-57%] left-[-40%]">
            <Image src={decorationthree} alt="Decoration" />
          </div>
          <div className="lg:hidden w-full ">
            <Image
              src={decorationMobileFormContact}
              alt="Decoration"
              className="w-full"
            />
          </div>
        </div>
        <form
          onSubmit={sendEmail}
          className="flex-1 w-[100%] lg:w-[50%] mt-10 flex flex-col gap-8 items-start lg:mt-0 lg:pb-16 px-5 lg:px-0"
          id="form_laco"
        >
          <Input
            placeholder={"Nombre"}
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleInputChange}
          />
          <Input
            placeholder={"Email"}
            type="email"
            name="from_correo"
            value={formData.from_correo}
            onChange={handleInputChange}
          />
          <Input
            placeholder={"Num. telefónico"}
            type="tel"
            name="from_phone"
            value={formData.from_phone}
            onChange={handleInputChange}
          />
          <Input
            placeholder={"Empresa"}
            type="text"
            name="from_company"
            value={formData.from_company}
            onChange={handleInputChange}
          />
          <Input
            placeholder={"Mensaje"}
            type="textarea"
            name="from_message"
            value={formData.from_message}
            onChange={handleInputChange}
          />
          <Input
            type={"checkbox"}
            name="from_check"
            value={formData.check}
            onClick={handleCheckboxChange}
          />
          <div className="flex justify-center items-center gap-8 w-full">
            <Button
              color={isFormValid ? "border" : "disabled"}
              type="submit"
              disabled={!isFormValid} // Botón deshabilitado si el formulario no es válido
            >
              Enviar
            </Button>
            <Link
              href="https://co.linkedin.com/company/companycreativa"
              target="_blank"
              className="hidden lg:block"
            >
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link
              href="https://www.behance.net/lacompanycrea"
              target="_blank"
              className="hidden lg:block"
            >
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faBehance}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <div className="hidden lg:block">
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </div>
            <Link
              href="https://www.instagram.com/lacompanycrea/?hl=es"
              target="_blank"
              className="hidden lg:block"
            >
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link
              className="hidden lg:block"
              href="https://www.facebook.com/lacompanycreativa"
              target="_blank"
            >
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function FormContact() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdvCVUqAAAAAFu4m6fcWmoaqH9ChXiuv4svye7d">
      <FormContactComponent />
    </GoogleReCaptchaProvider>
  );
}
