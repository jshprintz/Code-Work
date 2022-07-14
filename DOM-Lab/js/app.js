// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// Select and cache the <main> element in a variable
const mainEl = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg
let mainColor = 'var(--main-bg)'
mainEl.style.backgroundColor = mainColor;

// Set the content of mainEl to <h1>SEI Rocks!</h1>
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Add a class of flex-ctr to mainEl
mainEl.setAttribute('class', 'flex-ctr');

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.querySelector('#top-menu');

//Set the height of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl
topMenuEl.setAttribute('class', 'flex-around');

// iterate over the entire menuLinks array for each "link" object
for (let i = 0; i < menuLinks.length; i++) {
    //Create an <a> element.
    let newButton = document.createElement('a');
    
    //On the new element, add an href attribute with its value to the href property
    //of the link object
    newButton.setAttribute('href', menuLinks[i].href);

    //Set the new element's content to the value of the text property of the "link" object.
    newButton.innerText = menuLinks[i].text;

    //Append the new element to the topMenuEl element
    topMenuEl.append(newButton);
};









