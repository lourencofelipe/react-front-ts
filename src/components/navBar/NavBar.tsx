import styled from 'styled-components';

 const NavBarStyled = styled.nav`
    background: rgb(100 82 82 / 21%);
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    /* Smartphone - portrait  */
    @media screen and (max-width: 480px) {

        flex-direction: column;
        justify-content: center;
        padding-top: 0px;
        padding-bottom: 0px;
    }
    
`
type NavProps = {
    children: JSX.Element | JSX.Element[];
}

export const NavBar = ({children }: NavProps) => (
    <NavBarStyled>{ children }</NavBarStyled>
)