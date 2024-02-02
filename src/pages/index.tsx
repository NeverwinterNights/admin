import { Inter } from "next/font/google";
import { HeadMeta } from "@/components/head-meta";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadMeta title="Home" />
      <main>Home</main>
    </>
  );
}
