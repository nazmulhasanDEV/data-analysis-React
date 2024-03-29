import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/login-register/login.css";
import {Link, useNavigate} from 'react-router-dom';
import { User } from "react-feather";
import { useSnackbar } from 'notistack';
import authFetch from "../../axios/Interceptors";
import UserProfile from "../user-profile";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/Authentication";
import { parseJwt } from "../parser/Parser";

const Login = () => {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const useAuthStatus = useAuth();

  const navigate = useNavigate();

  const initialLoginCredentials = Object.freeze({username:'', password: ''});
  const [userLoginCredentials, setUserLoginCredentials] = React.useState(initialLoginCredentials);

  const onChangeHandler = (e) => {
    setUserLoginCredentials({...userLoginCredentials, [e.target.name]: e.target.value});
  }

  const loginRequestHandler = (e) =>{
    e.preventDefault();
    authFetch
      .post(`/api/token/`, userLoginCredentials)
      .then((response) =>{
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        authFetch.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');

        useAuthStatus.loginStatusChangeHandler();
        const currentUserAccessToken = localStorage.getItem('access_token') ? localStorage.getItem('access_token') :  '';
        const currentUserID = parseJwt(currentUserAccessToken)?.user_id;

        // navigate(`/my-profile/${currentUserID}`);
        navigate('/');
      })
      .catch((error) =>{
        const msg = "Wrong credentials! Try again please!"
        enqueueSnackbar(msg, {variant: 'warning'})
      })
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <div className="login-register">
              <div className="login-register-form">
              <div>
                  <h4 className="text-center">
                   <User className="user-icon" />
                  </h4>
                </div>
                <h4 className="text-center">Login</h4>
                <form className="row gy-2" onSubmit={(e) => loginRequestHandler(e)}>
                  <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="username"
                      onChange={onChangeHandler}
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="inputPassword4" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      name="password"
                      onChange={onChangeHandler}
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn submit-button mt-3">
                      Login
                    </button>
                  </div>
                </form>
                <p className="pt-2">
                  Don't have account?<Link to="/register"> Register</Link> here
                  <Link to="/forgot/password"> Forgot password?</Link>
                </p>
              </div>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Login;
