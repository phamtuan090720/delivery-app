import {Switch, BrowserRouter} from 'react-router-dom';
import HomeTemplate from './Container/HomeTemplate';
import { routesHome } from './Router';
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
        {/* <Route path='/home' component={AboutPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
