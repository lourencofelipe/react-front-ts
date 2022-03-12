import styled from 'styled-components';

const PageButtonStyled = styled.a`

    font-family: roboto;
    font-weight: 400;
    color: white;

    > a:hover, > a:active, > a:focus {
        color: #C57ED3;
        border: 1px solid #C57ED3;
    }
`

type PageButtonProps = {
    href: string;
    children: string;
}

export const PageButton = ({ href, children }: PageButtonProps) => (
    <PageButtonStyled href={href}> { children }</PageButtonStyled>
)
    