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
        'body': "body"
    },
    change: function(e){
        const { elements, frameElements, size } = e;

        const { _body, _buttons } = elements;
        const { body, flash, container } = frameElements;
        const { width, height } = size;

        flash.style.width = width + 'px';
        flash.style.height = height + 'px';
        flash.style.margin = 'auto';

        container.style.width = 'inherit';
        container.style.backgroundImage = 'none';
        container.style.display = 'flex';

        body.style.backgroundImage = 'none';

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