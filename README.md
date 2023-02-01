<h1 align="center"> Desafio Técnico da empresa GEW </h1>


O desafio técnico consistia em uma aplicação responsável pelo cadastro de novos usuários em um banco de dados relacional, sendo o frotend programado no framework Angular juntamente com a biblioteca Angular Material e o beckend sendo uma aplicação Nodejs com o ORM typeORM realizando a conexão com o Banco de dados MySQL.

Para esse desafio, foram desenvolvidas duas telas, sendo a primeira tela a de login, que se alimenta de uma api para validar se o usuário possui cadastro, caso possua, um alerta é apresentado na tela. Vale ressaltar que no beckend, a rota está preparada para enviar um token para a implementação de novas aplicações.
Uma segunda tela, essa de cadastro também foi implementada, com consumo de api para cadastro de novos usuários no banco de dados. Frisamos a aplicação de conceitos de mask e do consumo da api da viaCep para preenchimento automático dos campos de endereço.


<h1 align="center"> Como rodar a aplicação </h1>

Para rodar a aplicação em sua máquina, por favor, siga alguns passos descritos abaixo:

* Clone o repositório para sua máquina;
* Rode o npm install na raiz da aplicação, no diretório frontend e no diretório beckend;
* Crie um SCHEMA de nome GEW no seu servidor MySQL e confira as configurações de ambiente o arquivo .env que é responsável pela conexão do banco com a aplicação;
* Após a Schema criada, no diretório beckend rode as migrations com o comando npm run typeorm migration:run;
* A seguir, rode o servidor, a aplicação está pré configurada com o comando npm run dev para facilitar essa etapa;
* No diretório frontend, rode o comando ng s, responsável pelo server do angular. 

Realizando esses passos você poderá acessar o localhost da aplicação e consumir a mesma.



Dúvidas e problemas para execução, por favor, entre em contato. 
Contatos no perfil do GitHub;

<h1 align="center"> Gif da aplicação consumindo o back-end </h1>

![](/running.gif)
