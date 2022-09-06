/** @jsxImportSource @emotion/react */
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { bookmarkState } from "../../states";
import { bookmarkContent } from "../styles/components/myInfo";

const Bookmark = () => {
  const bookmark = useRecoilValue(bookmarkState);
  const navigate = useNavigate();

  const leftBtnHandler = () => {
    navigate(-1);
  };
  const closeBtnHandler = () => {
    navigate("/");
  };
  const bookmarkClickHandler = (e) => {
    navigate({
      pathname: "/maps",
      search: `?${createSearchParams({
        id: e.id,
        x: e.x,
        y: e.y,
      })}`,
    });
  };

  return (
    <section css={bookmarkContent}>
      <div>
        <div>
          <ArrowLeftOutlined onClick={leftBtnHandler} />
          <h2>북마크</h2>
        </div>
        <div>
          <CloseOutlined onClick={closeBtnHandler} />
        </div>
      </div>
      <div>
        <ul>
          {bookmark &&
            bookmark.map((e) => {
              return (
                <li
                  onClick={() => {
                    bookmarkClickHandler(e);
                  }}
                  key={e.id}>
                  <h4>{e.name}</h4>
                  <p>{e.addr}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};
export default Bookmark;
