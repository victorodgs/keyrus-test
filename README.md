# Dillinger
Este projeto foi feito usando Bootstrap e tarefas automatizadas com Gulp.
Você pode encontrar assets próprios para produção na pasta `production`, como HTML e CSS minificado. Lembre-os de usá-los respeitando a estrutura: 

- node_modules (Arquivos de terceiros como bootstrap e jQuery)
- /css
- /js
- index.html

# Gulp

As tarefas disponíveis são: 
- minify - minifica HTML
- sass - compila e minifica o SCSS

Basta usar `gulp tarefa` na raiz do projeto para rodar as tasks :)

Não se esqueça de rodar `yarn install` e `npm install` antes de usar o projeto para ter suas dependências em ordem.