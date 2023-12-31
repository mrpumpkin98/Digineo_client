import MainDescription from "../../../commons/description/main/mainDescription";
import * as S from "./main.style";
import { useOnClickGetId } from "../../../commons/hooks/useOnClick";

type SectionProgress = {
  [key: string]: number;
};

export default function MainPage() {
  const {
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
  } = useOnClickGetId();

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
          <>
            <S.ProgressBar>
              <S.Progress progress={sectionProgress[section] - 1 || 0} />
            </S.ProgressBar>
          </>
        )}

        {section === "main" ? (
          <>
            <S.MainTitle>디깅 모멘텀 유형검사</S.MainTitle>
            <MainDescription />
            <S.Img src="/images/main.png" />
            <S.MainButton onClick={onClickStart}>시작하기</S.MainButton>
            <S.Logo src="/images/logo.png" alt="" />
            <S.LogoText>Digineo</S.LogoText>
          </>
        ) : section === "Q1" ? (
          <>
            <S.Question>Q1</S.Question>
            <S.Title>새로운 취미를 시작하려고 할 때</S.Title>
            <S.TestButton onClick={onClickQ1_conceptType}>
              인터넷 검색을 하거나 책을 읽는다
            </S.TestButton>
            <S.TestButton onClick={onClickQ1_relationalType}>
              친구나 지인한테 추천을 받는다
            </S.TestButton>
            <S.Logo src="/images/logo.png" alt="" />
            <S.LogoText>Digineo</S.LogoText>
          </>
        ) : section === "Q2" ? (
          <>
            <S.Question>Q2</S.Question>
            <S.Title>
              좋아하는 콘텐츠
              <br />
              (영화, 드라마, 웹툰 등)가 있으면
            </S.Title>
            <S.TestButton onClick={onClickQ2_collectibleType}>
              관련된 상품이나 기념품을 산다
            </S.TestButton>
            <S.TestButton onClick={onClickQ2_relationalType}>
              리뷰나 팬아트를 찾아 본다
            </S.TestButton>
            <S.Logo src="/images/logo.png" alt="" />
            <S.LogoText>Digineo</S.LogoText>
          </>
        ) : section === "Q3" ? (
          <>
            <S.Question>Q3</S.Question>
            <S.Title>좋은 음악을 발견</S.Title>
            <S.TestButton onClick={onClickQ3_conceptType}>
              가사나 작곡가, 아티스트를 알아본다
            </S.TestButton>
            <S.TestButton onClick={onClickQ3_relationalType}>
              공유할 수 있는 사람들하고 얘기하고 싶다
            </S.TestButton>
            <S.Logo src="/images/logo.png" alt="" />
            <S.LogoText>Digineo</S.LogoText>
          </>
        ) : section === "Q4" ? (
          <>
            <S.Question>Q4</S.Question>
            <S.Title>오랜만에 재미있는 게임을 발견</S.Title>
            <S.TestButton onClick={onClickQ4_conceptType}>
              스토리나 세계관, 캐릭터 등에 빠지고 싶다
            </S.TestButton>
            <S.TestButton onClick={onClickQ4_collectibleType}>
              아이템을 모으거나 자랑하고 싶다
            </S.TestButton>
            <S.Logo src="/images/logo.png" alt="" />
            <S.LogoText>Digineo</S.LogoText>
          </>
        ) : section === "Q5" ? (
          <>
            <S.Question>Q5</S.Question>
            <S.Title>새로운 지식을 습득하려고 할 때, 나의 방식은</S.Title>
            <S.TestButton onClick={onClickQ5_conceptType}>
              서적이나 강의를 통해 체계적으로 학습
            </S.TestButton>
            <S.TestButton onClick={onClickQ5_relationalType}>
              토론하거나 주제에 대한 블로그를 찾는다
            </S.TestButton>
            <S.Logo src="/images/logo.png" alt="" />
            <S.LogoText>Digineo</S.LogoText>
          </>
        ) : section === "Q6" ? (
          <>
            <S.Question>Q6</S.Question>
            <S.Title>여행지를 방문</S.Title>
            <S.TestButton onClick={onClickQ6_conceptType}>
              계획을 세워 여행을 즐긴다
            </S.TestButton>
            <S.TestButton onClick={onClickQ6_relationalType}>
              현지 주민들과 소통하며 경험을 나눈다
            </S.TestButton>
            <S.Logo src="/images/logo.png" alt="" />
            <S.LogoText>Digineo</S.LogoText>
          </>
        ) : section === "Q7" ? (
          <>
            <S.Question>Q7</S.Question>
            <S.Title>내가 취미로 선택한 활동의 목적</S.Title>
            <S.TestButton onClick={onClickQ7_conceptType}>
              지식과 실력 키우고 과시하고 싶어서
            </S.TestButton>
            <S.TestButton onClick={onClickQ7_collectibleType}>
              만족감과 소장가치를 높이고 싶어서
            </S.TestButton>
            <S.Logo src="/images/logo.png" alt="" />
            <S.LogoText>Digineo</S.LogoText>
          </>
        ) : section === "Q8" ? (
          <>
            <S.Question>Q8</S.Question>
            <S.Title>
              내가 자주 참여하는 이벤트나
              <br />
              모임에서 느끼는 감정은
            </S.Title>
            <S.TestButton onClick={onClickQ8_relationalType}>
              사람들과의 교류와 이야기, 새로운 경험
            </S.TestButton>
            <S.TestButton onClick={onClickQ8_collectibleType}>
              경험을 기억하며 느끼는 만족감
            </S.TestButton>
            <S.Logo src="/images/logo.png" alt="" />
            <S.LogoText>Digineo</S.LogoText>
          </>
        ) : section === "Q9" ? (
          <>
            <S.Question>Q9</S.Question>
            <S.Title>내가 더 선호하는 것은</S.Title>
            <S.TestButton onClick={onClickQ9_conceptType}>
              독창적인 것
            </S.TestButton>
            <S.TestButton onClick={onClickQ9_collectibleType}>
              현실적인 것
            </S.TestButton>
            <S.Logo src="/images/logo.png" alt="" />
            <S.LogoText>Digineo</S.LogoText>
          </>
        ) : section === "Q10" ? (
          <>
            <S.Question>Q10</S.Question>
            <S.Title>내가 취미로 선택한 활동의 단점</S.Title>
            <S.TestButton onClick={onClick10_collectibleType}>
              돈과 공간이 많이 필요
            </S.TestButton>
            <S.TestButton onClick={onClick10_conceptType}>
              혼자서만 할 수 있음
            </S.TestButton>
            <S.Logo src="/images/logo.png" alt="" />
            <S.LogoText>Digineo</S.LogoText>
          </>
        ) : section === "Q11" ? (
          <>
            <S.Question>Q11</S.Question>
            <S.Title>
              흥미 있는 분야의 공연이나
              <br />
              이벤트에 참가한다면
            </S.Title>
            <S.TestButton onClick={onClick11_collectibleType}>
              관련된 기념품을 구매
            </S.TestButton>
            <S.TestButton onClick={onClick11_relationalType}>
              공연 후에 느낀 감정과 인상을 나누려 한다
            </S.TestButton>
            <S.Logo src="/images/logo.png" alt="" />
            <S.LogoText>Digineo</S.LogoText>
          </>
        ) : (
          section === "Q12" && (
            <>
              <S.Question>Q12</S.Question>
              <S.Title>물건을 구매할 때, 나의 스타일은</S.Title>
              <S.TestButton onClick={onClick12_relationalType}>
                비교 분석하여 실제 필요한 것만 구매
              </S.TestButton>
              <S.TestButton onClick={onClick12_collectibleType}>
                디자인이 마음에 드는 것들을 수집
              </S.TestButton>
              <S.Logo src="/images/logo.png" alt="" />
              <S.LogoText>Digineo</S.LogoText>
            </>
          )
        )}
      </S.Box>
    </S.Wrapper>
  );
}
