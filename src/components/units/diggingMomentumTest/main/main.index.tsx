import { useState } from "react";
import MainDescription from "../../../commons/description/main/mainDescription";
import * as S from "./main.style";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  collectibleType,
  conceptType,
  relationalType,
} from "../../../../commons/stores";

type SectionProgress = {
  main: number;
  Q1: number;
  Q2: number;
  Q3: number;
  Q4: number;
  Q5: number;
  Q6: number;
  Q7: number;
  Q8: number;
  Q9: number;
  Q10: number;
  Q11: number;
  Q12: number;
};

// conceptType
// collectibleType
// relationalType

export default function MainPage() {
  const [section, setSection] = useState("main");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [conceptTypeState, setConceptTypeState] = useRecoilState(conceptType);
  const [relationalTypeState, setRelationalTypeState] =
    useRecoilState(relationalType);
  const [collectibleTypeState, setCollectibleTypeState] =
    useRecoilState(collectibleType);

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

  const sectionProgress: SectionProgress = {
    main: 0,
    Q1: 1,
    Q2: 2,
    Q3: 3,
    Q4: 4,
    Q5: 5,
    Q6: 6,
    Q7: 7,
    Q8: 8,
    Q9: 9,
    Q10: 10,
    Q11: 11,
    Q12: 12,
  };

  return (
    <S.Wrapper>
      <S.Box>
        {section === "main" ? (
          <></>
        ) : (
          <S.ProgressBar>
            <S.Progress progress={sectionProgress.Q1 - 1 || 0} />
          </S.ProgressBar>
        )}

        {section === "main" ? (
          <>
            <S.MainTitle>디깅 모멘텀 유형검사</S.MainTitle>
            <MainDescription />
            <S.Img src="/images/main.png" />
            <S.MainButton onClick={onClickStart}>시작하기</S.MainButton>
          </>
        ) : section === "Q1" ? (
          <>
            <S.Title>새로운 취미를 시작하려고 할 때</S.Title>
            <S.TestButton onClick={onClickQ1_conceptType}>
              관심 있는 주제에 대해 인터넷 검색을 하거나 책을 읽는다
            </S.TestButton>
            <S.TestButton onClick={onClickQ1_relationalType}>
              친구나 지인한테 추천을 받거나 인기 있는 취미를 따라해본다
            </S.TestButton>
          </>
        ) : section === "Q2" ? (
          <>
            <S.Title>
              좋아하는 콘텐츠
              <br />
              (영화, 드라마, 웹툰 등)가 있으면
            </S.Title>
            <S.TestButton onClick={onClickQ2_collectibleType}>
              콘텐츠와 관련된 상품이나 기념품을 사거나 가본다
            </S.TestButton>
            <S.TestButton onClick={onClickQ2_relationalType}>
              콘텐츠에 대한 리뷰나 팬아트, 팬픽션 등을 쓰거나 보고 싶다
            </S.TestButton>
          </>
        ) : section === "Q3" ? (
          <>
            <S.Title>좋은 음악을 발견!!</S.Title>
            <S.TestButton onClick={onClickQ3_conceptType}>
              음악의 가사나 작곡가, 아티스트의 이야기 등을 알아본다
            </S.TestButton>
            <S.TestButton onClick={onClickQ3_relationalType}>
              음악을 듣는 분위기나 감정을 공유할 수 있는 사람들하고 얘기하고
              싶다
            </S.TestButton>
          </>
        ) : section === "Q4" ? (
          <>
            <S.Title>
              오랜만에 재미있는 게임을
              <br />
              발견했다
            </S.Title>
            <S.TestButton onClick={onClickQ4_conceptType}>
              게임의 스토리나 세계관, 캐릭터 등에 빠지고 싶다
            </S.TestButton>
            <S.TestButton onClick={onClickQ4_collectibleType}>
              게임의 아이템이나 업적, 순위 등을 모으거나 자랑하고 싶다
            </S.TestButton>
          </>
        ) : section === "Q5" ? (
          <>
            <S.Title>새로운 지식을 습득하려고 할 때, 나의 방식은</S.Title>
            <S.TestButton onClick={onClickQ5_conceptType}>
              해당 분야의 전문 서적이나 강의를 통해 체계적으로 학습
            </S.TestButton>
            <S.TestButton onClick={onClickQ5_relationalType}>
              지인들과 토론하거나 관련 주제에 대한 블로그나 포럼을 찾는다
            </S.TestButton>
          </>
        ) : section === "Q6" ? (
          <>
            <S.Title>여행지를 방문했다</S.Title>
            <S.TestButton onClick={onClickQ6_conceptType}>
              그 지역의 역사, 문화, 음식 등에 대해 사전 조사를 하고 계획을 세워
              여행을 즐긴다
            </S.TestButton>
            <S.TestButton onClick={onClickQ6_relationalType}>
              현지 주민들과 소통하며 그들의 일상과 관점을 이해하고 그들과 함께
              경험을 나눈다
            </S.TestButton>
          </>
        ) : section === "Q7" ? (
          <>
            <S.Title>내가 취미로 선택한 활동의 목적</S.Title>
            <S.TestButton onClick={onClickQ7_conceptType}>
              자기 지식과 실력 키우고 과시하고 싶어서
            </S.TestButton>
            <S.TestButton onClick={onClickQ7_collectibleType}>
              자기 소유욕과 만족감을 충족시키고 소장가치를 높이고 싶어서
            </S.TestButton>
          </>
        ) : section === "Q8" ? (
          <>
            <S.Title>
              내가 자주 참여하는 이벤트나
              <br />
              모임에서 느끼는 감정은
            </S.Title>
            <S.TestButton onClick={onClickQ8_relationalType}>
              참가한 사람들과의 교류와 이야기, 새로운 경험과 자신감
            </S.TestButton>
            <S.TestButton onClick={onClickQ8_collectibleType}>
              이벤트나 모임에서 얻은 아이템이나 기념품, 그 경험을 기억하며
              느끼는 만족감
            </S.TestButton>
          </>
        ) : section === "Q9" ? (
          <>
            <S.Title>내가 더 선호하는 것은</S.Title>
            <S.TestButton onClick={onClickQ9_conceptType}>
              독창적인 것
            </S.TestButton>
            <S.TestButton onClick={onClickQ9_collectibleType}>
              현실적인 것
            </S.TestButton>
          </>
        ) : section === "Q10" ? (
          <>
            <S.Title>내가 취미로 선택한 활동의 단점</S.Title>
            <S.TestButton onClick={onClick10_collectibleType}>
              돈과 공간이 많이 필요하고, 낭비하거나 부담스러울 수 있어
            </S.TestButton>
            <S.TestButton onClick={onClick10_conceptType}>
              혼자서만 할 수 있고, 외롭거나 소외되거나 할 수 있어
            </S.TestButton>
          </>
        ) : section === "Q11" ? (
          <>
            <S.Title>
              흥미 있는 분야의 공연이나
              <br />
              이벤트에 참가한다면
            </S.Title>
            <S.TestButton onClick={onClick11_collectibleType}>
              관련된 기념품을 구매하거나 소장하며 그 경험을 기억하려 한다
            </S.TestButton>
            <S.TestButton onClick={onClick11_relationalType}>
              주변 사람들과 함께 참석하여 공연 후에 느낀 감정과 인상을 나누려
              한다
            </S.TestButton>
          </>
        ) : (
          section === "Q12" && (
            <>
              <S.Title>물건을 구매할 때, 나의 스타일은</S.Title>
              <S.TestButton onClick={onClick12_relationalType}>
                구매하기 전에 신중하게 비교 분석하여 실제 필요한 것만 구매
              </S.TestButton>
              <S.TestButton onClick={onClick12_collectibleType}>
                다양한 제품 중에서 관심 있는 것이나 디자인이 마음에 드는 것들을
                수집
              </S.TestButton>
            </>
          )
        )}
      </S.Box>
    </S.Wrapper>
  );
}
