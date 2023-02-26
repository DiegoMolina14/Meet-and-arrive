import { Link } from "react-router-dom";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Buttom from "../atoms/Buttom";
import FormHeader from "../molecules/FormHeader";
import "../../assets/style/estiloLogin.css";
function FormLogin() {
    return (
        <>
        <FormHeader/>
        <div id="container">
            <div className="form-box">
               <form className="c-form">
                        <Title>LOGIN</Title>      
                        <WrapperInput
                        msn="Username"
                        type="text"
                        placeholder="Write username" />
                        <WrapperInput
                        msn="Password"
                        type="password"
                        placeholder="Write Password" />
                        <Buttom onclick>Login</Buttom>
                    <div className="pie-form">
                        <Link className="linked" to="/FormRegistro">¿No tienes Cuenta? Registrate</Link> 
                        <Link className="linked" to="../../pages/Login">¿Olvidaste tu contraseña? Recuperar</Link>      
                    </div>
                </form>
            </div>
            
        </div>
        </>

     );
}

export default FormLogin;