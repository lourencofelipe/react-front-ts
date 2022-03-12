import styled from 'styled-components';

 const NavBarStyled = styled.nav`
    width: 100%;
    background: rgba(255, 255, 255, 0.3);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`
type NavProps = {
    children: JSX.Element | JSX.Element[];
}

export const NavBar = ({children }: NavProps) => (
    <NavBarStyled>{ children }</NavBarStyled>
)