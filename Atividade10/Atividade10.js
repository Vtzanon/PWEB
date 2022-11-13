var Aluno1 = {
    ra: '0030482023037',
    nome: 'Vinicius Tadeu Zanon'
  }
  alert("RA: " + Aluno1.ra + "\nNome: " + Aluno1.nome);
  
  Aluno1.ra = '0030482023088';
  Aluno1.nome = 'Grace Kelli Almodovar Zanon';
  alert("RA: " + Aluno1.ra + "\nNome: " + Aluno1.nome);
  
  Aluno1['ra'] = '0030482023099';
  Aluno1['nome'] = 'Isis Pereira Zanon';
  alert("RA: " + Aluno1.ra + "\nNome: " + Aluno1.nome);
