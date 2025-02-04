const Login = () => {


    
    return(
        <>
            <div className="flex flex-col">
                <h1>Connectez-vous :</h1>
                    <form method="post" action="" className="flex-col">
                    <label  htmlFor="username">E-mail</label>
                    <input  type="text" name="username" id="username"/>
                    <label  htmlFor="password">Mot de passe</label>
                    <input  type="password" name="password" id="password"/>
                    <input  type="submit" value="Connexion"/>
                    <p>Pas encore de compte ? <a href="/signup">Inscrivez-vous</a></p>
                </form>
            </div>
        </>
    )
}

export default Login