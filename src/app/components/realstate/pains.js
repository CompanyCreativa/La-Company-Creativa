import Image from "next/image";

import decoration2 from "/public/realstate/decoration2.png";
import Dislike from "../SVGicons/dislike";
import CancelPerson from "../SVGicons/cancelPerson";
import Invoice from "../SVGicons/invoice";
import Suspension from "../SVGicons/suspension";
import CartCancel from "../SVGicons/cartCancel";
import Like from "../SVGicons/like";
import PersonHeart from "../SVGicons/personHeart";
import InvoiceCheck from "../SVGicons/invoiceCheck";
import SuspensionCheck from "../SVGicons/suspensionCheck";
import CartCheck from "../SVGicons/cartCheck";
import TouchScreen from "../SVGicons/touchScreen";

export default function Pains() {
  const points = [
    {
      icon: <Dislike className="text-[#F0F1F3] w-7 h-7 xl:w-auto xl:h-auto" />,
      iconHover: (
        <Like className="text-companySalmon w-7 h-7 xl:w-auto xl:h-auto" />
      ),
      text: "Bajas visitas en salas de ventas",
      textHover:
        "Tu web convertirá interesados online en visitantes presenciales",
    },
    {
      icon: (
        <CancelPerson className="text-[#F0F1F3] w-7 h-7 xl:w-auto xl:h-auto" />
      ),
      iconHover: (
        <PersonHeart className="text-companySalmon w-7 h-7 xl:w-auto xl:h-auto" />
      ),
      text: "Leads no calificados",
      textHover: "Tu web atraerá solo contactos realmente interesados",
    },
    {
      icon: <Invoice className="text-[#F0F1F3] w-7 h-7 xl:w-auto xl:h-auto" />,
      iconHover: (
        <InvoiceCheck className="text-companySalmon w-7 h-7 xl:w-auto xl:h-auto" />
      ),
      text: "Pauta sin resultados",
      textHover: "Tu web optimizará el rendimiento de tu publicidad",
    },
    {
      icon: (
        <Suspension className="text-[#F0F1F3] w-7 h-7 xl:w-auto xl:h-auto" />
      ),
      iconHover: (
        <SuspensionCheck className="text-companySalmon w-7 h-7 xl:w-auto xl:h-auto" />
      ),
      text: "Cero estrategia comercial",
      textHover: "Tu web se convertirá en una estrategia comercial efectiva",
    },
    {
      icon: (
        <CartCancel className="text-[#F0F1F3] w-7 h-7 xl:w-auto xl:h-auto" />
      ),
      iconHover: (
        <CartCheck className="text-companySalmon w-7 h-7 xl:w-auto xl:h-auto" />
      ),
      text: "Equipo comercial con tiempo ocioso",
      textHover: "Tu web impulsará ventas, ocupando a tu equipo comercial",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full gap-12 2xl:gap-16 xl:bg-[#F7F7F7] xl:p-12 2xl:p-16">
      <div className="lg:w-2/3 relative bg-[#F7F7F7] xl:bg-transparent rounded-2xl px-6 pt-8 xl:p-0">
        <h2 className="SpaceGrotesk text-[22px] xl:text-4xl 2xl:text-5xl mb-4 uppercase text-companySalmon">
          <span className="SpaceGrotesk font-semibold">
            ¿Tu proyecto inmobiliario
          </span>{" "}
          está en redes, en portales, pero no en la mente{" "}
          <span className="SpaceGrotesk font-semibold">
            del&nbsp;comprador?
          </span>
        </h2>
        <p className="text-[#23194F] 2xl:text-lg">
          <span className="font-semibold">Tranquilo, no eres el único.</span>{" "}
          Muchos proyectos inmobiliarios se ven bien pero no logran conectar. A
          veces el problema no es el producto, sino la estrategia (o la falta de
          ella).{" "}
          <span className="font-semibold">
            Aquí lo resolvemos desde el fondo:
          </span>{" "}
          entendiendo lo que la gente quiere ver, sentir y decidir cuando va a
          comprar vivienda.
        </p>
        <Image
          src={decoration2}
          className="-mx-6 mt-8 lg:mx-0 xl:mt-0 xl:-mb-12 xl:-ml-12 2xl:-mb-16 2xl:-ml-16"
          alt=""
        />
      </div>
      <div className="w-[1px] bg-[#B2B2B2] hidden lg:block"></div>
      <div className="lg:w-1/3 bg-[#F7F7F7] xl:bg-transparent rounded-2xl px-6 py-8 xl:p-0">
        <h2 className="SpaceGrotesk text-[22px] xl:text-4xl 2xl:text-5xl text-[#23194F] uppercase text-center">
          Dolores <span className="font-semibold SpaceGrotesk">comunes</span>
        </h2>
        <div className="flex flex-col justify-between gap-6 2xl:gap-8 mt-6 2xl:mt-8">
          {points.map((point, index) => (
            <div
              className="display flex items-center gap-2 xl:gap-4 rounded-xl xl:rounded-2xl p-2 2xl:p-3 bg-[#D9D9D9] group hover:bg-[#23194F] transition-all duration-300 cursor-pointer"
              key={index}
            >
              <div className="bg-[#B2B2B2] group-hover:hidden p-1 xl:p-3 2xl:p-4 rounded-lg xl:rounded-xl">
                {point.icon}
              </div>
              <div className="hidden group-hover:block bg-[#BFBFBF]/50 p-1 xl:p-3 2xl:p-4  rounded-lg rounded-xl">
                {point.iconHover}
              </div>
              <p className="text-sm xl:text-xl text-[#23194F] group-hover:hidden">
                {point.text}
              </p>
              <p className="text-sm xl:text-xl text-companySalmon hidden group-hover:block">
                {point.textHover}
              </p>
              <div className="ml-auto lg:hidden">
                <TouchScreen className="text-companySalmon/70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
