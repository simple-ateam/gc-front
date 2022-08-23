/**
 * 필터링 함수
 * @param {*} arr 필터링할 데이터 배열
 * @param {*} value input value
 * @returns 검색 결과 배열
 */
const search = (arr, value) => {
  return arr.filter((e) => e.includes(value)).slice(0, 6);
};

search("맛있는");
