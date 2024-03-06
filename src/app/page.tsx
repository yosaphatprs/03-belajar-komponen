import Image from "next/image";
import MyGallery from "@/components/mygallery";
import TodoList from "@/components/todolist";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-white-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <MyGallery />
      <hr />
      <TodoList />
    </section>
  );
}