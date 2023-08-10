import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // DA no mesmo... 1fr 1fr 1fr;
    gap: 2rem; //Espacamento entre cada item do grid.
    margin-top: -10rem;

    //Estilizando toda a div do container (Encadeamento por cascata);
    div{
        background: var(--shape);
        padding: 1.5rem 2rem; // Cima e baixo e Laterais
        border-radius: 0.25rem;
        color: var(--text-tile);
    
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background{
            background: var(--green);
            color: #FFF;
        }
    }
`