
# Projeto-Desafio-Econverse

Projeto Desenvolvido pelo Framework Javascript React.js e com pré-processador SASS e JSON para consumo da api para estilização para a folha de estilo. Este projeto consiste numa página web de uma loja online de instrumentos musicais. 


## Prints do Projeto

### Cabeçalho 

![Capturar1](https://user-images.githubusercontent.com/24817323/147275766-d3c8bb80-0396-43af-8ea0-853a25f9cb4f.PNG)

### Main

![Capturar2](https://user-images.githubusercontent.com/24817323/147275933-bd6fc0f4-3d8f-44bf-b93d-e4c48273b565.PNG)

### Catálogo 

![Capturar3](https://user-images.githubusercontent.com/24817323/147276001-ddc75925-7739-426e-b089-16406d59e836.PNG)

### Catálogo 2

![Capturar4](https://user-images.githubusercontent.com/24817323/147276054-fc71c25c-9f1a-459b-a35b-79355f3da037.PNG)


### View do Produto 


![Capturar5](https://user-images.githubusercontent.com/24817323/147276135-01917839-b4bd-4eca-86e8-ed7f0baf2570.PNG)


### Carousel LogoMarcas 

![Capturar6](https://user-images.githubusercontent.com/24817323/147276327-855be60d-b3cc-4fcc-ac66-765538c021df.PNG)


### Footer

![Capturar7](https://user-images.githubusercontent.com/24817323/147276389-d5d5e143-f855-49c2-aec0-c58bf487bbb5.PNG)


# Como Rodar o Projeto? 

<p>Ao ver o repositório do Projeto é possível baixa-lo através do botão download e projeto virá empacoctado com zip ou winrar se você tiver qualquer desta aplicações no seu Sistema Operacional.</p> 

![Capturar8](https://user-images.githubusercontent.com/24817323/147277314-9c85f82c-0a94-4c98-8d49-52159586f295.PNG)


Ou se quiser fazer através do git basta apenas ter o Git Bash no seu S.O, chamar o terminal dele e digitar o comando

#### git clone [url do projeto] 

Após isso chamar o terminal do Node.js ir no diretório onde se encontra o projeto e digitar o comando 

### npm start 

Ele irá baixar as depedências do projeto.

##Instalando o Node-sass

Para que o módulo do node-sass tenha efeito na é preciso baixar este módulo para que o layout seja compilado, então no terminal do node.js faça a instalação com o seguinte comando

### npm install node-sass

ele irá instalar node-sass no projeto, se ainda o dê algum erro digite o seguinte comando para fazer o rebuild

### npm rebuild node-sass 


# Link para do Deploy do Projeto no Netlifly 
https://61c4b4ad5caa39113e45c0db--wizardly-perlman-cd3104.netlify.app/


# Instalando o Grunt

Neste Projeto foi utilizando o Grunt como automação do Javascript, para poder instalar ele localmente execute este comando no seu prompt do Node.js 

* <p>npm install -g grunt-cli</p> 

adicione este plugins no seu arquivo package.json 

"devDependencies": {
    "grunt": "~0.4.5",
    "grunt-contrib-sass": "latest",
    "grunt-postcss": "latest",
    "autoprefixer": "latest",
    "grunt-contrib-cssmin": "latest",
    "grunt-contrib-uglify": "latest",
    "grunt-contrib-watch": "latest"
    
   e execute o comando:
   
   * <p>npm install --save-dev grunt-postcss</p>
   * <p>npm install --save-dev grunt-contrib-cssmin</p>
   * <p>npm install --save-dev grunt-contrib-uglify</p>
   * <p>npm install --save-dev grunt-contrib-watch</p>
   
   
   Portanto, para finalizar e executar as tarefas execute o comando Grunt no  prompt e irá executar as tarefas. 







