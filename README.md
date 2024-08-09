# Gerenciamento de Faculdade

Este projeto é um sistema básico de gerenciamento para uma faculdade, permitindo o controle de informações relacionadas a turnos, cursos, matérias, alunos, professores, salas, aulas e o vínculo entre alunos e aulas. O sistema é baseado em Node.js e utiliza o pacote `prompt-sync` para interações com o usuário via linha de comando.

## Estrutura do Projeto

O projeto é composto por diversos módulos, cada um responsável por um aspecto específico do gerenciamento acadêmico. Cada módulo segue uma estrutura CRUD (Create, Read, Update, Delete). Abaixo está uma visão geral dos módulos e suas funções.

### Módulos

1. **Turno (`./modulos/turno.js`)**
   - Gerencia os turnos (matutino, vespertino, noturno) oferecidos pela faculdade.
   - Funções:
     - `store()`: Cadastra um novo turno.
     - `index()`: Lista todos os turnos.
     - `show(id)`: Mostra um turno específico pelo ID.
     - `update()`: Atualiza um turno existente.
     - `destroy()`: Exclui um turno.

2. **Curso (`./modulos/curso.js`)**
   - Gerencia os cursos oferecidos pela faculdade, associando-os a turnos.
   - Funções:
     - `store()`: Cadastra um novo curso.
     - `index()`: Lista todos os cursos.
     - `show(id)`: Mostra um curso específico pelo ID.
     - `update()`: Atualiza um curso existente.
     - `destroy()`: Exclui um curso.

3. **Matéria (`./modulos/materia.js`)**
   - Gerencia as matérias oferecidas pela faculdade, associando-as a cursos.
   - Funções:
     - `store()`: Cadastra uma nova matéria.
     - `index()`: Lista todas as matérias.
     - `show(id)`: Mostra uma matéria específica pelo ID.
     - `update()`: Atualiza uma matéria existente.
     - `destroy()`: Exclui uma matéria.

4. **Aluno (`./modulos/aluno.js`)**
   - Gerencia os alunos matriculados na faculdade.
   - Funções:
     - `store()`: Cadastra um novo aluno.
     - `index()`: Lista todos os alunos.
     - `show(id)`: Mostra um aluno específico pelo ID.
     - `update()`: Atualiza um aluno existente.
     - `destroy()`: Exclui um aluno.

5. **Professor (`./modulos/professor.js`)**
   - Gerencia os professores da faculdade.
   - Funções:
     - `store()`: Cadastra um novo professor.
     - `index()`: Lista todos os professores.
     - `show(id)`: Mostra um professor específico pelo ID.
     - `update()`: Atualiza um professor existente.
     - `destroy()`: Exclui um professor.

6. **Sala (`./modulos/sala.js`)**
   - Gerencia as salas de aula da faculdade.
   - Funções:
     - `store()`: Cadastra uma nova sala.
     - `index()`: Lista todas as salas.
     - `show(id)`: Mostra uma sala específica pelo ID.
     - `update()`: Atualiza uma sala existente.
     - `destroy()`: Exclui uma sala.

7. **Aula (`./modulos/aula.js`)**
   - Gerencia as aulas, associando professores, matérias e salas.
   - Funções:
     - `store()`: Cadastra uma nova aula.
     - `index()`: Lista todas as aulas.
     - `show(id)`: Mostra uma aula específica pelo ID.
     - `update()`: Atualiza uma aula existente.
     - `destroy()`: Exclui uma aula.

8. **Aluno_Aula (`./modulos/aluno_aula.js`)**
   - Gerencia a associação entre alunos e aulas.
   - Funções:
     - `store()`: Cadastra a matrícula de um aluno em uma aula.
     - `index()`: Lista todas as associações de alunos com aulas.
     - `show(id)`: Mostra uma associação específica pelo ID.
     - `update()`: Atualiza uma associação existente.
     - `destroy()`: Exclui uma associação.

### Arquivo Principal

- **`./index.js`**
  - Este é o arquivo principal que inicializa o sistema e fornece um menu interativo para o gerenciamento de todos os módulos.

### Requisitos

- Node.js (v14 ou superior)
- `prompt-sync` (instalado via `npm`)

### Como Executar

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   ```

2. Navegue para o diretório do projeto:
   ```bash
   cd <NOME_DO_DIRETÓRIO>
   ```

3. Instale as dependências:
   ```bash
   npm install prompt-sync
   ```

4. Execute o arquivo principal:
   ```bash
   node index.js
   ```

### Contribuindo

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Faça um fork do repositório, crie uma branch para suas mudanças e envie um pull request.
