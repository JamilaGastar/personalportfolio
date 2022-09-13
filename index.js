
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