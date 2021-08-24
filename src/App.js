import { Switch, BrowserRouter, Route } from 'react-router-dom';
import HomeTemplate from './Container/HomeTemplate';
import { routesHome } from './Router';
<<<<<<< HEAD
import PageNotFound from './Page/404/PageNotFound';

=======

import {Container} from "react-bootstrap";
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      });
    }
  }
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routesHome)}
        <Route path='' component={PageNotFound} />
      </Switch>
    </BrowserRouter>
=======
    <Container>
      <BrowserRouter>
        <Switch>
          
          {showLayoutHome(routesHome)}
          {/* <Route path='/home' component={AboutPage} /> */}
        </Switch>
      </BrowserRouter>
    </Container>
    
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
  );
}

export default App;
