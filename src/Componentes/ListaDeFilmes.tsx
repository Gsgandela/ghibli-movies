import React from "react";
import "../Styles/ListaDeFilmes.css";

const ListaFilmes = ({ filmes }) => {
  return (
    <div className="galeria">
      {filmes.map((filme) => (
        <div key={filme.id} className="card">
          <img src={filme.image} alt={filme.title} className="card-img" />
          <div className="card-content">
            <h2>{filme.title}</h2>
            <p><strong>Ano:</strong> {filme.release_date}</p>
            <p><strong>Duração:</strong> {filme.running_time} min</p>
            <p><strong>Diretor:</strong> {filme.director}</p>
            <p><strong>Produtor:</strong> {filme.producer}</p>
            <p><strong>Nota:</strong> {filme.rt_score}</p>
            <div className="botoes">
              <button>Marcar Assistido</button>
              <button>Favoritar</button>
              <button>Anotações</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaFilmes;
