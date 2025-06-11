import PublicLayout from "../../components/publicLayout";

export const metadata = {
  title: "Pauta digital: cómo llegarle a la gente correcta (sin gritar)",
  description:
    "La pauta digital es lo que hace que tu marca no solo esté en internet… sino que se note. Sí, hablamos de anuncios en Google, en redes, en YouTube, en banners, en todas esas esquinas donde la gente vive, scrollea y decide.",
};

export default function BlogPage({ children }) {
  return (
    <PublicLayout page="pauta-digital-como-llegarle-a-la-gente-correcta-sin-gritar">
      {children}
    </PublicLayout>
  );
}
