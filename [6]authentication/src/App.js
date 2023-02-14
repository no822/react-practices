import {Switch, Route, Redirect} from 'react-router-dom';
import {useContext} from "react";

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import {AuthContext} from "./store/auth-context";

// todo: 회원가입 -> 로그인 -> 로그인 후에는 로그인 상태 유지
// 1. (이메일, 패스워드) 입력 후 submit, 회원가입, 로그인 api ✓
// 2. contextAPI에 토큰 저장 ✓
// 3. 계정생성 로직: 계정생성 POST 요청 -> 요청성공시 리다이렉트, 실패시 메시지 alert ✓
// 4. 로그인 로직: 로그인 POST 요청 -> 요청성공시 리다이렉트, 토큰 context API(또는 리덕스), localStorage 저장, 실패시 메시지 alert ✓
// 5. 패스워드 변경 로직 ✓
// 6. 네비게이션 가드 로직 ✓
// 7. 로그인 상태 유지 로직(Context API, localStorage 활용) ✓
//   7.1 새로고침하면 로컬스토리지에서 토큰 있는지 확인 후 처리 ✓
//   7.2 토큰 만료기한이 지났으면 타이머 현재시각을 기준으로 다시 설정 ✓

function App() {
  const authCtx = useContext(AuthContext);
  return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>
          <Route path='/auth'>
            {!authCtx.isLogged && <AuthPage/>}
            {authCtx.isLogged && <Redirect to='/'></Redirect>}
          </Route>
          <Route path='/profile'>
            {authCtx.isLogged && <UserProfile/>}
            {!authCtx.isLogged && <Redirect to='/'></Redirect>}
          </Route>
          <Route path='*'>
            <Redirect to='/'></Redirect>
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
