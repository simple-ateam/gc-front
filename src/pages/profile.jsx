import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { meState } from "../states";

const Profile = () => {
  const navigate = useNavigate();
  const me = useRecoilValue(meState);
  useEffect(() => {
    if (!me) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <img style={{ width: "100%" }} src="img/spotImg.jpg" alt="야영장 이미지" />
    </>
  );
};
export default Profile;
