// write your JS code here
let count = 0;
let prize = 5.9; 
function add()
{
    let add = document.querySelector('input');
     count++;

    add.value = count;
    
   Math.round(document.querySelector('.breadcrumb-item').innerHTML = count*prize);
  
  
}

function minus()
{
    let add = document.querySelector('input');
     count--;
    add.value = count;  
document.querySelector('.breadcrumb-item').innerHTML =   count*prize;
  
}



