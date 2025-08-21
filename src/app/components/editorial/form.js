"use client";

import { useState } from "react";
import ButtonEditorial from "./buttonEditorial";
import Arrow from "../SVGicons/arrow";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    "First Name": "",
    "Last Name": "",
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

    if (!formData["Last Name"].trim()) {
      alert("Apellidos no puede estar vacío.");
      document.getElementById("Last_Name").focus();
      return;
    }

    if (!formData["Email"].trim()) {
      alert("Correo electrónico no puede estar vacío.");
      document.getElementById("Email").focus();
      return;
    }

    if (!formData["Mobile"].trim()) {
      alert("Celular / WhatsApp no puede estar vacío.");
      document.getElementById("Mobile").focus();
      return;
    }

    if (!validateEmail()) {
      alert("Introduzca una dirección de correo electrónico válida.");
      document.getElementById("Email").focus();
      return;
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
            from_phone: "",
            from_company: "",
          });
          window.location.href = "/gracias";

          setLoading(false); // Finalizar carga
        },
        (error) => {
          console.log(error.text);
          setLoading(false); // Finalizar carga
        }
      );
  };

  return (
    <div id="crmWebToEntityForm" className="bg-transparent w-full">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />

      <form
        id="webform"
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name=" WebToLeads6724972000001254034"
        method="POST"
        onSubmit={checkMandatory}
        acceptCharset="UTF-8"
        className="justify-center w-full md:w-full"
      >
        {/* Hidden fields */}
        <input
          type="text"
          className="hidden"
          name="xnQsjsdp"
          value="cf67257341b10c86d9e9a9d29c29654da8689bf7932316a65cfd179b302d4d4c"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="text"
          className="hidden"
          name="xmIwtLD"
          value="0873aeffcc8d4bc6a74cc85b6051440396911feb235649fac83f594676b3e9189b20f57792fa4889ee110fe7c6fe27a2"
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
          value="https://companycreativa.com/agencia-de-pauta-digital/gracias"
        />

        {/* Form fields */}
        <div className="my-4 flex flex-col">
          <div className="w-full float-left">
            <input
              type="text"
              id="First_Name"
              name="First Name"
              maxLength="40"
              value={formData["First Name"]}
              onChange={handleChange}
              className="bg-transparent p-3 rounded-xl border border-[#fff]  w-full text-background text-white"
              placeholder="Nombre"
            />
          </div>
          <div className="clear-both"></div>
        </div>

        <div className="my-4 flex flex-col">
          <div className="w-full float-left">
            <input
              type="text"
              id="Last_Name"
              name="Last Name"
              maxLength="80"
              required
              value={formData["Last Name"]}
              onChange={handleChange}
              className="bg-transparent p-3 rounded-xl border border-[#fff]  w-full text-background text-white"
              placeholder="Apellidos"
            />
          </div>
          <div className="clear-both"></div>
        </div>

        <div className="my-4 flex flex-col">
          <div className="w-full float-left">
            <input
              type="text"
              id="Company"
              name="Company"
              maxLength="200"
              value={formData["Company"]}
              onChange={handleChange}
              className="bg-transparent p-3 rounded-xl border border-[#fff]  w-full text-background text-white"
              placeholder="Empresa"
            />
          </div>
          <div className="clear-both"></div>
        </div>

        <div className="my-4 flex flex-col">
          <div className="w-full float-left">
            <input
              type="text"
              id="Mobile"
              name="Mobile"
              maxLength="30"
              required
              value={formData["Mobile"]}
              onChange={handleChange}
              className="bg-transparent p-3 rounded-xl border border-[#fff]  w-full text-background text-white"
              placeholder="Celular / WhatsApp"
            />
          </div>
          <div className="clear-both"></div>
        </div>

        <div className="my-4 flex flex-col">
          <div className="w-full float-left">
            <input
              type="email"
              id="Email"
              name="Email"
              maxLength="100"
              required
              value={formData["Email"]}
              onChange={handleChange}
              className="bg-transparent p-3 rounded-xl border border-[#fff]  w-full text-background text-white"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="clear-both"></div>
        </div>

        {/* Hidden selects */}
        <div className="hidden">
          <div className="my-4">
            <div className="w-[30%] mr-2.5 mt-1 float-left">
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
                className="w-[60%] border border-[#ccc] bg-white rounded-md text-base float-left py-0.5 px-1.5"
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
            <div className="clear-both"></div>
          </div>

          <div className="my-4">
            <div className="w-[30%] mr-2.5 mt-1 float-left">
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
                className="w-[60%] border border-[#ccc] bg-white rounded-md text-base float-left py-0.5 px-1.5"
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
            <div className="clear-both"></div>
          </div>
        </div>

        <div className="my-4">
          <div className="w-[100%] float-left">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex max-w-max items-center gap-2 text-sm md:text-lg bg-[#FFFFFF] py-2 px-5 font-thin hover:bg-[#FFFFFF] transition-all duration-300 text-[#262626] robout rounded-full"
            >
              {isSubmitting ? "Enviando..." : "Hablemos de tu pieza editorial"}
              <div className="relative bg-[#302F32] w-8 h-8 flex items-center justify-center rounded-full ">
                <Arrow className="text-white z-10" />
                <div className="absolute w-0 h-0 group-hover:w-full bg-companySalmon transition-all duration-300 ease-in-out group-hover:h-full rounded-full"></div>
              </div>
            </button>
          </div>
          <div className="clear-both"></div>
        </div>
      </form>

      {/* Analytics Tracking */}
      <script
        id="wf_anal"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=d5462d7cbd48b91028387af126d03ed01f7df97a2a4324def239d487642218d5745462856761ec32776a585a1a3e2d69gide3de85587d35cb8de69f598bdeff2e45846caee51ae65e6878e11bc24d668c4agid9981eb3e32959f46a61fb5f16ed1a1de754e11a3c568d98206e00f329e32d2c4gidd2c64538a848ebb34b07692c2f82caa3d7b17c6174293179ac0365307700334f&tw=c306c2d365a3c62d4979426c1e4261812a350a1569aec8e442ca2063c9ac50f3"
        strategy="beforeInteractive"
      />
    </div>
  );
}
