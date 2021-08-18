import { Switch, BrowserRouter, Route } from 'react-router-dom';
import HomeTemplate from './Container/HomeTemplate';
import { routesHome } from './Router';
import PageNotFound from './Page/404/PageNotFound';
function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      });
    }
  }
  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routesHome)}
        <Route path='' component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
