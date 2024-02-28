import Image from "next/image";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <>
      <h1 className="text-center">Ilmuwan yang luar biasa</h1>
      <Gallery />
    </>
  );
}
