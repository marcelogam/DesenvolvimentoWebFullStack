const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'c7n1.p2M', {
    host: "localhost",
    dialect: 'mysql'
});

//Definindo o nosso model: Define a nossa tabela
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

//Postagem.sync({force: true});                       comando para criar a tabela = CREATE TABLE

/*
Postagem.create({
    titulo: "Um titulo qualquer",
    conteudo: "nadinvsdonbudsvbioivnsdjisdmvsnsdo j  dsivninsidnivsoijonsdivnivsdois akpa"      comando para criar um registro
});
*/

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

Usuario.create({
    nome: "Marcelo",
    sobrenome: "Augusto",
    idade: 20,
    email: "teste@teste.com"
});

//Usuario.sync({ force: true });                      comando para criar a tabela = CREATE TABLE

/*
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");             Funcao para verificar se a conexao foi realizada com sucesso.
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro);
});

*/