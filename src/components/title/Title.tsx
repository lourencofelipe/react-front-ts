import styled from 'styled-components';

const TitleStyled = styled.h1`
    font-family: roboto;
    font-weight: 500;
    font-size: 38px;
    color: #ffffff;
    
`

type TitleProps = {
    children: string;
    style?: React.CSSProperties; 
}

export const Title = ({ children, style} : TitleProps) => (
    <TitleStyled style={style}>{ children }</TitleStyled>
)