import Image from "next/image";
import Profile from "../components/profile";

export default function Home() {
  return (
    <>
      <h1 className="text-center">Ilmuwan yang luar biasa</h1>
      <div className="flex justify-around">
        {[...Array(3)].map((_, index) => (
          <Profile key={index} />
        ))}
      </div>
    </>
  );
}
