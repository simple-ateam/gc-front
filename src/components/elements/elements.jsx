/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { palette } from "../../utils/styleTheme";

export const Input = styled.input`
  border: none;
  background-color: transparent;
  width: ${(props) => (props.st ? props.st.w : "100%")};
  height: ${(props) => (props.st ? props.st.h : "100%")};
  padding-left: 10px;
  ::placeholder {
    font-size: 15px;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.st ? props.st.fd : "row")};
  align-items: center;
  justify-content: ${(props) => (props.st ? props.st.jc : "center")};
  gap: ${(props) => (props.st ? props.st.gap : "none")};
  width: ${(props) => (props.st ? props.st.w : "100%")};
`;
