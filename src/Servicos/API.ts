export const buscarFilmes = async () => {
    const resposta = await fetch('https://ghibliapi.vercel.app/films');
    return await resposta.json();
  };
  