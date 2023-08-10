import { Container } from "./sytle";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary(){
    return(
       <Container>
        <div>
            <header>
                <p>Entrada</p>
                <img src={incomeImg} alt="Entradas" />
            </header>
            <strong>Akz 1000,00</strong>
        </div>
        <div>
            <header>
                <p>Saída</p>
                <img src={outcomeImg} alt="Saídas" />
            </header>
            <strong>Akz 500,00</strong>
        </div>
        <div className="highlight-background">
            <header>
                <p>Total</p>
                <img src={totalImg} alt="Total" />
            </header>
            <strong>Akz 500,00</strong>
        </div>
       </Container>
    );
}