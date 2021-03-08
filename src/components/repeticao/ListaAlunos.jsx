import alunos from "../../data/alunos";

const alunosLI = alunos.map((aluno) => {
  return (
    <li key={aluno.id}>
      {aluno.id} {aluno.nome} - {aluno.nota}
    </li>
  );
});

const ListaAlunos = (props) => {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{alunosLI}</ul>
    </div>
  );
};

export default ListaAlunos;
