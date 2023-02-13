import {Switch, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

// todo: 회원가입 -> 로그인 -> 로그인 후에는 로그인 상태 유지
// 1. (이메일, 패스워드) 입력 후 submit, 회원가입, 로그인 api ✓
// 2. 파이어베이스 계정생성/로그인 POST(GET은 없는듯?) 핸들러
// 3. 계정생성 로직: 계정생성 POST 요청 -> 요청성공시 리다이렉트, 실패시 메시지 alert
// 4. 로그인 로직: 로그인 POST 요청 -> 요청성공시 리다이렉트, 토큰 context API(또는 리덕스), localStorage 저장, 실패시 메시지 alert
// 5. 패스워드 변경 로직
// 6. 네비게이션 가드 로직
// 7. 로그인 상태 유지 로직(Context API, localStorage 활용)

function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>
          <Route path='/auth'>
            <AuthPage/>
          </Route>
          <Route path='/profile'>
            <UserProfile/>
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
