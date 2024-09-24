import React from "react";
import Section from "../section";
import Accordion from "../customAccordion";

export default function WhatWeDo() {
  return (
    <Section className="bg-background">
      <div className="w-full max-w-[1192px] mx-auto mt-24">
        <div className="w-full flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-[32px]">
            <strong>Esto es lo que</strong> hacemos
          </h1>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-16 lg:mt-12 lg:grid-cols-2">
          <div>
            <Accordion title={"Branding"}>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Creación y rediseño de marcas</li>
                <li>Esencia y arquitectura de marca</li>
              </ul>
            </Accordion>
            <Accordion title={"Estretegia e investigación"}>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li> Planeación estratégica</li>
                <li>Investigación de mercados</li>
                <li>Design thinking</li>
              </ul>
            </Accordion>
            <Accordion title={"Digital"}>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Pauta digital</li>
                <li>Contenidos para redes sociales</li>
                <li>Estrategia con Influencers</li>
                <li>Desarrollo de sitios web</li>
                <li>Investigación y estrategia digital</li>
              </ul>
            </Accordion>
          </div>
          <div>
            <Accordion title={"Campañas 360"}>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Conceptualización creativa</li>
                <li>Medios ATL</li>
                <li>Campañas de endomarketing</li>
              </ul>
            </Accordion>
            <Accordion title={"Medios"}>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Diseño editorial</li>
                <li>Exteriores</li>
                <li>Packaging</li>
                <li>Producción audiovisual</li>
                <li>Diseño editorial</li>
                <li>Planeación en medios tradicionales</li>
              </ul>
            </Accordion>
            <Accordion title={"BTL"}>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Stands</li>
                <li>Producción</li>
                <li>Activaciones de marca</li>
              </ul>
            </Accordion>
          </div>
        </div>
      </div>
    </Section>
  );
}
