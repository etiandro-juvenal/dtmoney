import { Container } from "./style";

export function TransationTable(){
   return(
    <Container>
        <table>
            <thead>
                <tr>
                <th>Título</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Desenvolvimeto de Web Site</td>
                    <td className="deposit">Akz 120.000</td>
                    <td>Desenvolvimento</td>
                    <td>20-08-2023</td>
                </tr>
                <tr>
                    <td>Aluguel</td>
                    <td className="withdraw"> - Akz 120.000</td>
                    <td>renda</td>
                    <td>20-07-2023</td>
                </tr>
            </tbody>
        </table>
    </Container>
    );
}