document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({
        currentWindow: true,
        active: true,
    }, (tabs) => {
        // Request for size options
        chrome.tabs.sendMessage(tabs[0].id, { request: 'options' }, (res) => {
            if(Array.isArray(res)){
                document.querySelector('.error').style.display = 'none';
                document.querySelector('body').style.width = '175px';

                res.forEach((option) => {
                    var btn = document.createElement('button');
                    btn.innerHTML = option;
                    document.body.appendChild(btn);

                    // Option click
                    btn.addEventListener('click', (e) => {
                        chrome.tabs.sendMessage(tabs[0].id, { size: btn.innerHTML });
                    });
                }, false);
            }
        });
    });
  }, false);