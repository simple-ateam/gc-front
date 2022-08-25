/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { myInfoState } from "../../states";
import MyInfoMenu from "./myInfoMenu";

const MyInfo = () => {
  const myInfo = useRecoilValue(myInfoState);

  return <MyInfoMenu />;
};
export default MyInfo;
