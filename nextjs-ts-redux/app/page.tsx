import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Greeting from "@/app/components/Greeting";
import CounterWithReducer from "@/app/components/CounterWithReducer";
import TodoWithReducer from "@/app/components/reducer/TodoWithReducer";
import TodoListWithRedux from "@/app/components/todoRedux/TodoListWithRedux";

export default function IndexPage() {
  return(
      // <CounterWithReducer/>
      // <TodoWithReducer/>
      <TodoListWithRedux/>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
