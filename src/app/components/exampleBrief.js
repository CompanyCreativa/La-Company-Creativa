import { useState } from "react";

export const ExampleBrief = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="flex fixed top-0 left-0 w-full h-full bg-[rgba(255, 255, 255, 0.7)]  z-30"></div>
      )}
      <div className="flex relative">
        <div
          className="flex flex-col justify-center items-center bg-companySalmon text-white text-3xl w-[40px] h-[40px] z-40 cursor-pointer"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          +
        </div>
        {open && (
          <div className="w-[300px] top-[-160px] right-[40px] bg-[#212121] absolute z-40 p-5 text-white ">
            <p className="text-xl font-bold text-companySalmon">Ejemplos: </p>
            <p>
              <strong className="font-semibold">Compuestos:</strong>{" "}
              KissMetrics, Don Limpio
            </p>
            <p className="">
              <strong className="font-semibold">Abstractos:</strong>{" "}
              Significados en otro idioma
            </p>
            <p>
              <strong className="font-semibold">Frases:</strong> La nevera roja,
              El armario de la tele
            </p>
            <p>
              <strong className="font-semibold">Asociativos:</strong> North
              Face, Imaginarium, Movistar, Mercadona, Bankia, Pronovias
            </p>
            <p>
              <strong className="font-semibold">Onomatopeyas:</strong> Veritas,
              Stella Artois, Boing, Zas, Crunch, Croak
            </p>
            <p>
              <strong className="font-semibold">Otros idiomas:</strong> Veritas,
              Stella Artois, Apple, Miss Sixty
            </p>
            <p>
              <strong className="font-semibold">Nombre própio:</strong> Neil
              Patel, Carolina Herrera, Vilma Nuñez, Gillete, McDonalds
            </p>
            <p>
              <strong className="font-semibold">Acrónimos:</strong> LG, BBVA,
              NBA, DIA, IBM, P&G, ebay
            </p>
            <p>
              <strong className="font-semibold">Numerales:</strong> 7UP, 5 à
              Sec, Forever 21
            </p>
            <p>
              <strong className="font-semibold">Inventados:</strong> Vibbo,
              Wallapop, Oysho, Bershka, Tumblr, Vimeo
            </p>
          </div>
        )}
      </div>
    </>
  );
};
