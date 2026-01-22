import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Greeting from "@/app/components/Greeting";
import CounterWithReducer from "@/app/components/CounterWithReducer";

export default function IndexPage() {
  return <CounterWithReducer/>;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
