const LIST = [
  {
    id: 1,
    name: "Yoda",
    image: "images/yoda.png",
    alt: "Imagem do Mestre Yoda",
  },
  {
    id: 2,
    name: "Luke Skywalker",
    image: "images/luke.png",
    alt: "Imagem do Luke Skywalker",
  },
  {
    id: 3,
    name: "Princesa Leia",
    image: "images/leia.png",
    alt: "Imagem da Princesa Leia",
  },
  {
    id: 4,
    name: "Hans Solo",
    image: "images/hansolo.png",
    alt: "Imagem do Hans Solo",
  },
  {
    id: 5,
    name: "Darth Vader",
    image: "images/vader.png",
    alt: "Imagem do Darth Vader",
  },
  {
    id: 6,
    name: "Chewbacca",
    image: "images/chewbacca.png",
    alt: "Imagem do Chewbacca",
  },
  {
    id: 7,
    name: "r2-D2",
    image: "images/r2d2.png",
    alt: "Imagem do r2-D2",
  },
  {
    id: 8,
    name: "c-3PO",
    image: "images/c3po.png",
    alt: "Imagem do c-3PO",
  },
];

const App = new Vue({
  el: "#app", // ID do elemento HTML onde a instância Vue será montada - elemento base da aplicação
  data: {
    title: "Star Wars Lego", // Título da aplicação
    userName: "Rodrigo Paulo Bauernfeind",
    characters: LIST,
    searchName: "", // Nome do personagem a ser buscado
  },
  methods: {
    like(userName) {
      alert(`O personagem ${userName} recebeu um like!`); // Exibe um alerta quando o botão "LIKE" é clicado
    },

    remove(id) {
      const list = this.characters;

      const result = list.filter((item) => {
        return item.id !== id;
      });
      this.characters = result;
    },

    search() {
      // Se o campo estiver vazio, avisa e reseta a lista completa
      if (this.searchName.trim() === "") {
        alert("O campo de busca é obrigatório.");
      }

      // Use a lista original para filtrar
      const list = (this.characters = LIST);

      const result = list.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(this.searchName.trim().toLowerCase());
      });

      if (result.length <= 0) {
        alert("Nenhum personagem encontrado.");
      } else {
        this.characters = result;
      }
    },
  },
});
