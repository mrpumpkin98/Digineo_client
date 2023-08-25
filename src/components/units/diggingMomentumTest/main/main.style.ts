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

  padding: 15vh 15px 0vh 15px;
`;

export const MainTitle = styled.h1``;

export const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
  font-size: 25px;
  font-weight: 700;
  height: 80px;
`;

export const Img = styled.img``;

export const MainButton = styled.button`
  width: 50%;
  margin-top: 40px;
  height: 50px;
  border: none;
  background-color: #1285ff;
  font-size: 18px;
  font-weight: 700;
  color: white;
  border-radius: 100px;
  cursor: pointer;
`;

export const TestButton = styled.button`
  width: 100%;
  padding: 25px 20px;
  margin-top: 15px;
  font-size: 17px;
  border: 1px solid #c5c5c5;
  background-color: white;
  text-align: start;
  cursor: pointer;
  height: 100px;
  border-radius: 4px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ececec;
  position: relative;
  margin-bottom: 30px;
`;

interface ProgressProps {
  progress: number;
}

export const Progress = styled.div<ProgressProps>`
  height: 100%;
  background-color: #1285ff;
  width: ${(props) => (props.progress / 12) * 100}%;
  transition: width 0.3s ease-in-out;
`;

export const Logo = styled.img`
  width: 60px;
  margin-top: 30%;
`;

export const LogoText = styled.p``;

export const Question = styled.p`
  font-size: 27px;
  color: #1285ff;
`;
