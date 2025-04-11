import Image from "next/image";

import iconDigital1 from "/public/digital/icon-digital1.png";
import iconDigital2 from "/public/digital/icon-digital2.png";
import iconDigital3 from "/public/digital/icon-digital3.png";
import iconDigital4 from "/public/digital/icon-digital4.png";

export default function WhyChooseUs({ children }) {
  return (
    <div>
      <div>
        <h3>¿Por qué elegirnos?</h3>
        <div>
          <Image src={iconDigital1} alt="iconDigital1" />
          <p>
            <span>Resultados</span> comprobados
          </p>
        </div>
        <div>
          <Image src={iconDigital2} alt="iconDigital1" />
          <p>
            Estrategias a la <span>medida</span>
          </p>
        </div>
        <div>
          <Image src={iconDigital3} alt="iconDigital1" />
          <p>
            Equipo <span>Especialista</span>
          </p>
        </div>
        <div>
          <Image src={iconDigital4} alt="iconDigital1" />
          <p>
            Experiencia en más de <span>1000</span>campañas
          </p>
        </div>
      </div>
      <button>
        Habla con un experto ahora{" "}
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
          <path d="M1 1L11 1L11 11" stroke="#FFF8EA" stroke-width="1.5" />
        </svg>
      </button>
    </div>
  );
}
