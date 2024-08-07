const prompt = require("prompt-sync")();

const professor = require("./professor.js");
const matéria = require("./matéria.js");
const sala = require("./sala.js");

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  professor.index();
  const id_professor = prompt("ID do(a) professor(a): ");

  matéria.index();
  const id_matéria = prompt("ID da matéria: ");

  sala.index();
  const id_sala = parseInt(prompt("ID da sala: "));

  if (
    professor.show(id_professor) &&
    matéria.show(id_matéria) &&
    sala.show(id_sala)
  ) {
    return {
      id,
      id_professor,
      id_matéria,
      id_sala,
    };
  }

  console.log("Dados inválidos");
};

const store = () => {
  const novo = model();

  if (novo) {
    db.push(novo);

    console.log("Registro concluido com sucesso!");
  }
};

const index = () => {
  if (db.length == 0) {
    console.log("Nenhum registro encontrado.");
    return false;
  }

  db.forEach((el) => console.log(el));
  return true;
};

const show = (id) => db.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = model(id);

      if (novo) {
        db[indice] = novo;
        console.log("Registro atualizado com sucesso.");
      }
    } else {
      console.log("Registro não encontrado");
    }
  }
};

const destroy = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      db.splice(indice, 1);
      console.log("Registro excluído com sucesso");
    } else {
      console.log("Registro não encontrado");
    }
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
