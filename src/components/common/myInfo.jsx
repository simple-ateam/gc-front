/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { meState, mNavState, myInfoState } from "../../states";
import { myInfoContainer } from "../styles/components/myInfo";
import Bookmark from "./bookmark";
import MyInfoMenu from "./myInfoMenu";

const MyInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const me = useRecoilValue(meState);
  const setMNAV = useSetRecoilState(mNavState);
  const [myInfo, setMyInfo] = useRecoilState(myInfoState);

  useEffect(() => {
    if (!me) return navigate("/login");
    switch (location.search) {
      case "?bookmark":
        setMNAV("bookmark");
        return setMyInfo("bookmark");
      default:
        return setMyInfo(null);
    }
  }, [location]);

  const ShowMyContent = () => {
    if (!myInfo) {
      return <MyInfoMenu />;
    } else if (myInfo === "bookmark") {
      return <Bookmark />;
    }
  };

  return (
    <div css={myInfoContainer}>
      <ShowMyContent />
    </div>
  );
};
export default MyInfo;
