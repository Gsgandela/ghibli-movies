// src/componentes/CartaoFilme.tsx
import React from 'react';
import { Filme } from '../Tipos/Filmes';

interface Props {
  filme: Filme;
}

const CartaoFilme: React.FC<Props> = ({ filme }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-xl font-bold">{filme.title}</h2>
      <p className="text-sm text-gray-500">Diretor: {filme.director}</p>
      <p className="text-sm text-gray-500">Ano: {filme.release_date}</p>
      <p className="mt-2 text-gray-700 text-sm">{filme.description}</p>
    </div>
  );
};

export default CartaoFilme;
