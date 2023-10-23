const Sequelize = require('sequelize');
    //Conexao com o banco de dados Mysql
    const sequelize = new Sequelize('postapp', 'root', 'c7n1.p2M', {
        host: "localhost",
        dialect: 'mysql'
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}