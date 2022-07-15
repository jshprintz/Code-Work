console.log("Javascript works");

//Selecting button to add eventlistener to.
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');

//add the event listener.

buttonEl.addEventListener('click', function(e){
    console.log(e);
    console.log('button is working');
})
