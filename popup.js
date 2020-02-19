document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({
        currentWindow: true,
        active: true,
    }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { question: 'isEstacio' }, (res) => {
            alert(res);
        });
    });

    document.querySelectorAll('button').forEach((btn) => {
        btn.style.textDecoration = 'none';

        btn.addEventListener('click', (e) => {
            chrome.tabs.query({
                currentWindow: true,
                active: true,
            }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, { size: btn.innerHTML });
                    
                    /*, (response) => {
                    if(response.active){
                        btn.style.textDecoration = 'underline';
                    }
                });*/
            });
        }, false);
    });
  }, false);