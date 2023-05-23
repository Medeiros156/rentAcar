

function Login() {
    return (
        <>
            <section className="login-page">

                <div className="login-div__form">
                    <form>
                        <h3>Login</h3>

                        <label>
                            Email:
                        </label>
                        <input type="email" placeholder="youremail@example.com"></input>
                        <label>
                            Senha:
                        </label>
                        <input type="password" placeholder='password'></input>


                        <button type="submit">
                            Login
                        </button>
                        <a href="/home" >Esqueceu sua senha?</a>
                    </form>
                </div>

            </section>
        </>
    );
}

export default Login;
