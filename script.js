const numero = "5511987779277"; // seu WhatsApp

const musicas = [
  "10000 Maniacs - Because The Night",
  "Adele - Rolling In The Deep",
  "Amy Winehouse - Valerie",
  "Coldplay - Yellow",
  "Legião Urbana – Quase Sem Querer"
];

const container = document.getElementById("list");

musicas.sort().forEach(musica => {
  const link = document.createElement("a");

  const mensagem = `Chris, pode tocar ${musica}?`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  link.href = url;
  link.innerText = musica;
  link.target = "_blank";

  link.style.display = "block";
  link.style.margin = "10px";

  container.appendChild(link);
});
