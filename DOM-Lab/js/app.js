// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

// Iterate over the entire menuLinks array for each "link" object
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


// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl
const subMenuEl = document.querySelector('#sub-menu');

// Set the heigh subMenuEl element to be 100%
subMenuEl.style.height = '100%';

//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// ADd the class of flex-around to the subMenuEl element
subMenuEl.setAttribute('class', 'flex-around');

// Set the CSS position property of subMenuEl to the value of absolute
subMenuEl.style.position = 'absolute';

// Set the CSS top property of subMenuEl to the value of 0
subMenuEl.style.top = 0;

// Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks
// Declare a global showingSubMenu variable and initialize it to false

const topMenuLinks = document.querySelectorAll('a');
let showingSubMenu = false;

//Attach a delevated 'click' event listener to topMenuEl.
// The first line of code of the event listenern function should call the event object's preventDefault()
// method. 

// The second line of code function should immediately return if the element clicked was not an 
// <a> element

// console.log the content of the <a> to verify the handler is working.
let number;

topMenuEl.addEventListener('click', function(e){
    e.preventDefault();
    
      // Loop through all indices looking for a match
      for (const i in topMenuLinks){
        if (e.target === topMenuLinks[i]){
          console.log(e.target.innerText);
          number = i;

              // 5.3
              // In the event listener, if the clicked <a> link has a class of active:
              // 1) Remove the active class from the clicked <a> element
              // 2) Set the showingSubMenu to false
              // 3) Set the CSS top property of subMenuEl to 0
              // 4) return to exit handler
          for (const a of document.querySelectorAll('a.active')){
            a.classList.remove('active');
            showingSubMenu = false;
            subMenuEl.style.top = 0;
            }
        
        } 
      }
      // 5.4) Remove class name of active from each element in topMenuLinks  
      for (const a of topMenuLinks){
        a.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = 0;
        }
          
      // 5.5) add a class of active
      topMenuLinks[number].classList.add('active');
      
      // 5.6
      // Set showingSubMenu to true if the clicked <a> element's link
      // object within menuLinks has a subLinks property.
      // All do except for the link object for ABOUT
      // Otherwise, set it to false.
      // Hint: Saving the link object in a variable will come in handy
      // for passing its subLinks array in the next task.

      if (number === 0){
        showingSubMenu = false;
      } else {
        showingSubMenu = true;
      }

    
});






// 5.3
// In the event listener, if the clicked <a> link has a class of active:
// 1) Remove the active class from the clicked <a> element
// 2) Set the showingSubMenu to false
// 3) Set the CSS top property of subMenuEl to 0
// 4) return to exit handler
