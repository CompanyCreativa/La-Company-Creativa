import HomeMainBanner from "./components/Swiper/homeMainBanner";
import OurPhilosophy from "./components/home/ourPhilosophy";
import OurClients from "./components/home/ourClients";
import WhatWeDo from "./components/home/whatWeDo";
import Form from "./components/form";
import PublicLayout from "./components/publicLayout";
import MainContainer from "./components/mainContainer";
import ModalForm from "./components/modalForm";

export const metadata = {
  title: "La Company Creativa | Agencia De Publicidad",
  description:
    "Agencia de publicidad 360 experta en branding, pauta digital y campañas que generan resultados reales.",
};

export default function Home() {
  return (
    <PublicLayout page="home">
      <MainContainer>
        <HomeMainBanner />
        <ModalForm />
        <OurPhilosophy />
        <OurClients />
        <WhatWeDo />
        <Form />
      </MainContainer>
    </PublicLayout>
  );
}
