import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Reudxs/configStore';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import "./index.css";



// import _ as EmailValidator from 'email-validator';

// import _ as Yup from 'yup';


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      {/* <ValidateForm/> */}
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
