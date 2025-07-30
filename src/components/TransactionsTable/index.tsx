// components/TransactionsTable/index.tsx
interface ITransaction {
  description: string;
  price: string;
  category: string;
  date: string;
}

export function TransactionsTable() {
  const transactions: ITransaction[] = [
    {
      description: "Desenvolvimento de site",
      price: "R$ 12.000,00",
      category: "Venda",
      date: "13/04/2021"
    },
    {
      description: "Hamburguer",
      price: "- R$ 58,00",
      category: "Alimentação",
      date: "10/04/2021"
    },
    {
      description: "Aluguel do apartamento",
      price: "- R$ 1.200,00",
      category: "Casa",
      date: "27/03/2021"
    },
    {
      description: "Computador",
      price: "R$ 5.400,00",
      category: "Venda",
      date: "15/03/2021"
    }
  ];

  return (
    <div className="mt-10 mb-8">
      <table className="w-full border-separate border-spacing-y-4">
        <thead>
          <tr className="text-left text-[#969CB3]"> 
            <th className="pb-4 font-normal">Título</th>
            <th className="pb-4 font-normal">Preço</th>
            <th className="pb-4 font-normal">Categoria</th>
            <th className="pb-4 font-normal">Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="bg-white rounded-md shadow-sm">
              <td className="py-5 px-8 rounded-l-md text-[#363F5F] font-medium"> 
                {transaction.description}
              </td>
              <td className={`py-5 px-8 font-medium ${
                transaction.price.startsWith("-") 
                  ? "text-[#E52E4D]" /* Vermelho para saídas */
                  : "text-[#12A454]" /* Verde para entradas */
              }`}>
                {transaction.price}
              </td>
              <td className="py-5 px-8 text-[#969CB3]"> {/* Cor cinza */}
                {transaction.category}
              </td>
              <td className="py-5 px-8 rounded-r-md text-[#969CB3]"> {/* Cor cinza */}
                {transaction.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}