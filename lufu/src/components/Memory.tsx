// Memory.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Memory: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Détails du souvenir</h2>
      <div>Numéro de l'ID : {id}</div>
    </div>
  );
};

export default Memory;
