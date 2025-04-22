import React, { useEffect, useState } from "react";
import ListaFilmes from "../Componentes/ListaDeFilmes";
import "../Styles/Index.css"
import "../Styles/Header.css"

const Inicio = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((res) => res.json())
      .then((data) => setFilmes(data));
  }, []);

  return (
    <main>
         <header className="cabecalho">
        <h1>Filmes do Studio Ghibli</h1>
      </header>
      <ListaFilmes filmes={filmes} />
    </main>
  );
};

export default Inicio;
