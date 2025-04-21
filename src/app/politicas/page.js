import React from "react";
import MainContainer from "../components/mainContainer";
import Head from "next/head";

export default function page() {
  return (
    <MainContainer>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="w-full max-w-[1192px] mx-auto mt-16 mb-10">
        <h1 className="text-[32px]">
          POLÍTICAS DE TRATAMIENTO DE INFORMACIÓN Y DATOS PERSONALES
        </h1>
        <h2 className="mt-12 text-[24px]">CONTENIDO</h2>
        <ol className="list-decimal list-inside mt-4 ml-5 flex flex-col gap-2">
          <li>MARCO LEGAL</li>
          <li>DEFINICIONES</li>
          <li>TRATAMIENTO DE DATOS</li>
          <li>DERECHOS QUE LE ASISTEN A LOS TITULARES DE LOS DATOS</li>
          <li>CONTACTO</li>
          <li>PROCEDIMIENTO DE RECLAMOS</li>
          <li>PERIODO DE VIGENCIA</li>
          <li>CAMBIOS DE POLÍTICA</li>
        </ol>

        <h2 className="mt-12 text-[24px]">1. MARCO LEGAL</h2>
        <p className="mt-4">
          <span className="font-bold">La Company Creativa SAS</span>, en calidad
          de Responsable del Tratamiento, recolecta y gestiona los siguientes
          datos personales proporcionados directamente por los usuarios
        </p>
        <ul className="list-disc list-inside mt-4 ml-5 flex flex-col gap-2">
          <li>Constitución Política de Colombia,artículo 15</li>
          <li>Ley 1266 de 2008</li>
          <li>Ley 1581 de 2012</li>
        </ul>
        <h2 className="mt-12 text-[24px]">2. DEFINICIONES</h2>
        <ul className="list-disc list-inside mt-4 ml-5 flex flex-col gap-2">
          <li>
            <span className="font-bold">Autorización:</span> Consentimiento
            previo, expreso e informado del Titular para llevar a cabo el
            Tratamiento de datos personales.
          </li>
          <li>
            <span className="font-bold">Base de Datos:</span> Conjunto
            organizado de datos personales que sea objeto de Tratamiento.
          </li>
          <li>
            <span className="font-bold">Dato Personal:</span> Información
            vinculada o que pueda asociarse a una o varias personas naturales
            determinadas o determinables.
          </li>
          <li>
            <span className="font-bold">Titular:</span> Persona natural cuyos
            datos personales sean objeto de Tratamiento.
          </li>
          <li>
            <span className="font-bold">Tratamiento:</span> Cualquier operación
            sobre datos personales, como recolección, almacenamiento, uso o
            supresión.
          </li>
        </ul>

        <h2 className="mt-12 text-[24px]">3. TRATAMIENTO DE DATOS</h2>
        <p className="mt-4">
          <span className="font-bold">La Company Creativa SAS</span>, en calidad
          de Responsable del Tratamiento, recolecta y gestiona los siguientes
          datos personales proporcionados directamente por los usuarios
        </p>
        <ul className="list-disc list-inside mt-4 ml-5 flex flex-col gap-2">
          <li>Nombre</li>
          <li>Teléfono</li>
          <li>Correo electrónico</li>
          <li>Mensaje</li>
        </ul>
        <p className="mt-4">
          Estos datos son utilizados exclusivamente para los siguientes fines:
        </p>
        <ul className="list-disc list-inside mt-4 ml-5 flex flex-col gap-2">
          <li>Marketing</li>
          <li>Personalización de anuncios</li>
          <li>Envío de newsletters</li>
        </ul>
        <p className="mt-4">
          Los datos no se comparten con terceros y se utilizan únicamente dentro
          del territorio colombiano.
        </p>
        <h2 className="mt-12 text-[24px]">
          4. DERECHOS QUE LE ASISTEN A LOS TITULARES DE LOS DATOS
        </h2>
        <p className="mt-4">
          De acuerdo con la legislación vigente, los Titulares tienen los
          siguientes derechos:
        </p>
        <ul className="list-disc list-inside mt-4 ml-5 flex flex-col gap-2">
          <li>Conocer, actualizar y rectificar sus datos personales.</li>
          <li>Solicitar la eliminación de sus datos.</li>
          <li>
            Revocar la autorización otorgada para el tratamiento de sus datos.
          </li>
        </ul>
        <p className="mt-4">
          Los Titulares pueden ejercer estos derechos enviando una solicitud a
          <span className="font-bold"> digital@companycreativa.com</span>
        </p>
        <h2 className="mt-12 text-[24px]">5. CONTACTO</h2>
        <p className="mt-4">
          Para cualquier consulta, queja o reclamo, los usuarios pueden
          contactar a <span className="font-bold">La Company Creativa SAS</span>{" "}
          a través del correo electrónico{" "}
          <span className="font-bold">digital@companycreativa.com</span>
        </p>
        <h2 className="mt-12 text-[24px]">6. PROCEDIMIENTO DE RECLAMOS</h2>
        <ol className="list-decimal list-inside mt-4 ml-5 flex flex-col gap-2">
          <li>
            Los Titulares pueden presentar solicitudes o reclamos a{" "}
            <span className="font-bold">La Company Creativa SAS</span> enviando
            un correo a{" "}
            <span className="font-bold">digital@companycreativa.com</span>
          </li>
          <li>
            Los reclamos serán atendidos en un plazo máximo de 15 días hábiles.
            Si no es posible resolver el reclamo dentro de este tiempo, se
            notificará al usuario con los motivos de la demora y la fecha
            estimada de resolución.
          </li>
        </ol>
        <h2 className="mt-12 text-[24px]">7. PERIODO DE VIGENCIA</h2>
        <p className="mt-4">
          Los datos personales se conservarán por tiempo indefinido, a menos que
          el Titular solicite su eliminación. Los datos no serán utilizados más
          allá de lo necesario para cumplir las finalidades descritas.
        </p>
        <h2 className="mt-12 text-[24px]">8. CAMBIOS EN LA POLÍTICA</h2>
        <p className="mt-4">
          <span className="font-bold">La Company Creativa SAS</span> no
          notificará a los usuarios sobre cambios en esta política. Las
          modificaciones serán publicadas en nuestro portal web.
        </p>
      </div>
    </MainContainer>
  );
}
