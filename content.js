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
        if(e.isDark){
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
        if(conteudo){
            conteudo.style.color = "white";
            conteudo.classList.add('mdc-bg-grey-900');

            frame.contentDocument.querySelectorAll('.mdc-bg-grey-50, .mdc-bg-grey-100').forEach((element) => {
                element.classList.remove('mdc-bg-grey-50');
                element.classList.remove('mdc-bg-grey-100');
                element.classList.add('mdc-bg-grey-900');
            });

            frame.contentDocument.querySelectorAll('.mdc-bg-grey-200, .mdc-bg-grey-600').forEach((element) => {
                element.classList.remove('mdc-bg-grey-200');
                element.classList.remove('mdc-bg-grey-600');
                element.classList.add('mdc-bg-grey-800');
            });

            frame.contentDocument.querySelectorAll('.mdc-bg-blue-grey-100, .mdc-bg-blue-grey-50').forEach((element) => {
                element.classList.remove('mdc-bg-blue-grey-50');
                element.classList.remove('mdc-bg-blue-grey-100');
                element.classList.add('mdc-bg-blue-grey-900');
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