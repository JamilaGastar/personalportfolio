document.addEventListener('DOMContentLoaded', function() {
// setInterval(function () {
//     let name = document.querySelector('h1');
//     name.style.visibility = (name.style.visibility == 'hidden' ? '' : 'hidden');
// }, 900);

const brand = 'JUNIOR SOFTWARE DEVELOPER & WEB DESIGNER.'

const typingBrand = (brand, timeout) =>
  [...brand].map(
    (ch, i) =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(brand.substring(0, i + 1));
        }, timeout * i);
      })
  );

typingBrand(brand, 60).forEach(promise => {
  promise.then(portion => {
    document.querySelector('p').innerHTML = portion;
  });
});


let imgElement = document.querySelector('figure#imagesSlideshow img')
let images = ['./images/KanyeQuoteGenerator.png', './images/ReactProject.png'];
setInterval(function(){
    let random = Math.floor(Math.random() * 2);
    imgElement.src = images[random];
}, 700);

}

)