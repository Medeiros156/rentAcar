
function Register() {
    return (
        <>
            <section className="register-page">

                <div className="register-div__form">
                    <form>
                        <h3>Register</h3>

                        <label>
                            Nome:
                        </label>
                        <input type="text" placeholder="Nome"></input>
                        <label>
                            Email:
                        </label>
                        <input type="email" placeholder="youremail@example.com"></input>
                        <label>
                            Senha:
                        </label>
                        <input type="password" placeholder='password'></input>


                        <button type="submit">
                            Register
                        </button>
                    </form>
                </div>

            </section>
        </>
    );
}

export default Register;
