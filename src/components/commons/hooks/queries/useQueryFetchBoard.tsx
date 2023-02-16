import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

const BOARD_LIKE = gql`
  fragment boardLike on Board {
    likeCount
    dislikeCount
  }
`;

const BOARD_YOUTUBE = gql`
  fragment boardYoutube on Board {
    youtubeUrl
  }
`;

const BOARD_IMAGES = gql`
  fragment boardImages on Board {
    images
  }
`;

export const FETCH_BOARD = (FRAGMENTS: typeof FETCH_BOARD_FRAGMENTS) => gql`
  ${FRAGMENTS.BOARD_LIKE ? BOARD_LIKE : ""}
  ${FRAGMENTS.BOARD_YOUTUBE ? BOARD_YOUTUBE : ""}
  ${FRAGMENTS.BOARD_IMAGES ? BOARD_IMAGES : ""}
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      ${FRAGMENTS.BOARD_LIKE ? "...boardLike" : ""}
      ${FRAGMENTS.BOARD_YOUTUBE ? "...boardYoutube" : ""}
      boardAddress {
        zipcode
        address
        addressDetail
      }
      ${FRAGMENTS.BOARD_IMAGES ? "...boardImages" : ""}
      createdAt
    }
  }
`;

export const FETCH_BOARD_FRAGMENTS = {
  BOARD_LIKE: false,
  BOARD_YOUTUBE: false,
  BOARD_IMAGES: false,
};

export const useQueryFetchBoard = (
  variables: IQueryFetchBoardArgs,
  fragments?: typeof FETCH_BOARD_FRAGMENTS
) => {
  const query = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD(fragments ?? FETCH_BOARD_FRAGMENTS),
    { variables }
  );
  return query;
};
