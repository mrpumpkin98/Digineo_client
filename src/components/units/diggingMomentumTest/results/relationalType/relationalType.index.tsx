import * as S from "./relationalType.style";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  collectibleType,
  conceptType,
  relationalType,
} from "../../../../../commons/stores";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

export default function ConceptTypePage() {
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
    setShouldReload(true);
  };

  useEffect(() => {
    if (shouldReload) {
      setShouldReload(false);
      window.location.reload();
    }
  }, [shouldReload]);

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
        <S.Title>관계형</S.Title>
        <S.Img src="/images/relationalType.png" />
        <S.contentsBox>
          <S.Maincontents>
            같은 대상을 좋아하는 사람들끼리 적극적인 소통을 통해 몰입의 정도를
            높이는 것을 선호합니다.
          </S.Maincontents>
          <S.contentsTitle>세부특징</S.contentsTitle>
          <S.contents>
            <p>
              <span style={{ fontWeight: "700" }}>사회적 교류 중심 : </span>
              당신은 자신과 비슷한 취향을 가진 사람들과 만나는 것을 즐깁니다.
              다양한 사람들과의 교류를 통해 새로운 인연을 만들며, 그들과의
              대화를 통해 친밀감을 형성하고 깊게 어울릴 수 있습니다.
            </p>
            <p>
              <span style={{ fontWeight: "700" }}>감정 및 의견 공유 : </span>
              서로의 감정과 의견을 공유하며 대화하는 것을 중요하게 여깁니다.
              자신의 생각과 관점을 나누며 타인의 관점을 듣는 것을 즐기며, 이를
              통해 자신의 취미나 관심사를 더욱 풍부하게 발전시키려고 노력합니다.
            </p>
            <p>
              <span style={{ fontWeight: "700" }}>친밀감 형성 : </span>
              자신의 취미나 관심사를 기반으로 다양한 사람들과의 교류를 통해
              친밀한 인간관계를 형성하고 유지하는 것이 중요하다고 여깁니다.
              취미를 통한 소통을 통해 친구를 사귀고, 사회적 네트워크를 확장하며
              다양한 인연을 만듭니다.
            </p>
            <p>
              <span style={{ fontWeight: "700" }}>사유와 분석 : </span>주변의
              사물이나 경험을 분석하며 컨셉과 연결시키려고 합니다. 자신의
              관심사와 현실 사이에서 의미 있는 연결점을 찾아내는 것을 즐깁니다.
            </p>
          </S.contents>
          <S.contentsTitle>나랑 잘 맞는 취미</S.contentsTitle>
          <S.contents>
            <li>그룹 스포츠</li>
          </S.contents>
          <S.contents>
            <li>등산 및 하이킹</li>
          </S.contents>
          <S.contents>
            <li>북 클럽</li>
          </S.contents>
          <S.contents>
            <li>보드 게임</li>
          </S.contents>
          <S.contents>
            <li>봉사 활동</li>
          </S.contents>
          <S.Again onClick={resetAndNavigate}>다시하기</S.Again>
        </S.contentsBox>
        <S.Button>더 알아보기</S.Button>
      </S.Box>
    </S.Wrapper>
  );
}
