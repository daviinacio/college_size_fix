function CollegeFlashSize(){
    const colleges = [];

    function init(){
        colleges.forEach((college) => {
            // Initialize on frame load
            const frame = document.querySelector(college.frame);

            if(college.frame && frame){
                frame.addEventListener('load', initialize);
            }
            // Initialize if the string matches
            else {
                for(let i = 0; i < college.matches.length; i++) {
                    if(location.hostname.includes(college.matches[i])){
                        initialize();
                        break;
                    }
                }
            }
            
            function initialize(){
                college.active = true;

                var currentSize = localStorage.getItem('CollegeFlashSize.size');

                choose(
                    // Preference value
                    currentSize ? currentSize :

                    // First option from college
                    Object.keys(college.options)[0]
                );
            }
        });
    };

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if(request.choose){
            choose(request.choose);
            localStorage.setItem('CollegeFlashSize.size', request.choose);
        }
        else
        if(request.options){
            colleges.forEach((college) => {
                if(college.active){
                    sendResponse({
                        options: Object.keys(college.options),
                        active: localStorage.getItem('CollegeFlashSize.size')
                    });
                }
            });
        }
    });

    function addCollege(college){
        colleges.push(college);
    }

    function choose(choice){
        colleges.forEach((college) => {
            if(college.active){
                /*               ELEMENTS               */

                const elements = {};

                Object.keys(college.elements).forEach((key) => {
                    const el = document.querySelectorAll(college.elements[key]);

                    if(el){
                        elements[key] = el.length > 1 ? el : el[0];
                    }
                });


                /*            FREME ELEMENTS            */
                const frameElements = {};

                if(college.frame){
                    elements.frame = document.querySelector(college.frame);

                    Object.keys(college.frameElements).forEach((key) => {
                        const el = elements.frame.contentDocument.querySelectorAll(college.frameElements[key]);
    
                        if(el){
                            frameElements[key] = el.length > 1 ? el : el[0];
                        }
                    });
                }

                /*              DIMENTIONS              */

                const size = college.options[choice];

                // Alright, don't need changes
                if(size.width && size.height){} else
                // Dimens with ratio
                if(size.ratio){
                    if(size.height)
                        size.width = size.height * size.ratio;
                    else
                    if(size.width)
                        size.height = size.width / size.ratio;
                } else
                // Missing info, put equals
                if(size.width)
                    size.height = size.width;
                else
                if(size.height)
                    size.width = size.height;

                // Handle change
                if(college.change)
                    college.change(elements, frameElements, size);
            }
        });
    }

    return {
        addCollege,
        choose,
        init
    };
};

// College definitions

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
        
    },
    frame: "#courseIframe",
    frameElements: {
        'flash': "#centro > object",
        'container': "#centro",
        'body': 'body'
    },
    change: function(elements, frameElements, dimens){
        const { body, flash, container } = frameElements;
        const { width, height } = dimens;

        flash.style.width = width+'px';
        flash.style.height = height+'px';
        flash.style.margin = 'auto';   
        
        container.style.width = 'inherit';
        container.style.backgroundImage = 'none';
        container.style.display = 'flex';
        
        body.style.backgroundImage = 'none';
    }
});

// Initialize and wait for frame load (if exists)
changer.init();