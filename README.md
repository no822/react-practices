# <React 완벽가이드> 강의 중 실습 부분 연습입니다

- 강의주소: https://www.udemy.com/course/best-react/

## 1. 유저정보 리스트 프로젝트

- 리액트 기초: jsx 작성, props로 데이터 전달, 컴포넌트 분할, 컴포넌트 합성(composition)
- 이벤트: 이벤트 핸들러 작성, useState로 상태관리, form 입력 이벤트
- 리스트 렌더링 및 상태에 따라 다른 컨텐츠 렌더링
- css 스타일링(css 모듈)

---

## 2. 음식 주문 프로젝트

- react hooks: useEffect, useRef, useReducer
- portal: 특정 컴포넌트를 실제 dom 렌더링과 다르게 컨트롤
- contextAPI: 상태를 전역적으로 관리
  // OBJECTIVE: 음식 주문 앱

### Requirements

1. 상품 리스트 렌더링

- 상품명, 상품설명, 가격
- 각 item 별 수량 카운터, 장바구니 추가버튼

2. 장바구니
    - nav 에 있는 버튼, 총 상품의 갯수
    - 버튼 클릭하면 각 상품의 갯수, 주문 총액 렌더링 되는 팝업창, Close / Order 버튼
    - 팝업창 안에서도 각 상품의 갯수 조절 가능

### STEP

1. extra-files 파일들 보고 컴포넌트 구성 짜기
    - 헤더 그룹: Header, HeaderCartButton , CartIcon
    - 카트 그룹: Cart , CartItem
    - 상품 리스트 그룹: AvailableMeals , MealItem , MealItemForm , Input
    - Summary 그룹: MealsSummary

2. 컴포넌트 구성하기
    - 기본 레이아웃 짜기: 헤더 그룹, Summary 그룹 ✓
    - 상품 리스트 그룹: meals 데이터를 입력받아서 리스트 렌더링 ✓
    - 카트 그룹: contextAPI로 카트데이터 처리, 상품수량 추가 이벤트 핸들링
    - 모달창 그룹: 레이아웃

