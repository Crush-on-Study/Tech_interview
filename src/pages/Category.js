import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { name } = useParams();

  return (
    <div>
      <h2>{name}</h2>
      <p>Here will be the content for {name}.</p>
    </div>
  );
}

export default Category;
