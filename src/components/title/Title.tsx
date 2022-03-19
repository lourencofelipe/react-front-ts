import styled from 'styled-components';

const TitleStyled = styled.h1`
    font-family: roboto;
    font-weight: 500;
    color: #ffffff;
    
`

type TitleProps = {
    children: string;
}

export const Title = ({ children}: TitleProps) => (
    <TitleStyled>{ children }</TitleStyled>
)