import { useRouter } from "next/router";
import * as S from "./collectibleType.style";
import { useRecoilState } from "recoil";
import {
  collectibleType,
  conceptType,
  relationalType,
} from "../../../../../commons/stores";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

export default function CollectibleTypePage() {
  const [shouldReload, setShouldReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [conceptTypeState, setConceptTypeState] = useRecoilState(conceptType);
  const [relationalTypeState, setRelationalTypeState] =
    useRecoilState(relationalType);
  const [collectibleTypeState, setCollectibleTypeState] =
    useRecoilState(collectibleType);

  const resetAndNavigate = () => {
    setConceptTypeState(0);
    setRelationalTypeState(0);
    setCollectibleTypeState(0);
    router.push("/");
  };

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return (
      <S.LoadingContainer>
        <PulseLoader color="#1285FF" size={15} margin={10} />
      </S.LoadingContainer>
    );
  }

  return (
    <S.Wrapper>
      <S.Box>
        <S.TitleText>나의 디깅 모멘텀 유형은</S.TitleText>
        <S.Title>수집형</S.Title>
        <S.Img src="/images/collectibleType.png" />
        <S.contentsBox>
          <S.Maincontents>
            특정 물건이나 경험의 수집을 통해 만족과 과시를 추구하는 것을
            선호합니다.
          </S.Maincontents>
          <S.contentsTitle>세부특징</S.contentsTitle>
          <S.contents>
            <S.Text>
              <span style={{ fontWeight: "700" }}>개성적인 수집 : </span>특정한
              종류의 물건이나 기념품을 수집하며, 그것을 자신만의 개성과 취향을
              드러내는 방법으로 활용합니다. 수집품들은 당신의 선호와 관심사를
              대변하는 중요한 요소가 되어 눈에 띄는 아이덴티티를 형성합니다.
              <br />
              <br />
              <br />
            </S.Text>
            <S.Text>
              <span style={{ fontWeight: "700" }}>공유와 전시</span>
              <br />
              <br />
              수집한 물건들을 사진, 영상, 전시회 등을 통해 공유하고 자랑하는
              것을 즐깁니다. 당신은 자신의 수집품을 보여주는 것을 통해 주변
              사람들과 자신의 관심사를 나누고 교류합니다.
              <br />
              <br />
              <br />
            </S.Text>
            <S.Text>
              <span style={{ fontWeight: "700" }}>상품 탐색과 탐구</span>
              <br />
              <br />
              새로운 아이템을 찾고 탐구하는 것이 당신에게 큰 즐거움을 주는
              활동입니다. 새로운 발견과 희귀한 아이템을 찾아내는 과정에서 물건에
              대한 깊은 지식을 얻게 됩니다.
              <br />
              <br />
              <br />
            </S.Text>
            <S.Text>
              <span style={{ fontWeight: "700" }}>미적 감각 강조</span>
              <br />
              <br />
              수집한 물건들의 디자인이나 아름다움을 중요시하며, 이를 통해 자신의
              미적 감각을 표현하고 발전시킵니다.
              <br />
              <br />
              <br />
            </S.Text>
            <S.Text>
              <span style={{ fontWeight: "700" }}>자기 표현의 수단</span>
              <br />
              <br />
              당신의 수집품은 당신의 개성과 취향을 나타내는 중요한 수단이며,
              이를 통해 자신을 표현하고 주변 사람들에게 자신을 소개합니다.
              <br />
              <br />
              <br />
            </S.Text>
          </S.contents>
          <S.contentsTitle>나랑 잘 맞는 취미</S.contentsTitle>
          <S.contents>
            <li>피규어</li>
          </S.contents>
          <S.contents>
            <li>예술품 수집</li>
          </S.contents>
          <S.Again onClick={resetAndNavigate}>다시하기</S.Again>
        </S.contentsBox>
        <S.Button>더 알아보기</S.Button>
        <S.Logo src="/images/logo.png" alt="" />
        <S.LogoText>Digineo</S.LogoText>
      </S.Box>
    </S.Wrapper>
  );
}
