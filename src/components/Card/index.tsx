// src/components/Card/index.tsx
import Image from "next/image";

export interface ICardProps {
 title: string;
 value: number; // O valor é um número
 type: "income" | "outcome" | "total";
}
export function Card({ title, type, value }:ICardProps){
  const cardBgColor = ["income", "outcome"].includes(type)
    ? "bg-white"
    : value >= 0
      ? "bg-income"
      : "bg-outcome";
   const cardIcon = type === "income"
     ? "/income.png"
     : type === "outcome"
       ? "/outcome.png"
       : "/total.png";
    const cardTextColor = type === "total"
        ? "text-white"
        : "text-title";

  // Função para formatar o número como moeda brasileira
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount);
  };

  return (
    <div className={`w-[352px] h-[136px] ${cardBgColor} rounded-md`}>
       <div className="flex items-center justify-between px-8 py-6">
        <span className={`text-[16px] ${cardTextColor}`}>{title}</span>
        <Image src={cardIcon} width={32} height={32} alt="Card Icon" />
       </div>
       {/* Aqui é onde o valor é exibido e formatado */}
       <span className={`px-8 pt-4 text-4xl ${cardTextColor}`}>
         {formatCurrency(value)}
       </span>
    </div>
  )
}