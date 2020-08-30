# Projeto Rocketsear API Node Sequelize
Projeto desenvolvido nesse [vídeo](https://youtu.be/Fbu7z5dXcRs).

## Instalação
Para que a aplicação funcione corretamente, siga os passos abaixo:


### 1. Instalar Dependências 
No terminal, execute no diretório raiz do projeto *npm install* ou *yarn* para baixar todas as dependências.


### 2. Configurações de Ambiente
Crie o arquivo *.env* no diretório raiz do projeto e altere os valores de acordo com seu banco de dados:

    DB_CONNECTION=mysql
    DB_HOST=localhost
    DB_USER=username
    DB_PASS=password
    DB_DATABASE=todoNode


### 3. Criar base de dados e tabelas
Execute no terminal os comandos:
    yarn sequelize db:create
    yarn sequelize db:migrate


### 4. Iniciar Aplicação
No terminal, execute no diretório raiz do projeto *npm run dev* ou *yarn dev*.

#### Aplicação rodando! Bom proveito!




