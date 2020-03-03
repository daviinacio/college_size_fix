<img src="icon.png" align="left" />

# College Size Fix
Uma ferramenta que permite mudar facilmente o tamanho do coteúdo de sistemas EAD e, facilizar a leitura.

## Problema a ser solucionado
Algumas faculdades ainda disponibilizam seus conteúdos em flash. Muitas vezes, esses conteúdos não se adaptão corretamente aos monitores, dificultando significativamente a leitura, e provoca cansaço nos olhos..

Então.. Aqui está a solução! :)

## Instalação
1. Vá para a [Chrome Web Store](https://chrome.google.com/webstore/detail/kjokipgpljcoidilmaahgdejibepoakn)
2. Clique em 'Usar no chrome'
3. Já está instalado!!

## Plataformas EAD suportadas
- [estacio.webaula](https://estacio.webaula.com.br)

## Como usar
Clique no icone da extensão e escolha um tamanho que melhor se adapte ao seu monitor.
Sua preferência será salva.

## Como contribuir
1. Faça um fork nesse repositório
2. Mude para a branch develop
3. Use o template abaixo para criar uma soluçao para o sistema EAD que você usa
4. Faça um commit
5. Envie um pull-request
6. Sua proposta será testada, e então, integrada ao projeto

### Use o template
Use no script [content.js](https://github.com/daviinacio/estacio_flash_size/blob/develop/content.js)

```javascript

changer.addCollege({
    name: "college",
    matches: [
        // Coloque palavras que apareçam no hostname 
        // Use essa função, caso a sua plataforma não tenha iframes
    ],
    options: {
        'Nome de exibição do tamanho': {
            // Dimenções
        }
    },
    elements: {
        // Elementos do documento
    },
    frame: "",  // ID do iframe
    frameElements: {
        // Elementos do iframe
    },
    change: function(e){
        const { elements, frameElements, size } = e;

        const { } = elements;
        const { } = frameElements;
        const { } = size;

        // Place element modifications here
        

        // Dark mode style
        if(e.darkmode){
            // Place dark mode modifications here
        }
    }
});

```
