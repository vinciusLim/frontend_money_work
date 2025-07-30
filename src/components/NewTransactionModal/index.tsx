'use client';

import { useState, createContext, useContext, ReactNode } from 'react';
import Modal from 'react-modal';

interface TransactionsContextType {
  onOpenNewTransactionModal: () => void;
}

export const TransactionsContext = createContext<TransactionsContextType | undefined>(undefined);

export function useTransactions() {
  const context = useContext(TransactionsContext);
  if (context === undefined) {
    throw new Error('useTransactions must be used within a NewTransactionModalProvider');
  }
  return context;
}

interface NewTransactionModalProps {
  children: ReactNode;
}

if (typeof window !== 'undefined') {
  Modal.setAppElement('body');
}

export function NewTransactionModal({ children }: NewTransactionModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsOpen(false);
  }

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState<'income' | 'outcome'>('income');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log({ name, price, category, type });

    setName('');
    setPrice('');
    setCategory('');
    setType('income');
    handleCloseNewTransactionModal();
  }

  return (
    <TransactionsContext.Provider value={{ onOpenNewTransactionModal: handleOpenNewTransactionModal }}>
      {children}

      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseNewTransactionModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-overlay"
        className="bg-white p-8 rounded-md w-full max-w-md modal-content"
      >
        <button
          type="button"
          onClick={handleCloseNewTransactionModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-title mb-6">Cadastrar transação</h2>

          <div className="space-y-4">
            <input
              placeholder="Nome"
              className="w-full p-4 rounded-md border border-gray-300 bg-gray-100 text-gray-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Preço"
              className="w-full p-4 rounded-md border border-gray-300 bg-gray-100 text-gray-700"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className={`py-4 rounded-md border border-gray-300 flex items-center justify-center gap-2 ${
                  type === 'income' ? 'bg-green-100 border-green-500 text-green-700' : 'bg-gray-100 text-gray-500'
                } hover:opacity-80`}
                onClick={() => setType('income')}
              >
                <span>Entrada</span>
              </button>

              <button
                type="button"
                className={`py-4 rounded-md border border-gray-300 flex items-center justify-center gap-2 ${
                  type === 'outcome' ? 'bg-red-100 border-red-500 text-red-700' : 'bg-gray-100 text-gray-500'
                } hover:opacity-80`}
                onClick={() => setType('outcome')}
              >
                <span>Saída</span>
              </button>
            </div>

            <input
              placeholder="Categoria"
              className="w-full p-4 rounded-md border border-gray-300 bg-gray-100 text-gray-700"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-[#33CC95] text-white py-4 rounded-md mt-4 hover:opacity-90"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </Modal>
    </TransactionsContext.Provider>
  );
}