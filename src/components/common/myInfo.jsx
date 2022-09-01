/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { meState } from "../../states";
import MyInfoMenu from "./myInfoMenu";

const MyInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const me = useRecoilValue(meState);

  useEffect(() => {
    if (!me) {
      navigate("/login");
    }
    console.log(location.search);
  }, []);

  return <MyInfoMenu />;
};
export default MyInfo;
