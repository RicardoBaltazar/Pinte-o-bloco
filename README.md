# mediaDonate  

![https://github.com/RicardoBaltazar/mediaDonate/blob/master/LICENSE](https://img.shields.io/github/license/RicardoBaltazar/mediaDonate)  
  

![home](https://user-images.githubusercontent.com/56805229/85428730-0a207100-b554-11ea-80c1-cfd1aa12e55b.gif)  
  
## :rocket: Tecnologias  
Esse projeto foi desenvolvido com as seguintes tecnologias:  
  
* [Html](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)
* [Css](https://developer.mozilla.org/pt-BR/docs/Web/CSS)  
* [Javascript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript)  
  
## :computer: Projeto  
O mediaDonate é uma aplicação front-end de cadastros de pontos de doação de mídias físicas, jogos, discos de vinil e aparelhos antigos.
  
## :iphone: Responsividade  
  
#### smartphone
![responsive](https://user-images.githubusercontent.com/56805229/85431810-6eddca80-b558-11ea-87a0-c842b87a8d96.gif)  
  
#### Tablet
![responsive2](https://user-images.githubusercontent.com/56805229/85437635-4b6b4d80-b561-11ea-89bb-534f43b18df0.gif)  
  
## :smile: Como contribuir  
  
* Faça um fork desse repositório;  
* Crie sua feature branch: ```git checkout -b my-new-feature```  
* Adicione os arquivos modificados: ``` git add .```  
* Faça um Commit com suas alterações: ```git commit -m "Add some feature"```  
* Faça um push da sua branch: ``` git push origin my-new-feature ```  
* Envie um Pull Request para esse repositório  
  
* Adicione um título e uma descrição que deixe claro sua sugestão :v:  
  
## :ballot_box_with_check: Inicialização  
Primeiramente você precisa ter o npm instalado. ```npm uninstall npm -g```  

Voçe precisa instalar e inicializar o json server para guardar os dados cadastrados.   
* Primeiro instale o json server. Abra o terminal na pasta do projeto e digite o comando ``` npm install -g json-server ```  
* Crie um arquivo chamado db.json na pasta do seu projeto.  
* crie a estrutura do arquivo json para receber os dados.  
```
{
  "produtos": []
}
```  
* Vá até a pasta do projeto onde esta o arquivo db.json, abra o terminal e digite o comando ``` json-server --watch db.json --port 8000``` e inicie o json server na porta 8000  
* Acesse ```http://localhost:8000/produtos```  
  
## :memo: Licença  
[MIT license](https://github.com/RicardoBaltazar/mediaDonate/blob/master/LICENSE)  

