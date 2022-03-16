import styled from 'styled-components';

const TitleStyled = styled.h1`
    font-family: roboto;
    font-weight: 400;

    @media screen and (max-width: 480px) {
        margin-left: 20px;
    }
    
`

type TitleProps = {
    children: string;
}

export const Title = ({ children}: TitleProps) => (
    <TitleStyled>{ children }</TitleStyled>
)