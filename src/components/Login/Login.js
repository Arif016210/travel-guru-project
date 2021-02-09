import React from 'react';
import './Login.css';
import google from '../../resources/Icon/google.png';
import Header from '../../components/Shared/Header/Header2';

const Login = () => {
    return (
        <section className="login">
            {/* Header 2 File Added from Shared Component */}
            <Header></Header>

            <div class="container container-login">
                <div class="login-section">
                    <h3>Login</h3>

                    <form>

                        <input type="text" name="UserName" placeholder="UserName or Email..." class="form-control" autocomplete="off" />

                        <input type="Password" name="Password" placeholder="Password" class="form-control" />

                        <div className="row">

                            <div className="col-md-6">
                                <input type="checkbox" name="" /> <span className="pl-1">Remember Me</span>
                            </div>

                            <div className="col-md-6 text-right ">
                                <p className=" text-warning">Forgot Password</p>
                            </div>

                        </div>

                        <button className="loginBtn form-control">Login</button>
                        <p className="text-center">Dont't have an account? <span className="text-warning">Create an account</span></p>

                    </form>
                </div>

                <p className="text-center mt-3">or</p>

                <div className="text-center">
                    <button className="googleBtn"> <img className="googleImg" src={google} alt="Google Icon" /> <span>Continue with Google</span></button>
                </div>

            </div>

        </section>
    );
};

export default Login;