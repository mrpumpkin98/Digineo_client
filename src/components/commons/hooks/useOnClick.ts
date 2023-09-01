import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  collectibleType,
  conceptType,
  relationalType,
} from "../../../commons/stores";
import { useState } from "react";

export const useOnClickGetId = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [conceptTypeState, setConceptTypeState] = useRecoilState(conceptType);
  const [relationalTypeState, setRelationalTypeState] =
    useRecoilState(relationalType);
  const [collectibleTypeState, setCollectibleTypeState] =
    useRecoilState(collectibleType);
  const [section, setSection] = useState("main");

  const onClickStart = () => {
    setSection("Q1");
  };

  const onClickQ1_conceptType = () => {
    setConceptTypeState(conceptTypeState + 1);
    setSection("Q2");
  };

  const onClickQ1_relationalType = () => {
    setRelationalTypeState(relationalTypeState + 1);
    setSection("Q2");
  };

  const onClickQ2_collectibleType = () => {
    setCollectibleTypeState(collectibleTypeState + 1);
    setSection("Q3");
  };

  const onClickQ2_relationalType = () => {
    setRelationalTypeState(relationalTypeState + 1);
    setSection("Q3");
  };

  const onClickQ3_conceptType = () => {
    setConceptTypeState(conceptTypeState + 1);
    setSection("Q4");
  };

  const onClickQ3_relationalType = () => {
    setRelationalTypeState(relationalTypeState + 1);
    setSection("Q4");
  };

  const onClickQ4_conceptType = () => {
    setConceptTypeState(conceptTypeState + 1);
    setSection("Q5");
  };

  const onClickQ4_collectibleType = () => {
    setCollectibleTypeState(collectibleTypeState + 1);
    setSection("Q5");
  };

  const onClickQ5_conceptType = () => {
    setConceptTypeState(conceptTypeState + 1);
    setSection("Q6");
  };

  const onClickQ5_relationalType = () => {
    setRelationalTypeState(relationalTypeState + 1);
    setSection("Q6");
  };

  const onClickQ6_conceptType = () => {
    setConceptTypeState(conceptTypeState + 1);
    setSection("Q7");
  };

  const onClickQ6_relationalType = () => {
    setRelationalTypeState(relationalTypeState + 1);
    setSection("Q7");
  };

  const onClickQ7_conceptType = () => {
    setConceptTypeState(conceptTypeState + 1);
    setSection("Q8");
  };

  const onClickQ7_collectibleType = () => {
    setCollectibleTypeState(collectibleTypeState + 1);
    setSection("Q8");
  };

  const onClickQ8_relationalType = () => {
    setRelationalTypeState(relationalTypeState + 1);
    setSection("Q9");
  };

  const onClickQ8_collectibleType = () => {
    setCollectibleTypeState(collectibleTypeState + 1);
    setSection("Q9");
  };

  const onClickQ9_conceptType = () => {
    setConceptTypeState(conceptTypeState + 1);
    setSection("Q10");
  };

  const onClickQ9_collectibleType = () => {
    setCollectibleTypeState(collectibleTypeState + 1);
    setSection("Q10");
  };

  const onClick10_collectibleType = () => {
    setCollectibleTypeState(collectibleTypeState + 1);
    setSection("Q11");
  };

  const onClick10_conceptType = () => {
    setConceptTypeState(conceptTypeState + 1);
    setSection("Q11");
  };

  const onClick11_collectibleType = () => {
    setCollectibleTypeState(collectibleTypeState + 1);
    setSection("Q12");
  };

  const onClick11_relationalType = () => {
    setRelationalTypeState(relationalTypeState + 1);
    setSection("Q12");
  };

  const onClick12_relationalType = () => {
    setRelationalTypeState(relationalTypeState + 1);
    router.push(`/diggingMomentumTest/results/conceptType`);
    determineMaxTypeAndRoute();
  };

  const onClick12_collectibleType = () => {
    setCollectibleTypeState(collectibleTypeState + 1);
    router.push(`/diggingMomentumTest/results/conceptType`);
    determineMaxTypeAndRoute();
  };

  const determineMaxTypeAndRoute = () => {
    setIsLoading(true);

    let maxType = "";

    if (
      conceptTypeState >= relationalTypeState &&
      conceptTypeState >= collectibleTypeState
    ) {
      maxType = "conceptType";
    } else if (
      relationalTypeState >= conceptTypeState &&
      relationalTypeState >= collectibleTypeState
    ) {
      maxType = "relationalType";
    } else {
      maxType = "collectibleType";
    }

    if (maxType === "conceptType") {
      router.push(`/diggingMomentumTest/results/conceptType`);
    } else if (maxType === "relationalType") {
      router.push(`/diggingMomentumTest/results/relationalType`);
    } else {
      router.push(`/diggingMomentumTest/results/collectibleType`);
    }
  };

  return {
    onClickStart,
    onClickQ1_conceptType,
    onClickQ1_relationalType,
    onClickQ2_collectibleType,
    onClickQ2_relationalType,
    onClickQ3_conceptType,
    onClickQ3_relationalType,
    onClickQ4_conceptType,
    onClickQ4_collectibleType,
    onClickQ5_conceptType,
    onClickQ5_relationalType,
    onClickQ6_conceptType,
    onClickQ6_relationalType,
    onClickQ7_conceptType,
    onClickQ7_collectibleType,
    onClickQ8_relationalType,
    onClickQ8_collectibleType,
    onClickQ9_conceptType,
    onClickQ9_collectibleType,
    onClick10_collectibleType,
    onClick10_conceptType,
    onClick11_collectibleType,
    onClick11_relationalType,
    onClick12_relationalType,
    onClick12_collectibleType,
    section,
  };
};
