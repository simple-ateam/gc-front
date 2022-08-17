/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useForm } from "react-hook-form";
import { loginFormContainer, loginFormContent } from "../styles/components/loginForm";
const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmitHandler = (e) => {
    console.log(e);
  };
  return (
    <div css={loginFormContainer}>
      <div css={loginFormContent}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div>
            <input placeholder="아이디를 입력해주세요" type="text" {...register("id")} />
            <input placeholder="비밀번호를 입력해주세요" type="password" {...register("pw")} />
          </div>
          <div>
            <button>로그인 하기</button>
          </div>
        </form>
        <div>
          <div></div>
          <p>회원가입</p>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
