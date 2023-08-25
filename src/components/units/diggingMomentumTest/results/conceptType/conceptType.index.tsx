import * as S from "./conceptType.style";
import { useRouter } from "next/router";
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
        <S.Title>컨셉형</S.Title>
        <S.Img src="/images/conceptType.png" />
        <S.contentsBox>
          <S.Maincontents>
            당신은 컨셉에 몰입하는 유형입니다. 새로운 아이디어나 주제에 대한
            탐구와 깊이 있는 이해를 통해 컨셉을 구체화하며, 이를 자신의 일상에
            적용하여 만족감을 얻습니다.
          </S.Maincontents>
          <S.contentsTitle>세부특징</S.contentsTitle>
          <S.contents>
            <p>
              <span style={{ fontWeight: "700" }}>탐구적인 성향 : </span>새로운
              아이디어나 주제에 대해 깊이 있게 탐구하고, 컨셉을 구체화하는 것을
              좋아합니다. 자신만의 관심 분야에 대해 꾸준한 학습과 연구를 통해
              전문성을 갖추려 노력합니다.
            </p>
            <p>
              <span style={{ fontWeight: "700" }}>창의적인 표현 : </span>
              자신의 관심사나 컨셉을 다양한 방식으로 표현하고 싶어합니다. 그림,
              글쓰기, 디자인 등 다양한 매체를 활용하여 자신의 아이디어를
              구체화하고 나타냅니다.
            </p>
            <p>
              <span style={{ fontWeight: "700" }}>자기만의 공간 구축 : </span>
              컨셉에 따라 자신만의 공간을 꾸미는 것을 즐깁니다. 방, 집, 작업
              공간 등을 자신의 취향과 아이디어에 맞게 꾸미며, 그곳에서 편안함과
              창의력을 느낍니다.
            </p>
            <p>
              <span style={{ fontWeight: "700" }}>사유와 분석 : </span>주변의
              사물이나 경험을 분석하며 컨셉과 연결시키려고 합니다. 자신의
              관심사와 현실 사이에서 의미 있는 연결점을 찾아내는 것을 즐깁니다.
            </p>
            <p>
              <span style={{ fontWeight: "700" }}>휴식과 탈출 : </span>자신의
              컨셉을 바탕으로 하는 활동을 통해 일상에서 벗어나고 휴식을
              취합니다. 자신만의 세계에서 활동하면서 스트레스를 해소하고 새로운
              에너지를 얻는 것을 중요하게 여깁니다.
            </p>
          </S.contents>
          <S.contentsTitle>나랑 잘 맞는 취미</S.contentsTitle>
          <S.contents>
            <li>미술</li>
          </S.contents>
          <S.contents>
            <li>사진 및 비디오 편집</li>
          </S.contents>
          <S.contents>
            <li>영화 제작</li>
          </S.contents>
          <S.contents>
            <li>연극</li>
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
