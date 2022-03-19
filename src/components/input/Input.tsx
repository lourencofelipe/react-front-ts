import styled from 'styled-components';

const InputStyled = styled.input`
    width: 65%;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 10px;
    border-radius: 4px;
    border: none;

    ::placeholder {
    font-family: roboto;
    font-weight: 400;
    color: #ededed;
    font-size: 18px;
    }
`

type InputProps = {
    onChange?: (value: any) => void;
    value?: string; 
    placeholder?: string;
    type?: 'radio' | 'checkbox';
}

export const Input = ({value, onChange, placeholder, type }: InputProps ) => (
    <InputStyled type={type} placeholder={placeholder} value={value} onChange={onChange}></InputStyled>
)