import PublicLayout from "../../components/publicLayout";

export const metadata = {
  title: "IA + creatividad: el nuevo combo para marcas con sentido",
  description:
    "La IA llegó al branding (y a todo lo demás). Te contamos cómo usarla bien sin perder la creatividad que hace única a tu marca.",
};

export default function BlogPage({ children }) {
  return (
    <PublicLayout page="IA+creatividad-el-nuevo-combo-para-marcas-con-sentido">
      {children}
    </PublicLayout>
  );
}
