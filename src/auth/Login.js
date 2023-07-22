import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from '../actions/userActions';
import "./estilosAuth.css";



export const Login = () => {
    const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            await loginWithRedirect();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (isAuthenticated && user) {
            dispatch(login(user));
        }
    }, [isAuthenticated, user, dispatch]);

    if (isLoading) {
        return (
            <main id="cargando">
                <img src="https://media.tenor.com/dNe--afQtEgAAAAM/charging-brown.gif" alt="imagen_cargando"></img>
                <h5>Cargando...</h5>
            </main>
        )
    }

    return (
        <main id="cuerpo_login">
            <div class="row">
                <div id="login" class="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                    col-12">
                    <h2 class="text-center" id="titulo_login">Bienvenido</h2>
                    <img class="img-fluid mx-auto d-block rounded"
                        src='https://previews.123rf.com/images/prettyvectors/prettyvectors1702/prettyvectors170200066/72111270-caracteres-de-mujeres-de-celebridades-y-periodistas-ilustraci%C3%B3n-de-dibujos-animados-plano-de.jpg' alt='Celebridad' />
                    <br></br>
                    <h3> <strong>LOGIN</strong></h3>
                    <br></br>
                    <button type="button" class="btn btn-dark" id="boton_login" onClick={handleLogin}>Iniciar Sesión</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            {/* <section>
                <h1 id="titulo_login">Bienvenido</h1>
            </section> */}
        </main>
    );
}

// export default Login