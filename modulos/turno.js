const prompt = require("prompt-sync")();

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  const nome = prompt("Digite o turno (matutino/vespertino/noturno): ");
  const inicio = prompt("Digite qual a data de início (dd/mm/aa): ");
  const termino = prompt("Digite qual a data de término (dd/mm/aa)");

  if (nome != "" && inicio != "" && termino != "") {
    return {
      id,
      nome,
      inicio,
      termino,
    };
  }

  console.log("Dados inválidos");
};

const store = () => {
  const novo = model();

  if (novo) {
    db.push(novo);

    console.log("Registro concluído com sucesso!");
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
