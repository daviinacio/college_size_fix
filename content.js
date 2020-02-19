chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.size){
        changeSize(request.size);
        localStorage.setItem('EstacioFlashSize.size', request.size);
    }
    else
    if(request.question){
        alert(request.question);
        switch(request.question){
            case 'isEstacio':
                sendResponse(frame != null);
                break;
        }
    }
});

const ratio = 1.691;

const sizes = {
    'Normal': {
        height: 604
    },
    'FullHD': {
        height: 842
    }
};

var frame = document.querySelector('#courseIframe');

(function(){
    if(frame){
        frame.onload = ((e) => {
            var currentSize = localStorage.getItem('EstacioFlashSize.size');

            changeSize(currentSize ? currentSize : 'Normal');
        });
    }
})(document);

function changeSize(size){
    if(frame){
        const flash = frame.contentDocument.querySelector('#centro > object');
        const container = frame.contentDocument.querySelector('#centro');
        const body = frame.contentDocument.querySelector('body');

        size = sizes[size];

        if(size){
            flash.style.width = (size.height * ratio)+'px';
            flash.style.height = size.height+'px';
            flash.style.margin = 'auto';   
            
            container.style.width = 'inherit';
            container.style.backgroundImage = 'none';
            container.style.display = 'flex';
            
            body.style.backgroundImage = 'none';
        }
    }
}


/*EstacioFlashSize = {};




alert();


EstacioFlashSize.setSize = function(currentSize){
    const frame = document.querySelector('#courseIframe').contentDocument;

    if(frame){
        const flash = frame.querySelector('#centro > object');
        const container = frame.querySelector('#centro');
        const body = frame.querySelector('body');

        const size = sizes[currentSize];

        if(size){
            alert('Current size: ' + size.height);
            flash.style.width = (size.height * ratio)+'px';
            flash.style.height = size.height+'px';   
            
            container.style.width = 'inherit';
            container.style.backgroundImage = 'none';
            
            body.style.backgroundImage = 'none';
        }
    }
}*/


/*function frameSize(){
    const width = 1500;
    
    var frame = document.querySelector('#courseIframe').contentDocument;
    var flash = frame.querySelector('#centro > object');
    var container = frame.querySelector('#centro');
    var body = frame.querySelector('body');
    
    flash.style.width = width+'px';
    flash.style.height = (width / 1.6)+'px';   
    
    container.style.width = 'inherit';
    container.style.backgroundImage = 'none';
    
    body.style.backgroundImage = 'none';
}; 

frameSize();

*/