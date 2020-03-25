const express = require('express')
const app = express()
const port = 3000;
const mysql = require('mysql2');


app.listen(port, () => {

  class Cliente {
    constructor(id, nome, sobrenome, email, cpf) {
      this.id = id;
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.email = email;
      this.cpf = cpf;
    }
  }

  class Fornecedor {
    constructor(id, nome, email, cnpj, nomeFantasia) {
      this.id = id;
      this.nome = nome;
      this.email = email;
      this.cnpj = cnpj;
      this.nomeFantasia = this.nomeFantasia;
    }
  }

  class Endereco {
    constructor(id, cep, rua, numero, bairro, cidade, uf, idCliente, idFornecedor) {
      this.id = id;
      this.cep = cep;
      this.rua = rua;
      this.numero = numero;
      this.bairro = bairro;
      this.cidade = cidade;
      this.uf = uf;
      this.idCliente = idCliente;
      this.idFornecedor = idFornecedor;
    }
  }

  class Telefone {
    constructor(ddi, ddd, numero, idCliente, idFornecedor) {
      this.ddi = 55;
      this.ddi = ddi;
      this.ddd = ddd;
      this.numero = numero;
      this.idCliente = idCliente;
      this.idFornecedor = idFornecedor;
    }
  }

  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "petshop"
  }
  );
  console.log('Initialized..');

  const listarClientes = () => connection.query(
    'SELECT * FROM CLIENTE', (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
    }
  );

  const listarFornecedores = () => connection.query(
    'SELECT * FROM FORNECEDOR', (err, result, fields) => {
      if (err) {
        throw err;
      }
      console.log(result);
    }
  );

  const listarEnderecos = () => connection.query(
    'SELECT * FROM ENDERECO', (err, result, fields) => {
      if (err) {
        throw err;
      }
      console.log(result);
    }
  );

  const listarTelefones = () => connection.query(
    'SELECT * FROM TELEFONE', (err, result, fields) => {
      if (err) {
        throw err;
      }
      console.log(result);
    }
  );

  let inserirCliente = (id, nome, sobrenome, email, cpf) => connection.query(
    `INSERT INTO CLIENTE (id, nome, sobrenome, email, cpf) VALUES ('${id}', '${nome}', '${sobrenome}', '${email}', '${cpf}')`, (err) => {
      if (err) throw err;

      console.log('Cliente adicionado');
    }
  );


  let inserirFornecedor = (id, nome, email, cnpj, nomeFantasia) => connection.query(
    `INSERT INTO FORNECEDOR (id, nome, email, cnpj, nomefantasia) VALUES ('${id}', '${nome}', '${email}', '${cnpj}', '${nomeFantasia}')`, (err) => {
      if (err) throw err;

      console.log('Fornecedor adicionado');
    }
  );

  let inserirEndereco = (id, cep, rua, numero, bairro, cidade, uf, idCliente, idFornecedor) => connection.query(
    `INSERT INTO ENDERECO (id, cep, rua, numero, bairro, cidade, uf, idCliente, idFornecedor) VALUES ('${id}', '${cep}', '${rua}', '${numero}', '${bairro}', '${cidade}', '${uf}', '${idCliente}', '${idFornecedor}')`, (err) => {
      if (err) throw err;

      console.log('Endereco adicionado');
    }
  );

  let inserirTelefone = (id, ddi, ddd, numero, idCliente, idFornecedor) => connection.query(
    `INSERT INTO TELEFONE (id, ddi, ddd, numero, idcliente, idfornecedor) VALUES ('${id}', '${ddi}', '${ddd}', '${numero}', '${idCliente}', '${idFornecedor}')`, (err) => {
      if (err) throw err;

      console.log('Telefone adicionado');
    }
  );

  let deletarClientePeloId = (id) => connection.query(
    `DELETE FROM CLIENTE WHERE ID = ${id}`, (err) => {
      if (err) throw err;

      console.log('Cliente excluído');
    }
  );

  let deletarTelefonePeloId = (id) => connection.query(
    `DELETE FROM TELEFONE WHERE ID = ${id}`, (err) => {
      if (err) throw err;

      console.log('Telefone excluído');
    }
  );

  let deletarFornecedorPeloId = (id) => connection.query(
    `DELETE FROM FORNECEDOR WHERE ID = ${id}`, (err) => {
      if (err) throw err;

      console.log('Fornecedor excluído');
    }
  );

  let deletarEnderecoPeloId = (id) => connection.query(
    `DELETE FROM ENDERECO WHERE ID = ${id}`, (err) => {
      if (err) throw err;

      console.log('Endereço excluído');
    }
  );

  const deleteAllCliente = () => connection.query(
    'DELETE FROM cliente where id>0', (err, result) => {
      if (err){
        throw err;
      }
      console.log("Linhas afetadas: "+ result.affectedRows);
    }
  );

  const deleteAllFornecedor = () => connection.query(
    'DELETE FROM fornecedor where id>0', (err, result) => {
      if (err){
        throw err;
      }
      console.log("Linhas afetadas: "+ result.affectedRows);
    }
  );

  const deleteAllTelefone = () => connection.query(
    'DELETE FROM TELEFONE where id>0', (err, result) => {
      if (err){
        throw err;
      }
      console.log("Linhas afetadas: "+ result.affectedRows);
    }
  );

  const deleteAllEndereco = () => connection.query(
    'DELETE FROM endereco where id>0', (err, result) => {
      if (err){
        throw err;
      }
      console.log("Linhas afetadas: "+ result.affectedRows);
    }
  )
  

  inserirFornecedor(1, 'Teste', 'test@test.com', '11111111111111', 'fantasiaTeste');
  inserirCliente(1, 'Teste', 'SobreTeste', 'teste@teste.com.br', '11111111111');
  inserirTelefone(1, 55, 44, 99999999, 1, 0);
  inserirTelefone(2, 55, 44, 88888888, 0, 1);
  inserirEndereco(1, 11111111, 'RUA TESTE', '10', 'BairroTeste', 'CidadeTeste', 'BA', 1, 0);
  inserirEndereco(2, 22222222, 'RUA TESTE', '10', 'BairroTeste', 'CidadeTeste', 'BA', 0, 1);
  listarFornecedores();  
  listarClientes();
  listarEnderecos();
  listarTelefones();

})