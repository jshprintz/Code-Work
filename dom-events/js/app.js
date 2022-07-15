console.log("Javascript works");

//Selecting button to add eventlistener to.
const buttonEl = document.querySelector('button');

//add the event listener.

buttonEl.addEventListener('click', function(e){
    // Pull value
    const inputEl = document.querySelector('input');

    // Add item    
    const listItem = document.createElement('li');
    listItem.innerText = inputEl.value;
    document.querySelector('ul').appendChild(listItem);

    // Clear text window
    inputEl.value = '';
});



// Listen to a click on every li item inside the ul. When we click, we want
// to add a strikethrough or a line through the text to indicate the task is finished.

const ulEL = document.querySelector('ul');
ulEL.addEventListener('click', function(e){
    console.dir(e.target)
    console.log('ul button working');
    // conditional insude to check to see if line is already through
    // and remove it.

    e.target.style.textDecoration = 'line-through';

    // See if you can't permantly add and delete
    // see if you can move the items to the right once they get deleted.
    
})







