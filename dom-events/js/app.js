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




// Add a list item that contains the text of the input, and 
// put it inside of the ul when we click on the button.
