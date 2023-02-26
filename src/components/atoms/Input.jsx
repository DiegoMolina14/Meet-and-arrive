import styled from 'styled-components';

const StyledInput = styled.input`

    width: 373.16px;
    padding: 15px 15px;
    border: 1px solid #3d3935;
    border-radius: 7px;
    background-color: #fff;
    color: #3d3935;
    outline: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    
`;

function Input({type, placeholder}){
    return(
        <StyledInput type={type} placeholder={placeholder}/>
    )
}

export default Input;
