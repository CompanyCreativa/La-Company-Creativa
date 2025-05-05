import Image from "next/image";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

import logoGoogle from "/public/digital/logo-google.png";
import logoMeta from "/public/digital/logo-meta.png";
import logoTiktok from "/public/digital/logo-tiktok.png";
import logoLinkedin from "/public/digital/logo-linkedin.png";

export default function FormDigital() {
  const platformsServices = [
    {
      logo: logoGoogle,
      title: "Google Ads",
    },
    {
      logo: logoMeta,
      title: "Meta Ads",
    },
    {
      logo: logoLinkedin,
      title: "Linkedin Ads",
    },
    {
      logo: logoTiktok,
      title: "Tik Tok Ads",
    },
  ];

  const [formData, setFormData] = useState({
    from_name: "",
    from_correo: "",
    from_message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      formData.from_name !== "" &&
      formData.from_correo !== "" &&
      formData.from_message !== "";
    setIsFormValid(isValid);
  }, [formData]);

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
      // Enviar al webhook de Make
      fetch("https://hook.us1.make.com/ry6vrnkpnue5zaon13l8ozrp89akijkn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((error) => {
        console.error("Error al enviar al webhook de Make:", error);
      });

      // Enviar con EmailJS
      emailjs
        .send(
          "service_r145bos",
          "template_p5p51zs",
          formData,
          "FWjbrvz8yv7lrOYwV"
        )
        .then(
          () => {
            setFormData({
              from_name: "",
              from_correo: "",
              from_message: "",
              check: false,
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
    <div
      id="contact"
      className="flex flex-col lg:flex-row mt-14 lg:mt-40  bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border border-[#2BFFC3] border-opacity-[0.1] rounded-b-[11px] rounded-[16px] w-full p-4 lg:p-10 lg:gap-20"
    >
      <form
        className="flex flex-col gap-4 lg:gap-5 lg:w-[500px]"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder="Nombre"
          className="bg-[rgba(255,255,255,0.05)] p-3 rounded-md mb-4 border border-[#2BFFC3] border-opacity-[0.1]"
          name="from_name"
          value={formData.from_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          className="bg-[rgba(255,255,255,0.05)] p-3 rounded-md mb-4 border border-[#2BFFC3] border-opacity-[0.1]"
          name="from_correo"
          value={formData.from_correo}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Empresa"
          className="bg-[rgba(255,255,255,0.05)] p-3 rounded-md mb-4 border border-[#2BFFC3] border-opacity-[0.1]"
          name="from_company"
          value={formData.from_company}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Mensaje"
          className="bg-[rgba(255,255,255,0.05)] p-3 rounded-md mb-4 border border-[#2BFFC3] border-opacity-[0.1] resize-none"
          rows="4"
          name="from_message"
          value={formData.from_message}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="inline-flex max-w-max items-center gap-2 text-[12px] uppercase tracking-[3px] bg-companySalmon py-4 px-7 font-thin hover:bg-[#B92A1D] transition-all duration-300 "
        >
          Hablemos{" "}
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
        </button>
      </form>
      <div className="lg:w-[60%] flex flex-col justify-center lg:gap-10">
        <h2 className="text-[24px] lg:text-[32px] 2xl:text-[56px] font-regular text-companySalmon mt-10 lg:mt-0 text-center">
          <span className="font-semibold">Expertos</span> en pauta digital
        </h2>
        <div className="grid grid-cols-2 grid-rows-2 lg:flex mt-5 lg:mt-0 w-full justify-between">
          {platformsServices.map((item, index) => (
            <div
              className="flex flex-col items-center gap-2 mb-4 justify-between"
              key={index}
            >
              <Image
                src={item.logo}
                alt={`logo-${item.title}`}
                className="w-12 lg:w-auto"
              />
              <p className="font-montserrat text-[16px] 2xl:text-[25px] font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
