const changer = new CollegeFlashSize();

// Estácio
changer.addSystem({
    name: "estacio",
    match_url: "estacio" // https://estacio.*
});

changer.addToggle('estacio', {
    label: 'Dark Mode',
    change: function(e){
        if(e.value){
            // Dark Mode enabled
        }
        else {
            // Dark Mode disabled
        }
        
        // Notify to content context for theme change
        e.notifyChange();
    }
});

changer.addContext('estacio', {
    context: "text",
    message: "Conteúdo em texto",
    iframe: '#courseIframe',
    elements: {
        'conteudo': "#conteudo",
        'boxGrey': ".mdc-bg-grey-50, .mdc-bg-grey-100",
        'boxDarkGrey': ".mdc-bg-grey-200, .mdc-bg-grey-600",
        'boxBlueGrey': ".mdc-bg-blue-grey-100, .mdc-bg-blue-grey-50",
        'textarea': "textarea"
    },
    change: function(e){
        const { conteudo, boxGrey, boxDarkGrey, boxBlueGrey, textarea } = e.elements;
        
        if(e.darkmode){
            conteudo.style.color = "white";
            conteudo.classList.add('mdc-bg-grey-900');

            boxGrey.forEach((element) => {
                element.classList.remove('mdc-bg-grey-50');
                element.classList.remove('mdc-bg-grey-100');
                element.classList.add('mdc-bg-grey-900');
            });

            boxDarkGrey.forEach((element) => {
                element.classList.remove('mdc-bg-grey-200');
                element.classList.remove('mdc-bg-grey-600');
                element.classList.add('mdc-bg-grey-800');
            });

            boxBlueGrey.forEach((element) => {
                element.classList.remove('mdc-bg-blue-grey-50');
                element.classList.remove('mdc-bg-blue-grey-100');
                element.classList.add('mdc-bg-blue-grey-900');
            });

            textarea.forEach((element) => {
               element.classList.add('mdc-bg-grey-900'); 
               element.style.color = '#ddd';
            });
        }
        else {
            conteudo.style.color = "inherit";
            conteudo.classList.remove('mdc-bg-grey-900');

            boxGrey.forEach((element) => {
                element.classList.remove('mdc-bg-grey-900');
                element.classList.add('mdc-bg-grey-100');
            });

            boxDarkGrey.forEach((element) => {
                element.classList.remove('mdc-bg-grey-800');
                element.classList.add('mdc-bg-grey-200');
            });

            boxBlueGrey.forEach((element) => {
                element.classList.remove('mdc-bg-blue-grey-900');
                element.classList.remove('mdc-bg-blue-grey-50');
            });

            textarea.forEach((element) => {
               element.classList.add('mdc-bg-grey-900'); 
               element.style.color = 'inherit';
            });
        }
    }
});

changer.addContext('estacio', {
    context: "flash1",
    message: undefined,
    options: {
        'Normal': {
            height: 604,
            ratio: 1.691
        },
        'FullHD': {
            height: 842,
            ratio: 1.691
        }
    },
    iframe: '#courseIframe',
    elements: {
        'flash': "#centro > object",
        'container': "#centro",
        'body': "body",
        'conteudo': "#conteudo"
    },
    change: function(e){
        const { flash, container } = e.elements;
        const { width, height } = e.size;
        
        flash.style.width = width + 'px';
        flash.style.height = height + 'px';
        flash.style.margin = 'auto';
        container.style.width = 'inherit';
        container.style.backgroundImage = 'none';
        container.style.display = 'flex';

        body.style.backgroundImage = 'none';
    }
});