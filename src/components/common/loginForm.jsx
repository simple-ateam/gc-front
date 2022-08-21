/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";
import { SignFormContainer, loginFormContent } from "../styles/components/loginForm";
import { RegExp } from "../../utils/RegExp";
import { Link, useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (e) => {
    console.log(e);
    navigate("/");
  };

  return (
    <div css={SignFormContainer}>
      <div css={loginFormContent}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div>
            <input
              autoComplete="off"
              placeholder="이메일을 입력해주세요"
              type="text"
              {...register("id", {
                required: true,
              })}
            />
            <input
              autoComplete="off"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              {...register("pw", {
                required: true,
              })}
            />
          </div>
          <div>
            <button>로그인</button>
          </div>
        </form>
        <div>
          <div></div>
          <Link to="/signup">
            <p>회원가입</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
