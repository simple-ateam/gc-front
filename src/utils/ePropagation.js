/**
 * 이벤트가 위임되는 것을 원하지 않을 때, 지정한 요소를 추출하는 함수
 * @param {*} evt 이벤트 객체
 * @param {string} findOne 이벤트를 적용할 요소
 * @returns element
 */
const ePropagation = (evt, findOne) => {
  let target = evt.target;
  while (target.nodeName !== findOne) {
    target = target.parentNode;
    if (target.nodeName === "BODY") return;
  }
  return target;
};

export default ePropagation;
