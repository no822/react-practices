import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from "react-redux";

// 리덕스 툴킷을 사용하여 앱을 인터렉티브하게 변경
// 1. 컴포넌트 구조 파악 ✓
// 2. 인터렉티브 동작 목록
//   2.1 Products: 상품 추가 ✓
//   2.2 Cart: 카트에 담긴 상품 렌더링, 상품 추가, 제거
//   2.3 MainHeader-CartButton: 카트 토글, 카트에 담긴 상품 갯수 렌더링 ✓
// 3. 작업 STEP
//   3.1 react-redux, @reduxjs/toolkit 설치 ✓
//   3.2 스토어 세팅 ✓
//   3.3 리듀서 구현 △
//   3.4 필요한 컴포넌트에서 store 활용(2 참고)

function App() {
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  return (
      <Layout>
        {cartIsVisible && <Cart/>}
        <Products/>
      </Layout>
  );
}

export default App;
