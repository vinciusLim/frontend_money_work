import { BodyContainer } from "@/components/BodyContainer";
import { CardContainer } from "@/components/CardContainer";
import { Header } from "@/components/Header";
import { TransactionsTable } from "@/components/TransactionsTable";
import { NewTransactionModal } from "@/components/NewTransactionModal";

export default function Home() {
  return (
    <NewTransactionModal>
      <div>
        <Header />
        <BodyContainer>
          <CardContainer />
          <TransactionsTable />
        </BodyContainer>
      </div>
    </NewTransactionModal>
  );
}