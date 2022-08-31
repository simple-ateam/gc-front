/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { meState } from "../../states";
import MyInfoMenu from "./myInfoMenu";

const MyInfo = () => {
  const navigate = useNavigate();
  const me = useRecoilValue(meState);

  useEffect(() => {
    if (!me) {
      navigate("/login");
    }
  }, []);

  return <MyInfoMenu />;
};
export default MyInfo;
