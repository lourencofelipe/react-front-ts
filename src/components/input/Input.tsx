import styled from 'styled-components';

const InputStyled = styled.input`
    width: 75%;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 4px;
`

type InputProps = {
    onChange?: (value: any) => void;
    value?: string; 
}

export const Input = ({value, onChange }: InputProps ) => (
    <InputStyled value={value} onChange={onChange}></InputStyled>
)