<img src="icon.png" align="left" />

# College Size fix
This is a tool that allows you to easily change the content size of your distance learning system, and make it easier to read.

## Issue to solve
Some distance learning systems provides their content with flash player. And too many times, the content doesn't fit properly on screen.
It's difficult to read and stay at a healthy distance from the screen.

So.. Here's the solution! :)

## Instalation 
1. Goto [Chrome Web Store](https://chrome.google.com/webstore/detail/kjokipgpljcoidilmaahgdejibepoakn)
2. Click on 'Use on chrome'
3. Has already been installed!!

## Distance Learning System Supported
- [estacio.webaula](https://estacio.webaula.com.br)

## Getting Started
Click on Extension icon and choose a size.
Your preference will be saved to be used on future.

## Contribute
1. Fork this repository
2. Checkout to 'develop' branch
3. Use the template below to create a solution to fix the content size issue on the distance learning system you use.
4. Make a commit
5. Send a pull-request
6. I will test and merge your changes

### Use this template
Use on script [content.js](https://github.com/daviinacio/estacio_flash_size/blob/develop/content.js)

```javascript

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
        if(e.darkmode){
            // Place dark mode modifications here
        }
    }
});

```
