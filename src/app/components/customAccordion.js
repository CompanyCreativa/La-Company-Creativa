import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CustomAccordion({ title, children }) {
  return (
    <Accordion className="bg-transparent shadow-none border-b border-black/70 accordion-rounded pt-2 max-w-[572px]">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-[30px]" />}
        aria-controls="panel1-content"
        id="panel1-header"
        className="rounded-none text-lg font-medium tracking-wider lg:text-[22px] lg:font-normal lg:px-0"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
