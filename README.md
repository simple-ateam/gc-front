## Go Camp

전국 캠핑장 정보를 확인할 수 있다.

<!-- 폰트 적용 -->
<!-- 서비스 로고 벡터 이미지 찾기 -->
<!-- 기본 색상 / 사이즈 설정하기 -->
<!-- 모바일 반응형 어떻게 할 것인지 정하기 >> 디바이스 감지해서 다른 컴포넌트 띄우기 / 적어도 데스크탑 레이아웃은 태블릿 반응형까진 생각해서 구현하기-->
<!-- 메인 페이지 레이아웃 컴포넌트 생성하기 -->
<!-- 모바일 네브바 만들기 구글맵 참고 -->
<!-- 마커 svg 생성하기 -->
<!-- api 연동 후 marker 여러개 띄우기 -->
<!-- marker에 클릭 이벤트 달기 -->
<!-- 마커 초기화 삭제하고 다시 그리기-->

<!-- 마커 깜빡이는 거 해결 -->
<!-- api 분리 코드 깔끔하게 -->
<!-- Ref 하나의 객체로 만들기 -->
<!-- idle 이벤트 핸들러에 디바운싱 걸기 -->
<!-- 마커 클러스터링 -->

마커 클릭 시 전역 상태 변경

1.  캠핑장 정보 modal 컴포넌트 구현하기
    현재 위치 정보 전역 상태로 관리하기
    마커 누르면 전역 상태 하나 생기고, drawer props 생기게 하기
    searchBar에 로딩스피너 넣기
    모바일에는 x 버튼
    브라우저에는 접기 버튼 넣기

2.  zoom level 11이상은 마커띄우기(범위 확장)
    10이하는 시/도 단위 캠핑장 개수로 띄우기 구분
    마커 지우기

<!-- 3.  api 연동하기 -->

drawer 정보 넣는 맥락
각각의 icon에는 contentId가 클래스네임(or id)으로 넣어져 있음.
클릭하는 경우, 전역 상태로 contentId가 등록되고, contentId가 등록되면
drawer의 display가 on됨.
뒤로가기나 x버튼을 누르면 전역 상태의 contentId는 다시 null로 변경
