import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  align-items: center;

  padding: 7vh 15px 0vh 15px;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

export const TitleText = styled.p``;

export const Img = styled.img``;

export const contentsBox = styled.div`
  padding: 0px 20px;
  margin-top: 30px;
  margin-bottom: 80px;
`;

export const Maincontents = styled.p`
  text-align: center;
`;

export const contents = styled.p``;

export const contentsTitle = styled.h3`
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 250px;
  height: 50px;
  border: none;
  background-color: #1285ff;
  font-size: 18px;
  font-weight: 700;
  color: white;
  border-radius: 100px;
  cursor: pointer;
  position: fixed;
  bottom: 2vh;
  left: 50%; /* 화면 가운데로 위치 */
  transform: translateX(-50%); /* 가운데 정렬을 위한 조정 */
`;

export const Again = styled.p`
  text-align: center;
  margin-top: 50px;
  font-weight: 700;
  cursor: pointer;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoadingText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;
