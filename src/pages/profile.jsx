import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
  }, []);

  return (
    <>
      <img style={{ width: "100%" }} src="img/spotImg.jpg" alt="야영장 이미지" />
    </>
  );
};
export default Profile;
