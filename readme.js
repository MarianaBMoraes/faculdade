// ./modulos/turno.js
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

  console.log("Dados inválidos.");
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


// ./modulos/curso.js
const prompt = require("prompt-sync")();

const turno = require("./turno.js");

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  const nome = prompt("Digite o nome do curso: ");
  const horas_totais = parseInt(
    prompt("Digite a quantidade de horas totais: ")
  );

  let id_turno = 0;
  if (turno.index()) {
    id_turno = parseInt(prompt("ID do turno: "));
  } else {
    console.log("Cadastre um 'Turno' para inserir um curso.");
  }

  if (nome != "" && horas_totais > 0 && turno.show(id_turno)) {
    return {
      id,
      nome,
      horas_totais,
      id_turno,
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


// ./modulos/materia.js
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


// ./modulos/aluno.js
const prompt = require("prompt-sync")();

const curso = require("./curso.js");

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  const nome = prompt("Digite o nome da aluno(a): ");

  let id_curso = 0;
  if (curso.index()) {
    id_curso = parseInt(prompt("ID do curso: "));
  } else {
    console.log("Cadastre um 'Curso' para inserir um(a) aluno(a).");
  }

  if (nome != "" && curso.show(id_curso)) {
    return {
      id,
      nome,
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


// ./modulos/professor.js
const prompt = require("prompt-sync")();

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  const nome = prompt("Digite o nome do professor(a): ");

  if (nome != "") {
    return {
      id,
      nome,
    };
  }

  console.log("Dados inválidos.");
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


// ./modulos/sala.js
const prompt = require("prompt-sync")();

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  const numero = parseInt(prompt("Digite o número da sala: "));

  if (numero > 0) {
    return {
      id,
      numero,
    };
  }

  console.log("Dados inválidos.");
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


// ./modulos/aula.js
const prompt = require("prompt-sync")();

const professor = require("./professor.js");
const materia = require("./materia.js");
const sala = require("./sala.js");

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  professor.index();
  const id_professor = parseInt(prompt("ID do(a) professor(a): "));

  materia.index();
  const id_materia = parseInt(prompt("ID da matéria: "));

  sala.index();
  const id_sala = parseInt(prompt("ID da sala: "));

  if (
    professor.show(id_professor) &&
    materia.show(id_materia) &&
    sala.show(id_sala)
  ) {
    return {
      id,
      id_professor,
      id_materia,
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


// ./modulos/aluno_aula.js
const prompt = require("prompt-sync")();

const aula = require("./aula.js");
const aluno = require("./aluno.js");

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  aula.index();
  const id_aula = parseInt(prompt("ID do(a) aula(a): "));

  aluno.index();
  const id_aluno = parseInt(prompt("ID da matéria: "));

  if (aula.show(id_aula) && aluno.show(id_aluno)) {
    return {
      id,
      id_aula,
      id_aluno,
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


// ./index.js


