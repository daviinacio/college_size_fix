document.addEventListener('DOMContentLoaded', function () {
    loadJson('manifest.json', (manifest) => {
        Object.keys(manifest).forEach((key) => {
            const element = document.querySelector('*[res="' + key + '"]');
            
            if(element){
                const value = typeof(manifest[key]) == 'object' ? (
                                Object.values(manifest[key])[0]) : manifest[key];
            
                if(element.nodeName == 'IMG')
                    element.src = value;
                else
                    element.innerHTML = value;
            }
        });
    });

    // Prevent contextmenu
    document.addEventListener('contextmenu', function(event) {
        //event.preventDefault();
    }, true);
    
    chrome.tabs.query({
        currentWindow: true,
        active: true,
    }, (tabs) => {
        // Request for size options
        chrome.tabs.sendMessage(tabs[0].id, { options: true }, (res) => {
            if(typeof(res) == 'undefined') return;

            if(res.darkmode){
                document.body.classList.add('dark');
                document.querySelector('#darkmode').checked = res.darkmode;
            }

            document.querySelector('#darkmode').addEventListener('click', (e) => {
                const checked = e.target.checked;

                if(checked) document.body.classList.add('dark');
                else        document.body.classList.remove('dark');

                chrome.tabs.sendMessage(tabs[0].id, {
                    darkmode: {
                        active: checked
                    }
                });
            });
            
            if(Array.isArray(res.options)){
                document.querySelector('#error').style.display = 'none';
                document.querySelector('#buttons').style.display = 'block';

                res.options.forEach((option) => {
                    var btn = document.createElement('button');
                    btn.innerHTML = '<i class="fa fa-arrow-right"></i>' + option;
                    btn.setAttribute('value', option);
                    document.querySelector('#buttons').appendChild(btn);
                    
                    if(res.active == option)
                        btn.classList.add('active');

                    // Option click
                    btn.addEventListener('click', (e) => {
                        document.querySelectorAll('#buttons > button').forEach((el) => {
                            el.classList.remove('active');
                        });
                        
                        btn.classList.add('active');
                        
                        chrome.tabs.sendMessage(tabs[0].id, { choose: btn.getAttribute('value') });
                    });
                }, false);
            }
        });
    });
  }, false);