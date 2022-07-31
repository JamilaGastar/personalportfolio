
setInterval(function () {
    let name = document.querySelector('h1');
    name.style.visibility = (name.style.visibility == 'hidden' ? '' : 'hidden');
}, 900);