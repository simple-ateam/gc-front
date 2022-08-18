/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";
import { signUpFormContent } from "../styles/components/singUpForm";
import { SignFormContainer } from "../styles/components/loginForm";
import { RegExp } from "../../utils/RegExp";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmitHandler = (e) => {
    console.log(e);
    navigate("/login");
  };

  const emailMessage = () => {
    if (errors.email && errors.email.type === "required") {
      return <strong>이메일을 입력해주세요.</strong>;
    } else if (errors.email && errors.email.type === "pattern") {
      return <strong>{errors.email.message}</strong>;
    }
  };

  const pwMessage = () => {
    if (errors.pw && errors.pw.type === "required") {
      return <strong>비밀번호를 입력해주세요</strong>;
    } else if (errors.pw && errors.pw.type === "pattern") {
      return <strong>{errors.pw.message}</strong>;
    }
  };

  const pwCkMessage = () => {
    if (errors.pwCk && errors.pwCk.type === "required") {
      return <strong>비밀번호를 한 번 더 입력해주세요</strong>;
    } else if (errors.pwCk && errors.pwCk.type === "validate") {
      return <strong>{errors.pwCk.message}</strong>;
    }
  };

  return (
    <div css={SignFormContainer}>
      <div css={signUpFormContent}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div>
            <input
              autoComplete="off"
              placeholder="이메일을 입력해주세요"
              type="text"
              {...register("id", {
                required: true,
                pattern: {
                  value: RegExp.email,
                  message: "이메일 형식에 맞게 입력해주세요",
                },
              })}
            />
            {errors.email ? emailMessage() : <p>이메일을 입력해주세요.</p>}
            <input
              autoComplete="off"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              {...register("pw", {
                required: true,
                pattern: {
                  value: RegExp.password,
                  message: "형식에 맞는 비밀번호를 입력해주세요",
                },
              })}
            />
            {errors.pw ? pwMessage() : <p>문자,숫자, 특수문자를 조합한 8~15자리</p>}
            <input
              autoComplete="off"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              {...register("pwCk", {
                required: true,
                validate: (value) => {
                  if (watch("pw") !== value) {
                    return "비밀번호가 일치하지 않습니다.";
                  }
                },
              })}
            />
            {pwCkMessage()}
          </div>
          <div>
            <button>회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpForm;
