/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { myInfoState } from "../../states";
import MyInfoMenu from "./myInfoMenu";

const MyInfo = () => {
  const navigate = useNavigate();
  const myInfo = useRecoilValue(myInfoState);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return <MyInfoMenu />;
};
export default MyInfo;
