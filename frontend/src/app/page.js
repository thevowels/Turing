import Image from "next/image";
import styles from "./page.module.css";
import CustomComponent from "@/app/components/CustomComponent";
import Counter from "@/app/components/Counter";
import CounterWithReducer from "@/app/components/reducer/CounterWithReducer";
import TodoListWithReducer from "@/app/components/reducer/TodoListWithReducer";
import ContextDemo from "@/app/components/context/ContextDemo";
import TodoReducerWithContext from "@/app/components/context/TodoReducerWithContext";
import FilterableProductTable from "@/app/components/product/FilterableProductTable";
import RefDemo from "@/app/components/ref/RefDemo";
import Stopwatch from "@/app/components/ref/Stopwatch";
import FocusInput from "@/app/components/ref/FocusInput";
import WhyEffect from "@/app/components/effect/WhyEffect";

export default function Home() {
  return (
    <div >
      <main >
        {/*<Counter/>*/}
        {/*  <CounterWithReducer/>*/}
        {/*  <TodoListWithReducer/>*/}
        {/*  <ContextDemo/>*/}
        {/*  <TodoReducerWithContext/>*/}
        {/*  <FilterableProductTable/>*/}
        {/*<RefDemo/>*/}
        {/*  <Stopwatch/>*/}
        {/*  <FocusInput/>*/}
          <WhyEffect/>


      </main>
    </div>
  );
}
