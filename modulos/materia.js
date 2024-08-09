const prompt = require("prompt-sync")();

const curso = require("./curso.js");

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  const nome = prompt("Digite o nome da matéria: ");
  const horas_totais = parseInt(
    prompt("Digite a quantidade de horas totais: ")
  );

  let id_curso = 0;
  if (curso.index()) {
    id_curso = parseInt(prompt("ID do curso: "));
  } else {
    console.log("Cadastre um 'Curso' para inserir uma matéria.");
  }

  if (nome != "" && horas_totais > 0 && curso.show(id_curso)) {
    return {
      id,
      nome,
      horas_totais,
      id_curso,
    };
  }

  console.log("Dados inválidos.");
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
      console.log("Registro não encontrado.");
    }
  }
};

const destroy = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      db.splice(indice, 1);
      console.log("Registro excluído com sucesso.");
    } else {
      console.log("Registro não encontrado.");
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
