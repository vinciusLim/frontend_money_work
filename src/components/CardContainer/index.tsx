// src/components/CardContainer/index.tsx
import { Card } from "../Card";

export function CardContainer(){
    // Estes são os valores que você quer exibir nas suas cards, baseados na sua imagem.
    const incomeValue = 17400; // Valor de entradas
    const outcomeValue = 1259; // Valor de saídas
    const totalValue = incomeValue - outcomeValue; // Cálculo do total

    return (
        <div className="flex justify-between">
          {/* Card de Entradas */}
          <Card title="Entradas" value={incomeValue} type="income" />
          {/* Card de Saídas - Corrigido o título e o valor */}
          <Card title="Saídas" value={outcomeValue} type="outcome" />
          {/* Card de Total - Corrigido o título e o valor */}
          <Card title="Total" value={totalValue} type="total" />
        </div>
    )
}