import Image from "next/image";
import styles from "./page.module.css";
import CustomComponent from "@/app/components/CustomComponent";
import Counter from "@/app/components/Counter";

export default function Home() {
  return (
    <div >
      <main >
        <Counter/>
      </main>
    </div>
  );
}
