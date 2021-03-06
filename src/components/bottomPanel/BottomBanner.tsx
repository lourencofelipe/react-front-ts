import styled from 'styled-components';

export const BottomBanner = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`