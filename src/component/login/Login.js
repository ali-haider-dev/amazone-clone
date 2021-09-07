import React, { useState } from 'react'
import "./Login.css"
import { useHistory } from 'react-router'
import { Link } from "react-router-dom"
import { auth } from "../../config/firebase"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const LogIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(function (response) {
                history.push("/")
            })
            .catch(function (error) {
                alert(error.message)
            });
    }

    const signUp = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(function (response) {
                history.push('/')
            })
            .catch(function (error) {
                alert(error.message)
            });
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Signin</h1>
                <form className="login__form">
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" />
                    <button type="button" onClick={LogIn}>Sign In</button>
                </form>
                <strong>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</strong>
                <button onClick={signUp}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
