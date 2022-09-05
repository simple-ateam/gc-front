/**
 * 로컬 스토리지에 북마크를 등록/제거하는 함수
 * @param {*} spotInfo 야영지 정보
 * @returns
 */
const controlWebStorage = (spotInfo) => {
  let bookmarkList = JSON.parse(localStorage.getItem("bookmark"));
  const bookmarkObj = {
    id: spotInfo.contentId,
    facltNm: spotInfo.facltNm,
    x: spotInfo.mapX,
    y: spotInfo.mapY,
  };

  // 처음 북마크를 등록할 때
  if (!bookmarkList) {
    return localStorage.setItem("bookmark", JSON.stringify([bookmarkObj]));
  }

  // 이미 등록된 북마크를 다시 클릭했을 때
  if (bookmarkList.filter((e) => e.id === spotInfo.contentId)[0]) {
    const exceptOverLapValue = bookmarkList.filter((e) => e.id !== spotInfo.contentId);
    localStorage.setItem("bookmark", JSON.stringify(exceptOverLapValue));
  } else {
    // 북마크 등록
    bookmarkList.push(bookmarkObj);
    localStorage.setItem("bookmark", JSON.stringify(bookmarkList));
  }
};

export default controlWebStorage;
