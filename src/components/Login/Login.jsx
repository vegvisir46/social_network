import React from "react";
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} action="">
        <div className="div">
            <Field component="input" name={"login"} type="text" placeholder={"Login"}/>
        </div>
        <div className="div">
            <Field component="input" name={"password"} type="text" placeholder={"Password"}/>
        </div>
        <div className="div">
            <Field component="input" name={"rememberMe"} type="checkbox"/> Remember me
        </div>
        <div className="div">
            <button>Go in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        authAPI.login(formData.login, formData.password, formData.rememberMe)
    }

    return <div className={s.loginForm}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;