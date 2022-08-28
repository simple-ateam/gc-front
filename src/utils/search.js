/**
 * 필터링 함수
 * @param {*} arr 필터링할 데이터 배열
 * @param {*} value input value
 * @returns 검색 결과 배열
 */
export const search = (arr, value) => {
  return arr.filter((e) => e.facltNm.includes(value)).slice(0, 6);
};
