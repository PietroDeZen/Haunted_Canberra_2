//CAROUSEL
var counter =1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter =1;
  }
}, 3000);

//LIGHTBOX

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';

document.body.appendChild(lightbox)










