import HomeMainBanner from "./components/Swiper/homeMainBanner";
import OurPhilosophy from "./components/home/ourPhilosophy";
import OurClients from "./components/home/ourClients";
import WhatWeDo from "./components/home/whatWeDo";
import Form from "./components/form";
import PublicLayout from "./components/publicLayout";
import MainContainer from "./components/mainContainer";

export default function Home() {

  return (
    <PublicLayout page="home">
      <MainContainer>
        <HomeMainBanner />
        <OurPhilosophy />
        <OurClients />
        <WhatWeDo />
        <Form />
      </MainContainer>
    </PublicLayout>
  );
}
