import React from 'react';
import Style from '../../assets/styles/NavbarHome.module.css';
import { NavLink,useLocation} from 'react-router-dom';

export default function NavbarHome()
{
    const loaction = useLocation();
    return (
        
        <div className={Style.wrap}>
            <div className={Style.navBarLeft}>
                <NavLink to="/">
                    <div className={Style.logo}>
                        <img src='./img/logo2.png' alt='logo' />
                    </div>
                </NavLink>
            </div>
            <div className={Style.navBarRight}>
                <ul className={Style.menu}>
                    <li><NavLink to="/" isActive={()=>{
                        if(loaction.pathname==='/' || loaction.pathname==='/home'){
                            return 1;
                        }
                        else return 0;
                    }} activeStyle={{
                        color: "#13A549"
                    }}>Home</NavLink></li>
                    <li><NavLink to="/about" isActive={()=>{
                        if(loaction.pathname==='/about'){
                            return 1;
                        }
                        else return 0;
                    }} activeStyle={{
                        color: "#13A549"
                    }}>About Us</NavLink></li>
                    <li><NavLink to="/contact" isActive={()=>{
                        if(loaction.pathname==='/contact'){
                            return 1;
                        }
                        else return 0;
                    }} activeStyle={{
                        color: "#13A549"
                    }} >Contact</NavLink></li>
                    <li><NavLink to="/login" isActive={()=>{
                        if(loaction.pathname==='/login'){
                            return 1;
                        }
                        else return 0;
                    }} activeStyle={{
                        color: "#13A549"
                    }}>Login</NavLink></li>

                    {/* <li><NavLink to="/SignUpShipper"> isActive={()=>{
                        if(location.pathname =='/SignUpShipper'){
                            return 1;
                        }else return 0;
                    }} activeStyle={{ 
                        color: "13a549"
                    }}>Sign up Shipper</NavLink></li>' */}
                    


                    <li><NavLink to="/sign-up" isActive={()=>{
                        if(loaction.pathname==='/sign-up'){
                            return 1;
                        }
                        else return 0;
                    }} activeStyle={{
                        color: "#13A549"
                    }}>Sign up</NavLink></li>
        

        {/* <li><NavLink to="/sign-up-user" isActive={()=>{
                        if(loaction.pathname==='/sign-up'){
                            return 1;
                        }
                        else return 0;
                    }} activeStyle={{
                        color: "#13A549"
                    }}>Sign Up User</NavLink></li>


<li><NavLink to="/sign-up-shipper" isActive={()=>{
                        if(loaction.pathname==='/sign-up'){
                            return 1;
                        }
                        else return 0;
                    }} activeStyle={{
                        color: "#13A549"
                    }}>Sign Up Shipper</NavLink></li> */}

{/* <NavDropdown title="Sign-up" id="collasible-nav-dropdown">
        
        <NavDropdown.Item href="#sign-up-user">Sign Up User</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#sign-up-shipper">Sign Up Shipper</NavDropdown.Item>
      </NavDropdown> */}

                </ul>
            </div>  
        </div>
        // </div>
    )
}


