import React from "react";
import styled from "@emotion/styled";

const Text = styled.p`
  text-align: center;
  font-size: 18px;
`;

export default function MainDescription() {
  return (
    <Text>
      한 분야에 깊이 파고드는 행위를 하는 사람들이 늘어나는 트렌드로 소비자가
      선호하는 품목이나 영역에 깊이 파고드는 행위가 관련 제품의 소비로 이어지는
      것
    </Text>
  );
}
