import LoginForm from "../components/common/loginForm";
import Logo from "../components/common/logo";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { meState } from "../states";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const resetMe = useResetRecoilState(meState);
  const me = useRecoilValue(meState);

  useEffect(() => {
    if (me) {
      return navigate({ pathname: "/" });
    }
    resetMe();
  }, [me]);

  return (
    <div style={{ height: "100%", margin: "150px auto 0 auto" }}>
      <Logo />
      <LoginForm />
    </div>
  );
};

export default Login;
