import React from "react";
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} action="">
        <div className="div">
            <Field component={Input} name={"email"} type="text"
                   validate={[required]} placeholder={"Email"}/>
        </div>
        <div className="div">
            <Field component={Input} name={"password"} type="text"
                   validate={[required]} placeholder={"Password"}/>
        </div>
        <div className="div">
            {/* МЕНЯТЬ НА ПЕРЕМЕННУЮ ИЛИ НЕТ */}
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
        props.login(formData.email, formData.password, formData.rememberMe);
        // authAPI.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div className={s.loginForm}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);