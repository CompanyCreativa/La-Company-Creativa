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
import decorationtwo from "/public/decoration2.png";
import decorationFormMobile from "/public/decorationMobileForm.png";

import IconContainer from "./iconContainer";
import Input from "./input";
import Button from "./button";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import Image from "next/image";
import Link from "next/link";

function FormComponent() {
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
      formData["g-recaptcha-response"] = token;
      emailjs
        .send(
          "service_r145bos",
          "template_p5p51zs",
          formData,
          "FWjbrvz8yv7lrOYwV"
        )
        .then(
          (result) => {
            setFormData({
              from_name: "",
              from_correo: "",
              from_message: "",
              check: false,
              from_phone: "",
              from_company: "",
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
    <div className="mt-12 px-5">
      <div className="max-w-[1400px] mx-auto border bg-background flex flex-col md:px-5 lg:flex-row lg:justify-between lg:items-start lg:pl-[6%] lg:pt-[6%] lg:pr-[2%] overflow-hidden relative">
        <div>
          <div className="flex flex-col gap-7 px-5 md:px-0 pt-5 md:pt-0">
            <h1 className="text-[27px] lg:text-[32px] SpaceGrotesk font-bold tracking-widest text-companySalmon">
              ¡Tenemos más para contarte!
            </h1>
            <span className=" text-base SpaceGrotesk tracking-wider leading-7 lg:max-w-[556px] lg:text-lg">
              Si llegaste hasta aquí es porque seguramente te gustó lo que viste
              y tienes algo en mente.
              <strong className="font-semibold">
                {" "}
                Escríbenos y lo hacemos realidad.
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-8 mt-5 lg:mt-10 px-5 md:px-0">
            <Link
              href="https://co.linkedin.com/company/companycreativa"
              target="_blank"
            >
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link href="https://www.behance.net/lacompanycrea" target="_blank">
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faBehance}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link href="https://wa.link/omjp5g" target="_blank">
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link
              href="https://www.instagram.com/lacompanycrea/?hl=es"
              target="_blank"
            >
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link
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
        </div>
        <div className="hidden md:block md:absolute bottom-0 left-0">
          <Image src={decorationtwo} alt="Decoration" />
        </div>
        <div className="md:hidden">
          <Image
            src={decorationFormMobile}
            alt="Decoration"
            className="w-full"
          />
        </div>
        <form
          onSubmit={sendEmail}
          className="w-full mt-10 flex flex-col gap-8 items-start lg:max-w-[438px] lg:mt-0 pb-16 px-5 md:px-0"
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
            tooltip="El nombre de la empresa es opcional"
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
          <Button
            color={isFormValid ? "border" : "disabled"}
            type="submit"
            disabled={!isFormValid} // Botón deshabilitado si el formulario no es válido
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default function Form() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdvCVUqAAAAAFu4m6fcWmoaqH9ChXiuv4svye7d">
      <FormComponent />
    </GoogleReCaptchaProvider>
  );
}
