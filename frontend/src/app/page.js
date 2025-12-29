import Image from "next/image";
import styles from "./page.module.css";
import CustomComponent from "@/app/components/CustomComponent";
import Counter from "@/app/components/Counter";
import CounterWithReducer from "@/app/components/reducer/CounterWithReducer";
import TodoListWithReducer from "@/app/components/reducer/TodoListWithReducer";
import ContextDemo from "@/app/components/context/ContextDemo";
import TodoReducerWithContext from "@/app/components/context/TodoReducerWithContext";

export default function Home() {
  return (
    <div >
      <main >
        {/*<Counter/>*/}
        {/*  <CounterWithReducer/>*/}
        {/*  <TodoListWithReducer/>*/}
        {/*  <ContextDemo/>*/}
          <TodoReducerWithContext/>
      </main>
    </div>
  );
}
