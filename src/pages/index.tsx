import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/template/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout titulo="Página Inicial" subtitulo="Template em construção">
      <h3>Teste</h3>
    </Layout>
  );
}
