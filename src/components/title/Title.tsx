import styled from 'styled-components';

const TitleStyled = styled.h1`
    font-family: roboto;
    font-weight: 700;
    color: white;
`

type TitleProps = {
    children: string;
}

export const Title = ({ children}: TitleProps) => (
    <TitleStyled>{ children }</TitleStyled>
)