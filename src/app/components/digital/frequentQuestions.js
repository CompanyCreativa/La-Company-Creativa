import Image from "next/image";
import logoConinsa from "/public/digital/logo-coninsa.png";
import logoViva from "/public/digital/logo-viva.png";
import logoNutresa from "/public/digital/logo-nutresa.png";
import logoLondonio from "/public/digital/logo-londonio.png";
import logoIdeo from "/public/digital/logo-ideo.png";
import logoArquitectura from "/public/digital/logo-arquitectura.png";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FrequentQuestions() {
  return (
    <div>
      <div>
        <h3>
          CONFÍAN <span>EN NOSOTROS</span>
        </h3>
        <div>
          <Image src={logoConinsa} alt="iconDigital1" />
          <Image src={logoViva} alt="iconDigital1" />
          <Image src={logoNutresa} alt="iconDigital1" />
          <Image src={logoLondonio} alt="iconDigital1" />
          <Image src={logoIdeo} alt="iconDigital1" />
          <Image src={logoArquitectura} alt="iconDigital1" />
        </div>
      </div>
      <div>
        <Accordion className="bg-transparent ">
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon className="text-[30px] text-companySalmon" />
            }
            className="text-white"
          >
            Por qué elegir a LaCompany Creativa?
          </AccordionSummary>
          <AccordionDetails className="text-white">Holaaaaa</AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
