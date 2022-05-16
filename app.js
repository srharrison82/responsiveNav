console.log('Hello World');

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    if (links.classList.contains('show-list')) {
        links.classList.remove('show-list');
    } else {
        links.classList.add('show.links');
    }
});