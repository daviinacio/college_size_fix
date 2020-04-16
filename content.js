const changer = new CollegeFlashSize();

changer.addCollege({
    name: "estacio",
    matches: [
        "estacio"
    ],
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
    elements: {
        '_body': "body",
        '_buttons': '.singleButton2',
    },
    frame: "#courseIframe",
    frameElements: {
        'flash': "#centro > object",
        'container': "#centro",
        'body': "body",
        'conteudo': "#conteudo"
    },
    change: function(e){
        const { elements, frameElements, size } = e;

        const { _body, _buttons, frame } = elements;
        const { body, flash, container, conteudo } = frameElements;
        const { width, height } = size;

        if(flash){
            flash.style.width = width + 'px';
            flash.style.height = height + 'px';
            flash.style.margin = 'auto';
            container.style.width = 'inherit';
            container.style.backgroundImage = 'none';
            container.style.display = 'flex';

            body.style.backgroundImage = 'none';
        }

        // Dark mode style
        if(e.darkmode){
            _body.setAttribute('style', 'background-color: #1d1d1d !important');
            
            _buttons.forEach(element => {
                element.style.backgroundColor = 'inherit';
                element.style.color = 'white';

                for (let child of element.children) {
                    if(child.nodeName == 'I'){
                        child.classList.remove('marginTop3px');
                        child.classList.add('marginTop6px');
                    }
                }
            });
        }

        // Text content dark mode
        if(conteudo && e.darkmode){
            conteudo.style.color = "white";
            conteudo.classList.add('mdc-bg-grey-900');


            const changes = {
                'mdc-bg-cyan-50': 'mdc-bg-cyan-900',
                'mdc-bg-cyan-100': 'mdc-bg-cyan-800',
                'mdc-text-cyan-500': 'mdc-text-cyan-50',
                'mdc-text-cyan-900': 'mdc-text-cyan-100',
                'mdc-text-grey-900': 'mdc-text-grey-50',
                'mdc-bg-teal-50': 'mdc-bg-teal-900',
                'mdc-bg-teal-100': 'mdc-bg-teal-700',
                'mdc-text-teal-500': 'mdc-text-teal-50',
                'mdc-bg-grey-100': 'mdc-bg-grey-900',
                'mdc-bg-grey-50': 'mdc-bg-grey-900',
                'mdc-bg-grey-200': 'mdc-bg-grey-800',
                'mdc-bg-grey-600': 'mdc-bg-grey-800',
                'mdc-bg-blue-grey-50': 'mdc-bg-blue-grey-900',
                'mdc-bg-blue-grey-100': 'mdc-bg-blue-grey-900',
                'mdc-bg-blue-100': 'mdc-bg-blue-900',
                'bg_leitura_dinamica': ''
            };

            Object.keys(changes).forEach((key) => {
                const elements = frame.contentDocument.querySelectorAll('.' + key);
        
                elements.forEach((element) => {
                    element.classList.remove(key);
                    
                    if(changes[key])
                        element.classList.add(changes[key]);
                });
            });

            frame.contentDocument.querySelector('#box-apresentacao-objetivos').style.color = "white";

            frame.contentDocument.querySelectorAll('textarea').forEach((element) => {
               element.classList.add('mdc-bg-grey-900'); 
               element.style.color = '#ddd';
            });
        }
    }
});

// Add new college content size fix here :)
changer.addCollege({
    name: "college",
    matches: [
        // String that matches with hostname
        // Place any string here if there doesn't have iframe
    ],
    options: {
        'Size_Label': {
            // Dimens
        }
    },
    elements: {
        // Elements from document
    },
    frame: "",  // Content iframe id
    frameElements: {
        // Elements from frame
    },
    change: function(e){
        const { elements, frameElements, size } = e;

        const { } = elements;
        const { } = frameElements;
        const { } = size;

        // Place element modifications here


        // Dark mode style
        if(e.isDark){
            // Place dark mode modifications here
        }
    }
});