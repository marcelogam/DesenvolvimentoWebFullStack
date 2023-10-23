CREATE TABLE usuarios(
    nome VARCHAR(50), 
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "Marcelo Augusto",
    "email@teste.com",
    20
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "Mateus Araujo",
    "email@teste.com",
    12
);

SELECT * FROM usuarios WHERE idade = 20;

DELETE FROM usuarios /* toda tabela deletada*/

DELETE FROM usuarios WHERE nome = "Mateus Araujo";

UPDATE usuarios SET nome = "Nome de Teste" /* todos os registros na tabela serao alterados*/

UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Denisa Moreira";

/*Nunca use o DEELETE ou UPDATE sem o where*/ 

