// router.js
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App1 from './pages/app1/app1';
import App2 from './pages/app2/app2';
import Home from './pages/home/home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* // 👇👇 非严格匹配，/my-page/* 都将匹配到 MyPage 页面 */}
        <Route path="/app1">
          <App1 />
        </Route>
        <Route path="/app2">
          <App2 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        ...
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
