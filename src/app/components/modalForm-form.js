"use client";

import { useState } from "react";

export default function ZohoFormTwo() {
  const [formData, setFormData] = useState({
    "First Name": "",
    Company: "",
    Mobile: "",
    Email: "",
    "Lead Source": "Sitio web",
    "Lead Status": "Lead",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = () => {
    const emailVal = formData["Email"];
    if (emailVal.trim().length === 0) return true;

    const atpos = emailVal.indexOf("@");
    const dotpos = emailVal.lastIndexOf(".");
    return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length);
  };

  const checkMandatory = (e) => {
    e.preventDefault();

    if (!formData["Email"].trim()) {
      alert("Correo electrónico no puede estar vacío.");
      document.getElementById("Email").focus();
      return false;
    }

    if (!formData["Mobile"].trim()) {
      alert("Celular / WhatsApp no puede estar vacío.");
      document.getElementById("Mobile").focus();
      return false;
    }

    // Validar email
    if (!validateEmail()) {
      alert("Introduzca una dirección de correo electrónico válida.");
      document.getElementById("Email").focus();
      return false;
    }

    fetch("https://hook.us1.make.com/ry6vrnkpnue5zaon13l8ozrp89akijkn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch((error) => {
      console.error("Error al enviar al webhook de Make:", error);
    });

    setIsSubmitting(true);
    document.getElementById("webform").submit();
    return true;
  };

  return (
    <div
      id="crmWebToEntityForm"
      className="w-[100%] mt-[-20px] md:mt-10 flex flex-col gap-8 items-end lg:mt-0 lg:pb-16 px-5 lg:px-0"
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />

      <form
        id="webform"
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name="WebToLeads6724972000000745007"
        method="POST"
        onSubmit={checkMandatory}
        acceptCharset="UTF-8"
        className="justify-center w-full"
      >
        {/* Hidden fields */}
        <input
          type="text"
          className="hidden"
          name="xnQsjsdp"
          value="bdd1190930096851aeffd6f4afed5fb32a000893ef134d8b7ca2a67bd29b4d25"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="text"
          className="hidden"
          name="xmIwtLD"
          value="39be197533f2e342cdf3dc70815231ed19ddc820d82c036b9b1a02cadb48fbd9379ef8e2e1a41f35184bf8ee25b5a29d"
        />
        <input
          type="text"
          className="hidden"
          name="actionType"
          value="TGVhZHM="
        />
        <input
          type="text"
          className="hidden"
          name="returnURL"
          value="https://companycreativa.com/gracias"
        />

        {/* Form fields */}
        <div className="my-4 clear-both  flex flex-col">
          <div className="w-[30%] mr-[10px] mt-[5px] float-left">
            <label
              htmlFor="First_Name"
              className="text-base font-calibri text-white"
            >
              Nombre
            </label>
          </div>
          <div className="float-left">
            <input
              type="text"
              id="First_Name"
              name="First Name"
              maxLength="40"
              value={formData["First Name"]}
              onChange={handleChange}
              className="w-full text-lg bg-transparent border border-white px-4 py-2 text-white placeholder-black z-30"
            />
          </div>
        </div>

        <div className="my-4 clear-both  flex flex-col">
          <div className="w-[30%] mr-[10px] mt-[5px] float-left">
            <label
              htmlFor="Company"
              className="text-base font-calibri text-white"
            >
              Empresa
            </label>
          </div>
          <div className="float-left">
            <input
              type="text"
              id="Company"
              name="Company"
              maxLength="200"
              value={formData["Company"]}
              onChange={handleChange}
              className="w-full text-lg bg-transparent border border-white px-4 py-2  placeholder-black z-30 text-white"
            />
          </div>
        </div>

        <div className="my-4 clear-both flex flex-col">
          <div className=" mr-[10px] mt-[5px] float-left">
            <label
              htmlFor="Mobile"
              className="text-base font-calibri text-white"
            >
              Celular / WhatsApp <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="float-left">
            <input
              type="text"
              id="Mobile"
              name="Mobile"
              maxLength="30"
              required
              value={formData["Mobile"]}
              onChange={handleChange}
              className="w-full text-lg bg-transparent border border-white px-4 py-2 placeholder-black z-30 text-white"
            />
          </div>
        </div>

        <div className="my-4 clear-both  flex flex-col">
          <div className=" mr-[10px] mt-[5px] float-left">
            <label
              htmlFor="Email"
              className="text-base font-calibri text-white"
            >
              Correo electrónico <span className="text-red-500">*</span>
            </label>
          </div>
          <div className=" float-left">
            <input
              type="email"
              id="Email"
              name="Email"
              maxLength="100"
              required
              value={formData["Email"]}
              onChange={handleChange}
              className="w-full text-lg bg-transparent border border-white px-4 py-2 text-white placeholder-black z-30"
            />
          </div>
        </div>

        {/* Hidden selects */}
        <div className="hidden">
          <div className="my-4 clear-both">
            <div className="w-[30%] mr-[10px] mt-[5px] float-left">
              <label htmlFor="Lead_Source" className="text-base font-calibri">
                Fuente de Posible cliente
              </label>
            </div>
            <div className="w-[68%] float-left">
              <select
                id="Lead_Source"
                name="Lead Source"
                value={formData["Lead Source"]}
                onChange={handleChange}
                className="w-[60%] border border-[#ccc] bg-white rounded-[4px] text-base float-left py-[2px] px-[5px]"
              >
                <option value="-None-">-None-</option>
                <option value="Google orgánico">Google orgánico</option>
                <option value="Google Pautas">Google Pautas</option>
                <option value="Meta Pautas">Meta Pautas</option>
                <option value="Meta orgánico">Meta orgánico</option>
                <option value="Alianzas comerciales">
                  Alianzas comerciales
                </option>
                <option value="Ferias y eventos">Ferias y eventos</option>
                <option value="Referido">Referido</option>
                <option value="Sitio web">Sitio web</option>
                <option value="Cliente socios">Cliente socios</option>
              </select>
            </div>
          </div>

          <div className="my-4 clear-both">
            <div className="w-[30%] mr-[10px] mt-[5px] float-left">
              <label htmlFor="Lead_Status" className="text-base font-calibri">
                Estado de Posible cliente
              </label>
            </div>
            <div className="w-[68%] float-left">
              <select
                id="Lead_Status"
                name="Lead Status"
                value={formData["Lead Status"]}
                onChange={handleChange}
                className="w-[60%] border border-[#ccc] bg-white rounded-[4px] text-base float-left py-[2px] px-[5px]"
              >
                <option value="-None-">-None-</option>
                <option value="Lead">Lead</option>
                <option value="Primer contacto">Primer contacto</option>
                <option value="No contesta">No contesta</option>
                <option value="Reunión">Reunión</option>
                <option value="Calificado">Calificado</option>
                <option value="Descartado">Descartado</option>
                <option value="Desperfilado">Desperfilado</option>
              </select>
            </div>
          </div>
        </div>

        <div className="my-4 clear-both">
          <div className="w-[30%] float-left"></div>
          <div className="w-[68%] float-left">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex max-w-max items-center gap-2 text-[12px] uppercase tracking-[3px] bg-companySalmon py-4 px-7 font-thin hover:bg-[#B92A1D] transition-all duration-300 text-white"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </div>
      </form>

      {/* Analytics Tracking */}
      <script
        id="wf_anal"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=0d6af7f0a68a6e485d492851c38589e31d3a978d6b39a4ead505b7b2ce4d6e176c40e9ec18eb124b4e8fbd81ad816328gid7d73e7b4e81807af75a023a6d655921ea9a40f7f2326424661cfb24774fa5776gid6842606b8f98c877a96954433bbb067c4a32146ab90da1beace21a4f3b2f6010gide032246de11c351722f8fd4c449b1b8891e04628d3c267b0f99fe6d047665d53&tw=c5ad53f7b6fda7e8a67989b105df169c4dbd68be25158d35549540ae8d2d3a11"
        strategy="beforeInteractive"
      />
    </div>
  );
}
