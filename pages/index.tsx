import { useRouter } from "next/router";
import { useEffect } from "react";
import MainPage from "../src/components/units/diggingMomentumTest/main/main.index";

export default function Home() {
  const router = useRouter();

  return <MainPage />;
}
