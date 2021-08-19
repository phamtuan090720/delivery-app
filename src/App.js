import {Switch, BrowserRouter} from 'react-router-dom';
import HomeTemplate from './Container/HomeTemplate';
import { routesHome } from './Router';

import {Container} from "react-bootstrap";

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      });
    }
  }
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          
          {showLayoutHome(routesHome)}
          {/* <Route path='/home' component={AboutPage} /> */}
        </Switch>
      </BrowserRouter>
    </Container>
    
  );
}

export default App;
