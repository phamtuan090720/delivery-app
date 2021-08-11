import {createTheme } from '@material-ui/core'
const theme = createTheme ({
    breakpoints: {},
    palette: {
        green:'#13A549',
    },
    typography: {
        h1:{
            fontSize: 44,
            fontFamily:'Lato'
        }
        ,
        h2:{
            fontSize: 40,
        }
        ,
        h3:{
            fontSize: 32,
        }
        ,
        h4:{
            fontSize: 20,
        }
        ,
        h5:{
            fontSize: 18,
        }
        ,
        h6:{
            fontSize: 16,
        },
        subtitle1:{
            fontSize: 14,
            fontFamily:"Lato-Black"
        }
    }
});
export default theme;