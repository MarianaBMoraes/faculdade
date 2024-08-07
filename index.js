const prompt = require("prompt-sync")();

const turno = require("./modulos/turno.js");
const curso = require("./modulos/curso.js");
const materia = require("./modulos/materia.js");
const aluno = require("./modulos/aluno.js");
const professor = require("./modulos/professor.js");
const sala = require("./modulos/sala.js");
const aula = require("./modulos/aula.js");
const aluno_aula = require("./modulos/aluno_aula.js");

console.log(`--- GERENCIAMENTO FACULDADE ---`);

const menuPrincipal = () => {
  while (true) {
    console.log(`ESCOLHA O MÓDULO QUE QUER GERENCIAR:
    
    1 - TURNO
    2 - curso
    3 - materia
    4 - aluno
    5 - professor
    6 - SALA
    0 - SAIR
    `);

    const opcaoModulo = parseInt(prompt(": "));

    switch (opcaoModulo) {
      case 1:
        menuTurno();
        break;
      case 2:
        menuCurso();
        break;
      case 3:
        menuMateria();
        break;
      case 4:
        menuAluno();
        break;
      case 5:
        menuProfessor();
        break;
      case 0:
        process.exit();
      default:
        console.log("OPÇÃO INVÁLIDA.");
        break;
    }
  }
};

const menuTurno = () => {
  console.log("GERENCIAMENTO DE TURNO");
  while (true) {
    console.log(`ESCOLHA O MÓDULO QUE QUER GERENCIAR:
  
              1 - CADASTRAR 
              2 - LISTAR
              3 - ATUALIZAR 
              4 - EXCLUIR 
              0 - SAIR
              `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        turno.store();
        break;
      case 2:
        turno.index();
        break;
      case 3:
        turno.update();
        break;
      case 4:
        turno.destroy();
        break;
      case 0:
        return;

      default:
        console.log("Opção inválida.");
        break;
    }
  }
};

const menuCurso = () => {
  console.log("GERENCIAMENTO DE CURSO");
  while (true) {
    console.log(`ESCOLHA O MÓDULO QUE QUER GERENCIAR:
  
              1 - CADASTRAR 
              2 - LISTAR
              3 - ATUALIZAR
              4 - EXCLUIR 
              0 - SAIR
              `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        curso.store();
        break;
      case 2:
        curso.index();
        break;
      case 3:
        curso.update();
        break;
      case 4:
        curso.destroy();
        break;
      case 0:
        return;

      default:
        console.log("Opção inválida.");
        break;
    }
  }
};

const menuMateria = () => {
  console.log("GERENCIAMENTO DE MATERIA");
  while (true) {
    console.log(`ESCOLHA O MÓDULO QUE QUER GERENCIAR:
  
              1 - CADASTRAR 
              2 - LISTAR
              3 - ATUALIZAR
              4 - EXCLUIR 
              0 - SAIR
              `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        materia.store();
        break;
      case 2:
        materia.index();
        break;
      case 3:
        materia.update();
        break;
      case 4:
        materia.destroy();
        break;
      case 0:
        return;

      default:
        console.log("Opção inválida.");
        break;
    }
  }
};

const menuAluno = () => {
  console.log("GERENCIAMENTO DE ALUNOS(AS)");
  while (true) {
    console.log(`ESCOLHA O MÓDULO QUE QUER GERENCIAR:
  
              1 - CADASTRAR 
              2 - LISTAR
              3 - ATUALIZAR 
              4 - EXCLUIR 
              0 - SAIR
              `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        aluno.store();
        break;
      case 2:
        aluno.index();
        break;
      case 3:
        aluno.update();
        break;
      case 4:
        aluno.destroy();
        break;
      case 0:
        return;

      default:
        console.log("Opção inválida.");
        break;
    }
  }
};

const menuProfessor = () => {
  console.log("GERENCIAMENTO DE PROFESSORES(AS)");
  while (true) {
    console.log(`ESCOLHA O MÓDULO QUE QUER GERENCIAR:
  
              1 - CADASTRAR 
              2 - LISTAR
              3 - ATUALIZAR 
              4 - EXCLUIR 
              0 - SAIR
              `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        professor.store();
        break;
      case 2:
        professor.index();
        break;
      case 3:
        professor.update();
        break;
      case 4:
        professor.destroy();
        break;
      case 0:
        return;

      default:
        console.log("Opção inválida.");
        break;
    }
  }
};

const menuSala = () => {
    console.log("GERENCIAMENTO DE SALAS");
    while (true) {
      console.log(`ESCOLHA O MÓDULO QUE QUER GERENCIAR:
    
                1 - CADASTRAR 
                2 - LISTAR
                3 - ATUALIZAR 
                4 - EXCLUIR 
                0 - SAIR
                `);
  
      const opcaoServico = parseInt(prompt(": "));
  
      switch (opcaoServico) {
        case 1:
          sala.store();
          break;
        case 2:
          sala.index();
          break;
        case 3:
          sala.update();
          break;
        case 4:
          sala.destroy();
          break;
        case 0:
          return;
  
        default:
          console.log("Opção inválida.");
          break;
      }
    }
  };

menuPrincipal();