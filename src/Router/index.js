import HomePage from '../Page/HomePage';
import Login from '../Page/LoginPage';
import AboutPage from '../Page/AboutPage';
import ContactPage from '../Page/ContactPage';
import SignUpUser from '../Page/SignUpUserPage';
<<<<<<< HEAD
import SignUpShipper from '../Page/SignUpShipperPage';
=======
import SignUpShipper from '../Page/SignUpShipperPage'
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
const routesHome = [{
    exact: true,
    path: "/",
    component: HomePage,
},
{
    exact: false,
    path: "/home",
    component: HomePage,
},
{
    exact: false,
    path: "/login",
    component: Login,
},
{
    exact: false,
    path: "/contact",
    component: ContactPage,
},
{
    exact: false,
    path: "/about",
    component: AboutPage,
},
{
    exact: false,
    path: "/sign-up",
    component: SignUpUser,
},

{
    exact: false,
    path: "/SignUpShipper",
    component: SignUpShipper,
},

];
export { routesHome };