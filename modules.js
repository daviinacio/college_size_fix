// Content script don’t support ES6 modules

function CollegeFlashSize(){
    const colleges = [];

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if(request.choose){
            choose(request.choose);
            localStorage.setItem('CollegeFlashSize.size', request.choose);
        }
        else
        if(request.darkmode){
            localStorage.setItem('CollegeFlashSize.darkmode', request.darkmode.active);

            if(request.darkmode.active)
                choose();
            else
                location.reload();
        }
        else
        if(request.options){
            colleges.forEach((college) => {
                if(college.active){
                    sendResponse({
                        options: Object.keys(college.options),
                        active: localStorage.getItem('CollegeFlashSize.size'),
                        darkmode: localStorage.getItem('CollegeFlashSize.darkmode') == 'true'
                    });
                }
            });
        }
    });

    function addCollege(college){
        colleges.push(college);

        // Initialize on frame load
        if(college.frame){
            const frame = document.querySelector(college.frame);
            if(frame)
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

            const darkmode = localStorage.getItem('CollegeFlashSize.darkmode');

            if(typeof(darkmode) == 'undefined' || darkmode == null)
                localStorage.setItem('CollegeFlashSize.darkmode', window.matchMedia('(prefers-color-scheme: dark)').matches);

            const size = localStorage.getItem('CollegeFlashSize.size');

            if(typeof(size) === 'undefined' || size == null)
                localStorage.setItem('CollegeFlashSize.size', Object.keys(college.options)[0]);

            choose();
        }
    }

    function choose(choice){
        colleges.forEach((college) => {
            if(college.active){
                /*               ELEMENTS               */

                // Load if undefined
                if(typeof(choice) === 'undefined'){
                    const storage = localStorage.getItem('CollegeFlashSize.size');
                    const first = Object.keys(college.options)[0];
                    
                    if(typeof(storage) === 'undefined' || storage == null)
                        choice = first;
                    else
                        choice = storage;
                }

                const elements = {};

                if(college.elements){
                    Object.keys(college.elements).forEach((key) => {
                        const el = document.querySelectorAll(college.elements[key]);

                        if(el){
                            elements[key] = el.length > 1 ? el : el[0];
                        }
                    });
                }


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
                else
                    throw "CollegeFlashSize::Error -> invalid option dimentions";


                // Check for dark mode
                const darkmode = localStorage.getItem('CollegeFlashSize.darkmode') == 'true';

                // Handle change
                if(college.change){
                    college.change({
                        elements, frameElements, size, darkmode
                    });
                }
            }
        });
    }

    return {
        addCollege,
        choose
    };
};