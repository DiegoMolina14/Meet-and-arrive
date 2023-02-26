
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Buttom from "../atoms/Buttom";
import FormHeader from "../molecules/FormHeader";
import "../../assets/style/estiloLogin.css";
function FormRegistro() {
    return (
        <>
        <FormHeader/>
        <div id="container">
            <div className="form-box">
               <form className="c-form">
                        <Title>Register</Title>      
                        <WrapperInput
                        msn="Firts name and last name"
                        type="text"
                        placeholder="Firts name and last name" />
                        <WrapperInput
                        msn="E-mail address"
                        type="email"
                        placeholder="E-mail address" />
                        <WrapperInput
                        msn="Cel. number"
                        type="tel"
                        placeholder="Cel. number" />
                        <WrapperInput
                        msn="Write Password"
                        type="password"
                        placeholder="Write Password" />
                        <Buttom>Register</Buttom>
                    <div className="pie-form">

                    </div>
                </form>
            </div>
            
        </div>
        </>

     );
}
export default FormRegistro;