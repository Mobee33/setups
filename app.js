// const value = document.getElementById('value');
// const decrease = document.querySelector('.decrease');
// const increase = document.querySelector('.increase');
// const reset = document.querySelector('.reset');

// let count = 0
// increase.addEventListener('click', function(){
//   count++;
//   value.innerText = `${count}`})

// decrease.addEventListener('click', function(){
//   count--;
//   value.innerText = `${count}`})

// reset.addEventListener('click', function(){
//   value.innerText = '0'})

// set initial count
let count = 0;

// select value and buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    // e means the event. In this case, it's the click event.
    // e.currentTarget means the 'thing' that triggers the event. In this case, the btns
    // e.currentTarget.classList means the class list that the btns contain
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')){
      count++;
    } else if(styles.contains('increase')){
      count--;
    } else {
      count = 0;
    }

    value.innerText = count;
  })
})
