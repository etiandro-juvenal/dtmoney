import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: auto;
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    button{
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0; //Retirando a borda padrão
        padding: 0 2rem; //Epacamento entre as letras e a caixa button
        border-radius: 0.25rem; // Aredondando os cantos
        height: 3rem;

        transition: filter 0.2s; // Manipuladndo o tempo e a suavidade do brightness

        &:hover{
            filter: brightness(0.9);
        }
    }
`