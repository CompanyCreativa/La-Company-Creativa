"use client";

import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

import Input from "./input";
import Button from "./button";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

import CubeButton from "./cubeButton";
import Loader from "./SVGicons/loader";
import ZohoFormTwo from "./modalForm-form";

const ModalFormInt = () => {
  const { executeRecaptcha } = useGoogleReCaptcha(); // Hook para obtener el token
  const [formData, setFormData] = useState({
    from_name: "",
    from_correo: "",
    from_message: "",
    check: false,
    from_phone: "",
  });
  const [loading, setLoading] = useState(false); // Estado para controlar la carga
  const [checkForm, setCheckForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false); // Estado para controlar si el formulario es válido
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Actualiza la validez del formulario
  useEffect(() => {
    const isValid =
      formData.from_name !== "" &&
      formData.from_correo !== "" &&
      formData.from_phone !== "" &&
      formData.from_message !== "" &&
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
      setLoading(true); // Iniciar carga
      const token = await executeRecaptcha("submit_form");
      const fullFormData = {
        ...formData,
        "g-recaptcha-response": token,
      };

      // Enviar los datos al webhook de Make
      fetch("https://hook.us1.make.com/ry6vrnkpnue5zaon13l8ozrp89akijkn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullFormData),
      }).catch((error) => {
        console.error("Error al enviar al webhook de Make:", error);
      });

      // Enviar los datos a EmailJS
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
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen ? (
        <motion.div
          className="fixed right-0 left-0 top-0 h-screen z-50 w-full h-full flex items-center justify-end bg-[rgba(0,0,0,0.7)]  backdrop-blur-sm overflow-scroll"
          key={"blur"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="max-w-[500px] border-1 w-full h-full flex flex-col justify-center bg-[#0C0A09] md:p-5"
            key={"form"}
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
          >
            <CubeButton
              onClick={() => setIsModalOpen(false)}
              className={
                "absolute top-[-70px] right-0 md:top-[-60px] md:right-5"
              }
            />
            <div>
              <div className="flex flex-col gap-2 px-5 md:px-0 pt-0 md:pt-0">
                <h1 className="text-[27px] lg:text-[35px] 2xl:text-[40px] SpaceGrotesk font-light tracking-wider text-white">
                  ¡Tenemos
                  <br className="hidden lg:block" /> más para <br />
                  <strong className="font-semibold text-companySalmon">
                    contarte!
                  </strong>
                </h1>
                <span className="text-base text-white SpaceGrotesk tracking-wide leading-7 mb-5 lg:max-w-[556px] 2xl:text-sm">
                  Si llegaste hasta aquí es porque seguramente te gustó lo que
                  viste y tienes algo en mente.
                  <strong className="font-semibold">
                    {" "}
                    Escríbenos y lo hacemos realidad.
                  </strong>
                </span>
              </div>
            </div>
            <ZohoFormTwo />
          </motion.div>
        </motion.div>
      ) : null}

      <button
        onClick={() => setIsModalOpen(true)}
        className="button fixed bottom-0 right-[4%] z-40"
      >
        <div className="qubetwo qube">
          <div className="front" style={{ color: "#ffffff", gap: "8px" }}>
            HABLEMOS
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
          </div>
          <div
            className="back"
            style={{
              backgroundColor: "#272727",
              color: "#ffffff",
              border: "1px solid #271717",
              gap: "8px",
            }}
          >
            HABLEMOS
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
          </div>
        </div>
      </button>
    </AnimatePresence>
  );
};

export default function ModalForm() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdvCVUqAAAAAFu4m6fcWmoaqH9ChXiuv4svye7d">
      <ModalFormInt />
    </GoogleReCaptchaProvider>
  );
}
