import styled from "@emotion/styled";
import { useQueryIdChecker } from "../../../../commons/hooks/customs/useQueryIdChecker";
import {
  FETCH_BOARD_FRAGMENTS,
  useQueryFetchBoard,
} from "../../../../commons/hooks/queries/useQueryFetchBoard";
import BoardDetailBodyBottom from "./bottom/BoardDetailBodyBottom.index";
import BoardDetailBodyMiddle from "./middle/BoardDetailBodyMiddle.index";
import BoardDetailBodyTop from "./top/BoardDetailBodyTop.index";

const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

const fragments: typeof FETCH_BOARD_FRAGMENTS = {
  ...FETCH_BOARD_FRAGMENTS,
  BOARD_IMAGES: true,
};

export default function BoardDetailBody() {
  const { id } = useQueryIdChecker("boardId");
  const { data } = useQueryFetchBoard({ boardId: id }, fragments);

  return (
    <CardWrapper>
      <BoardDetailBodyTop data={data} />
      <BoardDetailBodyMiddle data={data} />
      <BoardDetailBodyBottom />
    </CardWrapper>
  );
}
